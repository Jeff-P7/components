import IInteractivity from './interactivity';
import {
  TInteractivity,
  AppearanceTypes,
  CursorTypes,
  OutlineTypes,
  PointerEventsTypes,
  ResizeTypes,
  UserSelectTypes,
} from './interactivity.types';
// import {
//   TInteractivity,
//   appearanceTypes,
//   cursorTypes,
//   outlineTypes,
//   pointerEventsTypes,
//   resizeTypes,
// } from './interactivity.types';

/**
 * Types
 */
type TInteractivityFunction = (interactivity: TInteractivity) => string;

/**
 * Error message if Interactivity value is incorrect
 *
 * @param {string} val
 * @return {*}  {string}
 */
const messageError: Function = (val: string): string =>
  `Interactivity value ${val} is incorrect`;

/**
 * Validates if Interactivity is correct
 *
 * @param {string} val
 * @return {*}  {boolean}
 */
const isInteractivityValid: Function = (
  val: string,
  propTypes: Array<string>
): boolean => {
  if (val && !propTypes.includes(val)) throw Error(messageError(val));
  else if (val && propTypes.includes(val)) return true;
  else return false;
};

/**
 * Interactivity property type dictionary
 */
const InteractivityTypesDict: Record<keyof IInteractivity, any> = {
  appearance: { style: 'appearance', types: AppearanceTypes },
  cursor: { style: 'cursor', types: CursorTypes },
  outline: { style: 'outline', types: OutlineTypes },
  pointerEvents: { style: 'pointer-events', types: PointerEventsTypes },
  resize: { style: 'resize', types: ResizeTypes },
  userSelect: { style: 'select', types: UserSelectTypes },
};

/**
 * Converts Interactivity property value into a class
 *
 * @param {TInteractivity} Interactivity
 * @param {keyof IInteractivity} InteractivityPropType
 * @return {*}  {string}
 */
const interactivityToClassFunction: Function = (
  interactivity: TInteractivity,
  interactivityPropType: keyof IInteractivity
): string => {
  const propType: Record<string, any> =
    InteractivityTypesDict[interactivityPropType];
  if (isInteractivityValid(interactivity, propType.types)) {
    const propStyle: string = propType.style;
    return propStyle === 'resize' && interactivity === 'default'
      ? 'resize'
      : propStyle + '-' + interactivity;
  } else return '';
};

export const appearanceToClass: TInteractivityFunction = (interactivity) =>
  interactivityToClassFunction(interactivity, 'appearance');

export const cursorToClass: TInteractivityFunction = (interactivity) =>
  interactivityToClassFunction(interactivity, 'cursor');

export const outlineToClass: TInteractivityFunction = (interactivity) =>
  interactivityToClassFunction(interactivity, 'outline');

export const pointerEventsToClass: TInteractivityFunction = (interactivity) =>
  interactivityToClassFunction(interactivity, 'pointerEvents');

export const resizeToClass: TInteractivityFunction = (interactivity) =>
  interactivityToClassFunction(interactivity, 'resize');

export const userSelectToClass: TInteractivityFunction = (interactivity) =>
  interactivityToClassFunction(interactivity, 'userSelect');
