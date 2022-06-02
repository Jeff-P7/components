// Variant ---------------------------------------------------------------------
export const VariantCardTypes: Array<string> = [
  'elevation',
  'outlined',
  'paper',
];
const variantCardTypeOf = [...VariantCardTypes] as const;
export type TVariantCard = typeof variantCardTypeOf[number] | string;

// Orientation -----------------------------------------------------------------
export const OrientationTypes: Array<string> = ['horizontal', 'vertical'];
const orientationTypeOf = [...OrientationTypes] as const;
export type TOrientation = typeof orientationTypeOf[number];

// BoxShadow -------------------------------------------------------------------
export const BoxShadowTypes: Array<string> = [
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  'inner',
  'none',
];
const boxShadowsTypeOf = [...BoxShadowTypes] as const;
export type TBoxShadow = typeof boxShadowsTypeOf[number] | string;
