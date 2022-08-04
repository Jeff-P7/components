import PropTypes from 'prop-types';
import { TText } from './text';
import { CommonProps } from '../../../global/props';
import type { IPropDefines } from '../../../global';
import { TypographyProps } from '../../../global/tailwindProps';
import { TagTypes } from './text.types';
// import { pickPropDefines } from '../../../global/utilities';
interface IProps extends IPropDefines {
  type: { [key in keyof TText]: any };
  default: TText;
  argType: { [key in keyof TText]: any };
}

const { string, number, bool, node, oneOf, oneOfType } = PropTypes;

// const pickCommonProps: ICommon = pickPropDefines('')

const TextProps: IProps = {
  type: {
    align: TypographyProps.type.textAlign,
    children: string,
    color: TypographyProps.type.textColor,
    inline: bool,
    italic: bool,
    letterSpacing: TypographyProps.type.letterSpacing,
    lineHeight: TypographyProps.type.lineHeight,
    overflow: TypographyProps.type.textOverflow,
    size: TypographyProps.type.fontSize,
    smoothing: TypographyProps.type.fontSmoothing,
    transform: TypographyProps.type.textTransform,
    tag: oneOfType([string, oneOf(TagTypes)]),
    variantNumeric: TypographyProps.type.fontVariantNumeric,
    value: string,
    // variantSize: TypographyProps.type.fontSize,
    verticalAlign: TypographyProps.type.verticalAlign,
    weight: TypographyProps.type.fontWeight,
    whitespace: TypographyProps.type.whitespace,
    wordBreak: TypographyProps.type.wordBreak,
    ...CommonProps.type,
  },
  default: {
    ...CommonProps.default,
    align: '',
    children: '' || undefined,
    value: '',
    color: 'black',
    inline: false,
    italic: false,
    letterSpacing: '',
    lineHeight: '',
    overflow: '',
    size: 'md',
    smoothing: '',
    transform: '',
    tag: 'h6',
    // variantSize: 'md',
    variantNumeric: '',
    verticalAlign: '',
    weight: '',
    whitespace: '',
    wordBreak: '',
  },
  argType: {
    align: TypographyProps.argType.textAlign,
    children: 'text',
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
    tag: TagTypes,
    value: 'text',
    // variantSize: TypographyProps.argType.fontSize,
    verticalAlign: TypographyProps.argType.verticalAlign,
    weight: TypographyProps.argType.fontWeight,
    whitespace: TypographyProps.argType.whitespace,
    wordBreak: TypographyProps.argType.wordBreak,
    ...CommonProps.argType,
  },
};

export default TextProps;
