import { OpacityTypes, TOpacity } from '../../opacity';
import { ColorTypes, TColor } from '../../color';

// BorderRadius ----------------------------------------------------------------
/**
 * Border Radius Types
 */
export const BorderRadiusBaseTypes: Array<string> = [
  'none',
  'sm',
  'default',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  'full',
];
const borderRadiusTypeOf = [...BorderRadiusBaseTypes] as const;
export type TBorderRadiusBase = typeof borderRadiusTypeOf[number] | string;

/**
 * Border Top
 */
export const BorderRadiusTopTypes: Array<string> = [
  't-none',
  't-sm',
  't',
  't-md',
  't-lg',
  't-xl',
  't-2xl',
  't-3xl',
  't-full',
];
// export const BorderRadiusTopTypes: Array<string> = BorderRadiusBaseTypes.map(
//   (item) => (item !== 'default' ? 't-' + item : 't')
// );
const borderRadiusTopTypeOf = [...BorderRadiusTopTypes] as const;
export type TBorderRadiusTop = typeof borderRadiusTopTypeOf[number] | string;

/**
 * Border Right
 */
export const BorderRadiusRightTypes: Array<string> = [
  'r-none',
  'r-sm',
  'r',
  'r-md',
  'r-lg',
  'r-xl',
  'r-2xl',
  'r-3xl',
  'r-full',
];
// export const BorderRadiusRightTypes: Array<string> = BorderRadiusBaseTypes.map(
//   (item) => (item !== 'default' ? 'r-' + item : 'r')
// );
const borderRadiusRightTypeOf = [...BorderRadiusRightTypes] as const;
export type TBorderRadiusRight =
  | typeof borderRadiusRightTypeOf[number]
  | string;

/**
 * Border Bottom
 */
export const BorderRadiusBottomTypes: Array<string> = [
  'b-none',
  'b-sm',
  'b',
  'b-md',
  'b-lg',
  'b-xl',
  'b-2xl',
  'b-3xl',
  'b-full',
];
// export const BorderRadiusBottomTypes: Array<string> = BorderRadiusBaseTypes.map(
//   (item) => (item !== 'default' ? 'r-' + item : 'r')
// );
const borderRadiusBottomTypeOf = [...BorderRadiusBottomTypes] as const;
export type TBorderRadiusBottom =
  | typeof borderRadiusBottomTypeOf[number]
  | string;

/**
 * Border Left
 */
export const BorderRadiusLeftTypes: Array<string> = [
  'l-none',
  'l-sm',
  'l',
  'l-md',
  'l-lg',
  'l-xl',
  'l-2xl',
  'l-3xl',
  'l-full',
];
// export const BorderRadiusLeftTypes: Array<string> = BorderRadiusBaseTypes.map(
//   (item) => (item !== 'default' ? 'r-' + item : 'r')
// );
const borderRadiusLeftTypeOf = [...BorderRadiusLeftTypes] as const;
export type TBorderRadiusLeft = typeof borderRadiusLeftTypeOf[number] | string;

/**
 * Border Top Left
 */
export const BorderRadiusTopLeftTypes: Array<string> = [
  'tl-none',
  'tl-sm',
  'tl',
  'tl-md',
  'tl-lg',
  'tl-xl',
  'tl-2xl',
  'tl-3xl',
  'tl-full',
];
// export const BorderRadiusTopLeftTypes: Array<string> =
//   BorderRadiusBaseTypes.map((item) =>
//     item !== 'default' ? 'tl-' + item : 'tl'
//   );
const borderRadiusTopLeftTypeOf = [...BorderRadiusTopLeftTypes] as const;
export type TBorderRadiusTopLeft =
  | typeof borderRadiusTopLeftTypeOf[number]
  | string;

/**
 * Border Top Right
 */
