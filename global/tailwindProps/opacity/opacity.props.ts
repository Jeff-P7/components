import PropTypes from 'prop-types';
import { IOpacity, OpacityTypes } from './opacity.d';
import type { IPropDefines } from '../../global';

interface IProps extends IPropDefines {
  type: { [key in keyof IOpacity]: any };
  default: IOpacity;
  argType: { [key in keyof IOpacity]: any };
}

const { string, oneOf, oneOfType } = PropTypes;
const opacityOneOfType: any = oneOfType([string, oneOf(OpacityTypes)]);

export const BorderProps: IProps = {
  type: {
    backdropOpacity: opacityOneOfType,
    backgroundOpacity: opacityOneOfType,
    borderOpacity: opacityOneOfType,
    divideOpacity: opacityOneOfType,
    opacity: opacityOneOfType,
    placeholderOpacity: opacityOneOfType,
    ringOpacity: opacityOneOfType,
    textOpacity: opacityOneOfType,
  },
  default: {
    backdropOpacity: 100,
    backgroundOpacity: 100,
    borderOpacity: 100,
    divideOpacity: 100,
    opacity: 100,
    placeholderOpacity: 100,
    ringOpacity: 100,
    textOpacity: 100,
  },
  argType: {
    backdropOpacity: OpacityTypes,
    backgroundOpacity: OpacityTypes,
    borderOpacity: OpacityTypes,
    divideOpacity: OpacityTypes,
    opacity: OpacityTypes,
    placeholderOpacity: OpacityTypes,
    ringOpacity: OpacityTypes,
    textOpacity: OpacityTypes,
  },
};

export default BorderProps;
