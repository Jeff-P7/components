import React, { Children, FC } from 'react';
import IIconButton from './iconButton.d';
import IconButtonProps from './iconButton.props';
// import classvalues from 'classvalues';
// import { IconButtonContext } from 'react-iconButtons';
import { paddingToClass, marginToClass } from '../../../global';
import { default as Icon, IIcon } from '../../atoms/icon';
import { default as Button, TButton } from '../../atoms/button';
import { purgeEmptyProps } from '../../../global/shared';
import { Message } from '../../../global';

interface IProps extends IIconButton {}

/**
 * IconButton Component
 */
export const IconButton: FC<IProps> = (props): JSX.Element => {
  const {
    children,
    circle,
    color,
    fontSize,
    margin,
    value,
    padding,
    size,
    slim,
    variant,
  } = props;

  // if (children && value) throw new Error(Message.error.childrenAndValue);

  // const buttonProps: IButton = purgeEmptyProps({
  //   circle,
  //   color,
  //   margin,
  //   padding,
  //   size,
  //   slim,
  //   variant,
  //   classes: 'leading-none',
  // });

  const iconProps: IIcon = purgeEmptyProps({
    value: value || children,
    size: fontSize,
    classes: 'align-middle',
  });

  return (
    // <Button {...(buttonProps && { ...buttonProps })}>
    <Button
      classes="leading-none"
      circle={circle}
      color={color}
      margin={margin}
      padding={padding}
      size={size}
      slim={slim}
      variant={variant}
    >
      <Icon {...(iconProps && { ...iconProps })} />
    </Button>
  );
};

IconButton.propTypes = IconButtonProps.type;
IconButton.defaultProps = IconButtonProps.default;

export default IconButton;
