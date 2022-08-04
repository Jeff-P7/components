import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SocialLinks from './socialLinks.component';
import SocialLinksProps from './socialLinks.props';
import { propToArgTypes } from '../../../global';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/SocialLinks',
  component: SocialLinks,
  args: SocialLinksProps.default,
  argTypes: propToArgTypes(SocialLinksProps.argType),
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof SocialLinks>;

//👇 We create a “SocialLinks” of how args map to rendering
const Base: ComponentStory<typeof SocialLinks> = (args) =>
  args.children ? (
    <SocialLinks {...args}>{args.children}</SocialLinks>
  ) : (
    <SocialLinks {...args} />
  );

export const Default = Base.bind({});
Default.args = {
  /*👇 The args you need here will depend on your component */
};
