import PropTypes from 'prop-types';
import IHead from './head';
import type { IPropDefines } from '../../../global';

interface IProps extends IPropDefines {
  type: { [key in keyof IHead]: any };
  default: IHead;
  argType: { [key in keyof IHead]: any };
}

const {
  array,
  arrayOf,
  bool,
  func,
  node,
  number,
  oneOf,
  oneOfType,
  shape,
  string,
} = PropTypes;

export const HeadProps: IProps = {
  type: {
    title: string,
    description: string,
    icon: string,
  },
  default: {
    title: '',
    description: '',
    icon: ''
  },
  argType: {
    title: 'text',
    description: 'text',
    icon: 'text'
  },
};

export default HeadProps;
