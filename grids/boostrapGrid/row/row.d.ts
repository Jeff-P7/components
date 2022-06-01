import type { IDiv } from '../../../atomicUI/atoms/div/div.d';
import { TAlignRow, TJustify } from './row.types';

/**
 * Row Interface
 *
 * @export
 * @interface IRow
 * @extends {IDiv}
 */
export interface IRow extends IDiv {
  /**
   * Vertical alignment of columns
   *
   * @type {TAlignRow}
   * @memberof IRow
   */
  align?: TAlignRow;
  /**
   * Horizontal alignment of columns
   *
   * @type {TJustify}
   * @memberof IRow
   */
  justify?: TJustify;
  /**
   * Stacks columns
   *
   * @type {boolean}
   * @memberof IRow
   */
  stack?: boolean;
  gutter?: number | string;
}

export default IRow;
