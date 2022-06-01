import React, { FC } from 'react';
import { TButton } from './button';
import ButtonProps from './button.props';
import classNames from 'classnames';
import { ButtonTypesDict } from './button.dict';
import { classesToString } from '../../../shared/props/common/common.functions';
import {
  backgroundColorToClass,
  backgroundOpacityToClass,
  borderOpacityToClass,
  borderColorToClass,
  borderRadiusToClass,
  borderStyleToClass,
  borderWidthToClass,
  boxShadowToClass,
  marginToClass,
  // paddingToClass,
  textColorToClass,
  fontSizeToClass,
} from '../../../shared/tailwindProps';

type IProps = TButton;

/**
 * Primary UI component for user interaction
 */
export const Button: FC<IProps> = (props): JSX.Element => {
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
    fontAlign,
    fontColor,
    // fontSize,
    hover,
    fontSize,
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
    padding,
    textColor,
    size,
    slim,
    value,
    variant,
    onClick,
  } = props;

  const componentClasses: Array<string> = [];
  let componentStyles: Record<string, {}> = {};

  // if (classes?.length) componentClasses.push(classesToString(classes));
  // if (children && value) throw new Error(Message.error.childrenAndValue);

  const variantStyles: Record<string, any> = {
    contained: [
      // base
      'transform',
      'text-white',
      !color?.startsWith('#') ? backgroundColorToClass(color!) : '',
      backgroundOpacityToClass(backgroundOpacity!),
      textColorToClass('white'),
      // focus
      `focus:ring-4`,
      `focus:ring-${color}`,
      `focus:ring-opacity-${30}`,
      // hover
      `hover:bg-${color}-dark`,
      // 'hover:shadow-lg',
      // 'hover:-translate-y-0.5',
      // active
      // 'active:translate-y-0',
      // 'active:shadow-none',
    ],
    outlined: [
      // base
      borderColorToClass(color!),
      borderOpacityToClass(30),
      borderStyleToClass(borderStyle!),
      borderWidthToClass(borderWidth!),
      textColorToClass(fontColor!),
      // hover
      `hover:${borderColorToClass(color!)}`,
      // 'hover:border-8',
      `hover:bg-${color}`,
      'hover:text-white',
      // `hover:bg-${color}-light`,
      // 'hover:bg-opacity-10',
    ],
    text: [
      textColorToClass(fontColor!),
      ...(hover ? [`hover:bg-${color}-light`, 'hover:bg-opacity-10'] : []),
    ],
  };

  const buttonSize: Record<string, any> = ButtonTypesDict[variant!][size!];
  componentClasses.push(variantStyles[variant!]);

  // if (variant === 'contained') {
  //   buttonType = ButtonTypesDict.contained[size!];
  //   if (!noShadow) componentClasses.push(...[boxShadowToClass(boxShadow!)]);

  //   componentClasses.push(
  //     ...[
  //       !color?.startsWith('#') ? backgroundColorToClass(color!) : '',
  //       backgroundOpacityToClass(backgroundOpacity!),
  //     ]
  //   );
  // } else if (variant === 'outlined') {
  //   buttonType = ButtonTypesDict.text[size!];

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
  //   buttonType = ButtonTypesDict.text[size!];
  //   componentClasses.push(...[`hover:bg-${color}-light`, 'hover:bg-opacity-5']);
  // }

  if (!fullXY) {
    componentClasses.push(
      ...[
        slim ? buttonSize.padding.slim : buttonSize.padding.size,
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
      fullWidth || fullXY ? 'w-full' : '',
      fullHeight || fullXY ? 'h-full' : '',
      fontAlign ? `text-${fontAlign}` : '',
      ...(hover && variant !== 'text'
        ? [`hover:bg-${color}-dark`, 'hover:shadow-xl']
        : []),
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

  // Typography Classes
  componentClasses.push(...[fontSizeToClass(fontSize!)]);

  const childrenVal: string = typeof children === 'string' ? children : value!;
  const ariaLabel: string = childrenVal || 'button';

  return (
    <>
      <button
        className={classNames(componentClasses, classes)}
        style={componentStyles}
        onClick={onClick}
        aria-label={ariaLabel}
        role="button"
      >
        {childrenVal.length ? childrenVal : children}
      </button>
    </>
  );
};

Button.propTypes = ButtonProps.type;
Button.defaultProps = ButtonProps.default;

export default Button;