export const BorderRadiusTopRightTypes: Array<string> = [
  'tr-none',
  'tr-sm',
  'tr',
  'tr-md',
  'tr-lg',
  'tr-xl',
  'tr-2xl',
  'tr-3xl',
  'tr-full',
];
// export const BorderRadiusTopRightTypes: Array<string> =
//   BorderRadiusBaseTypes.map((item) =>
//     item !== 'default' ? 'tr-' + item : 'tr'
//   );
const borderRadiusTopRightTypeOf = [...BorderRadiusTopRightTypes] as const;
export type TBorderRadiusTopRight =
  | typeof borderRadiusTopRightTypeOf[number]
  | string;

/**
 * Border Bottom Right
 */
export const BorderRadiusBottomRightTypes: Array<string> = [
  'br-none',
  'br-sm',
  'br',
  'br-md',
  'br-lg',
  'br-xl',
  'br-2xl',
  'br-3xl',
  'br-full',
];
// export const BorderRadiusBottomRightTypes: Array<string> =
//   BorderRadiusBaseTypes.map((item) =>
//     item !== 'default' ? 'br-' + item : 'br'
//   );
const borderRadiusBottomRightTypeOf = [
  ...BorderRadiusBottomRightTypes,
] as const;
export type TBorderRadiusBottomRight =
  | typeof borderRadiusBottomRightTypeOf[number]
  | string;

/**
 * Border Bottom Left
 */
export const BorderRadiusBottomLeftTypes: Array<string> = [
  'bl-none',
  'bl-sm',
  'bl',
  'bl-md',
  'bl-lg',
  'bl-xl',
  'bl-2xl',
  'bl-3xl',
  'bl-full',
];
// export const BorderRadiusBottomLeftTypes: Array<string> =
//   BorderRadiusBaseTypes.map((item) =>
//     item !== 'default' ? 'bl-' + item : 'bl'
//   );
const borderRadiusBottomLeftTypeOf = [...BorderRadiusBottomLeftTypes] as const;
export type TBorderRadiusBottomLeft =
  | typeof borderRadiusBottomLeftTypeOf[number]
  | string;

/**
 * Border Radius All Types
 */
export const BorderRadiusTypes: Array<string> = [
  ...[
    ...BorderRadiusBaseTypes,
    ...BorderRadiusTopTypes,
    ...BorderRadiusRightTypes,
    ...BorderRadiusBottomTypes,
    ...BorderRadiusLeftTypes,
    ...BorderRadiusTopLeftTypes,
    ...BorderRadiusTopRightTypes,
    ...BorderRadiusBottomRightTypes,
    ...BorderRadiusBottomLeftTypes,
  ],
];

export type TBorderRadius =
  | TBorderRadiusBase
  | TBorderRadiusTop
  | TBorderRadiusRight
  | TBorderRadiusBottom
  | TBorderRadiusLeft
  | TBorderRadiusTopLeft
  | TBorderRadiusTopRight
  | TBorderRadiusBottomRight
  | TBorderRadiusBottomLeft;

//BorderWidth ------------------------------------------------------------------

/**
 * Border Width Base Types
 */
export const BorderWidthBaseTypes: Array<string> = [
  '0',
  '2',
  '4',
  '8',
  'default',
];
const borderWidthTypeOf = [...BorderWidthBaseTypes] as const;
export type TBorderWidthBase = typeof borderWidthTypeOf[number] | string;

/**
 * Border Width Number Types
 */
export const BorderWidthNumberTypes: Array<number> = [0, 2, 4, 8];
const borderWidthNumberTypeOf = [...BorderWidthNumberTypes] as const;
export type TBorderWidthNumber =
  | typeof borderWidthNumberTypeOf[number]
  | number;

/**
 * Border Width X Types
 */
// export const BorderWidthXTypes: Array<string> = [
//   'x-0',
//   'x-2',
//   'x-4',
//   'x-8',
//   'x',
// ];
// const borderWidthXTypeOf = [...BorderWidthXTypes] as const;
// export type TBorderWidthX = typeof borderWidthXTypeOf[number] | string;

/**
 * Border Width Y Types
 */
// export const BorderWidthYTypes: Array<string> = [
//   'y-0',
//   'y-2',
//   'y-4',
//   'y-8',
//   'y',
// ];
// const borderWidthYTypeOf = [...BorderWidthYTypes] as const;
// export type TBorderWidthY = typeof borderWidthYTypeOf[number] | string;

