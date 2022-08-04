import { IPropDefines } from "../global";

/**
 * Converts hex color value to Rgb or Rgba if alpha is provided
 * Source: https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
 *
 *
 * @param {string} hex
 * @param {number} [alpha]
 * @return {*}  {string}
 */
export const hexToRgba: Function = (hex: string, alpha?: number): string => {
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    const r: number = parseInt(hex.slice(1, 3), 16),
      g: number = parseInt(hex.slice(3, 5), 16),
      b: number = parseInt(hex.slice(5, 7), 16);

    return alpha
      ? "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")"
      : "rgb(" + r + ", " + g + ", " + b + ")";
  } else throw new Error("Bad Hex");
};

/**
 *
 *
 * @param {(string | Array<string>)} keys
 * @param {IPropDefines} obj
 * @return {*}  {IPropDefines}
 */
export const pickPropDefines: Function = (
  keys: string | Array<string>,
  obj: IPropDefines
): IPropDefines => {
  const objClone: IPropDefines = { ...obj };
  const key: string | null = typeof keys === "string" ? keys : null;
  let newObj: IPropDefines = { type: {}, default: {}, argType: {} };

  if (key) {
    newObj = {
      type: { [key]: objClone.type[key] },
      default: { [key]: objClone.default[key] },
      argType: { [key]: objClone.argType[key] },
    };
  } else if (Array.isArray(keys)) {
    let property: keyof IPropDefines;
    for (property in objClone) {
      keys.forEach((item) => {
        newObj[property][item] = objClone[property][item];
      });
    }
  }

  return newObj;
};

/**
 * Converts rem values to pixels
 *
 * @param {string} rem
 * @return {*}  {number}
 */
export const remToPixels: Function = (rem: string): number => {
  const numRem: number = parseInt(removePastCharacter(rem, "rem"));
  return numRem * 16;
};

/**
 * Formats numbers greater than 1000 to single digits in k with returns in
 *
 * @param {number} num
 * @return {*}  {string}
 */
export const kFormatter: Function = (num: number): string => {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : (Math.sign(num) * Math.abs(num)).toString();
};
/**
 * Trims string to length
 *
 * @param {string} str
 * @param {number} length
 * @return {*}  {string}
 */
export const trimString: Function = (str: string, length: number): string => {
  return str.length > length ? str.substring(0, length - 3) + "..." : str;
};

/**
 * Structures component props to storybook argTypes
 *
 * @param {Record<string, any>} props
 * @return {*}  {Record<string, any>}
 */
export const propToArgTypes: Function = (
  props: Record<string, any>
): Record<string, any> => {
  let obj: Record<string, any> = {};

  Object.keys(props).forEach((item) => {
    const itemVal = props[item];

    if (Array.isArray(itemVal)) {
      obj[item] = {
        options: itemVal,
        control: { type: itemVal.length > 3 ? "select" : "radio" },
      };
    } else {
      obj[item] = {
        control: { type: itemVal },
      };
    }
  });

  return obj;
};

/**
 * Removes props with empty values, to avoid rendering on components
 *
 * @param {Record<string, any>} props
 * @return {*}  {(Record<string, any> | null)}
 */
export const purgeEmptyProps: Function = (
  props: Record<string, any>
): Record<string, any> | null => {
  let attr: Record<string, any> = new Object();

  if (Object.keys(props).length) {
    Object.keys(props).forEach((item: string) => {
      const val: any = props[item];
      if (val) attr[item] = val;
      // let isVal: boolean = false;
      // if (typeof val === 'string' && val.length) isVal = true;
      // else if (isArray(val) && val.length) attr[item] = val;
      // else if (val)
      // attr[item] = val;
    });
  } else return null;
  return attr;
};

/**
 * @function commaToSpace
 * @description converts commas in string to space
 * @param {string} [str = ''] - string value -- Default: ''
 * @returns {string} removed comma and replaced by space
 */
export const commaToSpace = (str = "") => str.replace(/[, ]+/g, " ").trim();

/**
 * @function removeMultipleSpaces
 * @description removes multiple spaces in a string
 * @param {string} [str = ''] - string value -- Default: ''
 * @returns {string} removed spaces in string
 */
export const removeMultipleSpaces = (str = "") =>
  str.replace(/ +(?= )/g, "").trim();

export const joinFullName = (firstName = "", lastName = "") =>
  `${firstName} ${lastName}`;

export const splitFullName = (str = "") => {
  const splitName = {
    firstName: "",
    lastName: "",
  };

  if (str.indexOf(" ") >= 0) {
    splitName.firstName = str.substr(0, str.indexOf(" "));
    splitName.lastName = str.substr(str.indexOf(" ") + 1);
  } else {
    splitName.firstName = str;
  }

  return splitName;
};

/**
 *
 *
 * @param {string} str
 * @return {*}  {string}
 */
export const capitalize: Function = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Removes the portion of a string past a given character
 *
 * @param {string} str
 * @param {string} character(s)
 * @return {*}  {string}
 */
export const removePastCharacter: Function = (
  str: string,
  characters: string
): string => str.substring(0, str.indexOf(characters));

/**
 * Get the last portions of a string past a character, whilst omitting the character
 *
 * @param {string} str
 * @param {string} character(s)
 * @return {*}  {string}
 */
export const getPastCharacter: Function = (
  str: string,
  characters: string
): string => str.split(characters)[1];
