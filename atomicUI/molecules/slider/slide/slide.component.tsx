import React, { FC } from 'react';
import ISlide from './slide';
import SlideProps from './slide.props';
import classNames from 'classnames';
import { classesToString, purgeEmptyProps } from '../../../../global';
import { Div, Text } from '../../../atoms';
import { paddingToClass, marginToClass } from '../../../../global/tailwindProps';
import 'keen-slider/keen-slider.min.css';

interface IProps extends ISlide {}

/**
 * Slide Component
 */
export const Slide: FC<IProps> = (props): JSX.Element => {
  const { children, classes, styles, padding, margin } = props;
  const componentClasses: Array<string> = [
    'keen-slider__slide',
    paddingToClass(padding!),
    marginToClass(margin!),
  ];
  // if (classes?.length) componentClasses.push(classesToString(classes));

  // const componentStyles: Record<string, any> = { ...styles };
  // const attr: Record<string, any> | null = purgeEmptyProps(properties);
  return (
    <Div classes={classNames(componentClasses, classes)}>
      {children}
    </Div>
  );
};

Slide.propTypes = SlideProps.type;
Slide.defaultProps = SlideProps.default;

export default Slide;
