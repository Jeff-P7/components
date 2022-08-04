import PropTypes from 'prop-types';
import { ISizing } from './sizing';
import type { IPropDefines } from '../..';
import {
  HeightTypes,
  MaxHeightTypes,
  MaxWidthTypes,
  MinHeightTypes,
  MinWidthTypes,
  WidthTypes,
} from './sizing.types';

interface IProps extends IPropDefines {
  type: { [key in keyof ISizing]: any };
  default: ISizing;
  argType: { [key in keyof ISizing]: any };
}

const { string, oneOf, number, oneOfType } = PropTypes;

export const BorderProps: IProps = {
  type: {
    height: oneOfType([string, number, oneOf(HeightTypes)]),
    maxHeight: oneOfType([string, number, oneOf(MaxHeightTypes)]),
    maxWidth: oneOfType([string, number, oneOf(MaxWidthTypes)]),
    minHeight: oneOfType([string, number, oneOf(MinHeightTypes)]),
    minWidth: oneOfType([string, number, oneOf(MinWidthTypes)]),
    width: oneOfType([string, number, oneOf(WidthTypes)]),
  },
  default: {
    height: '',
    maxHeight: '',
    maxWidth: '',
    minHeight: '',
    minWidth: '',
    width: '',
  },
  argType: {
    height: HeightTypes,
    maxHeight: MaxHeightTypes,
    maxWidth: MaxWidthTypes,
    minHeight: MinHeightTypes,
    minWidth: MinWidthTypes,
    width: WidthTypes,
  },
};

export default BorderProps;
