import TailwindConfigDefault from 'tailwindcss';
import {
  TFontFamily,
  TFontSize,
  TFontSmoothing,
  TFontStyle,
  TFontVariantNumeric,
  TFontWeight,
} from './font.types';

/**
 * Font Interface
 *
 * @interface IFont
 * @extends {Partial<TailwindConfigDefault>}
 */
export interface IFont extends Partial<TailwindConfigDefault> {
  /**
   * Utilities for controlling the font family of an element
   *
   * @type {TFontFamily}
   * @memberof IFont
   */
  fontFamily?: TFontFamily;
  /**
   * Utilities for controlling the font size of an element
   *
   * @type {TFontSize}
   * @memberof IFont
   */
  fontSize?: TFontSize;
  /**
   * Utilities for controlling the font smoothing of an element
   *
   * @type {TFontSmoothing}
   * @memberof IFont
   */
  fontSmoothing?: TFontSmoothing;
  /**
   * Utilities for controlling the style of text
   *
   * @type {TFontStyle}
   * @memberof IFont
   */
  fontStyle?: TFontStyle;
  /**
   * Utilities for controlling the variant of numbers
   *
   * @type {TFontVariantNumeric}
   * @memberof IFont
   */
  fontVariantNumeric?: TFontVariantNumeric;
  /**
   * Utilities for controlling the font weight of an element
   *
   * @type {TFontWeight}
   * @memberof IFont
   */
  fontWeight?: TFontWeight;
}

export default IFont;
