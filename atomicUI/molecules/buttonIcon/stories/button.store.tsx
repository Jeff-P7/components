// import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';
// import Button from '../button.component';
// import ButtonProps from '../button.props';
// import { propToArgTypes } from '../../../global';

// export default {
//   title: 'Components/Elements/Button',
//   component: Button,
//   args: { ...ButtonProps.default, color: '#2563eb' },
//   argTypes: propToArgTypes(ButtonProps.argType),
//   parameters: {
//     layout: 'centered',
//   },
// } as ComponentMeta<typeof Button>;

// const Template: ComponentStory<typeof Button> = (args) =>
//   args.children ? (
//     <Button {...args}>{args.children}</Button>
//   ) : (
//     <Button {...args} />
//   );

// export const Default = Template.bind({});
// Default.args = {
//   children: 'Press Me Not',
// };

// export const Icon = Template.bind({});
// Icon.args = {
//   variant: 'outlined',
//   icon: 'MdOutlineWbSunny',
// };

// // export const IconLeft = Template.bind({});
// // IconLeft.args = {
// //   children: 'Icon Left',
// //   variant: 'outlined',
// //   icon: 'MdOutlineWbSunny',
// // };
// // IconLeft.storyName = 'Icon left';

// // export const IconRight = Template.bind({});
// // IconRight.args = {
// //   value: 'Icon Right',
// //   variant: 'outlined',
// //   icon: 'MdOutlineWbSunny',
// //   iconRight: true,
// // };
// // IconRight.storyName = 'Icon Right';
