import type { Polygon } from "../geometry/geometry";
import { GQuad, polygon_transform, polygons_transform } from "../geometry/geometry";
import { identity } from "../math/matrix";
import { plane_fromPolygon } from "../math/vectors";
import { gl } from "../gl";
import { PLAYER_MODEL_ID } from "../player";

export const rootModel: Model = {
  $children: [],
  $initialMatrix: identity,
  $animationMatrix: identity,
  $modelId: 1,
};

export let currentModel = rootModel;

export const modelsByModelId: Model[] = [];

export const editMatrixStack: DOMMatrixReadOnly[] = [identity];

export const withEditMatrix = <T>(matrix: DOMMatrixReadOnly, fn: () => T) => {
  editMatrixStack.push(editMatrixStack.at(-1)!.multiply(matrix));
  const result = fn();
  editMatrixStack.pop();
  return result;
};

const _pendingPolygonsStack: Polygon[][] = [[]];

const _vertexMap = new Map<string, number>();
const _vertexInts = new Int32Array(7);
const _vertexIntsSmooth = new Int32Array(_vertexInts.buffer, 0, 4);
const _vertexFloats = new Float32Array(_vertexInts.buffer);

const _triangleIndices: number[] = [];
const _vertexPositions: number[] = [];
const _vertexNormals: number[] = [];
const _vertexColors: number[] = [];

let _polygon: Polygon | undefined;
let _meshFirstIndex: number = 0;

export interface Mesh {
  $vertexOffset: number;
  $vertexCount: number;
}

export type ModelUpdateCallback = (this: Model, model: Model) => void | DOMMatrixReadOnly;

export interface Model {
  $parent?: Model | undefined;
  $children: Model[];
  $initialMatrix: DOMMatrixReadOnly;
  $animationMatrix: DOMMatrixReadOnly;
  $finalMatrix?: DOMMatrixReadOnly;
  $mesh?: Mesh;
  $modelId: number;
  _update?: ModelUpdateCallback | undefined;
}

export const meshAdd = (polygons: Polygon[]): void => {
  _pendingPolygonsStack.at(-1)!.push(...polygons_transform(polygons, editMatrixStack.at(-1)!));
};

const getVertex = (i: number): number => {
  let { x, y, z } = _polygon![i]!;
  _vertexFloats[0] = x;
  _vertexFloats[1] = y;
  _vertexFloats[2] = z;
  const key = "" + (_polygon!.$smooth ? _vertexIntsSmooth : _vertexInts);
  let index = _vertexMap.get(key);
  if (index !== undefined) {
    x = index * 3;
    _vertexNormals[x] = (_vertexNormals[x++]! + _vertexInts[4]!) / 2;
    _vertexNormals[x] = (_vertexNormals[x++]! + _vertexInts[5]!) / 2;
    _vertexNormals[x] = (_vertexNormals[x]! + _vertexInts[6]!) / 2;
  } else {
    _vertexMap.set(key, (index = _vertexMap.size));
    _vertexPositions.push(x, y, z);
    _vertexNormals.push(_vertexInts[4]!, _vertexInts[5]!, _vertexInts[6]!);
    _vertexColors.push(_vertexInts[3]!);
  }
  return index;
};

export const meshEnd = () => {
  const pendingPolygons = _pendingPolygonsStack.at(-1)!;
  for (_polygon of pendingPolygons) {
    const { x, y, z } = plane_fromPolygon(_polygon);
    _vertexInts[3] = _polygon.$color! | 0;
    _vertexInts[4] = x * 32767;
    _vertexInts[5] = y * 32767;
    _vertexInts[6] = z * 32767;
    for (let i = 2, a = getVertex(0), b = getVertex(1); i < _polygon.length; ++i) {
      _triangleIndices.push(a, b, (b = getVertex(i)));
    }
  }
  pendingPolygons.length = 0;
  const $vertexOffset = _meshFirstIndex;
  return {
    $vertexOffset,
    $vertexCount: (_meshFirstIndex = _triangleIndices.length) - $vertexOffset,
  };
};

export const modelBegin = ($modelId: number = currentModel.$modelId) => {
  const newModel: Model = {
    $parent: currentModel,
    $children: [],
    $initialMatrix: editMatrixStack.at(-1)!,
    $animationMatrix: identity,
    $finalMatrix: identity,
    $modelId,
  };
  _pendingPolygonsStack.push([]);
  editMatrixStack.push(identity);
  currentModel.$children.push(newModel);
  return (currentModel = newModel);
};

export const modelEnd = ($mesh?: Mesh | undefined) => {
  modelsByModelId[currentModel.$modelId] = currentModel;
  if ($mesh && $mesh.$vertexCount) {
    currentModel.$mesh = $mesh;
  }
  currentModel = currentModel.$parent!;
  editMatrixStack.pop();
  _pendingPolygonsStack.pop();
};

export const newModel = (fn: (model: Model) => void | Mesh | undefined, modelId?: number) => {
  const model = modelBegin(modelId);
  modelEnd(fn(model) || meshEnd());
  return model;
};

export const initTriangleBuffers = () => {
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint32Array(_triangleIndices), gl.STATIC_DRAW);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(_vertexPositions), gl.STATIC_DRAW);
  gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Int16Array(_vertexNormals), gl.STATIC_DRAW);
  gl.vertexAttribPointer(1, 3, gl.SHORT, true, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Uint32Array(_vertexColors), gl.STATIC_DRAW);
  gl.vertexAttribPointer(2, 4, gl.UNSIGNED_BYTE, true, 0, 0);

  gl.enableVertexAttribArray(0);
  gl.enableVertexAttribArray(1);
  gl.enableVertexAttribArray(2);

  if (DEBUG) {
    console.log(
      "vertices: " +
        _vertexMap.size +
        " indices:" +
        _triangleIndices.length +
        " triangles:" +
        _triangleIndices.length / 3,
    );
  }
};

export const renderModels = (
  worldMatrixLoc: WebGLUniformLocation,
  renderPlayer: 0 | 1 | boolean,
  collisionModelIdUniformLocation?: WebGLUniformLocation,
) => {
  const recursion = (model = rootModel) => {
    if (renderPlayer || model.$modelId !== PLAYER_MODEL_ID) {
      const { $mesh, $children } = model;
      for (const child of $children) {
        recursion(child);
      }
      if ($mesh) {
        if (collisionModelIdUniformLocation) {
          gl.uniform1f(collisionModelIdUniformLocation, model.$modelId / 255);
        }
        gl.uniformMatrix4fv(worldMatrixLoc, false, model.$finalMatrix!.toFloat32Array());
        gl.drawElements(gl.TRIANGLES, $mesh.$vertexCount, gl.UNSIGNED_INT, $mesh.$vertexOffset * 4);
      }
    }
  };
  recursion();
};

export const updateModels = (model: Model, parentMatrix = identity) => {
  const updateResult = model._update?.(model);
  if (updateResult) {
    model.$animationMatrix = updateResult;
  }

  const finalMatrix = (model.$finalMatrix = parentMatrix
    .multiply(model.$initialMatrix)
    .multiplySelf(model.$animationMatrix));

  for (const child of model.$children) {
    updateModels(child, finalMatrix);
  }
};

// Initialize the full screen triangle for the sky

meshAdd([polygon_transform(GQuad.slice(1), identity.translate(-2).scale3d(3).rotate(90, 0))]);
meshEnd();
