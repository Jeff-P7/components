import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from './dropdown.component';
import DropdownProps from './dropdown.props';
import { propToArgTypes } from '../../../shared';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Atoms/Dropdown',
  component: Dropdown,
  // args: DropdownProps.default,
  // argTypes: propToArgTypes(DropdownProps.argType),
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Dropdown>;

//👇 We create a “Dropdown” of how args map to rendering
const Base: ComponentStory<typeof Dropdown> = (args) =>
  args.children ? (
    <Dropdown {...args}>{args.children}</Dropdown>
  ) : (
    <Dropdown {...args} />
  );

export const Default = Base.bind({});
Default.args = {
  /*👇 The args you need here will depend on your component */
};
