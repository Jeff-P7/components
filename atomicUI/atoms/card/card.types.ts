// Variant ---------------------------------------------------------------------
export const VariantCardTypes: Array<string> = [
  'elevated',
  'outlined',
  'paper',
];
const variantCardTypeOf = [...VariantCardTypes] as const;
export type TVariantCard = typeof variantCardTypeOf[number] | string;

// Orientation -----------------------------------------------------------------
export const OrientationTypes: Array<string> = ['horizontal', 'vertical'];
const orientationTypeOf = [...OrientationTypes] as const;
export type TOrientation = typeof orientationTypeOf[number];

// All Card Types --------------------------------------------------------------

const CardTypes: Array<string> = [
  ...[...VariantCardTypes, ...OrientationTypes],
];

export type TCard = TVariantCard | TOrientation;
