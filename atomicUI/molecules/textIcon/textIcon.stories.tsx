import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextIcon from './textIcon.component';
import TextIconProps from './textIcon.props';
import { propToArgTypes } from '../../../global';

export default {
  title: 'Components/Elements/Texts/TextIcon',
  component: TextIcon,
  args: TextIconProps.default,
  argTypes: propToArgTypes(TextIconProps.argType),
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof TextIcon>;

const Template: ComponentStory<typeof TextIcon> = (args) =>
  args.children ? <TextIcon {...args}>{args.children}</TextIcon> : <TextIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'This is some textIcon',
};

export const HexColor = Template.bind({});
HexColor.args = {
  children: 'This is some textIcon',
  color: '#facc15'
};

