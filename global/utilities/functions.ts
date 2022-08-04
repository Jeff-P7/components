// import { removePastCharacter } from '../../../utilities/utilities';
import { isArray } from "cypress/types/lodash";

/**
 * Calculates whether font should be white or black depending on the background
 * Source: https://newbedev.com/how-to-decide-font-color-in-white-or-black-depending-on-background-color
 *
 * @param {string} bgColor
 * @param {string} [lightColor='#FFF']
 * @param {string} [darkColor='#000']
 * @return {*}  {string}
 */
export const fontColorBasedOnBgColor: Function = (
  bgColor: string,
  lightColor: string = "#FFF",
  darkColor: string = "#000"
): string => {
  const color: string =
    bgColor.charAt(0) === "#" ? bgColor.substring(1, 7) : bgColor;
  const r: number = parseInt(color.substring(0, 2), 16); // hexToR
  const g: number = parseInt(color.substring(2, 4), 16); // hexToG
  const b: number = parseInt(color.substring(4, 6), 16); // hexToB
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? darkColor : lightColor;
};

/**
 * Omits a key(s) property from object
 *
 * @param {(string | Array<string>)} keys
 * @param {Record<string, any>} obj
 * @return {*}  {Record<string, any>}
 */
export const omitProps: Function = (
  keys: string | Array<string>,
  obj: Record<string, any>
): Record<string, any> => {
  const key: string | null = typeof keys === "string" ? keys : null;
  let newObj: Record<string, any> = { ...obj };

  if (key) delete newObj[key];
  else if (Array.isArray(keys)) {
    keys.forEach((item) => {
      delete newObj[item];
    });
  }

  return newObj;
};

/**
 * Picks a key(s) property from object
 *
 * @param {(string | Array<string>)} keys
 * @param {Record<string, any>} obj
 * @return {*}  {Record<string, any>}
 */
export const pickProps: Function = (
  keys: string | Array<string>,
  obj: Record<string, any>
): Record<string, any> => {
  const key: string | null = typeof keys === "string" ? keys : null;
  let newObj: Record<string, any> = {};

  if (key) newObj[key] = obj[key];
  else if (Array.isArray(keys)) {
    keys.forEach((item) => {
      newObj[item] = obj[item];
    });
  }

  return newObj;
};

/**
 * Converts hex color value to Rgba
 * Source: https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
 *
 * @param {string} hex
 * @return {*}  {string}
 */
// export const hexToRgba: Function = (hex: string): string => {
//   let c: string | Array<string> | any;
//   if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
//     c = hex.substring(1).split('');
//     if (c.length === 3) c = [c[0], c[0], c[1], c[1], c[2], c[2]];
//     c = '0x' + c.join('');

//     return (
//       'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',1)'
//     );
//   }
//   throw new Error('Bad Hex');
// };

/**
 * Random number generator with range limit
 *
 * @param {number} range
 * @return {*}  {number}
 */
export const randomNumber: Function = (range: number): number => {
  //NOSONAR
  return Math.floor(Math.random() * range);
};

/**
 * @function arrayGen
 * @desc Creates a given amount of array elements from min to max, with the option of gaping steps
 * @param {number} start - starting index location on the range
 * @param {number} stop - stopping index location on the range
 * @param {number} step - amount of steps per next index
 * @example arrayGen(0, 10, 1) => [1...10]
 * @returns {array} a range of array
 */
export const arrayGen: Function = (
  start: number,
  stop: number,
  step: number
): number[] =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

/**
 * Converts text to slug
 *
 * @param {string} text
 * @return {*}  {string}
 */
export const textToSlug: Function = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

/**
 * Converts slug to text
 *
 * @param {string} slug
 * @return {*}  {string}
 */
export const slugToText: Function = (slug: string): string => {
  return slug.replace(/_/g, " ");
};

/**
 * @function placeholder
 * @desc Creates a link from placeholder.it for placeholder images
 * @param {number} [overallSizeORWidth = 150] - one equal sized squared or width -- Default: 150
 * @param {number} height - height of square
 * @example placeholder(300, 400) returns https://via.placeholder.com/300x400
 * @returns {string} a placeholder.it link
 */
export const placeholder = (overallSizeORWidth = 150, height: number) => {
  const site = "https://via.placeholder.com/";

  return height
    ? `${site}${overallSizeORWidth}x${height}`
    : site + overallSizeORWidth.toString();
};

export const validateEmail = (email: string): boolean => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// export const timeStamp = (): string => {
//   const today = new Date();
//   return today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
// };

export const timeStamp = (): string => {
  const d = new Date();
  return d.toLocaleString([], { hour12: true });
  // const today = new Date();
  // return today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
};

/**
 * Counts the amount of times a character is present in a string
 *
 * @param {string} str
 * @param {string} character
 * @return {*}  {number}
 */
export const countNumOfCharacter: Function = (
  str: string,
  character: string
): number => {
  const val: number = (str.match(new RegExp(character, "g")) || []).length;
  return val;
};

// Pending
// const removeCharacter: Function = (str: string, character: string): string => {
//   return str.replace(character);
// };
