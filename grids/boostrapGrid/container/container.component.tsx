import React, { FC } from 'react';
import type IContainer from './container';
import containerProps from './container.props';
import { Div, IDiv } from '../../../atomicUI/atoms';
import classNames from 'classnames';
// import { Tag } from '../../../util';
import { classesToString, purgeEmptyProps } from '../../../global';

interface IProps extends IContainer {}

export const Container: FC<IProps> = (props): JSX.Element => {
  const { children, classes, fluid, xxl, xl, lg, md, sm, xs, ...properties } =
    props;

  const componentClasses: Array<string> = [];
  // componentClasses.push(fluid ? 'container-fluid' : 'container');

  const breakpoints: Record<string, any> = {
    fluid,
    xxl,
    xl,
    lg,
    md,
    sm,
    xs,
  };

  const breakpointValues: Array<boolean> = Object.values(breakpoints);
  if (breakpointValues.includes(true)) {
    breakpointValues.forEach((item: boolean, index: number) => {
      if (item) {
        const breakpointKey: string = Object.keys(breakpoints)[index];
        componentClasses.push('container-bt-' + breakpointKey);
      }
    });
  } else componentClasses.push('container-bt');

  const divProps: IDiv = purgeEmptyProps(properties);
  return (
    <Div
      classes={classNames(componentClasses, classes)}
      {...(divProps && { ...divProps })}
    >
      {children}
    </Div>
  );
};

Container.propTypes = containerProps.type;
Container.defaultProps = containerProps.default;

export default Container;
