import { string, bool } from 'prop-types';
import type { IPropDefines } from '../../../global/global';
import { CommonProps } from '../../../global/props/common/common.props';
import { ITooltip } from './tooltip';

interface IProps extends IPropDefines {
  type: { [key in keyof ITooltip]: any };
  default: ITooltip;
  argType: { [key in keyof ITooltip]: any };
}

const ITooltipProps: IProps = {
  type: { inline: bool, title: string, placement: string, ...CommonProps.type },
  default: { inline: false, title: '', placement: 'top', ...CommonProps.default },
  argType: { inline: 'boolean', title: 'text', placement: 'text', ...CommonProps.argType },
};

export default ITooltipProps;
