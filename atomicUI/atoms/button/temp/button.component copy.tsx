// import React, { FC } from 'react';
// import { IButtonChildren, IButtonValue, IButtonIcon } from './button';
// import ButtonProps from './button.props';
// import classNames from 'classnames';
// import { fontColorBasedOnBgColor } from '../../global/shared/functions';
// import { ButtonTypesDict } from './button.dict';
// import { default as Icon, IconDictTypes } from '../icon';
// import Text from '../text';
// import {
//   TColor,
//   TFontSize,
//   Message,
//   textColorToClass,
//   backgroundColorToClass,
//   borderColorToClass,
//   backgroundOpacityToClass,
// } from '../../global';
// import { marginToClass } from '../../global/tailwindProps';

// type IProps = IButtonChildren | IButtonValue | IButtonIcon;

// /**
//  * Primary UI component for user interaction
//  */
// export const Button: FC<IProps> = (props): JSX.Element => {
//   const {
//     backgroundOpacity,
//     borderRadius,
//     children,
//     circle,
//     color,
//     fontColor,
//     fontSize,
//     fontWeight,
//     fullHeight,
//     fullWidth,
//     fullXY,
//     icon,
//     iconRight,
//     iconSize,
//     margin,
//     noShadow,
//     noSpace,
//     padding,
//     size,
//     slim,
//     value,
//     variant,
//     onClick,
//   } = props;

//   const componentClasses: Array<string> = [];
//   let componentStyles: Record<string, any> = {};
//   const paddingClasses: Array<string> = [];
//   const borderRadiusClasses: Array<string> = [];

//   if (children && value) throw new Error(Message.error.childrenAndValue);

//   let buttonType: Record<string, any> | null = null;

//   if (variant === 'contained') {
//     buttonType = ButtonTypesDict.contained[size!];
//     if (!noShadow)
//       componentClasses.push(
//         ...['shadow-lg', `hover:bg-${color}-dark`, 'hover:shadow-xl']
//       );

//     componentClasses.push(
//       ...[
//         !color?.startsWith('#') ? `bg-${color}` : '',
//         backgroundOpacityToClass(backgroundOpacity),
//       ]
//     );
//   } else if (variant === 'outlined') {
//     buttonType = ButtonTypesDict.text[size!];

//     componentClasses.push(
//       ...[
//         'border-solid',
//         'border',
//         borderColorToClass(color!),
//         textColorToClass(color!),
//         // `border-${color}-light`,
//         // `text-${color}-light`,
//         'rounded-lg',
//         `hover:border-${color}`,
//       ]
//     );
//   } else if (variant === 'text') {
//     buttonType = ButtonTypesDict.text[size!];
//     componentClasses.push(...[`hover:bg-${color}-light`, 'hover:bg-opacity-5']);
//   }

//   if (slim || icon) paddingClasses.push(buttonType!.padding.slim);
//   else if (!fullXY) paddingClasses.push(...buttonType!.padding.size);

//   if (circle) borderRadiusClasses.push('rounded-full');
//   else if (!fullXY) borderRadiusClasses.push(`rounded-${borderRadius}`);

//   componentClasses.push(
//     ...[
//       'cursor-pointer',
//       'transition',
//       'duration-75',
//       margin && marginToClass(margin),
//       ...(borderRadiusClasses && [borderRadiusClasses]),
//       ...(paddingClasses && !noSpace ? [paddingClasses] : []),
//       ...(fullWidth || fullXY ? ['w-full'] : []),
//       ...(fullHeight || fullXY ? ['h-full'] : []),
//     ]
//   );

//   if (color?.startsWith('#')) {
//     componentStyles = {
//       ...(variant === 'outlined' && { borderColor: color }),
//       ...(variant === 'text' && { backgroundColor: color }),
//       ...(variant === 'contained' && {
//         backgroundColor: color,
//         color: fontColorBasedOnBgColor(color),
//       }),
//     };
//   }

//   // Sets either Icon or Text component depending on the children value of string
//   let IconComponent: React.ReactNode | null = null;
//   let TextComponent: React.ReactNode | null = null;
//   let ChildComponent: Array<React.ReactNode> = [];
//   if (typeof children === 'string' || value) {
//     const _value: string | null = children!.toString() || value || null;
//     const _fontSize: TFontSize = fontSize || buttonType!.fontSize;
//     const _fontColor: TColor = fontColor || 'black';
//     // const iconInitials: string = icon.substring(0, 2);
//     const isIcon: boolean = IconDictTypes.includes(icon);
//     const childProps: Record<string, any> = {
//       size: _fontSize,
//       color: _fontColor,
//     };

//     if (icon && !isIcon) throw new Error('Icon name value is incorrect');

//     if (isIcon && !_value)
//       IconComponent = <Icon name={icon} classes="block" {...childProps} />;
//     else TextComponent = <Text value={_value!} {...childProps} />;

//     // const IconPaddingDict: Record<string, any> = {
//     //   xs: { y: 1, x: 1 },
//     //   sm: { y: 1, x: 1 },
//     //   md: { y: 1, x: 1 },
//     //   lg: { y: 1, x: 1 },
//     //   xl: { y: 1, x: 1 },
//     //   '2xl': { y: 1, x: 1 },
//     //   '3xl': { y: 1, x: 1 },
//     //   '4xl': { y: 1, x: 1 },
//     //   '5xl': { y: 1, x: 1 },
//     //   '6xl': { y: 1, x: 1 },
//     //   '7xl': { y: 1, x: 1 },
//     //   '8xl': { y: 1, x: 1 },
//     //   '9xl': { y: 1, x: 1 },
//     // };

//     const IconPaddingDict: Record<string, any> = {
//       xs: 2,
//       sm: 1,
//       base: 0,
//       lg: 1.5,
//       xl: 2,
//       '2xl': 2,
//       '3xl': 3,
//       '4xl': 3,
//       '5xl': 3,
//       '6xl': 3,
//       '7xl': 3,
//       '8xl': 3,
//       '9xl': 3,
//     };

//     if (icon && _value) {
//       const iconPadding: number = IconPaddingDict[_fontSize];

//       TextComponent = <Text value={_value} {...childProps} inline />;
//       IconComponent = (
//         <Icon
//           name={icon}
//           // classes={iconRight ? `ml-${iconPadding}` : `mr-${iconPadding}`}
//           // margin={`t-${iconPadding}`}
//           {...childProps}
//           inline
//         />
//       );

//       if (iconRight) ChildComponent.push(...[TextComponent, IconComponent]);
//       else ChildComponent.push(...[IconComponent, TextComponent]);
//     } else ChildComponent.push(isIcon ? IconComponent : TextComponent);
//   }

//   const ariaLabel: string =
//     typeof children === 'string' ? children : value || icon || 'button';

//   return (
//     <>
//       <button
//         className={classNames(componentClasses)}
//         style={componentStyles}
//         onClick={onClick}
//         aria-label={ariaLabel}
//         role="button"
//       >
//         {ChildComponent.length
//           ? ChildComponent.map((Component: React.ReactNode, index: number) => (
//               <React.Fragment key={index}>{Component}</React.Fragment>
//             ))
//           : children}
//       </button>
//     </>
//   );
// };

// Button.propTypes = ButtonProps.type;
// Button.defaultProps = ButtonProps.default;

// export default Button;
