import React, { FC } from 'react';
import classNames from 'classnames';
import type { ITextBaseChildren, ITextBaseValue } from './textBase';
import {
  fontSizeToClass,
  fontSmoothingToClass,
  fontVariantNumericToClass,
  fontWeightToClass,
  letterSpacingToClass,
  lineHeightToClass,
  marginToClass,
  paddingToClass,
  textBaseAlignToClass,
  textBaseColorToClass,
  textBaseOverflowToClass,
  textBaseTransformToClass,
  verticalAlignToClass,
  whitespaceToClass,
  wordBreakToClass,
} from '../../../../global/tailwindProps';
import TextBaseProps from './textBase.props';
import { Message } from '../../../../global';
import { classesToString } from '../../../../global/props/common';
import { purgeEmptyProps } from '../../../../global/utilities/functions';
import { Button } from '@mui/material';
Button

type IProps = ITextBase;

/**
 * TextBase UI component for user interaction
 */
export const TextBase: FC<IProps> = (props): JSX.Element => {
  const {
    align,
    children,
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
    transform,
    value,
    variant,
    variantNumeric,
    verticalAlign,
    weight,
    whitespace,
    wordBreak,
  } = props;

  if (children && value) throw new Error(Message.error.childrenAndValue);

  const componentClasses: Array<string> = [];
  let componentStyles: Record<string, {}> = {};

  if (classes?.length) componentClasses.push(classesToString(classes));

  if (color?.startsWith('#')) componentStyles['color'] = color;
  else componentClasses.push(textBaseColorToClass(color));

  componentClasses.push(
    ...[
      fontSizeToClass(size!),
      fontSmoothingToClass(smoothing),
      fontVariantNumericToClass(variantNumeric),
      fontWeightToClass(weight!),
      letterSpacingToClass(letterSpacing),
      lineHeightToClass(lineHeight),
      marginToClass(margin!),
      paddingToClass(padding!),
      textBaseAlignToClass(align),
      textBaseOverflowToClass(overflow),
      textBaseTransformToClass(transform),
      verticalAlignToClass(verticalAlign),
      whitespaceToClass(whitespace),
      wordBreakToClass(wordBreak),
      inline ? 'inline' : '',
      italic ? 'italic' : '',
    ]
  );

  const textBaseSizeToElementDict: Record<string, string> = {
    '9xl': 'h1',
    '8xl': 'h1',
    '7xl': 'h1',
    '6xl': 'h1',
    '5xl': 'h1',
    '4xl': 'h1',
    '3xl': 'h2',
    '2xl': 'h3',
    xl: 'h4',
    lg: 'h5',
    base: 'h6',
    sm: 'p',
    xs: 'p',
    p: 'p',
  };

  const componentProps: Record<string, {}> = purgeEmptyProps({
    className: classNames(componentClasses),
    style: componentStyles,
  });

  const element: string = variant || textBaseSizeToElementDict[size!];
  const childrenVal: string = children?.toString() || value!;

  return React.createElement(`${element}`, componentProps, childrenVal)
};

TextBase.propTypes = TextBaseProps.type;
TextBase.defaultProps = TextBaseProps.default;

export default TextBase;
