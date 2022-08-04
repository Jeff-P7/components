import ISizing from './sizing';
import {
  TSizing,
  HeightTypes,
  MaxHeightTypes,
  MaxWidthTypes,
  MinHeightTypes,
  MinWidthTypes,
  WidthTypes,
} from './sizing.types';

/**
 * Types
 */
type TSizingFunction = (sizing: TSizing) => string;

/**
 * Error message if Sizing value is incorrect
 *
 * @param {string} val
 * @return {*}  {string}
 */
const sizingMessageError: Function = (val: string): string =>
  `Sizing value ${val} is incorrect`;

/**
 * Validates if Sizing is correct
 *
 * @param {string} val
 * @return {*}  {boolean}
 */
const isSizingValid: Function = (
  val: string,
  propTypes: Array<string | number>
): boolean => {
  if (val && !propTypes.includes(val)) throw Error(sizingMessageError(val));
  else if (val && propTypes.includes(val)) return true;
  else return false;
};

/**
 * Sizing property types dictionary
 */
const SizingTypesDict: Record<keyof ISizing, any> = {
  height: { style: 'h', types: HeightTypes },
  maxHeight: { style: 'max-h', types: MaxHeightTypes },
  maxWidth: { style: 'max-w', types: MaxWidthTypes },
  minHeight: { style: 'min-h', types: MinHeightTypes },
  minWidth: { style: 'min-w', types: MinWidthTypes },
  width: { style: 'w', types: WidthTypes },
};

/**
 * Converts Sizing property value into a class
 *
 * @param {TSizing} Sizing
 * @param {keyof ISizing} SizingPropType
 * @return {*}  {string}
 */
const sizingToClassFunction: Function = (
  sizing: TSizing,
  sizingPropType: keyof ISizing
): string => {
  const propType: Record<string, any> = SizingTypesDict[sizingPropType];
  return isSizingValid(sizing, propType.types) ? propType.style + '-'+ sizing : '';
};

export const heightToClass: TSizingFunction = (sizing) =>
  sizingToClassFunction(sizing, 'height');

export const maxHeightToClass: TSizingFunction = (sizing) =>
  sizingToClassFunction(sizing, 'maxHeight');

export const maxWidthToClass: TSizingFunction = (sizing) =>
  sizingToClassFunction(sizing, 'maxWidth');

export const minHeightToClass: TSizingFunction = (sizing) =>
  sizingToClassFunction(sizing, 'minHeight');

export const minWidthToClass: TSizingFunction = (sizing) =>
  sizingToClassFunction(sizing, 'minWidth');

export const widthToClass: TSizingFunction = (sizing) =>
  sizingToClassFunction(sizing, 'width');
