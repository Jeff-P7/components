import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Divider from './divider.component';
import DividerProps from './divider.props';
import { propToArgTypes } from '../../../global';

export default {
  title: 'Components/Elements/Dividers',
  component: Divider,
  args: DividerProps.default,
  argTypes: propToArgTypes(DividerProps.argType),
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Divider>;

const Base: ComponentStory<typeof Divider> = (args) =>
  args.children ? (
    <Divider {...args}>{args.children}</Divider>
  ) : (
    <Divider {...args} />
  );

export const Default = Base.bind({});

Default.args = {
  /*👇 The args you need here will depend on your component */
};
