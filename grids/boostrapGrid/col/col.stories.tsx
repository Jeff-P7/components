import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Col from './col.component';
import ColProps from './col.props';
import { propToArgTypes } from '../../../global';

export default {
  title: 'Components/Grids/Bootstrap/Col',
  component: Col,
  args: ColProps.default,
  argTypes: propToArgTypes(ColProps.argType),
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Col>;

const Template: ComponentStory<typeof Col> = (args) =>
  args.children ? <Col>{args.children}</Col> : <Col {...args} />;

export const Default = Template.bind({});

Default.args = {
  colorize: true,
};
