import type { TListStyle } from './listStyle.types';
import { ListStyleTypeTypes, ListStylePositionTypes } from './listStyle.types';
import IListStyle from './listStyle';

/**
 * Types
 */
type TListStyleFunction = (listStyle: TListStyle) => string;

/**
 * Error message if ListStyle value is incorrect
 *
 * @param {string} val
 * @return {*}  {string}
 */
const listStyleMessageError: Function = (
  val: string,
  propTypes: Array<string>
): string => `ListStyle value ${val} is incorrect`;

const ListStyleTypesDict: Record<keyof IListStyle, any> = {
  listStylePosition: { types: ListStylePositionTypes },
  listStyleType: { types: ListStyleTypeTypes },
};

/**
 * Validates if ListStyle is correct
 *
 * @param {string} val
 * @return {*}  {boolean}
 */
const isListStyleValid: Function = (
  val: string,
  propTypes: Array<string>
): boolean => {
  if (val && !propTypes.includes(val)) throw Error(listStyleMessageError(val));
  else if (val && propTypes.includes(val)) return true;
  else return false;
};

/**
 * Converts ListStyle property value into a class
 *
 * @param {TListStyle} listStyle
 * @return {*}  {string}
 */
const listStyleToClassFunction: Function = (
  listStyle: TListStyle,
  listPropType?: keyof IListStyle
): string => {
  const propType: Record<string, any> = ListStyleTypesDict[listPropType!];
  return isListStyleValid(listStyle, propType.types) ? 'list' + listStyle : '';
};

export const listStylePositionToClass: TListStyleFunction = (listStyle) =>
  listStyleToClassFunction(listStyle, 'listStylePosition');

export const listStyleTypeToClass: TListStyleFunction = (listStyle) =>
  listStyleToClassFunction(listStyle, 'listStyleType');
