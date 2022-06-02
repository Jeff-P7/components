// import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';
// import Button from '../button.component';
// import ButtonProps from '../button.props';
// import { propToArgTypes } from '../../../global';

// export default {
//   title: 'Components/Elements/Button/Variants',
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

// const Default = Template.bind({});
// // Default.args = {
// // };

// export const Contained = Template.bind({});
// Contained.args = {
//   value: 'Contained',
// };

// export const Outlined = Template.bind({});
// Outlined.args = {
//   value: 'Outlined',
//   variant: 'outlined',
// };

// export const Text = Template.bind({});
// Text.args = {
//   value: 'Text',
//   variant: 'text',
// };

// export const All = (args: any) => (
//   <>
//     <Default value="Text" size={args.size} color={args.color} variant="text" />
//     <Default
//       value="Outlined"
//       size={args.size}
//       color={args.color}
//       variant="outlined"
//     />
//     <Default
//       value="Contained"
//       size={args.size}
//       color={args.color}
//       variant="contained"
//     />
//   </>
// );

// All.args = {
//   size: 'md',
// };
// All.storyName = 'All Variants';

// // All.argTypes = {
// //   size: ButtonProps.argType.size,
// //   color: 'boolean',
// // }
