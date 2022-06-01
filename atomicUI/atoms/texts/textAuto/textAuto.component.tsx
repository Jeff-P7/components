import React, { FC } from 'react';
import classNames from 'classnames';
import type { ITextAutoChildren, ITextAutoValue } from './textAuto';
import {
  fontSizeToClass,
  fontSmoothingToClass,
  fontVariantNumericToClass,
  fontWeightToClass,
  letterSpacingToClass,
  lineHeightToClass,
  marginToClass,
  paddingToClass,
  textAutoAlignToClass,
  textAutoColorToClass,
  textAutoOverflowToClass,
  textAutoTransformToClass,
  verticalAlignToClass,
  whitespaceToClass,
  wordBreakToClass,
} from '../../global/tailwindProps';
import TextAutoProps from './textAuto.props';
import { Message } from '../../global';
import { classesToString } from '../../global/props/common';
import { purgeEmptyProps } from '../../global/shared/functions';

type IProps = ITextAutoChildren | ITextAutoValue;

/**
 * TextAuto UI component for user interaction
 */
export const TextAuto: FC<IProps> = (props): JSX.Element => {
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
  else componentClasses.push(textAutoColorToClass(color!));

  componentClasses.push(
    ...[
      fontSizeToClass(size!),
      fontSmoothingToClass(smoothing!),
      fontVariantNumericToClass(variantNumeric!),
      fontWeightToClass(weight!),
      letterSpacingToClass(letterSpacing),
      lineHeightToClass(lineHeight),
      marginToClass(margin!),
      paddingToClass(padding!),
      textAutoAlignToClass(align!),
      textAutoOverflowToClass(overflow!),
      textAutoTransformToClass(transform!),
      verticalAlignToClass(verticalAlign),
      whitespaceToClass(whitespace),
      wordBreakToClass(wordBreak),
      inline ? 'inline' : '',
      italic ? 'italic' : '',
    ]
  );

  const textAutoSizeToElementDict: Record<string, string> = {
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
    paragraph: 'p',
  };

  const componentProps: Record<string, {}> = purgeEmptyProps({
    className: classNames(componentClasses),
    style: componentStyles,
  });

  // Setting element to paragraph if characters greater than 75
  let strElement: string;
  let elementSize: string;
  if (typeof children === 'string' || value) {
    if (size) {
      if (value?.length) elementSize = value.length > 75 ? 'paragraph' : size;
      else if (typeof children === 'string') {
        elementSize = children.length > 75 ? 'paragraph' : size;
      }
    } else elementSize = 'base';
  } else elementSize = 'p';

  strElement = textAutoSizeToElementDict[elementSize!];
  const childrenVal = children || value;

  // if (strElement === undefined) debugger;
  // return React.createElement(`${strElement!}`, componentProps, childrenVal);

  return typeof children === 'string' || value ? (
    React.createElement(`${strElement!}`, componentProps, childrenVal)
  ) : (
    <p className={classNames(componentClasses)} style={componentStyles}>
      {childrenVal}
    </p>
  );

  // return (
  //   <p className={classNames(componentClasses)} style={componentStyles}>
  //     {children || value}
  //   </p>
  // );
};

TextAuto.propTypes = TextAutoProps.type;
TextAuto.defaultProps = TextAutoProps.default;

export default TextAuto;
