import PropTypes from 'prop-types';
import { IText } from './text';
import {
  TextAlignTypes,
  TextDecorationTypes,
  TextTransformTypes,
  TextOverflowTypes,
} from './text.types';
import type { IPropDefines } from '../../../global';
import { ColorProps } from '../../color';
import { OpacityProps } from '../../opacity';

/**
 * Props interface defines layout types
 *
 * @interface IProps
 * @extends {IPropDefines}
 */
interface IProps extends IPropDefines {
  type: { [key in keyof IText]: any };
  default: IText;
  argType: { [key in keyof IText]: any };
}

const { string, oneOf, oneOfType } = PropTypes;

/**
 * Text Props
 */
export const TextProps: IProps = {
  type: {
    textAlign: oneOfType([string, oneOf(TextAlignTypes)]),
    textColor: ColorProps.type.textColor,
    textDecoration: oneOfType([string, oneOf(TextDecorationTypes)]),
    textOpacity: OpacityProps.type.textOpacity,
    textOverflow: oneOfType([string, oneOf(TextOverflowTypes)]),
    textTransform: oneOfType([string, oneOf(TextTransformTypes)]),
  },
  default: {
    textAlign: '',
    textColor: 'black',
    textDecoration: '',
    textOpacity: 100,
    textOverflow: '',
    textTransform: '',
  },
  argType: {
    textAlign: TextAlignTypes,
    textColor: ColorProps.argType.textColor,
    textDecoration: TextDecorationTypes,
    textOpacity: OpacityProps.argType.textOpacity,
    textOverflow: TextOverflowTypes,
    textTransform: TextTransformTypes,
  },
};

export default TextProps;
