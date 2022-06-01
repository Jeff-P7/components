import React, { FC } from 'react';
import IDivider from './divider';
import DividerProps from './divider.props';
import classNames from 'classnames';
import { classesToString, marginToClass } from '../../../shared';

interface IProps extends IDivider {}

/**
 * Divider Component also known as Thematic Break
 */
export const Divider: FC<IProps> = (props): JSX.Element => {
  const { classes, color, margin } = props;
  const componentClasses: Array<string> = [];

  if (classes?.length) componentClasses.push(classesToString(classes));

  componentClasses.push(
    ...[color ? `border-${color}` : '', margin ? marginToClass(margin) : '']
  );

  return <hr className={classNames(componentClasses)} />;
};

Divider.propTypes = DividerProps.type;
Divider.defaultProps = DividerProps.default;

export default Divider;
