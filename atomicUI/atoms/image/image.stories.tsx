import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Image from './image.component';
import ImageProps from './image.props';
import { propToArgTypes } from '../../../global';

export default {
  title: 'Components/Elements/Image',
  component: Image,
  args: ImageProps.default,
  argTypes: propToArgTypes(ImageProps.argType),
} as ComponentMeta<typeof Image>;

//👇 We create a “Image” of how args map to rendering
const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'place',
  height: 100,
  width: 100,
  layout: 'responsive',
  src: 'shit',
};
