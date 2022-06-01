import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Row from './row.component';
import RowProps from './row.props';
import { propToArgTypes } from '../../../shared';

export default {
  title: 'Components/Grids/Bootstrap/Row',
  component: Row,
  args: RowProps.default,
  argTypes: propToArgTypes(RowProps.argType),
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Row>;

const Template: ComponentStory<typeof Row> = (args) =>
  args.children ? <Row>{args.children}</Row> : <Row {...args} />;

export const Default = Template.bind({});

Default.args = {
  colorize: true,
};
