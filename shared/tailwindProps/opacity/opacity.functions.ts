import { IOpacity, TOpacity, OpacityTypes } from './opacity';

/**
 * Types
 */
// type TTone = 'light' | 'dark';
type TOpacityFunction = (opacity: TOpacity) => string;

/**
 * Error message if Opacity value is incorrect
 *
 * @param {string} OpacityValue
 * @return {*}  {string}
 */
const opacityMessageError: Function = (opacityValue: string): string =>
  `Opacity value ${opacityValue} is incorrect`;

/**
 * Validates if Opacity is correct
 *
 * @param {string} Opacity
 * @return {*}  {boolean}
 */
const isOpacityValid: Function = (val: number): boolean => {
  if (val && !OpacityTypes.includes(val)) throw Error(opacityMessageError(val));
  else if (val && OpacityTypes.includes(val)) return true;
  else return false;
};

/**
 * Opacity property type class style dictionary
 */
const OpacityStyleDict: Record<keyof IOpacity, any> = {
  backdropOpacity: 'backdrop',
  backgroundOpacity: 'bg',
  borderOpacity: 'border',
  divideOpacity: 'divide',
  opacity: 'opacity',
  placeholderOpacity: 'placeholder',
  ringOpacity: 'ring',
  textOpacity: 'text',
};

/**
 * Converts Opacity property value into a class
 *
 * @param {TOpacity} Opacity
 * @param {keyof IOpacity} OpacityPropType
 * @param {('light' | 'dark')} [tone]
 * @return {*}  {string}
 */
const opacityToClassFunction: Function = (
  opacity: TOpacity,
  opacityPropType: keyof IOpacity
): string => {
  if (opacity) {
    const opacityStyle: string = OpacityStyleDict[opacityPropType];
    return opacityStyle !== 'opacity'
      ? `${opacityStyle}-opacity-${opacity}`
      : `opacity-${opacity}`;
  } else return '';
};

export const backdropOpacityToClass: TOpacityFunction = (opacity) =>
  opacityToClassFunction(opacity, 'backdropOpacity');

export const backgroundOpacityToClass: TOpacityFunction = (opacity) =>
  opacityToClassFunction(opacity, 'backgroundOpacity');

export const borderOpacityToClass: TOpacityFunction = (opacity) =>
  opacityToClassFunction(opacity, 'borderOpacity');

export const divideOpacityToClass: TOpacityFunction = (opacity) =>
  opacityToClassFunction(opacity, 'divideOpacity');

export const opacityToClass: TOpacityFunction = (opacity) =>
  opacityToClassFunction(opacity, 'opacity');

export const placeholderOpacityToClass: TOpacityFunction = (opacity) =>
  opacityToClassFunction(opacity, 'placeholderOpacity');

export const ringOpacityToClass: TOpacityFunction = (opacity) =>
  opacityToClassFunction(opacity, 'ringOpacity');

export const textOpacityToClass: TOpacityFunction = (opacity) =>
  opacityToClassFunction(opacity, 'textOpacity');
