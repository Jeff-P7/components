import ILayout from './layout';
import { isPropValid } from '../shared';
import {
  TLayout,
  ClearTypes,
  ContainerTypes,
  DisplayTypes,
  FloatsTypes,
  IsolationTypes,
  OverflowTypes,
  OverscrollTypes,
  PositionTypes,
  VisibilityTypes,
  ZIndexTypes,
} from './layout.types';

/**
 * Types
 */
type TLayoutFunction = (Layout: TLayout) => string;

/**
 * Error message if Layout value is incorrect
 *
 * @param {string} val
 * @return {*}  {string}
 */
const errorMsg: Function = (val: string): string =>
  `Layout value ${val} is incorrect`;

/**
 * Layout property type dictionary
 */
const LayoutTypesDict: Record<keyof ILayout, any> = {
  clear: { style: 'clear', types: ClearTypes },
  container: { style: '', types: ContainerTypes },
  display: { style: '', types: DisplayTypes },
  floats: { style: 'float', types: FloatsTypes },
  isolation: { style: '', types: IsolationTypes },
  overflow: { style: 'overflow', types: OverflowTypes },
  overscroll: { style: 'overscroll', types: OverscrollTypes },
  position: { style: '', types: PositionTypes },
  visibility: { style: '', types: VisibilityTypes },
  zIndex: { style: 'z', types: ZIndexTypes },
};

/**
 * Converts Layout property value into a class
 *
 * @param {TLayout} Layout
 * @param {keyof ILayout} LayoutPropType
 * @return {*}  {string}
 */
const layoutToClassFunction: Function = (
  layout: TLayout,
  layoutPropType: keyof ILayout
): string => {
  const propType: Record<string, any> = LayoutTypesDict[layoutPropType];
  const isLayoutValid: boolean = isPropValid(layout, propType.types, errorMsg);
  if (isLayoutValid) {
    const propStyle: string = propType.style;
    return propStyle ? propStyle + '-' + layout : propStyle;
  } else return '';
};

export const clearToClass: TLayoutFunction = (layout) =>
  layoutToClassFunction(layout, 'clear');

export const containerToClass: TLayoutFunction = (layout) =>
  layoutToClassFunction(layout, 'container');

export const displayToClass: TLayoutFunction = (layout) =>
  layoutToClassFunction(layout, 'display');

export const floatsToClass: TLayoutFunction = (layout) =>
  layoutToClassFunction(layout, 'floats');

export const isolationToClass: TLayoutFunction = (layout) =>
  layoutToClassFunction(layout, 'isolation');

export const overflowToClass: TLayoutFunction = (layout) =>
  layoutToClassFunction(layout, 'overflow');

export const overscrollToClass: TLayoutFunction = (layout) =>
  layoutToClassFunction(layout, 'overscroll');

export const positionToClass: TLayoutFunction = (layout) =>
  layoutToClassFunction(layout, 'position');

export const visibilityToClass: TLayoutFunction = (layout) =>
  layoutToClassFunction(layout, 'visibility');

export const zIndexToClass: TLayoutFunction = (layout) =>
  layoutToClassFunction(layout, 'zIndex');
