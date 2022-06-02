import PropTypes from 'prop-types';
import { default as IIconCombined } from './iconCombined.d';
import type { IPropDefines } from '../../../../global';
import { IconDictTypes } from '../../../atoms/icon';
import { SpacingNumberTypes } from '../../../../global/tailwindProps/spacing/spacing.types';

/**
 * Property categorical types of defines
 *
 * @interface IProps
 * @extends {IPropDefines}
 */
interface IProps extends IPropDefines {
  type: { [key in keyof IIconCombined]: any };
  default: IIconCombined;
  argType: { [key in keyof IIconCombined]: any };
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

export const IconCombinedProps: IProps = {
  type: {
    icon: oneOfType([string, oneOf(IconDictTypes)]).isRequired,
    iconRight: bool,
    iconSpace: oneOfType([string, oneOf(SpacingNumberTypes)]),
  },
  default: {
    icon: '',
    iconRight: false,
    iconSpace: 1,
  },
  argType: {
    icon: IconDictTypes,
    iconRight: 'boolean',
    iconSpace: SpacingNumberTypes,
  },
};

export default IconCombinedProps;
