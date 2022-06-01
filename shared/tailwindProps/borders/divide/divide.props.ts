import PropTypes from 'prop-types';
import { IDivide } from './divide';
import type { IPropDefines } from '../../../global';
import {
  DivideColorTypes,
  DivideOpacityTypes,
  DivideStyleTypes,
  DivideWidthTypes,
} from './divide.types';

interface IProps extends IPropDefines {
  type: { [key in keyof IDivide]: any };
  default: IDivide;
  argType: { [key in keyof IDivide]: any };
}

const { string, oneOf, oneOfType } = PropTypes;

export const DivideProps: IProps = {
  type: {
    divideColor: oneOfType([string, oneOf(DivideColorTypes)]),
    divideOpacity: oneOfType([string, oneOf(DivideOpacityTypes)]),
    divideStyle: oneOfType([string, oneOf(DivideStyleTypes)]),
    divideWidth: oneOfType([string, oneOf(DivideWidthTypes)]),
  },
  default: {
    divideColor: '',
    divideOpacity: undefined,
    divideStyle: '',
    divideWidth: '',
  },
  argType: {
    divideColor: DivideColorTypes,
    divideOpacity: DivideOpacityTypes,
    divideStyle: DivideStyleTypes,
    divideWidth: DivideWidthTypes,
  },
};

export default DivideProps;
