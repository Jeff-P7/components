import { IPropDefines } from '../global';
import { removePastCharacter } from '../../../utilities/utilities';
import { isArray } from 'cypress/types/lodash';

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
        control: { type: itemVal.length > 3 ? 'select' : 'radio' },
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

// const isColorHex: Function = (str: string): boolean => {
//   return str.startsWith('#');
// }

/**
 * Converts a padding value to a class of padding
 *
 * @param {(string | number)} val
 * @return {*}  {string}
 */
// export const paddingToClass: Function = (val: string | number): string => {
//   return typeof val === 'number' ? `p-${val}` : `p${val}`;
// };

/**
 * Converts a margin value to a class of margin
 *
 * @param {(string | number)} val
 * @return {*}  {string}
 */
// export const marginToClass: Function = (val: string | number): string => {
//   return typeof val === 'number' ? `m-${val}` : `m${val}`;
// };

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
  lightColor: string = '#FFF',
  darkColor: string = '#000'
): string => {
  const color: string =
    bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor;
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
  const key: string | null = typeof keys === 'string' ? keys : null;
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
  const key: string | null = typeof keys === 'string' ? keys : null;
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
      ? 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')'
      : 'rgb(' + r + ', ' + g + ', ' + b + ')';
  } else throw new Error('Bad Hex');
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
  const key: string | null = typeof keys === 'string' ? keys : null;
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
  const numRem: number = parseInt(removePastCharacter(rem, 'rem'));
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
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
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
  return str.length > length ? str.substring(0, length - 3) + '...' : str;
};

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
 * @function range
 * @desc Creates a given amount of array elements from min to max, with the option of gaping steps
 * @param {number} start - starting index location on the range
 * @param {number} stop - stopping index location on the range
 * @param {number} step - amount of steps per next index
 * @example range(0, 10, 1) => [1...10]
 * @returns {array} a range of array
 */
export const range: Function = (
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
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
};

/**
 * Converts slug to text
 *
 * @param {string} slug
 * @return {*}  {string}
 */
export const slugToText: Function = (slug: string): string => {
  return slug.replace(/_/g, ' ');
};

//       // newObj!.type.push([item], objClone.type[item]);
//       // newObj!.default.push([item], objClone.default[item]);
//       // newObj!.argType.push([item], objClone.argType[item]);

//       // Object.assign(newObj, {
//       //   type: { [item]: objClone.type[item] },
//       //   default: { [item]: objClone.default[item] },
//       //   argType: { [item]: objClone.argType[item] },
//       // });

//   // for (const property in objClone) {
//   //   if (key) newObj![property][key] = objClone[property][key];
//   //   else if (Array.isArray(keys)) {
//   //     keys.forEach((item) => {
//   //       const val: any = objClone[property][item];
//   //       newObj![property][item] = val;
//   //     });
//   //   }
//   // }

//   // const dickObj: IPropDefines = { ...newObj! };

//   // let property: { [key in keyof IPropDefines]: any };
//   // for (property in obj) {
//   //   const type: { [key in keyof IPropDefines]: any } = obj[property];

//   //   if (key) newObj![type][key] = obj[property][key];
//   //   else if (Array.isArray(keys)) {
//   //     keys.forEach((item) => {
//   //       const val: any = Object.values(obj[property][item]);
//   //       newObj[property][item] = val;
//   //     });
//   //   }
//   // }

//   // return newObj!;
//   return newObj!;
// };

// export const omitProps: Function = (
//   keys: any,
//   obj: Record<string, any>
// ): Record<string, any> => {
//   if (!keys.length) return obj;
//   const { [keys.pop()]: omitted, ...rest } = obj;
//   return omitProps(keys, rest);
// };

// const unsplashImage: Function = (
//   category?: string,
//   height?: number,
//   width?: number
// ): string => {
//   const categoryList: Array<string> = ['random', 'profile', 'face'];

//   const link: string = 'https://source.unsplash.com/random';

//   return (height || width)
// };
