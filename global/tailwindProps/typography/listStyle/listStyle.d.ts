import TailwindConfigDefault from 'tailwindcss';
import { TListStyleType, TListStylePositionType } from './listStyle.types';

/**
 * List Style Interface
 *
 * @export
 * @interface IListStyle
 * @extends {Partial<TailwindConfigDefault>}
 */
export interface IListStyle extends Partial<TailwindConfigDefault> {
  /**
   * Utilities for controlling the bullet/number style of a list
   *
   * @type {TListStyleType}
   * @memberof IListStyle
   */
  listStyleType: TListStyleType;
  /**
   * Utilities for controlling the position of bullets/numbers in lists
   *
   * @type {TListStylePositionType}
   * @memberof IListStyle
   */
  listStylePosition: TListStylePositionType;
}

export default IListStyle;
