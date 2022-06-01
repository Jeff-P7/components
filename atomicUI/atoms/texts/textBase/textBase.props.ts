import PropTypes from 'prop-types';
import { IText } from './text';
import { CommonProps } from '../../../../shared/props';
import type { IPropDefines } from '../../../../shared';
import { TypographyProps } from '../../../../shared/tailwindProps';
import { VariantTypes } from './text.types';

interface IProps extends IPropDefines {
  type: { [key in keyof IText]: any };
  default: IText;
  argType: { [key in keyof IText]: any };
}

const { string, number, bool, node, oneOf, oneOfType } = PropTypes;

const TextProps: IProps = {
  type: {
    align: TypographyProps.type.textAlign,
    color: TypographyProps.type.textColor,
    inline: bool,
    italic: bool,
    letterSpacing: TypographyProps.type.letterSpacing,
    lineHeight: TypographyProps.type.lineHeight,
    overflow: TypographyProps.type.textOverflow,
    size: TypographyProps.type.fontSize,
    smoothing: TypographyProps.type.fontSmoothing,
    transform: TypographyProps.type.textTransform,
    value: string,
    variant: oneOfType([string, oneOf(VariantTypes)]),
    variantNumeric: TypographyProps.type.fontVariantNumeric,
    verticalAlign: TypographyProps.type.verticalAlign,
    weight: TypographyProps.type.fontWeight,
    whitespace: TypographyProps.type.whitespace,
    wordBreak: TypographyProps.type.wordBreak,
    ...CommonProps.type,
  },
  default: {
    align: '',
    color: 'black',
    inline: false,
    italic: false,
    letterSpacing: '',
    lineHeight: '',
    overflow: '',
    size: 'sm',
    smoothing: '',
    transform: '',
    value: '',
    variant: 'p',
    variantNumeric: '',
    verticalAlign: '',
    weight: '',
    whitespace: '',
    wordBreak: '',
    ...CommonProps.default,
  },
  argType: {
    align: TypographyProps.argType.textAlign,
    color: TypographyProps.argType.textColor,
    inline: 'boolean',
    italic: 'boolean',
    letterSpacing: TypographyProps.argType.letterSpacing,
    lineHeight: TypographyProps.argType.lineHeight,
    overflow: TypographyProps.argType.textOverflow,
    size: TypographyProps.argType.fontSize,
    smoothing: TypographyProps.argType.fontSmoothing,
    transform: TypographyProps.argType.textTransform,
    variantNumeric: TypographyProps.argType.fontVariantNumeric,
    value: 'text',
    variant: VariantTypes,
    verticalAlign: TypographyProps.argType.verticalAlign,
    weight: TypographyProps.argType.fontWeight,
    whitespace: TypographyProps.argType.whitespace,
    wordBreak: TypographyProps.argType.wordBreak,
    ...CommonProps.argType,
  },
};

export default TextProps;
