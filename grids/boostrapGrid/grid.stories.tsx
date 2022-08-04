// import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';
// import { Container, Row, Col } from '.';
// import { range } from '../../../utilities/utilities';

// // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// export default {
//   title: 'Components/Grids/Bootstrap',
//   component: Container,
//   subComponents: { Row, Col },
// //   parameters: {
// //     layout: 'centered',
// //   },
//   decorators: [
//     (Story) => (
//       <div style={{ width: '100%', height: '100%' }}>
//         <Story />
//       </div>
//     ),
//   ],
// } as ComponentMeta<typeof Container>;

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Container> = (args) => (
//   <Container colorize>{args.children}</Container>
// );

// const Populated: ComponentStory<typeof Container> = ({ columns, ...args }) => (
//   <Container colorize>
//     Container
//     <Row>
//       Row
//       {columns.map((item, index) => (
//         <Col>
//           {`Col ${index}`}
//         </Col>
//       ))}
//     </Row>
//   </Container>
// );

// export const Base = Populated.bind({});
// Base.args = {
//     columns: range(0, 9, 1),
// }

// // Base.parameters = {
// //     width: '100%'
// // }

// // export const Template: ComponentStory<typeof Container> = (args) => (
// //   <Container>
// //     <Row>
// //       <Col>Col 1</Col>
// //       <Col>Col 2</Col>
// //       <Col>Col 3</Col>
// //       <Col>Col 4</Col>
// //     </Row>
// //   </Container>
// // );

// // export const Base = Template.bind({});
// // Base.args = {}

// // export const Base = Template.bind({});
// // Base.args = {
// //   children: (
// //     <Row>
// //       <Col>Col 1</Col>
// //       <Col>Col 2</Col>
// //       <Col>Col 3</Col>
// //       <Col>Col 4</Col>
// //     </Row>
// //   ),
// // };

// // export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// // Primary.args = {
// //   primary: true,
// //   label: 'Text',
// // };

// // export const Secondary = Template.bind({});
// // Secondary.args = {
// //   label: 'Text',
// // };

// // export const Large = Template.bind({});
// // Large.args = {
// //   size: 'large',
// //   label: 'Text',
// // };

// // export const Small = Template.bind({});
// // Small.args = {
// //   size: 'small',
// //   label: 'Text',
// // };

// // import React from 'react';
// // import { ComponentStory, ComponentMeta } from '@storybook/react';
// // import { Div, Container, Row, Col } from '.';

// // export default {
// //   title: 'Components/Grid/Bootstrap',
// //   component: Div',
// // } as ComponentMeta<typeof Div>;

// // const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

// // export const LoggedIn = Template.bind({});
// // LoggedIn.args = {
// //   user: {},
// // };

// // export const LoggedOut = Template.bind({});
// // LoggedOut.args = {};
