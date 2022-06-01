import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Text from './text.component';
import TextProps from './text.props';
import { propToArgTypes } from '../../../shared';

export default {
  title: 'Components/Elements/Texts/Text',
  component: Text,
  args: TextProps.default,
  argTypes: propToArgTypes(TextProps.argType),
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) =>
  args.children ? <Text {...args}>{args.children}</Text> : <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'This is some text',
};

export const HexColor = Template.bind({});
HexColor.args = {
  children: 'This is some text',
  color: '#facc15'
};

