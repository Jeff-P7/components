import PropTypes from 'prop-types';
import { ITextAuto } from './textAuto';
import { CommonProps } from '../../global/props';
import type { IPropDefines } from '../../global';
import { TypographyProps } from '../../global/tailwindProps';
import { VariantTypes } from './textAuto.types';

interface IProps extends IPropDefines {
  type: { [key in keyof ITextAuto]: any };
  default: ITextAuto;
  argType: { [key in keyof ITextAuto]: any };
}

const { string, number, bool, node, oneOf, oneOfType } = PropTypes;

const TextAutoProps: IProps = {
  type: {
    align: TypographyProps.type.textAutoAlign,
    color: TypographyProps.type.textAutoColor,
    inline: bool,
    italic: bool,
    letterSpacing: TypographyProps.type.letterSpacing,
    lineHeight: TypographyProps.type.lineHeight,
    overflow: TypographyProps.type.textAutoOverflow,
    size: TypographyProps.type.fontSize,
    smoothing: TypographyProps.type.fontSmoothing,
    transform: TypographyProps.type.textAutoTransform,
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
    size: 'base',
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
    align: TypographyProps.argType.textAutoAlign,
    color: TypographyProps.argType.textAutoColor,
    inline: 'boolean',
    italic: 'boolean',
    letterSpacing: TypographyProps.argType.letterSpacing,
    lineHeight: TypographyProps.argType.lineHeight,
    overflow: TypographyProps.argType.textAutoOverflow,
    size: TypographyProps.argType.fontSize,
    smoothing: TypographyProps.argType.fontSmoothing,
    transform: TypographyProps.argType.textAutoTransform,
    variantNumeric: TypographyProps.argType.fontVariantNumeric,
    value: 'textAuto',
    variant: VariantTypes,
    verticalAlign: TypographyProps.argType.verticalAlign,
    weight: TypographyProps.argType.fontWeight,
    whitespace: TypographyProps.argType.whitespace,
    wordBreak: TypographyProps.argType.wordBreak,
    ...CommonProps.argType,
  },
};

export default TextAutoProps;
