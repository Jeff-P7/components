import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CardProject from './cardProject.component';
import CardProjectProps from './cardProject.props';
import { propToArgTypes } from '../../../global';

export default {
  title: 'Components/UI/Cards/CardProjects',
  component: CardProject,
  args: { ...CardProjectProps.default, backgroundColor: '#fff' },
  argTypes: propToArgTypes(CardProjectProps.argType),
} as ComponentMeta<typeof CardProject>;

const Base: ComponentStory<typeof CardProject> = (args) =>
  args.children ? (
    <CardProject {...args}>{args.children}</CardProject>
  ) : (
    <CardProject {...args} />
  );

export const Default = Base.bind({});
Default.args = {
  /*👇 The args you need here will depend on your component */
};
