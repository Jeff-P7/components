import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconButton from './iconButton.component';
import IconButtonProps from './iconButton.props';
import { propToArgTypes } from '../../../global';

export default {
  title: 'Components/Elements/Icons/IconButton',
  component: IconButton,
  args: { color: '#fff', ...IconButtonProps.default },
  argTypes: propToArgTypes(IconButtonProps.argType),
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) =>
  args.children ? (
    <IconButton {...args}>{args.children}</IconButton>
  ) : (
    <IconButton {...args} />
  );

export const Default = Template.bind({});
Default.args = {
  /*👇 The args you need here will depend on your component */
};

// export const WithColorInherit = (args: any) => (
//   <div className="text-secondary">
//     <IconButton {...args}>{args.children}</IconButton>
//   </div>
// );
// WithColorInherit.args = {
//   color: 'inherit',
// };
