import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonIcon from './buttonIcon.component';
import ButtonIconProps from './buttonIcon.props';
import { propToArgTypes } from '../../../global';

export default {
  title: 'Components/Elements/Buttons/ButtonIcon',
  component: ButtonIcon,
  args: { ...ButtonIconProps.default, color: '#2563eb' },
  argTypes: propToArgTypes(ButtonIconProps.argType),
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof ButtonIcon>;

const Template: ComponentStory<typeof ButtonIcon> = (args) =>
  args.children ? (
    <ButtonIcon {...args}>{args.children}</ButtonIcon>
  ) : (
    <ButtonIcon {...args} />
  );

export const Default = Template.bind({});
Default.args = {
  children: 'Press Me Not',
  icon: 'MdOutlineWbSunny',
};

export const Icon = Template.bind({});
Icon.args = {
  variant: 'outlined',
  icon: 'MdOutlineWbSunny',
};

// export const IconLeft = Template.bind({});
// IconLeft.args = {
//   children: 'Icon Left',
//   variant: 'outlined',
//   icon: 'MdOutlineWbSunny',
// };
// IconLeft.storyName = 'Icon left';

// export const IconRight = Template.bind({});
// IconRight.args = {
//   value: 'Icon Right',
//   variant: 'outlined',
//   icon: 'MdOutlineWbSunny',
//   iconRight: true,
// };
// IconRight.storyName = 'Icon Right';
