import {
  TClear,
  TContainer,
  TDisplay,
  TFloats,
  TIsolation,
  TOverflow,
  TOverscroll,
  TPosition,
  TVisibility,
  TZIndex,
} from './layout.types';
import IObject from './object';
import IBox from './box';

/**
 * Layout Interface
 *
 * @export
 * @interface ILayout
 * @extends {IObject}
 * @extends {IBox}
 */
export interface ILayout extends IObject, IBox {
  clear?: TClear;
  container?: TContainer;
  display?: TDisplay;
  floats?: TFloats;
  isolation?: TIsolation;
  overflow?: TOverflow;
  overscroll?: TOverscroll;
  position?: TPosition;
  visibility?: TVisibility;
  zIndex?: TZIndex;
}

export default ILayout;
