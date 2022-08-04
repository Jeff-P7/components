import React, { FC } from 'react';
// import IDropdownButton from './dropdownButton.d';
// import DropdownButtonProps from './dropdownButton.props';
import classNames from 'classnames';
import { classesToString, purgeEmptyProps } from '../../../../global';
import { Div, Text, Button } from '../..';
import { ICommon } from '../../../../global/props/common/common';

interface IProps extends ICommon {
  value: string;
}

/**
 * DropdownButton Component
 */
  export const DropdownButton: FC<IProps> = (props): JSX.Element => {
  const { value, children, classes, styles, ...properties } = props;
  const componentClasses: Array<string> = [];
  if (classes?.length) componentClasses.push(classesToString(classes));

  const componentStyles: Record<string, any> = { ...styles };
  const attr: Record<string, any> | null = purgeEmptyProps(properties);
  return (
    <Button>
      {children}
    </Button>
  );
};

// DropdownButton.propTypes = DropdownButtonProps.type;
// DropdownButton.defaultProps = DropdownButtonProps.default;

export default DropdownButton;
