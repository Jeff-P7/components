import ITypography from './typography';
import {
  LetterSpacingTypes,
  LineHeightTypes,
  TTypography,
  TypographyTypes,
  VerticalAlignmentTypes,
  WhitespaceTypes,
  WordBreakTypes,
} from './typography.types';

/**
 * Types
 */
type TTypographyFunction = (Typography: TTypography) => string;

/**
 * Error message if Typography value is incorrect
 *
 * @param {string} val
 * @return {*}  {string}
 */
const typographyMessageError: Function = (val: string): string =>
  `Typography value ${val} is incorrect`;

/**
 * Validates if Typography is correct
 *
 * @param {string} val
 * @return {*}  {boolean}
 */
const isTypographyValid: Function = (
  val: string,
  propTypes: Array<string | number>
): boolean => {
  if (val && !propTypes.includes(val)) throw Error(typographyMessageError(val));
  else if (val && propTypes.includes(val)) return true;
  else return false;
};

/**
 * Typography property type class style dictionary
 */
const TypographyTypesDict: Record<string, any> = {
  letterSpacing: { style: 'tracking', types: LetterSpacingTypes },
  lineHeight: { style: 'leading', types: LineHeightTypes },
  verticalAlign: { style: 'align', types: VerticalAlignmentTypes },
  whitespace: { style: 'whitespace', types: WhitespaceTypes },
  wordBreak: { style: 'break', types: WordBreakTypes },
};

/**
 * Converts Typography property value into a class
 *
 * @param {TTypography} Typography
 * @param {keyof ITypography} TypographyPropType
 * @return {*}  {string}
 */
const typographyToClassFunction: Function = (
  typography: TTypography,
  typographyPropType: keyof ITypography
): string => {
  if (typography === undefined) {
    debugger;
    throw Error('error');
  }
  const propType: Record<string, any> = TypographyTypesDict[typographyPropType];
  if (isTypographyValid(typography, propType.types)) {
    return propType.style.toString().includes('-')
      ? propType.style + typography
      : propType.style + '-' + typography;
  } else return '';
};

export const letterSpacingToClass: TTypographyFunction = (typography) =>
  typographyToClassFunction(typography, 'letterSpacing');

export const lineHeightToClass: TTypographyFunction = (typography) =>
  typographyToClassFunction(typography, 'lineHeight');

export const verticalAlignToClass: TTypographyFunction = (typography) =>
  typographyToClassFunction(typography, 'verticalAlign');

export const whitespaceToClass: TTypographyFunction = (typography) =>
  typographyToClassFunction(typography, 'whitespace');

export const wordBreakToClass: TTypographyFunction = (typography) =>
  typographyToClassFunction(typography, 'wordBreak');

// Sub props export functions --------------------------------------------------

export * from './font/font.functions';
export * from './listStyle/listStyle.functions';
export * from './placeholder/placeholder.functions';
export * from './text/text.functions';

// export {
//   fontFamilyToClass,
//   fontSizeToClass,
//   fontSmoothingToClass,
//   fontStyleToClass,
//   fontVariantNumericToClass,
//   fontWeightToClass,
// } from './font/font.functions';

// export { listStylePositionToClass, listStyleTypeToClass } from './listStyle';

// export { placeholderColorToClass } from '../color/color.functions';
// export { placeholderOpacityToClass } from '../opacity/opacity.functions';

// export { }
