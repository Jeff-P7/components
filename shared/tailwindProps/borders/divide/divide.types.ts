import { TColor, ColorTypes } from '../../color';
import { TOpacity, OpacityTypes } from '../../opacity';

// Divide Width ----------------------------------------------------------------

export const DivideWidthTypes: Array<string> = [
  'x-0',
  'x-2',
  'x-4',
  'x-8',
  'x',
  'y-0',
  'y-2',
  'y-4',
  'y-8',
  'y',
  'y-reverse',
  'x-reverse',
];
const divideWidthTypeOf = [...DivideWidthTypes] as const;
export type TDivideWidth = typeof divideWidthTypeOf[number] | string;

// Divide Style ----------------------------------------------------------------

export const DivideStyleTypes: Array<string> = [
  'solid',
  'dashed',
  'dotted',
  'double',
  'none',
];
const divideStyleTypeOf = [...DivideStyleTypes] as const;
export type TDivideStyle = typeof divideStyleTypeOf[number] | string;

// Divide Color ----------------------------------------------------------------
export const DivideColorTypes: Array<string> = ColorTypes;
export type TDivideColor = TColor;
// Divide Opacity --------------------------------------------------------------
export const DivideOpacityTypes: Array<number> = OpacityTypes;
export type TDivideOpacity = TOpacity;

// All Divide Types ------------------------------------------------------------

// export const DivideTypes: Array<string | number> = [
//   ...[
//     ...DivideColorTypes,
//     ...DivideOpacityTypes,
//     ...DivideStyleTypes,
//     ...DivideWidthTypes,
//   ],
// ];

export type TDivide =
  | TDivideColor
  | TDivideOpacity
  | TDivideStyle
  | TDivideWidth;
