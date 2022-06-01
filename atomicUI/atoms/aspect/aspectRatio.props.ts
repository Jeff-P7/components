import PropTypes from 'prop-types';
import IAspectRatio from './aspect';
import type { IPropDefines } from '../../../shared';
import { CommonProps } from '../../../shared';

/**
 * Property categorical types of defines
 *
 * @interface IProps
 * @extends {IPropDefines}
 */
interface IProps extends IPropDefines {
  type: { [key in keyof IAspectRatio]: any };
  default: IAspectRatio;
  argType: { [key in keyof IAspectRatio]: any };
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

export const AspectRatioProps: IProps = {
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

export default AspectRatioProps;
