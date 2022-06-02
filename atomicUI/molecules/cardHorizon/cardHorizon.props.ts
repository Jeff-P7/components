import PropTypes from 'prop-types';
import ICardHorizon from './cardHorizon';
import { IPropDefines, pickPropDefines } from '../../../global';
import CardProps from '../../atoms/card/card.props';
import { ObjectProps, TransitionsProps } from '../../../global/tailwindProps';
import { ImageProps } from '../../atoms/image/image.props';

interface IProps extends IPropDefines {
  type: { [key in keyof ICardHorizon]: any };
  default: ICardHorizon;
  argType: { [key in keyof ICardHorizon]: any };
}

const { string, number, bool, shape, oneOf, oneOfType, node, func } = PropTypes;

const pickedObjectProps: IPropDefines = pickPropDefines(
  'objectFit',
  ObjectProps
);

const pickedImageProps: IPropDefines = pickPropDefines('objectFit', ImageProps);

export const CardHorizonProps: IProps = {
  type: {
    description: string,
    image: string,
    imgLayout: ImageProps.type.layout,
    imgPlaceholder: ImageProps.type.placeholder,
    imgRight: bool,
    title: string,
    ...CardProps.type,
    ...pickedObjectProps.type,
    ...pickedImageProps.type,
    ...TransitionsProps.type,
  },
  default: {
    description: '',
    image: '',
    imgLayout: '',
    imgPlaceholder: '',
    imgRight: false,
    title: '',
    ...CardProps.default,
    ...TransitionsProps.default,
    ...pickedObjectProps.default,
    ...pickedImageProps.default,
    borderRadius: 'default',
    height: 28,
    hover: true,
    objectFit: 'cover',
    variant: 'outlined',
    width: 'full',
  },
  argType: {
    description: 'text',
    image: 'text',
    imgLayout: ImageProps.argType.layout,
    imgPlaceholder: ImageProps.argType.placeholder,
    imgRight: 'boolean',
    title: 'text',
    ...CardProps.argType,
    ...TransitionsProps.argType,
    ...pickedObjectProps.argType,
    ...pickedImageProps.argType,
  },
};

export default CardHorizonProps;
