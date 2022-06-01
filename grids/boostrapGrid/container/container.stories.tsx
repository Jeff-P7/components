import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Container from './container.component';
import { propToArgTypes } from '../../../shared';
import ContainerProps from './container.props';

export default {
  title: 'Components/Grids/Bootstrap/Container',
  component: Container,
  args: ContainerProps.default,
  argTypes: propToArgTypes(ContainerProps.argType),
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) =>
  args.children ? (
    <Container>{args.children}</Container>
  ) : (
    <Container {...args} />
  );

export const Default = Template.bind({});

Default.args = {
  colorize: true,
};
