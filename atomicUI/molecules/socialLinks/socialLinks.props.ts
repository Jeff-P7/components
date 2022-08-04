import PropTypes from 'prop-types';
import ISocialLinks from './socialLinks';
import type { IPropDefines } from '../../../global';
import { CommonProps } from '../../../global';

/**
 * Property categorical types of defines
 *
 * @interface IProps
 * @extends {IPropDefines}
 */
interface IProps extends IPropDefines {
  type: { [key in keyof ISocialLinks]: any };
  default: ISocialLinks;
  argType: { [key in keyof ISocialLinks]: any };
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

export const SocialLinksProps: IProps = {
  type: {
    data: shape,
    isHorizontal: bool,
    isDark: bool,
    ...CommonProps.type,
  },
  default: {
    data: {},
    isHorizontal: false,
    isDark: false,
    ...CommonProps.default,
  },
  argType: {
    data: shape,
    isHorizontal: bool,
    isDark: bool,
    ...CommonProps.argType,
  },
};

export default SocialLinksProps;
