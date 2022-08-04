import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from './card.component';
import CardProps from './card.props';
import { propToArgTypes } from '../../../global';

export default {
  title: 'Components/UI/Cards/Card',
  component: Card,
  args: CardProps.default,
  // args: {...CardProps.default, backgroundColor: '#F9FAFB'},
  argTypes: propToArgTypes(CardProps.argType),
} as ComponentMeta<typeof Card>;

const Base: ComponentStory<typeof Card> = (args) =>
  args.children ? <Card {...args}>{args.children}</Card> : <Card {...args} />;

export const Default = Base.bind({});
Default.args = {
  children: 'this is some details',
};
