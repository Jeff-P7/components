import React, { FC } from 'react';
// import IDropdownItem from './dropdownItem.d';
// import DropdownItemProps from './dropdownItem.props';
import classNames from 'classnames';
import { classesToString, purgeEmptyProps } from '../../../../shared';
import { Div, Text } from '../..';

// interface IProps extends IDropdownItem {}

/**
 * DropdownItem Component
 */
export const DropdownItem: FC = (props): JSX.Element => {
  // export const DropdownItem: FC<IProps> = (props): JSX.Element => {
  const { children, classes, styles, ...properties } = props;
  const componentClasses: Array<string> = [];
  if (classes?.length) componentClasses.push(classesToString(classes));

  const componentStyles: Record<string, any> = { ...styles };
  const attr: Record<string, any> | null = purgeEmptyProps(properties);
  return (
    <Div
      classes={classNames(componentClasses)}
      styles={componentStyles}
      {...(attr && { ...attr })}
    >
      {children}
    </Div>
  );
};

// DropdownItem.propTypes = DropdownItemProps.type;
// DropdownItem.defaultProps = DropdownItemProps.default;

export default DropdownItem;
