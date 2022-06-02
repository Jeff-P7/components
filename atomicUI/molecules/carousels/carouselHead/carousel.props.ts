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
  object,
  oneOf,
  oneOfType,
  shape,
  string,
} = PropTypes;

export const CarouselProps: IProps = {
  type: {
    Component: func,
    data: arrayOf(object),
    perView: number,
    // spacing: number,
    ...CommonProps.type,
  },
  default: {
    Component: () => null,
    data: [],
    perView: 0,
    // spacing: 0,
    ...CommonProps.default,
  },
  argType: {
    Component: 'object',
    data: 'object',
    perView: 'number',
    // spacing: 'number',
    ...CommonProps.argType,
  },
};

export default CarouselProps;
