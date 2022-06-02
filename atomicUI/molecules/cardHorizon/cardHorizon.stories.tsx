import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CardHorizon from './cardHorizon.component';
import CardHorizonProps from './cardHorizon.props';
import { propToArgTypes } from '../../../global';
import layout from '../../../layout';

export default {
  title: 'Components/UI/Cards/CardHorizons',
  component: CardHorizon,
  args: { ...CardHorizonProps.default, backgroundColor: '#fff' },
  argTypes: propToArgTypes(CardHorizonProps.argType),
  // parameters: { layout: '' },
} as ComponentMeta<typeof CardHorizon>;

const Base: ComponentStory<typeof CardHorizon> = (args) =>
  args.children ? (
    <CardHorizon {...args}>{args.children}</CardHorizon>
  ) : (
    <CardHorizon {...args} />
  );

export const Default = Base.bind({});
Default.args = {
  imgPlaceholder: 'splash',
  // image: '/programming.jpg',
  title: 'This is some title',
  description:
    'Have some description as well, with a bit of lorem ipsum while your at it',
  width: 96,
};
