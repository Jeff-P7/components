import PropTypes from 'prop-types';
import IButton from './button';
import {
  CommonProps,
  ColorProps,
  FontProps,
  OpacityProps,
} from '../../../../shared';
import type { IPropDefines } from '../../../../shared';
import { IconProps } from '../../icon';
import { VariantTypes, SizeTypes } from './button.types';
import { BorderProps, EffectsProps, ColorTypes } from '../../../../shared/tailwindProps';
import { pickPropDefines } from '../../../../shared/utilities';

interface IProps extends IPropDefines {
  type: { [key in keyof IButton]: any };
  default: IButton;
  argType: { [key in keyof IButton]: any };
}

const { string, bool, oneOfType, func, node, oneOf, number } = PropTypes;

const pickedEffectsProps: IPropDefines = pickPropDefines(
  'boxShadow',
  EffectsProps
);
const pickedOpacityProps: IPropDefines = pickPropDefines(
  'backgroundOpacity',
  OpacityProps
);

export const ButtonProps: IProps = {
  type: {
    // borderRadius: string,
    circle: bool,
    color: ColorProps.type.color,
    disabled: bool,
    fontColor: oneOfType([string, oneOf(ColorTypes)]),
    fullHeight: bool,
    fullWidth: bool,
    fullXY: bool,
    hover: bool,
    // icon: string,
    // iconRight: bool,
    // iconSize: IconProps.type.size,
    noShadow: bool,
    noSpace: bool,
    slim: bool,
    label: string,
    size: oneOfType([oneOf(SizeTypes), string]),
    value: string,
    variant: oneOfType([oneOf(VariantTypes), string]),
    onClick: func,
    ...CommonProps.type,
    ...BorderProps.type,
    ...FontProps.type,
    ...pickedEffectsProps.type,
    ...pickedOpacityProps.type,
  },
  default: {
    hover: false,
    ...BorderProps.default,
    ...pickedEffectsProps.default,
    ...pickedOpacityProps.default,
    backgroundOpacity: 50,
    borderRadius: 'lg',
    boxShadow: 'lg',
    circle: false,
    color: 'primary',
    disabled: false,
    fontColor: '',
    fullHeight: false,
    fullWidth: false,
    fullXY: false,
    // icon: '',
    // iconRight: false,
    // iconSize: IconProps.default.size,
    label: '',
    noShadow: false,
    noSpace: false,
    size: 'md',
    slim: false,
    value: '',
    variant: 'contained',
    onClick: () => null,
    ...CommonProps.default,
    ...FontProps.default,
    // ...pickProps('backgroundOpacity', OpacityProps.default),
  },
  argType: {
    circle: 'boolean',
    color: 'color',
    // color: ColorProps.argType.color,
    fontColor: 'color',
    disabled: 'boolean',
    fullWidth: 'boolean',
    hover: 'boolean',
    // iconRight: 'boolean',
    // iconSize: IconProps.argType.size,
    noShadow: 'boolean',
    noSpace: 'boolean',
    size: SizeTypes,
    slim: 'boolean',
    value: 'text',
    variant: VariantTypes,
    onClick: { action: 'clicked' },
    ...CommonProps.argType,
    ...BorderProps.argType,
    ...FontProps.argType,
    ...pickedEffectsProps.argType,
    ...pickedOpacityProps.argType,
  },
};

export default ButtonProps;
