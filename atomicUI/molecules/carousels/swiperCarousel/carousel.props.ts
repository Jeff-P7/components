import PropTypes from 'prop-types';
import ICarousel from './carousel';
import type { IPropDefines } from '../../../global';
import { CommonProps } from '../../../global';

/**
 * Property categorical types of defines
 *
 * @interface IProps
 * @extends {IPropDefines}
 */
interface IProps extends IPropDefines {
  type: { [key in keyof ICarousel]: any };
  default: ICarousel;
  argType: { [key in keyof ICarousel]: any };
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

export const CarouselProps: IProps = {
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

export default CarouselProps;
