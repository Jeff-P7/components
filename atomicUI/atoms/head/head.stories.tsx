import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Head from './head.component';
import HeadProps from './head.props';
import { propToArgTypes } from '../../../shared';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Elements/Head',
  component: Head,
  args: HeadProps.default,
  argTypes: propToArgTypes(HeadProps.argType),
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Head>;

//👇 We create a “Head” of how args map to rendering
const Base: ComponentStory<typeof Head> = (args) =>
  args.children ? (
    <Head {...args}>{args.children}</Head>
  ) : (
    <Head {...args} />
  );

export const Default = Base.bind({});
Default.args = {
  /*👇 The args you need here will depend on your component */
};
