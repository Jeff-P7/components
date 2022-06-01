import IBox from './box';
import { TBox, BoxDecorationBreakTypes, BoxSizingTypes } from './box.types';
import { isPropValid } from '../../shared';

/**
 * Types
 */
type TBoxFunction = (box: TBox) => string;

/**
 * Error message if Box value is incorrect
 *
 * @param {string} val
 * @return {*}  {string}
 */
const errorMessage: Function = (val: string): string =>
  `Box value ${val} is incorrect`;

/**
 * Box property type dictionary
 */
const BoxTypesDict: Record<keyof IBox, any> = {
  boxDecorationBreak: { style: 'decoration', types: BoxDecorationBreakTypes },
  boxSizing: { style: 'Box', types: BoxSizingTypes },
};

/**
 * Converts Box property value into a class
 *
 * @param {TBox} Box
 * @param {keyof IBox} BoxPropType
 * @return {*}  {string}
 */
const boxToClassFunction: Function = (
  box: TBox,
  boxPropType: keyof IBox
): string => {
  const propType: Record<string, any> = BoxTypesDict[boxPropType];
  const propTypes: Array<string> = propType.types;
  const isBoxValid: boolean = isPropValid(box, propTypes, errorMessage);
  return isBoxValid ? propType.style + '-' + box : '';
};

export const boxDecorationBreakToClass: TBoxFunction = (box) =>
  boxToClassFunction(box, 'boxDecorationBreak');

export const boxSizingToClass: TBoxFunction = (box) =>
  boxToClassFunction(box, 'boxSizing');
