import React, { FC, useState } from 'react';
import ICarousel from './carousel';
import CarouselProps from './carousel.props';
import classNames from 'classnames';
import { classesToString, purgeEmptyProps } from '../../../global';
import { Div, Text, Icon } from '../../../atoms';
import Styles from './carousel.module.scss';

// import "./carousel.styles.scss"
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
// import { Style } from '@mui/icons-material';

interface IProps extends ICarousel {}

/**
 * Carousel Component
 */
export const Carousel: FC<IProps> = (props): JSX.Element => {
  const { children, classes, Component, styles, perView, data } = props;

  const componentClasses: Array<string> = []; //NOSONAR
  if (classes?.length) componentClasses.push(classesToString(classes));

  const componentStyles: Record<string, any> = { ...styles }; //NOSONAR
  // const attr: Record<string, any> | null = purgeEmptyProps(properties); //NOSONAR

  const keenConfig: Record<string, any> = {
    initial: 0,
    slideChanged(slider: any) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    ...(perView && {
      slides: {
        perView: perView,
        spacing: 5,
        // spacing: 15,
      },
    }),
  };

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(keenConfig);

  return (
    <>
      <div className={classNames(Styles['navigation-wrapper'])}>
        <div ref={sliderRef} className="keen-slider">
          {Object.keys(data).map((item, index) => (
            <div className="keen-slider__slide my-2" key={index}>
              <Component {...item} />
              {/* {React.cloneElement(Component, item, null)} */}
            </div>
          ))}
          {/* <div className={`keen-slider__slide ${Styles['number-slide1']}`}>
            1
          </div>
          <div className={`keen-slider__slide ${Styles['number-slide2']}`}>
            2
          </div>
          <div className={`keen-slider__slide ${Styles['number-slide3']}`}>
            3
          </div>
          <div className={`keen-slider__slide ${Styles['number-slide4']}`}>
            4
          </div>
          <div className={`keen-slider__slide ${Styles['number-slide5']}`}>
            5
          </div>
          <div className={`keen-slider__slide ${Styles['number-slide6']}`}>
            6
          </div> */}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className={Styles.dots}>
          {[
            ...Array(
              instanceRef.current.track.details.slides.length - 3
            ).keys(),
            // ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={
                  Styles.dot + ' ' + (currentSlide === idx ? Styles.active : '')
                }
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
};

Carousel.propTypes = CarouselProps.type;
Carousel.defaultProps = CarouselProps.default;

export default Carousel;

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? ' arrow--disabled' : '';
  const arrowDirection: string = props.left
    ? Styles['arrow--left']
    : Styles['arrow--right'];

  return (
    <svg
      onClick={props.onClick}
      className={`fill-black ${Styles.arrow} ${arrowDirection} ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={{ fill: 'black' }}
    >
      {props.left && (
        // <Icon value="MdChevronLeft" size="4xl"/>
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        // <Icon value="MdChevronRight" size="4xl"/>
        <path style={{color: 'black'}} d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
