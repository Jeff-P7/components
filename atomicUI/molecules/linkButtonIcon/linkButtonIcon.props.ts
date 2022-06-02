import PropTypes from 'prop-types';
import ILinkButtonIcon from './linkButtonIcon';
import type { IPropDefines } from '../../../global';
import { CommonProps } from '../../../global';

/**
 * Property categorical types of defines
 *
 * @interface IProps
 * @extends {IPropDefines}
 */
interface IProps extends IPropDefines {
  type: { [key in keyof ILinkButtonIcon]: any };
  default: ILinkButtonIcon;
  argType: { [key in keyof ILinkButtonIcon]: any };
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

export const LinkButtonIconProps: IProps = {
  type: {
    active: bool,
    href: string.isRequired,
    icon: string,
    value: string.isRequired,
    ...CommonProps.type,
  },
  default: {
    active: false,
    href: '',
    icon: '',
    value: '',
    ...CommonProps.default,
    // fullWidth: true
  },
  argType: {
    active: 'boolean',
    href: 'text',
    icon: 'text',
    value: 'text',
    ...CommonProps.argType,
  },
};

export default LinkButtonIconProps;
