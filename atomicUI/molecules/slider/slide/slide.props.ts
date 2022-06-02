import PropTypes from 'prop-types';
import ISlide from './slide';
import type { IPropDefines } from '../../../../global';
import { CommonProps } from '../../../../global';

/**
 * Property categorical types of defines
 *
 * @interface IProps
 * @extends {IPropDefines}
 */
interface IProps extends IPropDefines {
  type: { [key in keyof ISlide]: any };
  default: ISlide;
  argType: { [key in keyof ISlide]: any };
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

export const SlideProps: IProps = {
  type: {
    ...CommonProps.type,
  },
  default: {
    ...CommonProps.default,
  },
  argType: {
    ...CommonProps.argType,
  },
};

export default SlideProps;
