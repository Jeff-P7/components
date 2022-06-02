import React, { FC } from 'react';
// import { ILinkButtonChildren, ILinkButtonValue } from './linkButton';
import LinkButtonProps from './linkButton.props';
// import classNames from 'classnames';
// import { default as NextLinkButton } from 'next/linkButton';
import { default as Button, IButton } from '../../atoms/button';
// import Text from '../text';
import { Message, classesToString } from '../../../global';
import { TLinkButton } from './linkButton';
import { default as Link, ILink } from '../../atoms/link';
import { purgeEmptyProps } from '../../../global/shared/functions';

// type IProps = ILinkButtonChildren | ILinkButtonValue;
type IProps = TLinkButton;

/**
 * LinkButton Component
 */
export const LinkButton: FC<IProps> = (props): JSX.Element => {
  const {
    children,
    classes,
    color,
    fontSize,
    fullHeight,
    fullWidth,
    hover,
    href,
    value,
    variant,
    margin,
    padding,
    size,
    circle,
  } = props;
  // const componentClasses: Array<string> = [];
  // let componentStyles: Record<string, any> = {};

  // if (classes?.length) componentClasses.push(classesToString(classes));
  if (children && value) throw new Error(Message.error.childrenAndValue);

  // const buttonProps: IButton = purgeEmptyProps({
  //   color,
  //   fontSize,
  //   fullHeight,
  //   hover,
  //   margin,
  //   padding,
  //   variant,
  //   classes,
  //   size,
  //   fullWidth,
  //   circle,
  // });

  const childrenVal: string = children?.toString() || value!;

  return (
    <Link href={href}>
      {/* <Button {...(buttonProps && { ...buttonProps })}>{childrenVal}</Button> */}
      <Button
        classes={classes}
        circle={circle}
        color={color}
        margin={margin}
        padding={padding}
        size={size}
        variant={variant}
        fontSize={fontSize}
      >
        {childrenVal}
      </Button>
    </Link>
  );
};

LinkButton.propTypes = LinkButtonProps.type;
LinkButton.defaultProps = LinkButtonProps.default;

export default LinkButton;