/**
 * Border Width Top Types
 */
// export const BorderWidthTopTypes: Array<string> = BorderWidthBaseTypes.map(
//   (item) => (item !== 'default' ? 't-' + item : 't')
// );
export const BorderWidthTopTypes: Array<string> = [
  't-0',
  't-2',
  't-4',
  't-8',
  't',
];
const borderWidthTopTypeOf = [...BorderWidthTopTypes] as const;
export type TBorderWidthTop = typeof borderWidthTopTypeOf[number] | string;

/**
 * Border Width Right Types
 */
export const BorderWidthRightTypes: Array<string> = [
  'r-0',
  'r-2',
  'r-4',
  'r-8',
  'r',
];
// export const BorderWidthRightTypes: Array<string> = BorderWidthBaseTypes.map(
//   (item) => (item !== 'default' ? 't-' + item : 't')
// );
const borderWidthRightTypeOf = [...BorderWidthRightTypes] as const;
export type TBorderWidthRight = typeof borderWidthBottomTypeOf[number] | string;

/**
 * Border Width Bottom Types
 */
export const BorderWidthBottomTypes: Array<string> = [
  'b-0',
  'b-2',
  'b-4',
  'b-8',
  'b',
];
// export const BorderWidthBottomTypes: Array<string> = BorderWidthBaseTypes.map(
//   (item) => (item !== 'default' ? 't-' + item : 't')
// );
const borderWidthBottomTypeOf = [...BorderWidthBottomTypes] as const;
export type TBorderWidthBottom =
  | typeof borderWidthBottomTypeOf[number]
  | string;

/**
 * Border Width Left Types
 */
export const BorderWidthLeftTypes: Array<string> = [
  'l-0',
  'l-2',
  'l-4',
  'l-8',
  'l',
];
// export const BorderWidthLeftTypes: Array<string> = BorderWidthBaseTypes.map(
//   (item) => (item !== 'default' ? 't-' + item : 't')
// );
const borderWidthLeftTypeOf = [...BorderWidthLeftTypes] as const;
export type TBorderWidthLeft = typeof borderWidthLeftTypeOf[number] | string;

/**
 * Border Width All Types
 */
export const BorderWidthTypes: Array<string> = [
  ...[
    ...BorderWidthBaseTypes,
    // ...BorderWidthXTypes,
    // ...BorderWidthYTypes,
    ...BorderWidthTopTypes,
    ...BorderWidthRightTypes,
    ...BorderWidthBottomTypes,
    ...BorderWidthLeftTypes,
  ],
];

/**
 * Border Width All Types Type
 */
export type TBorderWidth =
  | TBorderWidthBase
  // | TBorderWidthX
  // | TBorderWidthY
  | TBorderWidthTop
  | TBorderWidthRight
  | TBorderWidthBottom
  | TBorderWidthLeft;

// BorderOpacity ---------------------------------------------------------------
/**
 * Border Opacity Types
 */
export const BorderOpacityTypes: Array<number> = OpacityTypes;
export type TBorderOpacity = TOpacity;

// BorderColor -----------------------------------------------------------------
/**
 * Border Opacity Types
 */
export const BorderColorTypes: Array<string> = ColorTypes;
export type TBorderColor = TColor;

// BorderStyle -----------------------------------------------------------------
/**
 * Border Style Types
 */
export const BorderStyleTypes: Array<string> = [
  'solid',
  'dashed',
  'dotted',
  'double',
  'none',
];
const borderStyleTypeOf = [...BorderStyleTypes] as const;
export type TBorderStyle = typeof borderStyleTypeOf[number] | string;

// All border Prop Types -------------------------------------------------------

// export const BorderTypes: Array<string | number> = [
//   ...[
//     ...BorderColorTypes,
//     ...BorderOpacityTypes,
//     ...BorderRadiusTypes,
//     ...BorderStyleTypes,
//     ...BorderWidthTypes,
//   ],
// ];

export type TBorder =
  | TBorderColor
  | TBorderOpacity
  | TBorderRadius
  | TBorderStyle
  | TBorderWidth;
