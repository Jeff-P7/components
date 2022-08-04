import TailwindConfigDefault from 'tailwindcss';
import { TSpacing } from './spacing.types';

/**
 * Spacing Interface
 *
 * @interface ISpacing
 * @extends {Partial<TailwindConfigDefault>}
 */
export interface ISpacing extends Partial<TailwindConfigDefault> {
  /**
   * Margin
   *
   * @type {TSpacing}
   * @memberof ISpacing
   */
  margin?: TSpacing;
  /**
   * Padding
   *
   * @type {TSpacing}
   * @memberof ISpacing
   */
  padding?: TSpacing;
}

export default ISpacing;
