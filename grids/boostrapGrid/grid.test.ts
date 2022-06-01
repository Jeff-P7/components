// import React from 'react';
// import { shallow, mount } from 'enzyme';
// import { Div, Container, Row, Col } from '.';

// describe('rendering Col component', () => {
//   const wrapper = shallow(<Col></Col>);

//   it('renders Col component without crashing', () => {
//     expect(wrapper).toBeTruthy;
//   });

//   it('should contain .col as default classes', () => {
//     expect(wrapper.prop('classes')).toEqual('col');
//   });

//   it('should render a child of div with class of .col', () => {
//     expect(wrapper.contains(<div className="col" />)).toBeTruthy;
//   });

//   it('should contain props of track, colorize, size, xs, sm, md, lg, xl, offset, g, p, m, and align', () => {
//     const wrapperProps = {
//       size: 1,
//       xs: 2,
//       sm: 3,
//       md: 4,
//       lg: 5,
//       xl: 6,
//       offset: 7,
//       g: 8,
//       p: 9,
//       m: 10,
//       align: "center",
//       track: true,
//       colorize: true
//     };

//     const localWrapper = shallow(<Col {...wrapperProps} />);
//     expect(localWrapper.prop("classes")).toEqual("col-1 offset-7 align-self-center");
//     // expect(localWrapper.prop("xs")).toEqual(wrapperProps.xs);
//     // expect(localWrapper.prop("sm")).toEqual(wrapperProps.sm);
//     // expect(localWrapper.prop("md")).toEqual(wrapperProps.md);
//     // expect(localWrapper.prop("lg")).toEqual(wrapperProps.lg);
//     // expect(localWrapper.prop("xl")).toEqual(wrapperProps.xl);
//     // expect(localWrapper.prop("offset")).toEqual(wrapperProps.offset);
//     // expect(localWrapper.prop(Object.keys(wrapperProps).find(item => !["classes", "styles", "children" ].includes(item)))).toEqual(wrapperProps);

//     // expect(localWrapper.props(Object.keys(wrapperProps))).toEqual(...wrapperProps);
//   });
// });

// describe('rendering Row component', () => {
//   const wrapper = shallow(<Row />);

//   it('renders Row component without crashing', () => {
//     expect(wrapper).toBeTruthy;
//   });

//   it('should contain .row as default classes', () => {
//     expect(wrapper.prop('classes')).toEqual('row');
//   });

//   it('should render a child of div with class of .row', () => {
//     expect(wrapper.contains(<div className="row" />)).toBeTruthy;
//   });
// });

// describe('rendering Container component', () => {
//   const wrapper = shallow(<Container />);

//   it('renders Container component without crashing', () => {
//     expect(wrapper).toBeTruthy;
//   });

//   it('should contain .container as default classes', () => {
//     expect(wrapper.prop('classes')).toEqual('container');
//   });

//   it('should render a child of div with class of .container', () => {
//     console.log("ROW " + JSON.stringify(wrapper.props()));
//     expect(wrapper.contains(<div className="container" />)).toBeTruthy;
//   });
// });

// describe('rendering Div component', () => {
//   it('renders Div component without crashing', () => {
//     shallow(<Div />);
//   });
// });
