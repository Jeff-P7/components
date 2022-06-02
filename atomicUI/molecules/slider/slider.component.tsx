import React, { FC, useState } from 'react';
import ISlider from './slider';
import SliderProps from './slider.props';
import classNames from 'classnames';
import { classesToString, purgeEmptyProps } from '../../../global';
import { Div, Text, Icon } from '../../atoms';
import Styles from './slider.module.scss';

// import "./Slider.styles.scss"
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { marginToClass, paddingToClass } from '../../../global/tailwindProps';
// import { Style } from '@mui/icons-material';

interface IProps extends ISlider {}

/**
 * Slider Component
 */
export const Slider: FC<IProps> = (props): JSX.Element => {
  const { children, classes, styles, padding, margin, perView, dots } = props;

  const componentClasses: Array<string> = [
    'h-96',
    Styles['navigation-wrapper'],
    paddingToClass(padding!),
    marginToClass(margin!),
  ];

  // const componentClasses: Array<string> = []; //NOSONAR
  // if (classes?.length) componentClasses.push(classesToString(classes));

  // const componentStyles: Record<string, any> = { ...styles }; //NOSONAR
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
        spacing: 0,
        // spacing: 15,
      },
    }),
  };

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(keenConfig);

  return (
    <>
      <Div classes={classNames(componentClasses, classes)}>
        <div ref={sliderRef} className="keen-slider">
          {children}
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
      </Div>
      {loaded && instanceRef.current && dots && (
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

Slider.propTypes = SliderProps.type;
Slider.defaultProps = SliderProps.default;

export default Slider;

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
        <path
          style={{ color: 'black' }}
          d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
        />
      )}
    </svg>
  );
}
