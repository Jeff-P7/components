import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../button.component';
import ButtonProps from '../button.props';
import { propToArgTypes } from '../../../../shared';
// import type { IButton } from '../../button.d';

export default {
  title: 'Components/Elements/Buttons/Button/Implementations',
  component: Button,
  args: { ...ButtonProps.default, color: '#2563eb' },
  argTypes: propToArgTypes(ButtonProps.argType),
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) =>
  args.children ? (
    <Button {...args}>{args.children}</Button>
  ) : (
    <Button {...args} />
  );

const Default = Template.bind({});
// Default.args = {
//   size: 'xs',
//   color: '#2563eb',
// };

export const withChildren = Template.bind({});
withChildren.args = {
  children: 'Extra withValue',
};
withChildren.storyName = 'Text through children';

export const withValue = Template.bind({});
withValue.args = {
  value: 'Text through value',
};
withValue.storyName = 'Text through value';

export const iconWithChildren = Template.bind({});
iconWithChildren.args = {
  value: 'Extra withValue',
  size: 'xs',
};
iconWithChildren.storyName = 'Icon through children';

export const iconWithValue = Template.bind({});
iconWithValue.args = {
  value: 'Extra withValue',
  size: 'xs',
};
iconWithValue.storyName = 'Icon through value';

// export const Large = Template.bind({});
// Large.args = {
//   value: 'Large',
//   size: 'lg',
//   color: '#2563eb',
// };

// export const ExtraLarge = Template.bind({});
// ExtraLarge.args = {
//   value: 'Extra Large',
//   size: 'xs',
//   color: '#2563eb',
// };
// ExtraLarge.storyName = 'Extra Large';

// export const All = (args: any) => (
//   <>
//     <Default value="Extra withValue" size="xs" color={args.color} variant={args.variant} />
//     <Default value="withValue" size="sm" color={args.color} variant={args.variant} />
//     <Default value="Medium" size="md" color={args.color} variant={args.variant} />
//     <Default value="Large" size="lg" color={args.color} variant={args.variant} />
//     <Default value="Extra Large" size="xl" color={args.color} variant={args.variant} />
//   </>
// );

// All.args = {
//   color: '#2563eb',
//   variant: 'contained',
// };
// All.storyName = 'All Sizes';
