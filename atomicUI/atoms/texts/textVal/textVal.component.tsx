import React, { FC } from 'react';
import type { ITextVal } from './textVal';
import TextValProps from './textVal.props';
import { default as Text } from '../../text';
import { purgeEmptyProps } from '../../../../global/utilities/functions';

type IProps = ITextVal;

/**
 * TextVal UI component for user interaction
 */
export const TextVal: FC<IProps> = (props): JSX.Element => {
  const {
    align,
    classes,
    color,
    inline,
    italic,
    letterSpacing,
    lineHeight,
    margin,
    overflow,
    padding,
    size,
    smoothing,
    tag,
    transform,
    value,
    // variant,
    variantNumeric,
    // variantSize,
    verticalAlign,
    weight,
    whitespace,
    wordBreak,
  } = props;

  const textProps: Record<string, any> = purgeEmptyProps({
    align,
    classes,
    color,
    inline,
    italic,
    letterSpacing,
    lineHeight,
    margin,
    overflow,
    padding,
    size,
    smoothing,
    tag,
    transform,
    value,
    // variant,
    variantNumeric,
    // variantSize,
    verticalAlign,
    weight,
    whitespace,
    wordBreak,
  });

  return <Text {...(textProps && { ...textProps })}>{value}</Text>;
};

TextVal.propTypes = TextValProps.type;
TextVal.defaultProps = TextValProps.default;

export default TextVal;
