import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../button.component';
import ButtonProps from '../button.props';
import { propToArgTypes } from '../../../../shared';
// import type { IButton } from '../../button.d';

export default {
  title: 'Components/Elements/Buttons/Button/Sizes',
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
// };

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  value: 'Extra Small',
  size: 'xs',
};
ExtraSmall.storyName = 'Extra Small';

export const Small = Template.bind({});
Small.args = {
  value: 'Small',
  size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
  value: 'Medium',
  size: 'md',
};

export const Large = Template.bind({});
Large.args = {
  value: 'Large',
  size: 'lg',
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  value: 'Extra Large',
  size: 'xs',
};
ExtraLarge.storyName = 'Extra Large';

export const All = (args: any) => (
  <>
    {/* <ExtraSmall value={ExtraSmall.args!.value} {...ExtraSmall.args} />  */}
    {/* <ExtraSmall value={ExtraSmall.args!.value} />  */}
    {/* <Default value="Extra Small" size="xs" color={args.color} variant={args.variant} {...ExtraSmall.args} /> */}
    {/* <Default value="Extra Small" color={args.color} variant={args.variant} {...ExtraSmall.args} /> */}
    <Default
      value="Extra Small"
      size="xs"
      color={args.color}
      variant={args.variant}
    />
    <Default
      value="Small"
      size="sm"
      color={args.color}
      variant={args.variant}
    />
    <Default
      value="Medium"
      size="md"
      color={args.color}
      variant={args.variant}
    />
    <Default
      value="Large"
      size="lg"
      color={args.color}
      variant={args.variant}
    />
    <Default
      value="Extra Large"
      size="xl"
      color={args.color}
      variant={args.variant}
    />
  </>
);

All.args = {
  color: '#2563eb',
  variant: 'contained',
};
All.storyName = 'All Sizes';

// All.argTypes = {
//   size: ButtonProps.argType.size,
//   color: 'boolean',
// }
