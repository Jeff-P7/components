import React, { FC } from 'react';
// import ICardContent from './CardContent.d';
// import CardContentProps from './CardContent.props';
import classNames from 'classnames';
import { classesToString, purgeEmptyProps } from '../../../../shared';
import { Div, Text, Image } from '../..';
import type { IDiv } from '../../div';
import PropTypes from 'prop-types';

interface IProps extends IDiv {
  noBorder?: boolean;
  // img: string;
  // position?: string;
  // height: number;
  // width: number;
}

/**
 * CardContent Component
 */
export const CardContent: FC<IProps> = (props): JSX.Element => {
  const { children, classes, styles, padding, margin } = props;
  // const componentClasses: Array<string> = [];
  // if (classes?.length) componentClasses.push(classesToString(classes));

  // const componentStyles: Record<string, any> = { ...styles };
  // const attr: Record<string, any> | null = purgeEmptyProps(properties);

  return (
    <Div
      padding={padding}
      margin={margin}
      // classes={classNames(componentClasses)}
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
  noBorder: bool,
};

const defaultProps: IProps = {
  noBorder: false,
};

CardContent.propTypes = propTypes;
CardContent.defaultProps = defaultProps;

export default CardContent;
