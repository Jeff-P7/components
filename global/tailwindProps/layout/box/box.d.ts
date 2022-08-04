import { TBoxDecorationBreak, TBoxSizing } from './box.types';

/**
 * Box Interface
 *
 * @export
 * @interface IBox
 */
export interface IBox {
  /**
   * Utilities for controlling how element fragments should be rendered across
   * multiple lines, columns, or pages
   *
   * @type {TBoxDecorationBreak}
   * @memberof IBox
   */
  boxDecorationBreak?: TBoxDecorationBreak;
  /**
   * Utilities for controlling how the browser should calculate an element's
   * total size
   *
   * @type {TBoxSizing}
   * @memberof IBox
   */
  boxSizing?: TBoxSizing;
}

export default IBox;
