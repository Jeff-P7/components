import {
  TAppearance,
  TCursor,
  TOutline,
  TPointerEvents,
  TResize,
  TUserSelect,
} from './interactivity.types';

/**
 * Interactivity Interface
 *
 * @export
 * @interface IInteractivity
 */
export interface IInteractivity {
  /**
   * Utilities for suppressing native form control styling
   *
   * @type {TAppearance}
   * @memberof IInteractivity
   */
  appearance: TAppearance;
  /**
   * Utilities for controlling the cursor style when hovering over an element
   *
   * @type {TCursor}
   * @memberof IInteractivity
   */
  cursor: TCursor;
  /**
   * Utilities for controlling an element's outline
   *
   * @type {TOutline}
   * @memberof IInteractivity
   */
  outline: TOutline;
  /**
   * Utilities for controlling whether an element responds to pointer events
   *
   * @type {TPointerEvents}
   * @memberof IInteractivity
   */
  pointerEvents: TPointerEvents;
  /**
   * Utilities for controlling how an element can be resized
   *
   * @type {TResize}
   * @memberof IInteractivity
   */
  resize: TResize;
  /**
   * Utilities for controlling whether the user can select text in an element
   *
   * @type {TUserSelect}
   * @memberof IInteractivity
   */
  userSelect: TUserSelect;
}

export default IInteractivity;
