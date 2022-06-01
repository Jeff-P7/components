import React, { FC } from 'react';
import ICard from './card';
import CardProps from './card.props';
import classNames from 'classnames';
import { Div } from '..';
import { classesToString } from '../../../shared';
import { paddingToClass } from '../../../shared/props';
import { variantToClass } from './card.functions';
import { borderStyleToClass } from '../../../shared/tailwindProps/borders/border/border.functions';

import {
  heightToClass,
  widthToClass,
  borderRadiusToClass,
  boxShadowToClass,
  borderWidthToClass,
  borderColorToClass,
  marginToClass,
} from '../../../shared/tailwindProps';

interface IProps extends ICard {}

/**
 * Card Component
 */
export const Card: FC<IProps> = (props): JSX.Element => {
  const {
    backgroundColor,
    borderColor,
    borderRadius,
    borderStyle,
    borderWidth,
    boxShadow,
    children,
    classes,
    height,
    hover,
    hoverBoxShadow,
    margin,
    padding,
    size,
    variant,
    width,
    onMouseEnter,
    onMouseLeave,
  } = props;

  if ((size && height) || (size && width)) {
    debugger;
    throw new Error(
      'Height or width cannot be defined on the same instance of size property'
    );
  }

  const componentClasses: Array<string> = ['card'];
  const componentStyles: Record<string, any> = {};

  if (classes?.length) componentClasses.push(classesToString(classes));

  // if (borderRadius && borderRadius !== 'none') componentClasses.push(`rounded`)

  if (backgroundColor!.startsWith('#'))
    componentStyles['backgroundColor'] = backgroundColor;
  else componentClasses.push(`bg-${backgroundColor}`);

  if (variant === 'outlined') {
    const isBorderColorHex: boolean = Boolean(borderColor?.startsWith('#'));
    if (isBorderColorHex) componentStyles['borderColor'] = borderColor;

    componentClasses.push(
      ...[
        borderStyleToClass(borderStyle!),
        borderWidthToClass(borderWidth!),
        isBorderColorHex ? borderColorToClass(borderColor!) : '',
      ]
    );
  } else if (variant === 'elevated') {
    componentClasses.push(boxShadowToClass(boxShadow!));
  }

  // componentClasses.push(
  //   ...[
  //     'flex', 'flex-col', 'flex-1'
  //   ]
  // );

  componentClasses.push(
    ...[
      // 'cursor-pointer',
      'transition',
      // 'transition-shadow',
      // 'transition-transform',
      'transform',
      'duration-200',
      'mx-auto',
      // 'max-h-96',
      // 'ease-in',
      // `hover:${boxShadowToClass(hoverBoxShadow)}`,
      // 'hover:-translate-y-0.5',

      borderRadiusToClass(borderRadius!),
      heightToClass(height! || size!),
      marginToClass(margin!),
      paddingToClass(padding!),
      widthToClass(width! || size!),
      // hover ? `hover:${boxShadowToClass(hoverBoxShadow)}` : '',
    ]
  );

  if (hover)
    componentClasses.push(
      ...[`hover:${boxShadowToClass(hoverBoxShadow)}`, 'hover:-translate-y-0.5']
    );

  return (
    // <Div colorize>
    <Div
      classes={classNames(componentClasses)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={componentStyles}
      colorize
      highlight
    >
      {children}
    </Div>
    // </Div>
  );
};

// export default Object.assign(Card, {
//   Img: CardImg,
//   Title: CardTitle,
//   Subtitle: CardSubtitle,
//   Body: CardBody,
//   Link: CardLink,
//   Text: CardText,
//   Header: CardHeader,
//   Footer: CardFooter,
//   ImgOverlay: CardImgOverlay,
// });

Card.propTypes = CardProps.type;
Card.defaultProps = CardProps.default;

export default React.memo(Card);
