export const CYCLE_AXIS = "CYCLE_AXIS";

export const TRIGGER_AXIS = "TRIGGER_AXIS";

export const LOAD_LEVEL = "LOAD_LEVEL";

export const cycleAxis = (axisKey, direction = 1) => ({
  type: CYCLE_AXIS,
  key: axisKey,
  direction
});

export const triggerAxis = (axisKey, direction = 1) => ({
  type: TRIGGER_AXIS,
  key: axisKey,
  direction
});

export const loadLevel = level => ({
  type: LOAD_LEVEL,
  level
});
