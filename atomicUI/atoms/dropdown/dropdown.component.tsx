import React, { FC } from 'react';
import IDropdown from './dropdown';
import DropdownProps from './dropdown.props';
import classNames from 'classnames';
import { classesToString, purgeEmptyProps } from '../../../shared';
import { Div, Text, Card } from '../..';
import { DropdownButton, DropdownItem } from './subcomponents';

interface IProps extends IDropdown {}

/**
 * Dropdown Component
 */
export const Dropdown: FC<IProps> = (props): JSX.Element => {
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
      <Card>{children}</Card>
    </Div>
  );
};

Dropdown.propTypes = DropdownProps.type;
Dropdown.defaultProps = DropdownProps.default;

export default Object.assign(Dropdown, {
  // Toggle: DropdownToggle,
  // Menu: DropdownMenu,
  Button: DropdownButton,
  Item: DropdownItem,
  // ItemText: DropdownItemText,
  // Divider: DropdownDivider,
  // Header: DropdownHeader,
});

// export default Dropdown;
