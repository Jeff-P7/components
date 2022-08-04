import PropTypes from 'prop-types';
import IImage from './image';
import type { IPropDefines } from '../../../global';
import { CommonProps, omitProps } from '../../../global';
import { LayoutTypes, PlaceholderTypes } from './image.types';
import { BorderProps, ObjectProps } from '../../../global/tailwindProps';
import { pickPropDefines } from '../../../global/utilities';

interface IProps extends IPropDefines {
  type: { [key in keyof IImage]: any };
  default: IImage;
  argType: { [key in keyof IImage]: any };
}

const { string, number, bool, shape, oneOf, oneOfType, node, func } = PropTypes;

const pickedObjectProps: IPropDefines = pickPropDefines(
  'objectFit',
  ObjectProps
);

export const ImageProps: IProps = {
  type: {
    alt: string,
    borderRadius: BorderProps.type.borderRadius,
    height: number,
    layout: oneOfType([string, oneOf(LayoutTypes)]),
    placeholder: oneOfType([string, oneOf(PlaceholderTypes)]),
    size: number,
    src: string,
    url: string,
    width: number,
    // isLoader: bool,
    // loader: string,
    ...omitProps(['children'], CommonProps.type),
    ...pickedObjectProps.type,
  },
  default: {
    alt: '',
    borderRadius: BorderProps.default.borderRadius,
    height: undefined,
    layout: '',
    placeholder: '',
    objectFit: '',
    size: undefined,
    src: 'random',
    url: '',
    width: undefined,
    // isLoader: false,
    // loader: {src: ''},
    ...omitProps(['children'], CommonProps.default),
    // ...pickedObjectProps.default,
  },
  argType: {
    alt: 'text',
    borderRadius: BorderProps.argType.borderRadius,
    height: 'number',
    layout: LayoutTypes,
    placeholder: PlaceholderTypes,
    size: 'number',
    src: 'text',
    url: 'text',
    width: 'number',
    // isLoader: false,
    // loader: {src: ''},
    ...omitProps(['children'], CommonProps.argType),
    ...pickedObjectProps.argType,
  },
};

export default ImageProps;
