import React, { FC } from 'react';
import ICarousel from './carousel';
import CarouselProps from './carousel.props';
import classNames from 'classnames';
import { classesToString, purgeEmptyProps } from '../../../global';
import { Div, Text } from '../../../atoms';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './carousel.styles.scss';

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);

interface IProps extends ICarousel {}

/**
 * Carousel Component
 */
export const Carousel: FC<IProps> = (props): JSX.Element => {
  const { children, classes, styles, ...properties } = props;
  const componentClasses: Array<string> = []; //NOSONAR
  if (classes?.length) componentClasses.push(classesToString(classes));

  const componentStyles: Record<string, any> = { ...styles }; //NOSONAR
  const attr: Record<string, any> | null = purgeEmptyProps(properties); //NOSONAR
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};

Carousel.propTypes = CarouselProps.type;
Carousel.defaultProps = CarouselProps.default;

export default Carousel;
