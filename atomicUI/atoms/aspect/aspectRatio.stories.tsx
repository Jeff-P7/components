// import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';
// import AspectRatio from './aspect.component';
// import AspectRatioProps from './aspect.props';
// import { propToArgTypes } from '../../global';

// //👇 This default export determines where your story goes in the story list
// export default {
//   /* 👇 The title prop is optional.
//    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
//    * to learn how to generate automatic titles
//    */
//   title: 'Components/AspectRatios',
//   component: AspectRatio,
//   args: AspectRatioProps.default,
//   argTypes: propToArgTypes(AspectRatioProps.argType),
//   parameters: {
//     layout: 'centered',
//   },
// } as ComponentMeta<typeof AspectRatio>;

// //👇 We create a “AspectRatio” of how args map to rendering
// const Base: ComponentStory<typeof AspectRatio> = (args) =>
//   args.children ? (
//     <AspectRatio {...args}>{args.children}</AspectRatio>
//   ) : (
//     <AspectRatio {...args} />
//   );

// export const Default = Base.bind({});
// Default.args = {
//   /*👇 The args you need here will depend on your component */
// };
