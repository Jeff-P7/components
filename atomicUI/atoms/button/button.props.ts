import PropTypes from 'prop-types';
import TButton from './button';
import { CommonProps } from '../../../shared/props';
import type { IPropDefines } from '../../../shared';
import { VariantTypes, SizeTypes, FontAlignTypes } from './button.types';
import { pickPropDefines } from '../../../shared/utilities';
import {
  BorderProps,
  EffectsProps,
  ColorTypes,
  ColorProps,
  FontProps,
  OpacityProps,
  TypographyProps,
} from '../../../shared/tailwindProps';

interface IProps extends IPropDefines {
  type: { [key in keyof TButton]: any };
  default: TButton;
  argType: { [key in keyof TButton]: any };
}

const { string, bool, oneOfType, func, oneOf } = PropTypes;

const pickedEffectsProps: IPropDefines = pickPropDefines(
  'boxShadow',
  EffectsProps
);
const pickedOpacityProps: IPropDefines = pickPropDefines(
  'backgroundOpacity',
  OpacityProps
);

const pickedTypographyProps: IPropDefines = pickPropDefines(
  ['textColor', 'fontSize'],
  TypographyProps
);

export const ButtonProps: IProps = {
  type: {
    // borderRadius: string,
    circle: bool,
    color: ColorProps.type.color,
    disabled: bool,
    fontAlign: oneOfType([string, oneOf(FontAlignTypes)]),
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
    ...pickedTypographyProps.type,
  },
  default: {
    fontAlign: '',
    hover: true,
    value: '',
    ...BorderProps.default,
    ...pickedEffectsProps.default,
    ...pickedOpacityProps.default,
    ...pickedTypographyProps.default,
    backgroundOpacity: 100,
    borderRadius: 'lg',
    boxShadow: 'lg',
    circle: false,
    color: 'primary',
    disabled: false,
    fontColor: 'black',
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
    // value: '',
    variant: 'contained',
    onClick: () => null,
    ...CommonProps.default,
    ...FontProps.default,
    children: undefined,
    // ...pickProps('backgroundOpacity', OpacityProps.default),
  },
  argType: {
    fontAlign: FontAlignTypes,
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
    ...pickedTypographyProps.argType,
  },
};

export default ButtonProps;
