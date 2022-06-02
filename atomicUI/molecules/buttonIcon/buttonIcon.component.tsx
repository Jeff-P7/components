import React, { FC } from 'react';
import type { TButtonIcon } from './buttonIcon.d';
import ButtonIconProps from './buttonIcon.props';
import { default as Button, TButton } from '../../atoms/button';
// import { default as TextIcon, ITextIcon } from '../textIcon';
import { purgeEmptyProps } from '../../../global/shared';
import { Icon } from '../../atoms';
import classNames from 'classnames';
import { marginDirectionToClass } from '../sharedProps';

type IProps = TButtonIcon;

/**
 * Primary UI component for user interaction
 */
export const ButtonIcon: FC<IProps> = (props): JSX.Element => {
  const {
    backgroundOpacity,
    borderRadius,
    children,
    classes,
    circle,
    color,
    fontAlign,
    fontColor,
    fontSize,
    fontWeight,
    fullHeight,
    fullWidth,
    fullXY,
    icon,
    iconSpace,
    iconRight,
    // iconSize,
    margin,
    noShadow,
    noSpace,
    padding,
    size,
    slim,
    value,
    variant,
    onClick,
  } = props;

  const componentClasses: Array<string> = ['flex items-center'];
  let componentStyles: Record<string, any> = {};

  // const buttonProps: TButton = purgeEmptyProps({
  //   backgroundOpacity,
  //   borderRadius,
  //   circle,
  //   color,
  //   margin,
  //   padding,
  //   size,
  //   slim,
  //   variant,
  //   fontSize,
  //   fullWidth,
  //   onClick,
  //   classes: classNames(componentClasses, classes),
  // });

  // const textIconProps: ITextIcon = purgeEmptyProps({
  //   children,
  //   fontSize,
  //   icon,
  //   iconRight,
  //   value,
  //   color: fontColor,
  // });
  const marginDirection: string = marginDirectionToClass(iconRight, iconSpace);

  const IconComponent = (
    <Icon margin={marginDirection} value={icon} size={fontSize} inline />
  );

  const buttonClasses: string = classNames(classes, 'flex items-center');
  const childrenVal: string = typeof children === 'string' ? children : value!;

  return (
    // <Button {...(buttonProps && { ...buttonProps })}>
    <Button
      classes={buttonClasses}
      circle={circle}
      color={color}
      margin={margin}
      padding={padding}
      size={size}
      slim={slim}
      variant={variant}
      fullWidth={fullWidth}
      fontAlign={fontAlign}
    >
      {iconRight ? (
        <>
          {childrenVal}
          {IconComponent}
        </>
      ) : (
        <>
          {IconComponent}
          {childrenVal}
        </>
      )}
    </Button>
  );
};

ButtonIcon.propTypes = ButtonIconProps.type;
ButtonIcon.defaultProps = ButtonIconProps.default;

export default ButtonIcon;
