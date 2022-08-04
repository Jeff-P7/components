import React, { FC } from 'react';
// import ICardImg from './CardImg.d';
// import CardImgProps from './CardImg.props';
import classNames from 'classnames';
import { classesToString, purgeEmptyProps } from '../../../../global';
import { Div, Text, Image } from '../..';
import type { IDiv } from '../../div';
import PropTypes from 'prop-types';

interface IProps extends IDiv {
  img: string;
  position?: string;
  height: number;
  width: number;
}

/**
 * CardImg Component
 */
export const CardImg: FC<IProps> = (props): JSX.Element => {
  const { children, classes, styles, img, height, width } = props;
  // const componentClasses: Array<string> = [];
  // if (classes?.length) componentClasses.push(classesToString(classes));

  // const componentStyles: Record<string, any> = { ...styles };
  // const attr: Record<string, any> | null = purgeEmptyProps(properties);
  return (
    <Image src={img} height={height} width={width} />
    // <Div
    //   classes={classNames(componentClasses)}
    //   styles={componentStyles}
    //   {...(attr && { ...attr })}
    // >
    //   <Text size="8xl" align="center">
    //     WHy, hellO theRe {children}
    //   </Text>
    // </Div>
  );
};

const { string, number } = PropTypes;
CardImg.propTypes = {
  img: string,
  position: string,
  height: number,
  width: number,
};

CardImg.defaultProps = CardImgProps.default;

export default CardImg;
