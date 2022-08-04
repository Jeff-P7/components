import ISpacing from './spacing';
import { TSpacing, SpacingTypes } from './spacing.types';

/**
 * Types
 */
type TSpacingFunction = (spacing: TSpacing) => string;

/**
 * Error message if Spacing value is incorrect
 *
 * @param {string} val
 * @return {*}  {string}
 */
const SpacingMessageError: Function = (val: string): string =>
  `Spacing value ${val} is incorrect`;

/**
 * Validates if Spacing is correct
 *
 * @param {string} val
 * @return {*}  {boolean}
 */
const isSpacingValid: Function = (val: string): boolean => {
  if (!SpacingTypes.includes(val)) {
    debugger
    throw new Error(SpacingMessageError(val));
  } else return true;
};

/**
 * Spacing property type class style dictionary
 */
const SpacingStyleDict: Record<keyof ISpacing, string> = {
  margin: 'm',
  padding: 'p',
};

/**
 * Converts Spacing property value into a class
 *
 * @param {TSpacing} spacing
 * @param {keyof ISpacing} spacingPropType
 * @return {*}  {string}
 */
const spacingToClassFunction: Function = (
  spacing: TSpacing,
  spacingPropType: keyof ISpacing
): string => {
  if (isSpacingValid(spacing)) {
    const spacingStyle: string = SpacingStyleDict[spacingPropType];
    return spacing.toString().includes('-')
      ? spacingStyle + spacing
      : spacingStyle + '-' + spacing;
  } else return '';
};

// export const marginToClass: TSpacingFunction = (spacing) =>
//   spacingToClassFunction(spacing, 'margin');

// export const paddingToClass: TSpacingFunction = (spacing) =>
//   spacingToClassFunction(spacing, 'padding');
