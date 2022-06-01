import PropTypes from 'prop-types';
import IDropdown from './dropdown';
import type { IPropDefines } from '../../../shared';
import { CommonProps } from '../../../shared';

/**
 * Property categorical types of defines
 *
 * @interface IProps
 * @extends {IPropDefines}
 */
interface IProps extends IPropDefines {
  type: { [key in keyof IDropdown]: any };
  default: IDropdown;
  argType: { [key in keyof IDropdown]: any };
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

export const DropdownProps: IProps = {
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

export default DropdownProps;
