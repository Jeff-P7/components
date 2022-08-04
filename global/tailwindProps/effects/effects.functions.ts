import IEffects from './effects';
import { TEffects, BoxShadowTypes } from './effects.types';

/**
 * Types
 */
type TEffectsFunction = (effect: TEffects) => string;

/**
 * Error message if Effects value is incorrect
 *
 * @param {string} val
 * @return {*}  {string}
 */
const effectsMessageError: Function = (val: string): string =>
  `Effects value ${val} is incorrect`;

/**
 * Validates if Effects is correct
 *
 * @param {string} val
 * @return {*}  {boolean}
 */
const isEffectsValid: Function = (
  val: string,
  propTypes: Array<string>
): boolean => {
  if (val && !propTypes.includes(val)) throw Error(effectsMessageError(val));
  else if (val && propTypes.includes(val)) return true;
  else return false;
};

/**
 * Effects property type dictionary
 */
const EffectsTypesDict: Record<keyof IEffects, any> = {
  backgroundBlendMode: {},
  boxShadow: { style: 'shadow', types: BoxShadowTypes },
  mixBlendMode: {},
  opacity: {},
};

/**
 * Converts Effects property value into a class
 *
 * @param {TEffects} Effects
 * @param {keyof IEffects} EffectsPropType
 * @return {*}  {string}
 */
const effectsToClassFunction: Function = (
  effect: TEffects,
  effectPropType: keyof IEffects
): string => {
  const propType: Record<string, any> = EffectsTypesDict[effectPropType];
  if (isEffectsValid(effect, propType.types)) {
    const propStyle: string = propType.style;
    return propStyle === 'shadow' && effect === 'default'
      ? 'shadow'
      : propStyle + '-' + effect;
  } else return '';
};

export const boxShadowToClass: TEffectsFunction = (effect) =>
  effectsToClassFunction(effect, 'boxShadow');
