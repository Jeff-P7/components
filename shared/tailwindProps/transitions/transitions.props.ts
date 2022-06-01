import PropTypes from 'prop-types';
import { ITransitions } from './transitions';
import {
  AnimationTypes,
  TransitionDelayTypes,
  TransitionDurationTypes,
  TransitionPropertyTypes,
  TransitionTimingFunctionTypes,
} from './transitions.types';
import type { IPropDefines } from '../../global';

/**
 * Props interface defines layout types
 *
 * @interface IProps
 * @extends {IPropDefines}
 */
interface IProps extends IPropDefines {
  type: { [key in keyof ITransitions]: any };
  default: ITransitions;
  argType: { [key in keyof ITransitions]: any };
}

const { string, oneOf, oneOfType, number } = PropTypes;

/**
 * Transitions Props
 */
export const TransitionsProps: IProps = {
  type: {
    animation: oneOfType([string, oneOf(AnimationTypes)]),
    transitionDelay: oneOfType([number, oneOf(TransitionDelayTypes)]),
    transitionDuration: oneOfType([number, oneOf(TransitionDurationTypes)]),
    transitionProperty: oneOfType([string, oneOf(TransitionPropertyTypes)]),
    transitionTimingFunction: oneOfType([
      string,
      oneOf(TransitionTimingFunctionTypes),
    ]),
  },
  default: {
    animation: '',
    transitionDelay: undefined,
    transitionDuration: undefined,
    transitionProperty: '',
    transitionTimingFunction: '',
  },
  argType: {
    animation: AnimationTypes,
    transitionDelay: TransitionDelayTypes,
    transitionDuration: TransitionDurationTypes,
    transitionProperty: TransitionPropertyTypes,
    transitionTimingFunction: TransitionTimingFunctionTypes,
  },
};

export default TransitionsProps;
