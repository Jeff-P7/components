import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Div from './div.component';
import DivProps from './div.props';
import { propToArgTypes } from '../../../shared';

export default {
  title: 'Components/Elements/Div',
  component: Div,
  args: DivProps.default,
  argTypes: propToArgTypes(DivProps.argType),
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Div>;

const Template: ComponentStory<typeof Div> = (args) =>
  args.children ? <Div {...args}>{args.children}</Div> : <Div {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'This is some Div',
};

export const Colorized = Template.bind({});
Colorized.args = {
  children: 'This is some Div',
  colorize: true,
};
