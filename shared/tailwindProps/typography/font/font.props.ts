import PropTypes from 'prop-types';
import type { IPropDefines } from '../../../global';
import type { IFont } from './font';
import {
  FontSizeTypes,
  FontWeightTypes,
  FontFamilyTypes,
  FontSmoothingTypes,
  FontStyleTypes,
  FontVariantNumericTypes,
} from './font.types';

interface IProps extends IPropDefines {
  type: { [key in keyof IFont]: any };
  default: IFont;
  argType: { [key in keyof IFont]: any };
}

const { string, oneOf, oneOfType } = PropTypes;

export const FontProps: IProps = {
  type: {
    fontSize: oneOfType([string, oneOf(FontSizeTypes)]),
    fontWeight: oneOfType([string, oneOf(FontWeightTypes)]),
    fontFamily: oneOfType([string, oneOf(FontFamilyTypes)]),
    fontSmoothing: oneOfType([string, oneOf(FontSmoothingTypes)]),
    fontStyle: oneOfType([string, oneOf(FontStyleTypes)]),
    fontVariantNumeric: oneOfType([string, oneOf(FontVariantNumericTypes)]),
  },
  default: {
    fontFamily: '',
    fontSize: 'base',
    fontSmoothing: '',
    fontStyle: '',
    fontVariantNumeric: '',
    fontWeight: '',
  },
  argType: {
    fontFamily: FontFamilyTypes,
    fontSize: FontSizeTypes,
    fontSmoothing: FontSmoothingTypes,
    fontStyle: FontStyleTypes,
    fontVariantNumeric: FontVariantNumericTypes,
    fontWeight: FontWeightTypes,
  },
};

export default FontProps;
