import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LinkButtonIcon from './linkButtonIcon.component';
import LinkButtonIconProps from './linkButtonIcon.props';
import { propToArgTypes } from '../../../global';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Elements/Links/LinkButtonIcons',
  component: LinkButtonIcon,
  args: LinkButtonIconProps.default,
  argTypes: propToArgTypes(LinkButtonIconProps.argType),
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof LinkButtonIcon>;

//👇 We create a “LinkButtonIcon” of how args map to rendering
const Base: ComponentStory<typeof LinkButtonIcon> = (args) =>
  args.children ? (
    <LinkButtonIcon {...args}>{args.children}</LinkButtonIcon>
  ) : (
    <LinkButtonIcon {...args} />
  );

export const Default = Base.bind({});
Default.args = {
  /*👇 The args you need here will depend on your component */
};
