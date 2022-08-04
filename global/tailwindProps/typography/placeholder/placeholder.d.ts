import TailwindConfigDefault from 'tailwindcss';
import { IOpacity } from '../../opacity';
import { IColor } from '../../color';
import { TPlaceholderColor, TPlaceholderOpacity } from './placeholder.types';

/**
 * Placeholder interface
 *
 * @export
 * @interface IPlaceholder
 * @extends {Partial<IColor>}
 * @extends {Partial<IOpacity>}
 * @extends {Partial<TailwindConfigDefault>}
 */
export interface IPlaceholder
  extends Partial<IColor>,
    Partial<IOpacity>,
    Partial<TailwindConfigDefault> {
  /**
   * Utilities for controlling the color of placeholder text
   *
   * @type {TPlaceholderColor}
   * @memberof IPlaceholder
   */
  placeholderColor: TPlaceholderColor;
  /**
   * Utilities for controlling the opacity of an element's placeholder color
   *
   * @type {TPlaceholderOpacity}
   * @memberof IPlaceholder
   */
  placeholderOpacity: TPlaceholderOpacity;
}

export default IPlaceholder;
