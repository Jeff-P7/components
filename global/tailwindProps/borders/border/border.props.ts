import PropTypes from 'prop-types';
import { IBorder } from './border';
import type { IPropDefines } from '../../../global';
import {
  BorderColorTypes,
  BorderOpacityTypes,
  BorderRadiusTypes,
  BorderStyleTypes,
  BorderWidthTypes,
} from './border.types';

interface IProps extends IPropDefines {
  type: { [key in keyof IBorder]: any };
  default: IBorder;
  argType: { [key in keyof IBorder]: any };
}

const { string, oneOf, oneOfType } = PropTypes;

export const BorderProps: IProps = {
  type: {
    borderColor: oneOfType([string, oneOf(BorderColorTypes)]),
    borderOpacity: oneOfType([string, oneOf(BorderOpacityTypes)]),
    borderRadius: oneOfType([string, oneOf(BorderRadiusTypes)]),
    borderStyle: oneOfType([string, oneOf(BorderStyleTypes)]),
    borderWidth: oneOfType([string, oneOf(BorderWidthTypes)]),
  },
  default: {
    borderColor: 'black',
    borderOpacity: undefined,
    borderRadius: 'default',
    borderStyle: 'solid',
    borderWidth: 'default',
  },
  argType: {
    // borderColor: BorderColorTypes,
    borderColor: 'color',
    borderOpacity: BorderOpacityTypes,
    borderRadius: BorderRadiusTypes,
    borderStyle: BorderStyleTypes,
    borderWidth: BorderWidthTypes,
  },
};

export default BorderProps;
