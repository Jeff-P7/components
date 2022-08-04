import React from 'react';
import type { ICommon, TColor, TFontSize, TFontWeight } from '../../../../global';
import ICardCommons from '../../ui/cards/cardCommon';
import type {
  ITypography,
  TFontSmoothing,
  TFontVariantNumeric,
  TLetterSpacing,
  TLineHeight,
  TTextAlign,
  TTextColor,
  TTextOverflow,
  TTextTransform,
  TVerticalAlign,
  TWhitespace,
  TWordBreak,
} from '../../global/tailwindProps';
import { TVariant } from './text.types';

export interface IText extends ICommon, Partial<ITypography> {
  /**
   * Utilities for controlling the alignment of text
   *
   * @type {TTextAlign}
   * @memberof IText
   */
  align?: TTextAlign;
  /**
   * Utilities for controlling the text color of an element
   *
   * @type {TTextColor}
   * @memberof IText
   */
  color?: TTextColor;
  /**
   * Sets element display layout position to inline
   *
   * @type {boolean}
   * @memberof IText
   */
  inline?: boolean;
  /**
   *
   *
   * @type {boolean}
   * @memberof IText
   */
  inverted?: boolean;
  /**
   * Italic style of text
   *
   * @type {boolean}
   * @memberof IText
   */
  italic?: boolean;
  /**
   * Utilities for controlling the tracking (letter spacing) of an element
   *
   * @type {TLetterSpacing}
   * @memberof IText
   */
  letterSpacing?: TLetterSpacing;
  /**
   * Utilities for controlling the leading (line height) of an element
   *
   * @type {TLineHeight}
   * @memberof IText
   */
  lineHeight?: TLineHeight;
  /**
   * Utilities for controlling text overflow in an element
   *
   * @type {TTextOverflow}
   * @memberof IText
   */
  overflow?: TTextOverflow;
  /**
   * Utilities for controlling the font size of an element
   *
   * @type {TFontSize}
   * @memberof IText
   */
  size?: TFontSize;
  /**
   * Utilities for controlling the font smoothing of an element
   *
   * @type {TFontSmoothing}
   * @memberof IText
   */
  smoothing?: TFontSmoothing;
  /**
   * Utilities for controlling the transformation of text
   *
   * @type {TTextTransform}
   * @memberof IText
   */
  transform?: TTextTransform;
  /**
   * Text value incase text is short
   *
   * @type {''}
   * @memberof IText
   */
  value?: '';
  /**
   * Variant text type, from h1 to paragraph
   *
   * @type {TVariant}
   * @memberof IText
   */
  variant?: TVariant;
  /**
   * Utilities for controlling the variant of numbers
   *
   * @type {TFontVariantNumeric}
   * @memberof IText
   */
  variantNumeric?: TFontVariantNumeric;
  /**
   * Utilities for controlling the vertical alignment of an inline or table-cell box
   *
   * @type {TVerticalAlign}
   * @memberof IText
   */
  verticalAlign?: TVerticalAlign;
  /**
   * Utilities for controlling the font weight of an element
   *
   * @type {TFontWeight}
   * @memberof IText
   */
  weight?: TFontWeight;
  /**
   * Utilities for controlling an element's white-space property
   *
   * @type {TWhitespace}
   * @memberof IText
   */
  whitespace?: TWhitespace;
  /**
   * Utilities for controlling word breaks in an element
   *
   * @type {TWordBreak}
   * @memberof IText
   */
  wordBreak?: TWordBreak;
}

/**
 * Sets the condition for Button Component to select either IText with a must
 * type of children or ITextValue
 *
 * @interface ITextChildren
 * @extends {IText}
 */
export interface ITextChildren extends IText {
  children: React.ReactNode;
}

/**
 * Sets the condition for Button Component to select either IText with a must
 * type of value or ITextChildren
 *
 * @interface ITextValue
 * @extends {IText}
 */
export interface ITextValue extends IText {
  value: string;
}

// interface ITextChildrenORValue extends ITextChildren | ITextValue {}

export default IText;
