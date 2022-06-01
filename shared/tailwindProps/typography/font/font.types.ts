// FontFamily ------------------------------------------------------------------
export const FontFamilyTypes: Array<string> = ['sans', 'serif', 'mono'];
const fontFamilyTypeOf = [...FontFamilyTypes] as const;
export type TFontFamily = typeof fontFamilyTypeOf[number] | string;

// FontSize --------------------------------------------------------------------
export const FontSizeTypes: Array<string> = [
  'xs',
  'sm',
  'base',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
  '7xl',
  '8xl',
  '9xl',
];
const fontSizeTypeOf = [...FontSizeTypes] as const;
export type TFontSize = typeof fontSizeTypeOf[number] | string;

// FontSmoothing ---------------------------------------------------------------
export const FontSmoothingTypes: Array<string> = [
  'antialiased',
  'subpixel-antialiased',
];
const fontSmoothingTypeOf = [...FontSmoothingTypes] as const;
export type TFontSmoothing = typeof fontSmoothingTypeOf[number] | string;

// FontStyle -------------------------------------------------------------------
export const FontStyleTypes: Array<string> = ['italic', 'not-italic'];
const fontStyleTypeOf = [...FontStyleTypes] as const;
export type TFontStyle = typeof fontStyleTypeOf[number] | string;

// FontWeight ------------------------------------------------------------------
export const FontWeightTypes: Array<string> = [
  'thin',
  'extralight',
  'light',
  'normal',
  'medium',
  'semibold',
  'bold',
  'extrabold',
  'black',
];
const weightTypeOf = [...FontWeightTypes] as const;
export type TFontWeight = typeof weightTypeOf[number] | string;

// FontVariantNumeric ----------------------------------------------------------
export const FontVariantNumericTypes: Array<string> = [
  'normal-nums',
  'ordinal',
  'slashed-zero',
  'lining-nums',
  'oldstyle-nums',
  'proportional-nums',
  'tabular-nums',
  'diagonal-fractions',
  'stacked-fractions',
];
const fontVariantNumericTypeOf = [...FontVariantNumericTypes] as const;
export type TFontVariantNumeric =
  | typeof fontVariantNumericTypeOf[number]
  | string;

// All font types --------------------------------------------------------------

export type TFont =
  | TFontFamily
  | TFontSize
  | TFontSmoothing
  | TFontStyle
  | TFontVariantNumeric
  | TFontWeight;

// export const FontTypes: Array<string> = [
//   ...FontFamilyTypes,
//   ...FontSizeTypes,
//   ...FontSmoothingTypes,
//   ...FontStyleTypes,
//   ...FontVariantNumericTypes,
//   ...FontWeightTypes,
// ];
