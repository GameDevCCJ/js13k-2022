import type { Vec3 } from "./math/vectors";

export const PLAYER_MODEL_ID = 2;

export const player_position_global: Vec3 = {
  x: -55,
  y: 2.6,
  z: 55,
};

// export const player_position_global: Vec3 = {
//   x: 0,
//   y: 2.2,
//   z: 26,
// };

// export const player_position_global: Vec3 = {
//   x: 0,
//   y: 2.2,
//   z: -26,
// };

export const player_position_final: Vec3 = { ...player_position_global };
