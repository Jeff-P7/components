import {
  FontFamilyTypes,
  FontSizeTypes,
  FontSmoothingTypes,
  FontStyleTypes,
  FontVariantNumericTypes,
  FontWeightTypes,
  TFontFamily,
  TFontSize,
  TFontSmoothing,
  TFontStyle,
  TFontVariantNumeric,
  TFontWeight,
} from './font';
import {
  ListStylePositionTypes,
  ListStyleTypeTypes,
  TListStylePosition,
  TListStyleType,
} from './listStyle';
import {
  PlaceholderColorTypes,
  PlaceholderOpacityTypes,
  TPlaceholderColor,
  TPlaceholderOpacity,
} from './placeholder';
import {
  TextAlignTypes,
  TextColorTypes,
  TextDecorationTypes,
  TextOpacityTypes,
  TextOverflowTypes,
  TextTransformTypes,
  TTextAlign,
  TTextColor,
  TTextDecoration,
  TTextOpacity,
  TTextOverflow,
  TTextTransform,
} from './text';

// LetterSpacing ---------------------------------------------------------------

export const LetterSpacingTypes: Array<string> = [
  'tighter',
  'tight',
  'normal',
  'wide',
  'wider',
  'widest',
];
const letterSpacingTypeOf = [...LetterSpacingTypes] as const;
export type TLetterSpacing = typeof letterSpacingTypeOf[number] | string;

// LineHeight ------------------------------------------------------------------

export const LineHeightStringTypes: Array<string> = [
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'none',
  'tight',
  'snug',
  'normal',
  'relaxed',
  'loose',
];
const lineHeightStringTypeOf = [...LineHeightStringTypes] as const;
type TLineHeightString = typeof lineHeightStringTypeOf[number] | string;

export const LineHeightNumberTypes: Array<number> = [3, 4, 5, 6, 7, 8, 9, 10];
const lineHeightNumberTypeOf = [...LineHeightNumberTypes] as const;
type TLineHeightNumber = typeof lineHeightNumberTypeOf[number] | number;

export const LineHeightTypes: Array<string | number> = [
  ...LineHeightStringTypes,
  ...LineHeightNumberTypes,
];
export type TLineHeight = TLineHeightString | TLineHeightNumber;

// VerticalAlignment -----------------------------------------------------------

export const VerticalAlignmentTypes: Array<string> = [
  'baseline',
  'top',
  'middle',
  'bottom',
  'text-top',
  'text-bottom',
];
const verticalAlignmentTypeOf = [...VerticalAlignmentTypes] as const;
export type TVerticalAlignment =
  | typeof verticalAlignmentTypeOf[number]
  | string;

// Whitespace ------------------------------------------------------------------

export const WhitespaceTypes: Array<string> = [
  'normal',
  'nowrap',
  'pre',
  'pre-line',
  'pre-wrap',
];
const whitespaceTypeOf = [...WhitespaceTypes] as const;
export type TWhitespace = typeof whitespaceTypeOf[number] | string;

// WordBreak -------------------------------------------------------------------

export const WordBreakTypes: Array<string> = ['normal', 'words', 'all'];
const wordBreakTypeOf = [...WordBreakTypes] as const;
export type TWordBreak = typeof wordBreakTypeOf[number] | string;

// Font types ------------------------------------------------------------------

// export const TypographyFontFamilyTypes: Array<string> = FontFamilyTypes;
// export type TTypographyFontFamily = TFontFamily;

// export const TypographyFontSizeTypes: Array<string> = FontSizeTypes;
// export type TTypographyFontSize = TFontSize;

// export const TypographyFontSmoothingTypes: Array<string> = FontSmoothingTypes;
// export type TTypographyFontSmoothing = TFontSmoothing;

// export const TypographyFontStyleTypes: Array<string> = FontStyleTypes;
// export type TTypographyFontStyle = TFontStyle;

// export const TypographyFontVariantNumericTypes: Array<string> =
//   FontVariantNumericTypes;
// export type TTypographyFontVariantNumeric = TFontVariantNumeric;

// export const TypographyFontWeightTypes: Array<string> = FontWeightTypes;
// export type TTypographyFontWeight = TFontWeight;

// Listing style types ---------------------------------------------------------

// export const TypographyListStylePositionTypes: Array<string> =
//   ListStylePositionTypes;
// export type TTypographyListStylePosition = TListStylePosition;

// export const TypographyListStyleTypeTypes: Array<string> = ListStyleTypeTypes;
// export type TTypographyListStyleType = TListStyleType;

// Placeholder types -----------------------------------------------------------

// export const TypographyPlaceholderColorTypes: Array<string> =
//   PlaceholderColorTypes;
// export type TTypographyPlaceholderColor = TPlaceholderColor;

// export const TypographyPlaceholderOpacityTypes: Array<string> =
//   PlaceholderOpacityTypes;
// export type TTypographyPlaceholderOpacity = TPlaceholderOpacity;

// Text types ------------------------------------------------------------------

// export const TypographyTextAlignTypes: Array<string> = TextAlignTypes;
// export type TTypographyTextAlign = TTextAlign;

// export const TypographyTextColorTypes: Array<string> = TextColorTypes;
// export type TTypographyTextColor = TTextColor;

// export const TypographyTextDecorationTypes: Array<string> = TextDecorationTypes;
// export type TTypographyTextDecoration = TTextDecoration;

// export const TypographyTextOpacityTypes: Array<string> = TextOpacityTypes;
// export type TTypographyTextOpacity = TTextOpacity;

// export const TypographyTextOverflowTypes: Array<string> = TextOverflowTypes;
// export type TTypographyTextOverflow = TTextOverflow;

// export const TypographyTextTransformTypes: Array<string> = TextTransformTypes;
// export type TTypographyTextTransform = TTextTransform;

// All typography types --------------------------------------------------------

// export const TypographyTypes: Array<string | number> = [
//   ...LetterSpacingTypes,
//   ...LineHeightTypes,
//   ...VerticalAlignmentTypes,
//   ...WhitespaceTypes,
//   ...WordBreakTypes,
// ];

export type TTypography =
  | TLetterSpacing
  | TLineHeight
  | TVerticalAlignment
  | TWhitespace
  | TWordBreak;
