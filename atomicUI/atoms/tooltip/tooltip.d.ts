import type ITooltip from '../Tooltip/Tooltip';
import { ICommon } from '../../../shared/props/common/common';
import { TooltipProps } from '@mui/material';

export interface ITooltip extends ICommon, Pick<TooltipProps, 'placement'> {
  title: string;
  inline?: boolean;
}

export default ITooltip;
