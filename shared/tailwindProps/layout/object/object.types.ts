// Object Fit ------------------------------------------------------------------
export const ObjectFitTypes: Array<string> = [
  'contain',
  'cover',
  'fill',
  'none',
  'scale-down',
];
const objectFitTypeOf = [...ObjectFitTypes] as const;
export type TObjectFit = typeof objectFitTypeOf[number] | string;

// Object Position -------------------------------------------------------------
export const ObjectPositionTypes: Array<string> = [
  'bottom',
  'center',
  'left',
  'left-bottom',
  'left-top',
  'right',
  'right-bottom',
  'right-top',
  'top',
];
const objectPositionTypeOf = [...ObjectPositionTypes] as const;
export type TObjectPosition = typeof objectPositionTypeOf[number] | string;

// All Transition Types --------------------------------------------------------

export type TObject = TObjectFit | TObjectPosition;
