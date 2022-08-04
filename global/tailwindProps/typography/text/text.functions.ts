import IText from './text';
import type { TText } from './text.types';
import {
  TextTypes,
  TextAlignTypes,
  TextColorTypes,
  TextDecorationTypes,
  TextOpacityTypes,
  TextOverflowTypes,
  TextTransformTypes,
} from './text.types';

/**
 * Types
 */
type TTextFunction = (text: TText) => string;

/**
 * Error message if Text value is incorrect
 *
 * @param {string} val
 * @return {*}  {string}
 */
const textMessageError: Function = (val: string): string =>
  `Text value ${val} is incorrect`;

/**
 * Validates if Text is correct
 *
 * @param {string} val
 * @return {*}  {boolean}
 */
const isTextValid: Function = (
  val: string,
  propTypes: Array<string>
): boolean => {
  if (val && !propTypes.includes(val)) throw Error(textMessageError(val));
  else if (val && propTypes.includes(val)) return true;
  else return false;
};

const TextTypesDict: Record<keyof IText, any> = {
  textAlign: { style: 'textAlign', types: TextAlignTypes },
  textColor: { style: '', types: TextColorTypes },
  textDecoration: { style: '', types: TextDecorationTypes },
  textOpacity: { style: '', types: TextOpacityTypes },
  textOverflow: { style: '', types: TextOverflowTypes },
  textTransform: { style: '', types: TextTransformTypes },
};

/**
 * Converts Text property value into a class
 *
 * @param {TText} Text
 * @param {keyof IText} TextPropType
 * @return {*}  {string}
 */
const textToClassFunction: Function = (
  text: TText,
  textPropType?: keyof IText
): string => {
  const propType: Record<string, any> = TextTypesDict[textPropType!];
  if (text === undefined || text === null) {
    debugger;
    debugger;
    debugger;
    throw new Error('wtfFFF');
  }
  if (isTextValid(text, propType.types)) {
    return propType.style ? 'text-' + text : text.toString();
  } else return '';
};

export const textAlignToClass: TTextFunction = (text) =>
  textToClassFunction(text, 'textAlign');

export const textDecorationToClass: TTextFunction = (text) =>
  textToClassFunction(text, 'textDecoration');

export const textOverflowToClass: TTextFunction = (text) =>
  textToClassFunction(text, 'textOverflow');

export const textTransformToClass: TTextFunction = (text) =>
  textToClassFunction(text, 'textTransform');

export { textColorToClass } from '../../color';
export { textOpacityToClass } from '../../opacity';
