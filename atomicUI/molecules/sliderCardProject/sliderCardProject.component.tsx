import React, { FC } from 'react';
import ISliderCardProject from './sliderCardProject';
import SliderCardProjectProps from './sliderCardProject.props';
import classNames from 'classnames';
import { classesToString, purgeEmptyProps } from '../../../global';
import { Div, Text } from '../../atoms';
import { Slider } from '../slider/slider.component';
import { Slide } from '../slider/slide/slide.component';
import { default as CardProject } from '../cardProject';
import Faker from 'faker';
import { range } from '../../../../utilities';

interface IProps extends ISliderCardProject {}

/**
 * SliderCardProject Component
 */
export const SliderCardProject: FC<IProps> = (props): JSX.Element => {
  const { children, classes, styles } = props;
  // const componentClasses: Array<string> = [];
  // if (classes?.length) componentClasses.push(classesToString(classes));

  // const componentStyles: Record<string, any> = { ...styles };
  // const attr: Record<string, any> | null = purgeEmptyProps(properties);

  // const cardProjectData: Record<string, any> = {
  //   author: `${Faker.name.firstName()} ${Faker.name.lastName()}`,
  //   image: 'https://source.unsplash.com/random',
  //   title: Faker.commerce.productName(),
  //   description: Faker.lorem.sentence(),
  //   watchers: Faker.datatype.number(),
  //   likes: Faker.datatype.number(),
  //   boolPrivate: Faker.datatype.boolean(),
  //   save: Faker.datatype.boolean(),
  //   notify: Faker.datatype.boolean(),
  //   contributors: Faker.datatype.number(),
  // };

  // const cardProjectDataList: Array<string> = range(1, 10, 1).map(
  //   (item: any) => cardProjectData
  // );

  return (
    <Slider padding="y-7" perView={5}>
      {range(1, 10, 1).map((item: {}, index: number) => (
        <Slide key={index}>
          {/* <CardProject {...item} /> */}
          <CardProject
            author={`${Faker.name.firstName()} ${Faker.name.lastName()}`}
            image="https://source.unsplash.com/random"
            title={Faker.commerce.productName()}
            description={Faker.lorem.sentence()}
            watchers={Faker.datatype.number()}
            likes={Faker.datatype.number()}
            boolPrivate={Faker.datatype.boolean()}
            save={Faker.datatype.boolean()}
            notify={Faker.datatype.boolean()}
            contributors={Faker.datatype.number()}
          />
        </Slide>
      ))}
    </Slider>
  );
};

SliderCardProject.propTypes = SliderCardProjectProps.type;
SliderCardProject.defaultProps = SliderCardProjectProps.default;

export default SliderCardProject;
