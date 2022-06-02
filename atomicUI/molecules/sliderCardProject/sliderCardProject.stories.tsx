// import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';
// import SliderCardProject from './sliderCardProject.component';
// import SliderCardProjectProps from './sliderCardProject.props';
// import { propToArgTypes } from '../../global';

// //👇 This default export determines where your story goes in the story list
// export default {
//   /* 👇 The title prop is optional.
//    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
//    * to learn how to generate automatic titles
//    */
//   title: 'Components/SliderCardProjects',
//   component: SliderCardProject,
//   args: SliderCardProjectProps.default,
//   argTypes: propToArgTypes(SliderCardProjectProps.argType),
//   parameters: {
//     layout: 'centered',
//   },
// } as ComponentMeta<typeof SliderCardProject>;

// //👇 We create a “SliderCardProject” of how args map to rendering
// const Base: ComponentStory<typeof SliderCardProject> = (args) =>
//   args.children ? (
//     <SliderCardProject {...args}>{args.children}</SliderCardProject>
//   ) : (
//     <SliderCardProject {...args} />
//   );

// export const Default = Base.bind({});
// Default.args = {
//   /*👇 The args you need here will depend on your component */
// };
