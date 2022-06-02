import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LinkButton from './linkButton.component';
import LinkButtonProps from './linkButton.props';
import { propToArgTypes } from '../../../global';

export default {
  title: 'Components/Elements/Links/LinkButton',
  component: LinkButton,
  args: { color: '#fff', ...LinkButtonProps.default },
  argTypes: propToArgTypes(LinkButtonProps.argType),
} as ComponentMeta<typeof LinkButton>;

const Base: ComponentStory<typeof LinkButton> = (args) =>
  args.children ? (
    <LinkButton {...args}>{args.children}</LinkButton>
  ) : (
    <LinkButton {...args} />
  );

export const Default = Base.bind({});
Default.args = {
  children: 'Some Text',
};
