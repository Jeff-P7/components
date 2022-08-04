import IDivide from './divide';
import {
  TDivide,
  DivideTypes,
  DivideColorTypes,
  DivideOpacityTypes,
  DivideStyleTypes,
  DivideWidthTypes,
} from './divide.types';

/**
 * Types
 */
type TDivideFunction = (Divide: TDivide) => string;

/**
 * Error message if Divide value is incorrect
 *
 * @param {string} val
 * @return {*}  {string}
 */
const divideMessageError: Function = (val: string): string =>
  `Divide value ${val} is incorrect`;

/**
 * Validates if Divide is correct
 *
 * @param {string} val
 * @return {*}  {boolean}
 */
const isDivideValid: Function = (
  val: string,
  propTypes: Array<string | number>
): boolean => {
  if (val && !propTypes.includes(val)) throw Error(divideMessageError(val));
  else if (val && propTypes.includes(val)) return true;
  else return false;
};

/**
 * Divide property types dictionary
 */
const DivideTypesDict: Record<keyof IDivide, any> = {
  divideColor: { style: '', types: DivideColorTypes },
  divideOpacity: { style: 'opacity', types: DivideOpacityTypes },
  divideStyle: { style: '', types: DivideStyleTypes },
  divideWidth: { style: '', types: DivideWidthTypes },
};

/**
 * Converts Divide property value into a class
 *
 * @param {TDivide} Divide
 * @param {keyof IDivide} DividePropType
 * @return {*}  {string}
 */
const divideToClassFunction: Function = (
  divide: TDivide,
  dividePropType: keyof IDivide
): string => {
  const propType: Record<string, any> = DivideTypesDict[dividePropType];
  if (isDivideValid(divide, propType.types)) {
    return propType.style === 'opacity'
      ? 'divide-opacity-' + divide
      : 'divide-' + divide;
  } else return '';
};

export const DivideWidthToClass: TDivideFunction = (divide) =>
  divideToClassFunction(divide, 'divideWidth');

export const DivideStyleToClass: TDivideFunction = (divide) =>
  divideToClassFunction(divide, 'divideStyle');

export { divideColorToClass } from '../../color';
export { divideOpacityToClass } from '../../opacity';
