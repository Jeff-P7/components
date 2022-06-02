import PropTypes from 'prop-types';
import IIconButton from './iconButton';
import { CommonProps, FontProps, ColorProps } from '../../global';
import type { IPropDefines } from '../../global';
import { ButtonProps } from '../../atoms/button';
import { IconProps } from '../../atoms/icon';

interface IProps extends IPropDefines {
  type: { [key in keyof IIconButton]: any };
  default: IIconButton;
  argType: { [key in keyof IIconButton]: any };
}

const { string, number, bool, shape, oneOf, oneOfType, node, func } = PropTypes;

export const IconButtonProps: IProps = {
  type: {
    ...ButtonProps.type,
  },
  default: {
    ...ButtonProps.default,
    color: 'gray',                                                      // used
    slim: true,                                                         // used
  },
  argType: {
    ...ButtonProps.argType,
  },
};

export default IconButtonProps;
