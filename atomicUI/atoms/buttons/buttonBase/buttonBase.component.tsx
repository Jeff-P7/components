import React, { FC } from 'react';
import { IButtonBaseChildren, IButtonBaseValue } from './buttonBase';
import ButtonBaseProps from './buttonBase.props';
import classNames from 'classnames';
import { fontColorBasedOnBgColor } from '../../../../shared/utilities/functions';
import { ButtonBaseTypesDict } from './buttonBase.dict';
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

type IProps = IButtonBase;

/**
 * Primary UI component for user interaction
 */
export const ButtonBase: FC<IProps> = (props): JSX.Element => {
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

  const componentClasses: Array<string> = [];
  let componentStyles: Record<string, {}> = {};

  if (classes?.length) componentClasses.push(classesToString(classes));

  const variantStyles: Record<string, any> = {
    contained: [
      !color?.startsWith('#') ? backgroundColorToClass(color!) : '',
      backgroundOpacityToClass(backgroundOpacity!),
    ],
    outlined: [
      borderColorToClass(color!),
      borderStyleToClass(borderStyle!),
      borderWidthToClass(borderWidth!),
      textColorToClass(color!),
      `hover:${borderColorToClass(color!)}`,
    ],
    text: [`hover:bg-${color}-light`, 'hover:bg-opacity-5'],
  };

  const buttonBaseType: Record<string, any> = ButtonBaseTypesDict[variant!][size!];
  componentClasses.push(variantStyles[variant!]);

  // if (variant === 'contained') {
  //   buttonBaseType = ButtonBaseTypesDict.contained[size!];
  //   if (!noShadow) componentClasses.push(...[boxShadowToClass(boxShadow!)]);

  //   componentClasses.push(
  //     ...[
  //       !color?.startsWith('#') ? backgroundColorToClass(color!) : '',
  //       backgroundOpacityToClass(backgroundOpacity!),
  //     ]
  //   );
  // } else if (variant === 'outlined') {
  //   buttonBaseType = ButtonBaseTypesDict.text[size!];

  //   componentClasses.push(
  //     ...[
  //       borderColorToClass(color!),
  //       borderStyleToClass(borderStyle!),
  //       borderWidthToClass(borderWidth!),
  //       textColorToClass(color!),
  //       `hover:${borderColorToClass(color!)}`,
  //     ]
  //   );
  // } else if (variant === 'text') {
  //   buttonBaseType = ButtonBaseTypesDict.text[size!];
  //   componentClasses.push(...[`hover:bg-${color}-light`, 'hover:bg-opacity-5']);
  // }

  if (!fullXY) {
    componentClasses.push(
      ...[
        slim ? buttonBaseType.padding.slim : buttonBaseType.padding.size,
        circle ? 'rounded-full' : borderRadiusToClass(borderRadius!),
      ]
    );
  }

  componentClasses.push(
    ...[
      'cursor-pointer',
      'transition',
      'duration-75',
      marginToClass(margin!),
      ...(hover ? [`hover:bg-${color}-dark`, 'hover:shadow-xl'] : []),
      ...(fullWidth || fullXY ? ['w-full'] : []),
      ...(fullHeight || fullXY ? ['h-full'] : []),
    ]
  );

  // if (color?.startsWith('#')) {
  //   componentStyles = {
  //     ...(variant === 'outlined' && { borderColor: color }),
  //     ...(variant === 'text' && { backgroundColor: color }),
  //     ...(variant === 'contained' && {
  //       backgroundColor: color,
  //       color: fontColorBasedOnBgColor(color),
  //     }),
  //   };
  // }

  const ariaLabel: string =
    typeof children === 'string' ? children : value || 'buttonBase';

  return (
    <>
      <buttonBase
        className={classNames(componentClasses)}
        style={componentStyles}
        onClick={onClick}
        aria-label={ariaLabel}
        role="buttonBase"
      >
        {children}
      </buttonBase>
    </>
  );
};

ButtonBase.propTypes = ButtonBaseProps.type;
ButtonBase.defaultProps = ButtonBaseProps.default;

export default ButtonBase;
