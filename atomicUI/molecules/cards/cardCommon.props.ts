import PropTypes from 'prop-types';
import { FontProps, CommonProps, BordersProps, ColorProps } from '../../global';
import {
  OrientationTypes,
  VariantCardTypes,
  BoxShadowTypes,
} from './cardCommon.types';
import type { IPropDefines } from '../../global';
import type ICardCommon from './cardCommon';

interface IProps extends IPropDefines {
  type: { [key in keyof ICardCommon]: any };
  default: ICardCommon;
  argType: { [key in keyof ICardCommon]: any };
}

const { string, number, bool, oneOf, oneOfType } = PropTypes;

export const CardCommonProps: IProps = {
  type: {
    avatar: string,
    backgroundColor: ColorProps.type.backgroundColor,
    boxShadow: oneOfType([string, oneOf(BoxShadowTypes)]),
    elevation: number, // Shadow depth, corresponds to dp in the spec. It accepts values between 0 and 24 inclusive.
    header: string,
    headerColor: string,
    height: string,
    image: string,
    noSpace: bool,
    orientation: oneOfType([string, oneOf(OrientationTypes)]),
    raised: bool, // If true, the card will use raised styling.
    subHeader: string,
    subHeaderColor: string,
    subTitle: string,
    title: string,
    variant: oneOfType([oneOf(VariantCardTypes), string]),
    ...CommonProps.type,
    ...BordersProps.type,
    ...FontProps.type,
  },
  default: {
    avatar: '',
    backgroundColor: 'white',
    borderColor: '',
    borderRadius: '',
    boxShadow: '',
    elevation: 0, // Shadow depth, corresponds to dp in the spec. It accepts values between 0 and 24 inclusive.
    header: '',
    headerColor: '',
    height: '',
    image: '',
    noSpace: false,
    orientation: 'horizontal',
    raised: false, // If true, the card will use raised styling.
    subHeader: '',
    subHeaderColor: '',
    subTitle: '',
    title: '',
    variant: '',
    ...CommonProps.default,
    ...BordersProps.default,
    ...FontProps.default,
  },
  argType: {
    avatar: '',
    backgroundColor: 'color',
    borderColor: '',
    borderRadius: '',
    boxShadow: BoxShadowTypes,
    elevation: '', // Shadow depth, corresponds to dp in the spec. It accepts values between 0 and 24 inclusive.
    header: '',
    headerColor: '',
    height: '',
    image: '',
    noSpace: '',
    orientation: '',
    raised: '', // If true, the card will use raised styling.
    subHeader: '',
    subHeaderColor: '',
    subTitle: '',
    title: '',
    variant: '',
    ...CommonProps.argType,
    ...BordersProps.argType,
    ...FontProps.argType,
  },
};

export default CardCommonProps;
