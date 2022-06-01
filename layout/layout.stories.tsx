import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Layout from './layout.component';
import LayoutProps from './layout.props';
import { propToArgTypes } from '../shared';

export default {
  title: 'Components/Layout',
  component: Layout,
  args: LayoutProps.default,
  argTypes: propToArgTypes(LayoutProps.argType),
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Layout>;

const Base: ComponentStory<typeof Layout> = (args) =>
  args.children ? (
    <Layout {...args}>{args.children}</Layout>
  ) : (
    <Layout {...args} />
  );

export const Default = Base.bind({});

Default.args = {
  /*👇 The args you need here will depend on your component */
};
