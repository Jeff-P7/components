import ITransitions from './transitions';
import {
  TTransitions,
  AnimationTypes,
  TransitionDelayTypes,
  TransitionDurationTypes,
  TransitionPropertyTypes,
  TransitionTimingFunctionTypes,
} from './transitions.types';

/**
 * Types
 */
type TTransitionsFunction = (transition: TTransitions) => string;

/**
 * Error message if Transitions value is incorrect
 *
 * @param {string} val
 * @return {*}  {string}
 */
const messageError: Function = (val: string): string =>
  `Transitions value ${val} is incorrect`;

/**
 * Validates if Transitions is correct
 *
 * @param {string} val
 * @return {*}  {boolean}
 */
const isTransitionsValid: Function = (
  val: string,
  propTypes: Array<string>
): boolean => {
  if (val && !propTypes.includes(val)) throw Error(messageError(val));
  else if (val && propTypes.includes(val)) return true;
  else return false;
};

/**
 * Transitions property type dictionary
 */
const TransitionsTypesDict: Record<keyof ITransitions, any> = {
  animation: { style: 'animation', types: AnimationTypes },
  transitionDelay: { style: 'delay', types: TransitionDelayTypes },
  transitionDuration: { style: 'duration', types: TransitionDurationTypes },
  transitionProperty: { style: 'transition', types: TransitionPropertyTypes },
  transitionTimingFunction: {
    style: 'ease',
    types: TransitionTimingFunctionTypes,
  },
};

/**
 * Converts Transitions property value into a class
 *
 * @param {TTransitions} Transitions
 * @param {keyof ITransitions} TransitionsPropType
 * @return {*}  {string}
 */
const transitionsToClassFunction: Function = (
  transition: TTransitions,
  transitionPropType: keyof ITransitions
): string => {
  const propType: Record<string, any> =
    TransitionsTypesDict[transitionPropType];
  if (isTransitionsValid(transition, propType.types)) {
    const propStyle: string = propType.style;
    return propStyle === 'transition' && transition === 'default'
      ? 'transition'
      : propStyle + '-' + transition;
  } else return '';
};

export const animationToClass: TTransitionsFunction = (transition) =>
  transitionsToClassFunction(transition, 'animation');

export const transitionDelayToClass: TTransitionsFunction = (transition) =>
  transitionsToClassFunction(transition, 'transitionDelay');

export const transitionDurationToClass: TTransitionsFunction = (transition) =>
  transitionsToClassFunction(transition, 'transitionDuration');

export const transitionPropertyToClass: TTransitionsFunction = (transition) =>
  transitionsToClassFunction(transition, 'transitionProperty');

export const transitionTimingFunctionToClass: TTransitionsFunction = (
  transition
) => transitionsToClassFunction(transition, 'transitionTimingFunction');
