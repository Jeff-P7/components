import React from 'react';
import type { ICommon, TColor, TFontSize, TFontWeight } from '../../global';
import ICardCommons from '../../ui/cards/cardCommon';
import type {
  ITypography,
  TFontSmoothing,
  TFontVariantNumeric,
  TLetterSpacing,
  TLineHeight,
  TTextAutoAlign,
  TTextAutoColor,
  TTextAutoOverflow,
  TTextAutoTransform,
  TVerticalAlign,
  TWhitespace,
  TWordBreak,
} from '../../global/tailwindProps';
import { TVariant } from './textAuto.types';

export interface ITextAuto extends ICommon, Partial<ITypography> {
  /**
   * Utilities for controlling the alignment of textAuto
   *
   * @type {TTextAutoAlign}
   * @memberof ITextAuto
   */
  align?: TTextAutoAlign;
  /**
   * Utilities for controlling the textAuto color of an element
   *
   * @type {TTextAutoColor}
   * @memberof ITextAuto
   */
  color?: TTextAutoColor;
  /**
   * Sets element display layout position to inline
   *
   * @type {boolean}
   * @memberof ITextAuto
   */
  inline?: boolean;
  /**
   *
   *
   * @type {boolean}
   * @memberof ITextAuto
   */
  inverted?: boolean;
  /**
   * Italic style of textAuto
   *
   * @type {boolean}
   * @memberof ITextAuto
   */
  italic?: boolean;
  /**
   * Utilities for controlling the tracking (letter spacing) of an element
   *
   * @type {TLetterSpacing}
   * @memberof ITextAuto
   */
  letterSpacing?: TLetterSpacing;
  /**
   * Utilities for controlling the leading (line height) of an element
   *
   * @type {TLineHeight}
   * @memberof ITextAuto
   */
  lineHeight?: TLineHeight;
  /**
   * Utilities for controlling textAuto overflow in an element
   *
   * @type {TTextAutoOverflow}
   * @memberof ITextAuto
   */
  overflow?: TTextAutoOverflow;
  /**
   * Utilities for controlling the font size of an element
   *
   * @type {TFontSize}
   * @memberof ITextAuto
   */
  size?: TFontSize;
  /**
   * Utilities for controlling the font smoothing of an element
   *
   * @type {TFontSmoothing}
   * @memberof ITextAuto
   */
  smoothing?: TFontSmoothing;
  /**
   * Utilities for controlling the transformation of textAuto
   *
   * @type {TTextAutoTransform}
   * @memberof ITextAuto
   */
  transform?: TTextAutoTransform;
  /**
   * TextAuto value incase textAuto is short
   *
   * @type {''}
   * @memberof ITextAuto
   */
  value?: '';
  /**
   * Variant textAuto type, from h1 to paragraph
   *
   * @type {TVariant}
   * @memberof ITextAuto
   */
  variant?: TVariant;
  /**
   * Utilities for controlling the variant of numbers
   *
   * @type {TFontVariantNumeric}
   * @memberof ITextAuto
   */
  variantNumeric?: TFontVariantNumeric;
  /**
   * Utilities for controlling the vertical alignment of an inline or table-cell box
   *
   * @type {TVerticalAlign}
   * @memberof ITextAuto
   */
  verticalAlign?: TVerticalAlign;
  /**
   * Utilities for controlling the font weight of an element
   *
   * @type {TFontWeight}
   * @memberof ITextAuto
   */
  weight?: TFontWeight;
  /**
   * Utilities for controlling an element's white-space property
   *
   * @type {TWhitespace}
   * @memberof ITextAuto
   */
  whitespace?: TWhitespace;
  /**
   * Utilities for controlling word breaks in an element
   *
   * @type {TWordBreak}
   * @memberof ITextAuto
   */
  wordBreak?: TWordBreak;
}

/**
 * Sets the condition for Button Component to select either ITextAuto with a must
 * type of children or ITextAutoValue
 *
 * @interface ITextAutoChildren
 * @extends {ITextAuto}
 */
export interface ITextAutoChildren extends ITextAuto {
  children: React.ReactNode;
}

/**
 * Sets the condition for Button Component to select either ITextAuto with a must
 * type of value or ITextAutoChildren
 *
 * @interface ITextAutoValue
 * @extends {ITextAuto}
 */
export interface ITextAutoValue extends ITextAuto {
  value: string;
}

// interface ITextAutoChildrenORValue extends ITextAutoChildren | ITextAutoValue {}

export default ITextAuto;
