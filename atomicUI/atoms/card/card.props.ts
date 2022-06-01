import PropTypes from 'prop-types';
import ICard from './card';
import type { IPropDefines } from '../../../shared';
import {
  SizingProps,
  BorderProps,
  ColorProps,
  EffectsProps,
} from '../../../shared/tailwindProps';
import { CommonProps } from '../../../shared/props/common/common.props';
import { pickPropDefines } from '../../../shared/utilities/functions';
import { VariantCardTypes } from '../../molecules/cards/cardCommon.types';
import { boolean } from 'yup/lib/locale';

interface IProps extends IPropDefines {
  type: { [key in keyof ICard]: any };
  default: ICard;
  argType: { [key in keyof ICard]: any };
}

const { string, number, bool, shape, oneOf, oneOfType, node, func } = PropTypes;

const pickedColorProps: IPropDefines = pickPropDefines(
  'backgroundColor',
  ColorProps
);

const pickedEffectsProps: IPropDefines = pickPropDefines(
  'boxShadow',
  EffectsProps
);

export const CardProps: IProps = {
  type: {
    hover: bool,
    hoverBoxShadow: EffectsProps.type.boxShadow,
    size: SizingProps.type.height,
    transparent: bool,
    variant: oneOfType([string, oneOf(VariantCardTypes)]),
    ...BorderProps.type,
    ...CommonProps.type,
    ...SizingProps.type,
    ...pickedColorProps.type,
    ...pickedEffectsProps.type,
  },
  default: {
    hover: false,
    hoverBoxShadow: 'lg',
    transparent: false,
    variant: 'paper',
    ...BorderProps.default,
    ...CommonProps.default,
    ...SizingProps.default,
    ...pickedColorProps.default,
    ...pickedEffectsProps.default,
    dataComponent: 'card',
    backgroundColor: 'white',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 'default',
    boxShadow: 'md',
    height: 'auto',
    // minHeight: 10,
    // minWidth: 'min',
  },
  argType: {
    backgroundColor: 'color',
    hover: 'boolean',
    hoverBoxShadow: EffectsProps.argType.boxShadow,
    size: SizingProps.argType.height,
    transparent: 'boolean',
    variant: VariantCardTypes,
    ...BorderProps.argType,
    ...CommonProps.argType,
    ...SizingProps.argType,
    // ...pickedColorProps.argType,
    ...pickedEffectsProps.argType,
  },
};

export default CardProps;
