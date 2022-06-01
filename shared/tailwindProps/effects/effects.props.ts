import PropTypes from 'prop-types';
import { IEffects } from './effects';
import { EffectsTypes, BoxShadowTypes } from './effects.types';
import type { IPropDefines } from '../../global';

/**
 * Props interface defines layout types
 *
 * @interface IProps
 * @extends {IPropDefines}
 */
interface IProps extends IPropDefines {
  type: { [key in keyof IEffects]: any };
  default: IEffects;
  argType: { [key in keyof IEffects]: any };
}

const { string, oneOf, oneOfType, number, arrayOf } = PropTypes;
const EffectsOneOfType: any = oneOfType([string, number, oneOf(EffectsTypes)]);

/**
 * Effects Props
 */
export const EffectsProps: IProps = {
  type: {
    backgroundBlendMode: oneOfType([string]),
    boxShadow: oneOfType([string, oneOf(BoxShadowTypes)]),
    mixBlendMode: oneOfType([string]),
    opacity: oneOfType([string]),
  },
  default: {
    backgroundBlendMode: '',
    boxShadow: 'default',
    mixBlendMode: '',
    opacity: '',
  },
  argType: {
    backgroundBlendMode: '',
    boxShadow: BoxShadowTypes,
    mixBlendMode: '',
    opacity: '',
  },
};

export default EffectsProps;
