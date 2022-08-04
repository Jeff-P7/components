import { TObjectFit, TObjectPosition } from './object.types';

/**
 * Object Interface
 *
 * @export
 * @interface IObject
 */
export interface IObject {
  /**
   * Utilities for controlling how a replaced element's content should be resized
   *
   * @type {TObjectFit}
   * @memberof IObject
   */
  objectFit?: TObjectFit;
  /**
   * Utilities for controlling how a replaced element's content should be
   * positioned within its container
   *
   * @type {TObjectPosition}
   * @memberof IObject
   */
  objectPosition?: TObjectPosition;
}

export default IObject;
