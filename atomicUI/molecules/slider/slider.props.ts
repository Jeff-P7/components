import PropTypes from 'prop-types';
import ISlider from './slider';
import type { IPropDefines } from '../../../global';
import { CommonProps } from '../../../global';

/**
 * Property categorical types of defines
 *
 * @interface IProps
 * @extends {IPropDefines}
 */
interface IProps extends IPropDefines {
  type: { [key in keyof ISlider]: any };
  default: ISlider;
  argType: { [key in keyof ISlider]: any };
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

export const SliderProps: IProps = {
  type: {
    // data: arrayOf(object),
    dots: bool,
    perView: number,
    // spacing: number,
    ...CommonProps.type,
  },
  default: {
    // data: [],
    dots: false,
    perView: 0,
    // spacing: 0,
    ...CommonProps.default,
  },
  argType: {
    // data: 'object',
    dots: 'boolean',
    perView: 'number',
    // spacing: 'number',
    ...CommonProps.argType,
  },
};

export default SliderProps;
