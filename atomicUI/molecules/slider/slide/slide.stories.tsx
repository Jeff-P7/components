// import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';
// import Slide from './slide.component';
// import SlideProps from './slide.props';
// import { propToArgTypes } from '../../../../global';

// //👇 This default export determines where your story goes in the story list
// export default {
//   /* 👇 The title prop is optional.
//    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
//    * to learn how to generate automatic titles
//    */
//   title: 'Components/Slides',
//   component: Slide,
//   args: SlideProps.default,
//   argTypes: propToArgTypes(SlideProps.argType),
//   parameters: {
//     layout: 'centered',
//   },
// } as ComponentMeta<typeof Slide>;

// //👇 We create a “Slide” of how args map to rendering
// const Base: ComponentStory<typeof Slide> = (args) =>
//   args.children ? (
//     <Slide {...args}>{args.children}</Slide>
//   ) : (
//     <Slide {...args} />
//   );

// export const Default = Base.bind({});
// Default.args = {
//   /*👇 The args you need here will depend on your component */
// };
