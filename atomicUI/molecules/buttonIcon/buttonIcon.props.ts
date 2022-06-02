import PropTypes from 'prop-types';
import IButtonIcon from './buttonIcon';
import type { IPropDefines } from '../../../global';
// import { IconProps, IconDictTypes } from '../../atoms/icon';
import { ButtonProps } from '../../atoms/button';
// import { VariantTypes, SizeTypes } from './button.types';
// import { BorderProps } from '../../../global/tailwindProps';
// import { SpacingNumberTypes } from '../../../global/tailwindProps/spacing/spacing.types';
import { IconCombinedProps } from '../sharedProps/iconCombined/iconCombined.props';

interface IProps extends IPropDefines {
  type: { [key in keyof IButtonIcon]: any };
  default: IButtonIcon;
  argType: { [key in keyof IButtonIcon]: any };
}

const { string, bool, oneOfType, func, node, oneOf, number } = PropTypes;

export const ButtonIconProps: IProps = {
  type: {
    ...ButtonProps.type,
    ...IconCombinedProps.type,
  },
  default: {
    ...ButtonProps.default,
    ...IconCombinedProps.default,
  },
  argType: {
    ...ButtonProps.argType,
    ...IconCombinedProps.argType,
  },
};

export default ButtonIconProps;
