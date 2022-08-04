import React, { FC } from 'react';
import ButtonValProps from './buttonVal.props';
import { default as Button, IButton } from '../../button';
import type IButtonVal from './buttonVal';
import { purgeEmptyProps } from '../../../../global';

type IProps = IButtonVal;

/**
 * Primary UI component for user interaction
 */
export const ButtonVal: FC<IProps> = (props): JSX.Element => {
  const {
    backgroundOpacity,
    borderRadius,
    borderStyle,
    borderWidth,
    // boxShadow,
    children,
    classes,
    circle,
    color,
    // fontColor,
    // fontSize,
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
    // noShadow,
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

  const buttonProps: IButton = purgeEmptyProps({
    backgroundOpacity,
    borderRadius,
    borderStyle,
    borderWidth,
    circle,
    classes,
    fullHeight,
    fullWidth,
    fullXY,
    margin,
    onClick,
    size,
    variant,
  });

  return <Button {...(buttonProps && { ...buttonProps })}>{value}</Button>;
};

Button.propTypes = ButtonValProps.type;
Button.defaultProps = ButtonValProps.default;

export default ButtonVal;
