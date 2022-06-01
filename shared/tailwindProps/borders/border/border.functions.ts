import IBorder from './border';
import {
  TBorder,
  BorderColorTypes,
  BorderOpacityTypes,
  BorderRadiusTypes,
  BorderStyleTypes,
  BorderWidthTypes,
} from './border.types';

/**
 * Types
 */
type TBorderFunction = (border: TBorder) => string;

/**
 * Error message if Border value is incorrect
 *
 * @param {string} val
 * @return {*}  {string}
 */
const borderMessageError: Function = (val: string): string =>
  `Border value ${val} is incorrect`;

/**
 * Validates if Border is correct
 *
 * @param {string} val
 * @return {*}  {boolean}
 */
const isBorderValid: Function = (
  val: string,
  propTypes: Array<string | number>
): boolean => {
  if (val && !propTypes.includes(val)) throw Error(borderMessageError(val));
  else if (val && propTypes.includes(val)) return true;
  else return false;
};

/**
 * Border property types dictionary
 */
const BorderTypesDict: Record<keyof IBorder, any> = {
  borderColor: { style: '', types: BorderColorTypes },
  borderOpacity: { style: 'opacity', types: BorderOpacityTypes },
  borderRadius: { style: 'rounded', types: BorderRadiusTypes },
  borderStyle: { style: '', types: BorderStyleTypes },
  borderWidth: { style: '', types: BorderWidthTypes },
};

/**
 * Converts Border property value into a class
 *
 * @param {TBorder} Border
 * @param {keyof IBorder} BorderPropType
 * @return {*}  {string}
 */
const borderToClassFunction: Function = (
  border: TBorder,
  borderPropType: keyof IBorder
): string => {
  const propType: Record<string, any> = BorderTypesDict[borderPropType];
  const propStyle: string = propType.style;
  if (isBorderValid(border, propType.types)) {
    if (propStyle === 'rounded' && border === 'default') return 'rounded';
    else if (propStyle === 'rounded') return 'rounded-' + border;
    else if (propStyle === 'opacity') return 'border-opacity-' + border;
    else if (borderPropType === 'borderWidth' && border === 'default') return 'border';
    else return 'border-' + border;
  } else return '';
};

export const borderRadiusToClass: TBorderFunction = (border) =>
  borderToClassFunction(border, 'borderRadius');

export const borderWidthToClass: TBorderFunction = (border) =>
  borderToClassFunction(border, 'borderWidth');

export const borderStyleToClass: TBorderFunction = (border) =>
  borderToClassFunction(border, 'borderStyle');

export { borderColorToClass } from '../../color';
export { borderOpacityToClass } from '../../opacity';
