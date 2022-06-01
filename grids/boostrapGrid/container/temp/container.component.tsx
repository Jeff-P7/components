// import React, { FC } from 'react';
// import type IContainer from './container';
// import containerProps from './container.props';
// import { Div, IDiv } from '../../../elements';
// import classNames from 'classnames';
// // import { Tag } from '../../../util';
// import { classesToString, purgeEmptyProps } from '../../../global';

// interface IProps extends IContainer {}

// export const Container: FC<IProps> = (props): JSX.Element => {
//   const {
//     children,
//     classes,
//     fluid,
//     xxl,
//     xl,
//     lg,
//     md,
//     sm,
//     xs,
//     ...properties
//   } = props;

//   const componentClasses: Array<string> = [];
//   componentClasses.push(fluid ? 'container-fluid' : 'container');
//   // if (classes?.length) componentClasses.push(classesToString(classes));

//   //  const DEVICE_SIZES = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'] as const;
//   //  const BREAKPOINTList = ['fluid', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs'] as const;

//   // const breakpointList: Record<string, boolean | undefined> = {
//   //   fluid,
//   //   xxl,
//   //   xl,
//   //   lg,
//   //   md,
//   //   sm,
//   //   xs,
//   // };

//   // FIXME: Setting this to Record<string, undefined> will error with type def is undefined
//   const breakpoints: any = {
//     fluid,
//     xxl,
//     xl,
//     lg,
//     md,
//     sm,
//     xs,
//   };

//   // const breakpointList: Array<string, boolean> = [fluid, xxl, xl, lg, md, sm, xs];

//   // if ([fluid, xxl, xl, lg, md, sm, xs].includes(true)) {

//   const breakpointValues: Array<boolean> = Object.values(breakpoints);

//   if (breakpointValues.includes(true)) {
//     const breakpointList: Array<string> = Object.keys(breakpoints);
//     for (let i = 0; i < breakpointList.length; i++) {
//       if (breakpoints[i])
//         componentClasses.push(`container-${breakpointList[i]}`);
//     }
//     // for (const [key, value] of breakpointList) {
//     //   if (value) componentClasses.push(`container-${key}`);
//     // }
//     /* [...breakpointList].forEach((item: boolean, index: number) => {
//       if (item) {
//         const breakpoint: string = Object.keys(
//           breakpointList[index]
//         ).toString();
//         componentClasses.push(`container-${breakpoint}`);
//       }
//     }); */
//   }
//   // } else componentClasses.push('container');

//   // const breakpoint: string | undefined = [fluid, xxl, xl, lg, md, sm, xs].find((item: any) => item).reduce((item: any): string => Object.keys(item));

//   // breakpointList.forEach((item) => {
//   //   if (item) breakpoint = Object.keys(item);
//   // });

//   // componentClasses.push(breakpoint ? `container-${breakpoint}` : 'container');

//   //  const attributesList = Object.keys(attributes);

//   //  attributesList.map((item) => item)

//   //  const optionEntry = attributesEntries.find((arr) => arr[1]);
//   //  const [option, isSelected] =
//   //    optionEntry !== undefined ? optionEntry : ['', false];

//   //  componentClasses.push(isSelected ? `container-${option}` : 'container');

//   const divProps: IDiv = purgeEmptyProps(properties);
//   return (
//     <Div
//       classes={classNames(componentClasses, classes)}
//       {...(divProps && { ...divProps })}
//     >
//       {/* {tag && <Tag label="Container" />} */}
//       {children}
//     </Div>
//   );
// };

// Container.propTypes = containerProps.type;
// Container.defaultProps = containerProps.default;

// export default Container;
