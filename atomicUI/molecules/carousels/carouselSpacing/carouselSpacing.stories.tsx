// import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';
// import CarouselSpacing from './carouselSpacing.component';
// import CarouselSpacingProps from './carouselSpacing.props';
// import { propToArgTypes } from '../../../global';

// //👇 This default export determines where your story goes in the story list
// export default {
//   /* 👇 The title prop is optional.
//    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
//    * to learn how to generate automatic titles
//    */
//   title: 'Components/CarouselSpacings',
//   component: CarouselSpacing,
//   args: CarouselSpacingProps.default,
//   argTypes: propToArgTypes(CarouselSpacingProps.argType),
//   parameters: {
//     layout: 'centered',
//   },
// } as ComponentMeta<typeof CarouselSpacing>;

// //👇 We create a “CarouselSpacing” of how args map to rendering
// const Base: ComponentStory<typeof CarouselSpacing> = (args) =>
//   args.children ? (
//     <CarouselSpacing {...args}>{args.children}</CarouselSpacing>
//   ) : (
//     <CarouselSpacing {...args} />
//   );

// export const Default = Base.bind({});
// Default.args = {
//   /*👇 The args you need here will depend on your component */
// };
