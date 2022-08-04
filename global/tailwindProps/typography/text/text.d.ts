import TailwindConfigDefault from 'tailwindcss';
import type { IColor } from '../../color';
import type { IOpacity } from '../../opacity';
import type {
  TTextAlign,
  TTextColor,
  TTextDecoration,
  TTextOpacity,
  TTextOverflow,
  TTextTransform,
} from './text.types';

export interface IText
  extends Pick<IColor, 'textColor'>,
    Pick<IOpacity, 'textOpacity'>,
    Partial<TailwindConfigDefault> {
  /**
   * Utilities for controlling the alignment of text
   *
   * @type {TTextAlign}
   * @memberof IText
   */
  textAlign?: TTextAlign;
  /**
   * Utilities for controlling the text color of an element
   *
   * @type {TTextColor}
   * @memberof IText
   */
  textColor?: TTextColor;
  /**
   * Utilities for controlling the opacity of an element's text color
   *
   * @type {TTexOpacity}
   * @memberof IText
   */
  textOpacity?: TTextOpacity;
  /**
   * Utilities for controlling the decoration of text
   *
   * @type {TTextDecoration}
   * @memberof IText
   */
  textDecoration?: TTextDecoration;
  /**
   * Utilities for controlling the transformation of text
   *
   * @type {TTextTransform}
   * @memberof IText
   */
  textTransform?: TTextTransform;
  /**
   * Utilities for controlling text overflow in an element
   *
   * @type {TTextOverflow}
   * @memberof IText
   */
  textOverflow?: TTextOverflow;
}

export default IText;
