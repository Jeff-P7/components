import React, { FC } from 'react';
import { IButtonChildren, IButtonValue } from './button';
import ButtonProps from './button.props';
import classNames from 'classnames';
import {
  fontColorBasedOnBgColor,
  purgeEmptyProps,
} from '../../../../shared/utilities/functions';
import { ButtonTypesDict } from './button.dict';
import { default as Icon, IconDictTypes } from '../../icon';
import Text from '../../text';
import { Message } from '../../../../shared';
import { classesToString } from '../../../../shared/props/common/common.functions';
import {
  backgroundColorToClass,
  backgroundOpacityToClass,
  borderColorToClass,
  borderRadiusToClass,
  borderStyleToClass,
  borderWidthToClass,
  boxShadowToClass,
  marginToClass,
  // paddingToClass,
  textColorToClass,
} from '../../../../shared/tailwindProps';

import type { IButton } from '../../button';

type IProps = IButtonChildren | IButtonValue;

/**
 * Primary UI component for user interaction
 */
export const Button: FC<IProps> = (props): JSX.Element => {
  const {
    backgroundOpacity,
    borderRadius,
    borderStyle,
    borderWidth,
    boxShadow,
    children,
    classes,
    circle,
    color,
    fontColor,
    fontSize,
    hover,
    // fontSize,
    // fontWeight,
    fullHeight,
    fullWidth,
    fullXY,
    // icon,
    // iconRight,
    // iconSize,
    margin,
    noShadow,
    // noSpace,
    // padding,
    size,
    slim,
    value,
    variant,
    onClick,
  } = props;

  // const componentClasses: Array<string> = [];
  // let componentStyles: Record<string, {}> = {};

  // if (classes?.length) componentClasses.push(classesToString(classes));
  if (children && value) throw new Error(Message.error.childrenAndValue);

  const childrenVal: string = children || value;

  const buttonProps: IButton = purgeEmptyProps({
    classes,
    onClick,
  });

  return (
    <>
      <Button {...(buttonProps && { ...buttonProps })}>
        <Text size={fontSize}>{childrenVal}</Text>
      </Button>
    </>
  );
};

Button.propTypes = ButtonProps.type;
Button.defaultProps = ButtonProps.default;

export default Button;
