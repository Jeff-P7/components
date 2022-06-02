import PropTypes from 'prop-types';
import ICarouselSpacing from './carouselSpacing';
import type { IPropDefines } from '../../../global';
import { CommonProps } from '../../../global';

/**
 * Property categorical types of defines
 *
 * @interface IProps
 * @extends {IPropDefines}
 */
interface IProps extends IPropDefines {
  type: { [key in keyof ICarouselSpacing]: any };
  default: ICarouselSpacing;
  argType: { [key in keyof ICarouselSpacing]: any };
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

export const CarouselSpacingProps: IProps = {
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

export default CarouselSpacingProps;
