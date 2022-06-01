import React, { FC } from 'react';
import type { ITooltip } from './tooltip';
import TooltipProps from './tooltip.props';
import { default as MUITooltip } from '@mui/material/Tooltip';
import { marginToClass } from '../../../shared';
import classNames from 'classnames';

type IProps = ITooltip;

/**
 * Tooltip UI component for user interaction
 */
export const Tooltip: FC<IProps> = (props): JSX.Element => {
  const { children, placement, title, inline, margin } = props;
  const componentClasses: string[] = [
    marginToClass(margin!),
    inline ? 'inline' : '',
  ];

  return (
    <MUITooltip
      title={title}
      placement={placement}
      className={classNames(componentClasses)}
    >
      <span>{children}</span>
    </MUITooltip>
  );
};

Tooltip.propTypes = TooltipProps.type;
Tooltip.defaultProps = TooltipProps.default;

export default Tooltip;
