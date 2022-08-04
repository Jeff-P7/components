import PropTypes from 'prop-types';
import { IRing } from './ring';
import type { IPropDefines } from '../../../global';
import {
  RingColorTypes,
  RingOffsetColorTypes,
  RingOffsetWidthTypes,
  RingOpacityTypes,
  RingWidthTypes,
} from './ring.types';

interface IProps extends IPropDefines {
  type: { [key in keyof IRing]: any };
  default: IRing;
  argType: { [key in keyof IRing]: any };
}

const { string, oneOf, oneOfType } = PropTypes;

export const RingProps: IProps = {
  type: {
    ringColor: oneOfType([string, oneOf(RingColorTypes)]),
    ringOffsetColor: oneOfType([string, oneOf(RingOffsetColorTypes)]),
    ringOffsetWidth: oneOfType([string, oneOf(RingOffsetWidthTypes)]),
    ringOpacity: oneOfType([string, oneOf(RingOpacityTypes)]),
    ringWidth: oneOfType([string, oneOf(RingWidthTypes)]),
  },
  default: {
    ringColor: '',
    ringOffsetColor: '',
    ringOffsetWidth: '',
    ringOpacity: undefined,
    ringWidth: '',
  },
  argType: {
    ringColor: RingColorTypes,
    ringOffsetColor: RingOffsetColorTypes,
    ringOffsetWidth: RingOffsetWidthTypes,
    ringOpacity: RingOpacityTypes,
    ringWidth: RingWidthTypes,
  },
};

export default RingProps;
