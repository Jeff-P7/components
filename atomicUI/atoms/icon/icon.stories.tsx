import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from './icon.component';
import IconProps from './icon.props';
import { propToArgTypes } from '../../../shared';

export default {
  title: 'Components/Elements/Icons/Icon',
  component: Icon,
  args: IconProps.default,
  argTypes: propToArgTypes(IconProps.argType),
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) =>
  args.children ? <Icon {...args}>{args.children}</Icon> : <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  /*👇 The args you need here will depend on your component */
};

export const WithColorInherit = (args: any) => (
  <div className="text-secondary">
    <Icon {...args}>{args.children}</Icon>
  </div>
);
WithColorInherit.args = {
  color: 'inherit',
};
