// Transition Property ---------------------------------------------------------
export const TransitionPropertyTypes: Array<string> = [
  'none',
  'all',
  'default',
  'colors',
  'opacity',
  'shadow',
  'transform',
];
const transitionPropertyTypeOf = [...TransitionPropertyTypes] as const;
export type TTransitionProperty =
  | typeof transitionPropertyTypeOf[number]
  | string;

// Transition Duration ---------------------------------------------------------
export const TransitionDurationTypes: Array<number> = [
  75, 100, 150, 200, 300, 500, 700, 1000,
];
const transitionDurationTypeOf = [...TransitionDurationTypes] as const;
export type TTransitionDuration =
  | typeof transitionDurationTypeOf[number]
  | number;

// Transition Timing Function ------------------------------------------------
export const TransitionTimingFunctionTypes: Array<string> = [
  'linear',
  'in',
  'out',
  'in-out',
];
const transitionTimingFunctionTypeOf = [
  ...TransitionTimingFunctionTypes,
] as const;
export type TTransitionTimingFunction =
  | typeof transitionTimingFunctionTypeOf[number]
  | string;

// Transition Delay ------------------------------------------------------------
export const TransitionDelayTypes: Array<number> = [
  75, 100, 150, 200, 300, 500, 700, 1000,
];
const transitionDelayTypeOf = [...TransitionDelayTypes] as const;
export type TTransitionDelay = typeof transitionDelayTypeOf[number] | number;

// Animation -------------------------------------------------------------------
export const AnimationTypes: Array<string> = [
  'none',
  'spin',
  'ping',
  'pulse',
  'bounce',
];
const AnimationTypeOf = [...AnimationTypes] as const;
export type TAnimation = typeof AnimationTypeOf[number] | string;

// All Transition Types --------------------------------------------------------

// export const TransitionTypes: Array<string> = [...[...TransitionPropertyTypes]];
export type TTransitions =
  | TTransitionProperty
  | TTransitionDuration
  | TTransitionDelay
  | TTransitionTimingFunction
  | TAnimation;
