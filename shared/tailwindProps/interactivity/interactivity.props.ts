import PropTypes from 'prop-types';
import { IInteractivity } from './interactivity';
import type { IPropDefines } from '../../global';
import {
  AppearanceTypes,
  CursorTypes,
  OutlineTypes,
  PointerEventsTypes,
  ResizeTypes,
  UserSelectTypes,
} from './interactivity.types';

/**
 * Props interface defines layout types
 *
 * @interface IProps
 * @extends {IPropDefines}
 */
interface IProps extends IPropDefines {
  type: { [key in keyof IInteractivity]: any };
  default: IInteractivity;
  argType: { [key in keyof IInteractivity]: any };
}

const { string, oneOf, oneOfType, number } = PropTypes;

/**
 * InterIInteractivity Props
 */
export const InterIInteractivityProps: IProps = {
  type: {
    appearance: oneOfType([string, oneOf(AppearanceTypes)]),
    cursor: oneOfType([string, oneOf(CursorTypes)]),
    outline: oneOfType([string, oneOf(OutlineTypes)]),
    pointerEvents: oneOfType([string, oneOf(PointerEventsTypes)]),
    resize: oneOfType([string, oneOf(ResizeTypes)]),
    userSelect: oneOfType([string, oneOf(UserSelectTypes)]),
  },
  default: {
    appearance: '',
    cursor: '',
    outline: '',
    pointerEvents: '',
    resize: '',
    userSelect: '',
  },
  argType: {
    appearance: AppearanceTypes,
    cursor: CursorTypes,
    outline: OutlineTypes,
    pointerEvents: PointerEventsTypes,
    resize: ResizeTypes,
    userSelect: UserSelectTypes,
  },
};

export default InterIInteractivityProps;
