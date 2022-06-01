import TailwindConfigDefault from 'tailwindcss';
import {
  IFont,
  TFontSize,
  TFontFamily,
  TFontSmoothing,
  TFontStyle,
  TFontWeight,
  TFontVariantNumeric,
} from './font';
import { IListStyle, TListStyleType, TListStylePosition } from './listStyle';
import {
  IPlaceholder,
  TPlaceholderColor,
  TPlaceholderOpacity,
} from './placeholder';
import type {
  IText,
  TTextAlign,
  TTextColor,
  TTextDecoration,
  TTextOpacity,
  TTextOverflow,
  TTextTransform,
} from './text';
import {
  TLetterSpacing,
  TLineHeight,
  TVerticalAlign,
  TWhitespace,
  TWordBreak,
} from './typography.types';

/**
 * Typography interface
 *
 * @export
 * @interface ITypography
 * @extends {IFont}
 * @extends {IListStyle}
 * @extends {IPlaceholder}
 * @extends {IText}
 * @extends {Partial<TailwindConfigDefault>}
 */
export interface ITypography
  extends IFont,
    IListStyle,
    IPlaceholder,
    IText,
    Partial<TailwindConfigDefault> {
  fontFamily?: TFontFamily;
  fontSize?: TFontSize;
  fontSmoothing?: TFontSmoothing;
  fontStyle?: TFontStyle;
  fontVariantNumeric?: TFontVariantNumeric;
  fontWeight?: TFontWeight;
  /**
   * Utilities for controlling the leading (line height) of an element
   *
   * @type {TLetterSpacing}
   * @memberof ITypography
   */
  letterSpacing?: TLetterSpacing;
  /**
   * Utilities for controlling the tracking (letter spacing) of an element
   *
   * @type {TLineHeight}
   * @memberof ITypography
   */
  lineHeight?: TLineHeight;
  listStylePosition?: TListStylePosition;
  listStyleType?: TListStyleType;
  placeholderColor?: TPlaceholderColor;
  placeholderOpacity?: TPlaceholderOpacity;
  textAlign?: TTextAlign;
  textColor?: TTextColor;
  textDecoration?: TTextDecoration;
  textOpacity?: TTextOpacity;
  textOverflow?: TTextOverflow;
  textTransform?: TTextTransform;
  /**
   * Utilities for controlling the vertical alignment of an inline or table-cell box
   *
   * @type {TVerticalAlign}
   * @memberof ITypography
   */
  verticalAlign?: TVerticalAlign;
  /**
   * Utilities for controlling an element's white-space property
   *
   * @type {TWhitespace}
   * @memberof ITypography
   */
  whitespace?: TWhitespace;
  /**
   * Utilities for controlling word breaks in an element
   *
   * @type {TWordBreak}
   * @memberof ITypography
   */
  wordBreak?: TWordBreak;
}

export default ITypography;
