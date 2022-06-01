import PropTypes from 'prop-types';
import IContainer from './container';
import { IPropDefines } from '../../../shared';
import { DivProps } from '../../../atomicUI/atoms';

interface IProps extends IPropDefines {
  type: { [key in keyof IContainer]: any };
  default: IContainer;
  argType: { [key in keyof IContainer]: any };
}

const { string, bool } = PropTypes;

const ContainerProps: IProps = {
  type: {
    fluid: bool,
    xxl: bool,
    xl: bool,
    lg: bool,
    md: bool,
    sm: bool,
    xs: bool,
    ...DivProps.type,
  },
  default: {
    fluid: false,
    xxl: false,
    xl: false,
    lg: false,
    md: false,
    sm: false,
    xs: false,
    ...DivProps.default,
  },
  argType: {
    fluid: 'boolean',
    xxl: 'boolean',
    xl: 'boolean',
    lg: 'boolean',
    md: 'boolean',
    sm: 'boolean',
    xs: 'boolean',
    ...DivProps.argType,
  },
};

export default ContainerProps;
