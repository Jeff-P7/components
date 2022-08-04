import React, { FC } from 'react';
import { ILinkChildren, ILinkValue } from './link';
import LinkProps from './link.props';
import classNames from 'classnames';
import { default as NextLink } from 'next/link';
import Button from '../button';
import Text from '../text';
import { Message, classesToString } from '../../../global';

type IProps = ILinkChildren | ILinkValue;

/**
 * Link Component
 */
export const Link: FC<IProps> = (props): JSX.Element => {
  const {
    children,
    classes,
    // color,
    // fontSize,
    // fullHeight,
    href,
    value,
    // variant,
  } = props;
  // const componentClasses: Array<string> = [];
  let componentStyles: Record<string, any> = {};

  // if (classes?.length) componentClasses.push(classesToString(classes));
  if (children && value) throw new Error(Message.error.childrenAndValue);

  return (
    <NextLink href={href}>
      <a className={classNames(classes)}>{children}</a>
    </NextLink>
  );
};

Link.propTypes = LinkProps.type;
Link.defaultProps = LinkProps.default;

export default Link;
