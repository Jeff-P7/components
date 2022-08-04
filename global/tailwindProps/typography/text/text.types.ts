import { TOpacity, OpacityTypes } from '../../opacity';
import { TColor, ColorTypes } from '../../color';

// TextAlign -------------------------------------------------------------------
/**
 * List of text align types
 */
export const TextAlignTypes: Array<string> = [
  'center',
  'right',
  'left',
  'justify',
];
const textAlignTypeOf = [...TextAlignTypes] as const;
/**
 * Text align type
 */
export type TTextAlign = typeof textAlignTypeOf[number] | string;

// TextDecoration --------------------------------------------------------------

/**
 * List of text decoration types
 */
export const TextDecorationTypes: Array<string> = [
  'underline',
  'line-through',
  'no-underline',
];
const textDecorationTypeOf = [...TextDecorationTypes] as const;
/**
 * Text decoration type
 */
export type TTextDecoration = typeof textDecorationTypeOf[number] | string;

// TextTransform ---------------------------------------------------------------
/**
 * List of text transform types
 */
export const TextTransformTypes: Array<string> = [
  'uppercase',
  'lowercase',
  'capitalize',
  'normal-case',
];
const textTransformTypeOf = [...TextTransformTypes] as const;
/**
 * Text transform type
 */
export type TTextTransform = typeof textTransformTypeOf[number] | string;

// TextOverflow ----------------------------------------------------------------
/**
 * List of text overflow types
 */
export const TextOverflowTypes: Array<string> = [
  'truncate',
  'overflow-ellipsis',
  'overflow-clip',
];
const textOverflowTypeOf = [...TextOverflowTypes] as const;
/**
 * Text overflow type
 */
export type TTextOverflow = typeof textOverflowTypeOf[number] | string;

// TextColor -------------------------------------------------------------------
/**
 * List of text color types
 */
export const TextColorTypes: Array<string> = ColorTypes;
/**
 * Text color type
 */
export type TTextColor = TColor;

// TextOpacity -----------------------------------------------------------------
/**
 * List of text opacity types
 */
export type TTextOpacity = TOpacity;
/**
 * Text opacity type
 */
export const TextOpacityTypes: Array<number> = OpacityTypes;

// All Text Types --------------------------------------------------------------

/**
 * Text of all property types
 */
export type TText =
  | TTextAlign
  | TTextColor
  | TTextDecoration
  | TTextOpacity
  | TTextOverflow
  | TTextTransform;

/**
 * List of all text property types
 */
// export const TextTypes: Array<string> = [
//   ...TextAlignTypes,
//   ...TextColorTypes,
//   ...TextDecorationTypes,
//   ...TextOpacityTypes,
//   ...TextOverflowTypes,
//   ...TextTransformTypes,
// ];
