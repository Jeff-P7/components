import IObject from './object';
import { TObject, ObjectFitTypes, ObjectPositionTypes } from './object.types';
import { isPropValid } from '../../shared';

/**
 * Types
 */
type TObjectFunction = (Object: TObject) => string;

/**
 * Error message if Object value is incorrect
 *
 * @param {string} val
 * @return {*}  {string}
 */
const errorMessage: Function = (val: string): string =>
  `Object value ${val} is incorrect`;

/**
 * Object property type dictionary
 */
const ObjectTypesDict: Record<keyof IObject, any> = {
  objectFit: { style: 'object', types: ObjectFitTypes },
  objectPosition: { style: 'object', types: ObjectPositionTypes },
};

/**
 * Converts Object property value into a class
 *
 * @param {TObject} Object
 * @param {keyof IObject} ObjectPropType
 * @return {*}  {string}
 */
const objectToClassFunction: Function = (
  object: TObject,
  objectPropType: keyof IObject
): string => {
  const propType: Record<string, any> = ObjectTypesDict[objectPropType];
  const propTypes: Array<string> = propType.types;
  const isObjectValid: boolean = isPropValid(object, propTypes, errorMessage);
  return isObjectValid ? propType.style + '-' + object : '';
};

export const objectFitToClass: TObjectFunction = (object) =>
  objectToClassFunction(object, 'objectFit');

export const objectPositionToClass: TObjectFunction = (object) =>
  objectToClassFunction(object, 'objectPosition');
