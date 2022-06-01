import IFont from './font';
import {
  FontFamilyTypes,
  FontSizeTypes,
  FontSmoothingTypes,
  FontStyleTypes,
  FontTypes,
  FontVariantNumericTypes,
  FontWeightTypes,
  TFont,
  TFontFamily,
  TFontSize,
  TFontSmoothing,
  TFontStyle,
  TFontVariantNumeric,
  TFontWeight,
} from './font.types';

/**
 * Types
 */
type TFontFunction = (font: TFont) => string;

/**
 * Error message if Font value is incorrect
 *
 * @param {string} val
 * @return {*}  {string}
 */
const fontMessageError: Function = (val: string): string =>
  `Font value ${val} is incorrect`;

/**
 * Validates if Font is correct
 *
 * @param {string} val
 * @return {*}  {boolean}
 */
const isFontValid: Function = (
  val: string,
  propTypes: Array<string>
): boolean => {
  if (val && !propTypes.includes(val)) throw Error(fontMessageError(val));
  else if (val && propTypes.includes(val)) return true;
  else return false;
};

/**
 * Font property type class style dictionary
 */
const FontTypesDict: Record<keyof IFont, any> = {
  fontFamily: { style: 'font', types: FontFamilyTypes },
  fontSize: { style: 'text', types: FontSizeTypes },
  fontSmoothing: { style: '', types: FontSmoothingTypes },
  fontStyle: { style: '', types: FontStyleTypes },
  fontVariantNumeric: { style: '', types: FontVariantNumericTypes },
  fontWeight: { style: 'font', types: FontWeightTypes },
};

/**
 * Converts Font property value into a class
 *
 * @param {TFont} Font
 * @param {keyof IFont} FontPropType
 * @return {*}  {string}
 */
const fontToClassFunction: Function = (
  font: TFont,
  fontPropType: keyof IFont
): string => {
  const propType: Record<string, any> = FontTypesDict[fontPropType];
  if (isFontValid(font, propType.types)) {
    const fontStyle: string = propType.style;
    return fontStyle ? fontStyle + '-' + font : font;
  } else return '';
};

export const fontFamilyToClass: TFontFunction = (font) =>
  fontToClassFunction(font, 'fontFamily');

export const fontSizeToClass: TFontFunction = (font) =>
  fontToClassFunction(font, 'fontSize');

export const fontSmoothingToClass: TFontFunction = (font) =>
  fontToClassFunction(font, 'fontSmoothing');

export const fontStyleToClass: TFontFunction = (font) =>
  fontToClassFunction(font, 'fontStyle');

export const fontVariantNumericToClass: TFontFunction = (font) =>
  fontToClassFunction(font, 'fontVariantNumeric');

export const fontWeightToClass: TFontFunction = (font) =>
  fontToClassFunction(font, 'fontWeight');
