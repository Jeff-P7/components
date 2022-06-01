import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Link from './link.component';
import LinkProps from './link.props';
import { propToArgTypes } from '../../../shared';

export default {
  title: 'Components/Elements/Links/Link',
  component: Link,
  args: LinkProps.default,
  argTypes: propToArgTypes(LinkProps.argType),
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Link>;

const Base: ComponentStory<typeof Link> = (args) =>
  args.children ? <Link {...args}>{args.children}</Link> : <Link {...args} />;

export const Default = Base.bind({});
Default.args = {
  children: "Some Text"
};
