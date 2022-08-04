import React, { FC } from 'react';
// import ICardContent from './CardContent.d';
// import CardContentProps from './CardContent.props';
import classNames from 'classnames';
import { classesToString, purgeEmptyProps } from '../../../../global';
import { Div, Text, Image } from '../..';
import type { IDiv } from '../../div';
import PropTypes from 'prop-types';

interface IProps extends IDiv {
  absolute?: boolean;
}

/**
 * CardContent Component
 */
export const CardContent: FC<IProps> = (props): JSX.Element => {
  const { children, classes, styles, absolute, padding, margin } = props;
  
  const componentClasses: Array<string> = [
    absolute ? 'absolute inset-x-0 top-0 flex flex-wrap items-center' : '',
  ];

  // const stylesDict: Record<string, any> = {
  //   absolute: 'absolute inset-x-0 top-0 flex flex-wrap items-center'
  // };

  // componentClasses.push(stylesDict[])

  // if (classes?.length) componentClasses.push(classesToString(classes));

  // const componentStyles: Record<string, any> = { ...styles };
  // const attr: Record<string, any> | null = purgeEmptyProps(properties);

  return (
    <Div
      padding={padding}
      margin={margin}
      classes={classNames(componentClasses)}
      // styles={componentStyles}
      // {...(attr && { ...attr })}
      colorize
      highlight
    >
      {children}
    </Div>
  );
};

const { string, number, bool } = PropTypes;
const propTypes: { [key in keyof IProps]: any } = {
  absolute: bool,
};

const defaultProps: IProps = {
  absolute: false,
};

CardContent.propTypes = propTypes;
CardContent.defaultProps = defaultProps;

export default CardContent;
