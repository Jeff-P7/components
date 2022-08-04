import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import List from './list.component';
import ListProps from './list.props';
import { propToArgTypes } from '../../../global';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Lists',
  component: List,
  args: ListProps.default,
  argTypes: propToArgTypes(ListProps.argType),
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof List>;

//👇 We create a “List” of how args map to rendering
const Base: ComponentStory<typeof List> = (args) =>
  args.children ? (
    <List {...args}>{args.children}</List>
  ) : (
    <List {...args} />
  );

export const Default = Base.bind({});
Default.args = {
  /*👇 The args you need here will depend on your component */
};
