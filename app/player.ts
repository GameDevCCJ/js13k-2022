import type { Vec3 } from "./math/vectors";

export const PLAYER_MODEL_ID = 2;

export const player_position_global: Vec3 = {
  x: 0,
  y: 10,
  z: -27,
};

/*
  x: -45.748376375865426,
  y: -5.187376562720708,
  z: 15.424869326699953, */

export const player_position_final: Vec3 = { ...player_position_global };
