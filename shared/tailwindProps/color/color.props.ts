import type { IPropDefines } from '../../global';
import { IColor, ColorTypes } from './color';
import PropTypes from 'prop-types';

interface IProps extends IPropDefines {
  type: { [key in keyof IColor]: any };
  default: IColor;
  argType: { [key in keyof IColor]: any };
}

const { string, oneOf, oneOfType } = PropTypes;
const colorOneOfType: any = oneOfType([string, oneOf(ColorTypes)]);

export const ColorProps: IProps = {
  type: {
    backgroundColor: colorOneOfType,
    borderColor: colorOneOfType,
    caretColor: colorOneOfType,
    color: colorOneOfType,
    divideColor: colorOneOfType,
    // gradientColorStops: colorOneOfType,
    placeholderColor: colorOneOfType,
    ringColor: colorOneOfType,
    ringOffsetColor: colorOneOfType,
    textColor: colorOneOfType,
  },
  default: {
    backgroundColor: 'primary',
    borderColor: 'primary',
    caretColor: 'primary',
    color: 'primary',
    divideColor: 'black',
    // gradientColorStops: 'primary',
    placeholderColor: 'black',
    ringColor: 'primary',
    ringOffsetColor: 'primary',
    textColor: 'black',
  },
  argType: {
    backgroundColor: ColorTypes,
    borderColor: ColorTypes,
    caretColor: ColorTypes,
    color: ColorTypes,
    divideColor: ColorTypes,
    // gradientColorStops: ColorTypes,
    placeholderColor: ColorTypes,
    ringColor: ColorTypes,
    ringOffsetColor: ColorTypes,
    textColor: ColorTypes,
  },
};

export default ColorProps;
