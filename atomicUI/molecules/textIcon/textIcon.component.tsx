import React, { FC } from 'react';
import classNames from 'classnames';
import { default as Text, IText } from '../../atoms/text';
import { default as Icon, IIcon } from '../../atoms/icon';
import { Message } from '../../../global';
// import { classesToString } from '../../../global/props/common';
import { purgeEmptyProps } from '../../../global/shared/functions';
import type { default as TTextIcon } from './textIcon.d';
import TextIconProps from './textIcon.props';
import Div from '../../atoms/div';
import { marginDirectionToClass } from '../sharedProps';

type IProps = TTextIcon;

/**
 * TextIcon UI component for user interaction
 */
export const TextIcon: FC<IProps> = (props): JSX.Element => {
  const {
    align,
    children,
    classes,
    color,
    icon,
    iconRight,
    iconSpace,
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
    hover,
    tag,
    variantNumeric,
    verticalAlign,
    weight,
    whitespace,
    wordBreak,
  } = props;

  if (children && value) throw new Error(Message.error.childrenAndValue);

  const componentClasses: Array<string> = [
    'flex items-center',
    classNames(classes),
  ];
  // let componentStyles: Record<string, {}> = {};
  // if (classes?.length) componentClasses.push(classesToString(classes));

  // const textProps: IText = purgeEmptyProps({
  //   weight,
  //   margin: 'x-0.5',
  //   padding,
  //   color,
  //   tag,
  //   size,
  //   classes: 'align-middle',
  // });
  const marginDirection: string = marginDirectionToClass(iconRight, iconSpace);

  const iconProps: IIcon = purgeEmptyProps({
    value: icon,
    size,
    color,
    inline: true,
    hover,
    margin: marginDirection,
  });

  const textClasses: string = classNames(classes, 'flex items-center');

  const childrenVal = children || value;
  const IconComponent = <Icon {...(iconProps && { ...iconProps })} />;
  const TextComponent = (
    <Text classes={textClasses}>{childrenVal}</Text>
    // <Text {...(textProps && { ...textProps })}>{childrenVal}</Text>
  );

  return (
    <Div classes={componentClasses}>
      {iconRight ? (
        <>
          {TextComponent}
          {IconComponent}
        </>
      ) : (
        <>
          {IconComponent}
          {TextComponent}
        </>
      )}
    </Div>
  );
};

TextIcon.propTypes = TextIconProps.type;
TextIcon.defaultProps = TextIconProps.default;

export default TextIcon;
