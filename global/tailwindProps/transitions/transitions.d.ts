import {
  TAnimation,
  TTransitionDelay,
  TTransitionDuration,
  TTransitionProperty,
  TTransitionTimingFunction,
} from './transitions.types';

/**
 * Transitions Interface
 *
 * @export
 * @interface ITransitions
 */
export interface ITransitions {
  /**
   * Utilities for animating elements with CSS animations
   *
   * @type {TAnimation}
   * @memberof ITransitions
   */
  animation?: TAnimation;
  /**
   * Utilities for controlling the delay of CSS transitions
   *
   * @type {TTransitionDelay}
   * @memberof ITransitions
   */
  transitionDelay?: TTransitionDelay;
  /**
   * Utilities for controlling the duration of CSS transitions
   *
   * @type {TTransitionDuration}
   * @memberof ITransitions
   */
  transitionDuration?: TTransitionDuration;
  /**
   * Utilities for controlling which CSS properties transition
   *
   * @type {TTransitionProperty}
   * @memberof ITransitions
   */
  transitionProperty?: TTransitionProperty;
  /**
   * Utilities for controlling the easing of CSS transitions
   *
   * @type {TTransitionTimingFunction}
   * @memberof ITransitions
   */
  transitionTimingFunction?: TTransitionTimingFunction;
}

export default ITransitions;
