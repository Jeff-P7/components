import PropTypes from 'prop-types';
import IIcon from './icon';
import { CommonProps, FontProps, ColorProps } from '../../../shared';
import type { IPropDefines } from '../../../shared';
import { IconDictTypes } from './icon.dict';

interface IProps extends IPropDefines {
  type: { [key in keyof IIcon]: any };
  default: IIcon;
  argType: { [key in keyof IIcon]: any };
}

const { string, number, bool, shape, oneOf, oneOfType, node, func } = PropTypes;

export const IconProps: IProps = {
  type: {
    classes: string,
    color: ColorProps.type.color,
    inline: bool,
    value: oneOfType([string, oneOf(IconDictTypes)]),
    size: FontProps.type.fontSize,
    hover: bool,
    ...CommonProps.type,
    // attr: node,
    // style: node,
  },
  default: {
    classes: '',
    color: 'black',
    inline: false,
    value: 'MdOutlineWbSunny',
    size: 'lg',
    hover: false,
    ...CommonProps.default,
    // attr: {},
    // style: {},
  },
  argType: {
    classes: 'string',
    color: ColorProps.argType.color,
    inline: 'boolean',
    value: IconDictTypes,
    size: FontProps.argType.fontSize,
    hover: 'boolean',
    ...CommonProps.argType,
    // attr: 'object',
    // style: 'object',
  },
};

export default IconProps;
