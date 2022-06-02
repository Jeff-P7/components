import React, { FC, useState } from 'react';
import ICarouselSpacing from './carouselSpacing';
import CarouselSpacingProps from './carouselSpacing.props';
import classNames from 'classnames';
import { classesToString, purgeEmptyProps } from '../../../global';
import { Div, Text } from '../../../atoms';
import Styles from './carouselSpacing.module.scss';

// import "./carouselSpacing.styles.scss"
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
// import { Style } from '@mui/icons-material';

interface IProps extends ICarouselSpacing {}

/**
 * CarouselSpacing Component
 */
export const CarouselSpacing: FC<IProps> = (props): JSX.Element => {
  const { children, classes, styles, ...properties } = props;

  const componentClasses: Array<string> = []; //NOSONAR
  if (classes?.length) componentClasses.push(classesToString(classes));

  const componentStyles: Record<string, any> = { ...styles }; //NOSONAR
  const attr: Record<string, any> | null = purgeEmptyProps(properties); //NOSONAR

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className={classNames(Styles['navigation-wrapper'])}>
        <div ref={sliderRef} className="keen-slider">
          <div className={`keen-slider__slide ${Styles['number-slide1']}`}>
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
          </div>
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
            ...Array(instanceRef.current.track.details.slides.length).keys(),
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

CarouselSpacing.propTypes = CarouselSpacingProps.type;
CarouselSpacing.defaultProps = CarouselSpacingProps.default;

export default CarouselSpacing;

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={`${Styles.arrow} ${
        props.left ? Styles['arrow--left'] : Styles['arrow--right']
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
