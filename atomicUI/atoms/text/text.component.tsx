import React, { FC } from 'react';
import classNames from 'classnames';
import type { TText } from './text';
import { VariantDict, TVariantDict } from './text.dict';
import {
  fontSizeToClass,
  fontSmoothingToClass,
  fontVariantNumericToClass,
  fontWeightToClass,
  letterSpacingToClass,
  lineHeightToClass,
  marginToClass,
  paddingToClass,
  textAlignToClass,
  textColorToClass,
  textOverflowToClass,
  textTransformToClass,
  verticalAlignToClass,
  whitespaceToClass,
  wordBreakToClass,
} from '../../../shared/tailwindProps';
import TextProps from './text.props';
import { Message } from '../../../shared';
import { classesToString } from '../../../shared/props/common';
import { purgeEmptyProps } from '../../../shared/utilities/functions';

type IProps = TText;

/**
 * Text UI component for user interaction
 */
export const Text: FC<IProps> = (props): JSX.Element => {
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
    tag,
    variantNumeric,
    verticalAlign,
    weight,
    whitespace,
    wordBreak,
    value,
  } = props;

  // if (children && value) throw new Error(Message.error.childrenAndValue);

  const componentClasses: Array<string> = [];
  let componentStyles: Record<string, {}> = {};

  if (classes?.length) componentClasses.push(classesToString(classes));

  if (color?.startsWith('#')) componentStyles['color'] = color;
  else componentClasses.push(textColorToClass(color!));

  const tagToFontSize: TVariantDict = VariantDict[tag!][size!];

  componentClasses.push(
    ...[
      // fontSizeToClass(tagToFontSize || size!),
      fontSizeToClass(tagToFontSize),
      // fontSmoothingToClass(smoothing),
      // fontVariantNumericToClass(variantNumeric),
      fontWeightToClass(weight!),
      // letterSpacingToClass(letterSpacing),
      // lineHeightToClass(lineHeight),
      marginToClass(margin!),
      paddingToClass(padding!),
      textAlignToClass(align!),
      // textOverflowToClass(overflow),
      textTransformToClass(transform!),
      verticalAlignToClass(verticalAlign),
      // whitespaceToClass(whitespace),
      // wordBreakToClass(wordBreak),
      inline ? 'inline' : '',
      italic ? 'italic' : '',
    ]
  );

  // const textSizeToElementDict: Record<string, string> = {
  //   '9xl': 'h1',
  //   '8xl': 'h1',
  //   '7xl': 'h1',
  //   '6xl': 'h1',
  //   '5xl': 'h1',
  //   '4xl': 'h1',
  //   '3xl': 'h2',
  //   '2xl': 'h3',
  //   xl: 'h4',
  //   lg: 'h5',
  //   base: 'h6',
  //   sm: 'p',
  //   xs: 'p',
  //   p: 'p',
  // };

  const componentProps: Record<string, {}> = purgeEmptyProps({
    className: classNames(componentClasses),
    style: componentStyles,
  });

  // const element: string = variant || textSizeToElementDict[size!];
  const element: string = tag!;
  // const childrenVal: string = children || value!;

  return React.createElement(`${element}`, componentProps, children || value);
};

Text.propTypes = TextProps.type;
Text.defaultProps = TextProps.default;

export default Text;
