import { IColor, TColor, ColorTypes } from './color';

/**
 * Types
 */
// type TTone = 'light' | 'dark';
type TColorFunction = (color: TColor) => string;

/**
 * Error message if color value is incorrect
 *
 * @param {string} colorValue
 * @return {*}  {string}
 */
const colorMessageError: Function = (colorValue: string): string =>
  `Color value ${colorValue} is incorrect`;

/**
 * Validates if color is correct
 *
 * @param {string} color
 * @return {*}  {boolean}
 */
const isColorValid: Function = (val: string): boolean => {
  if (val && !ColorTypes.includes(val)) throw Error(colorMessageError(val));
  else if (val && ColorTypes.includes(val)) return true;
  else return false;
};

/**
 * Sets the color tone to light or dark
 *
 * @param {TTone} tone
 * @param {string} preColor
 * @return {*}  {string}
 */
// const toneColor: Function = (tone: TTone, preColor: string): string => {
//   return tone === 'light'
//     ? preColor.concat('-light')
//     : preColor.concat('-dark');
// };

/**
 * Color property type class style dictionary
 */
const ColorPropTypeDict: Record<keyof IColor, any> = {
  backgroundColor: 'bg',
  borderColor: 'border',
  caretColor: 'caret',
  color: '',
  divideColor: 'divide',
  placeholderColor: 'placeholder',
  ringColor: 'ring',
  ringOffsetColor: 'ring-offset',
  textColor: 'text',
  // gradientColorStops: '',
};

/**
 * Converts color property value into a class
 *
 * @param {TColor} color
 * @param {keyof IColor} colorPropType
 * @param {('light' | 'dark')} [tone]
 * @return {*}  {string}
 */
const colorToClassFunction: Function = (
  color: TColor,
  colorPropType: keyof IColor
): string => {
  if (color) {
    const propStyle = ColorPropTypeDict[colorPropType];
    return propStyle ? propStyle + '-' + color : color;
  } else return '';
};

export const textColorToClass: TColorFunction = (color) =>
  colorToClassFunction(color, 'textColor');

export const backgroundColorToClass: TColorFunction = (color) =>
  colorToClassFunction(color, 'backgroundColor');

export const borderColorToClass: TColorFunction = (color) =>
  colorToClassFunction(color, 'borderColor');

export const caretColorToClass: TColorFunction = (color) =>
  colorToClassFunction(color, 'caretColor');

export const colorToClass: TColorFunction = (color) =>
  colorToClassFunction(color, 'color');

export const divideColorToClass: TColorFunction = (color) =>
  colorToClassFunction(color, 'divideColor');

export const placeholderColorToClass: TColorFunction = (color) =>
  colorToClassFunction(color, 'placeholderColor');

export const ringColorToClass: TColorFunction = (color) =>
  colorToClassFunction(color, 'ringColor');

export const ringOffsetColorToClass: TColorFunction = (color) =>
  colorToClassFunction(color, 'ringOffsetColor');

// export const gradientColorToClass: TColorFunction = (color) =>
//   colorToClassFunction(color, 'gradientColorStops');

/**
 * Converts text value into class of text
 *
 * @param {TColor} color
 * @return {*}  {string}
 */
// export const textColorToClass: TColorFunction = (color): string => {
//   if (isColorValid(color)) {
//     const preColor: string = `text-${color}`;
//     return tone ? toneColor(tone, preColor) : preColor;
//   } else return '';
// };

// export const backgroundColorToClass: TColorFunction = (color): string => {
//   if (isColorValid(color)) {
//     const preColor: string = `bg-${color}`;
//     return tone ? toneColor(tone, preColor) : preColor;
//   } else return '';
// };

// export const borderColorToClass: TColorFunction = (color): string => {
//   if (isColorValid(color)) {
//     const preColor: string = `border-${color}`;
//     return tone ? toneColor(tone, preColor) : preColor;
//   } else return '';
// };
