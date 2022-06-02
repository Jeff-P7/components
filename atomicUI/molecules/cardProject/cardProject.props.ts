import PropTypes from 'prop-types';
import ICardProject from './cardProject';
import { IPropDefines, pickPropDefines } from '../../../global';
import CardProps from '../../atoms/card/card.props';
import {
  BorderProps,
  SizingProps,
  TransitionsProps,
} from '../../../global/tailwindProps';
import { ImageProps } from '../../atoms/image/image.props';
import { FaSearch } from 'react-icons/fa';

interface IProps extends IPropDefines {
  type: { [key in keyof ICardProject]: any };
  default: ICardProject;
  argType: { [key in keyof ICardProject]: any };
}

const { string, number, bool, shape, oneOf, oneOfType, node, func } = PropTypes;

const pickedBorderProps: IPropDefines = pickPropDefines(
  'borderRadius',
  BorderProps
);

export const CardProjectProps: IProps = {
  type: {
    author: string,
    description: string,
    image: string,
    imgBottom: bool,
    imgLayout: ImageProps.type.layout,
    imgObjectFit: ImageProps.type.objectFit,
    imgPlaceholder: ImageProps.type.placeholder,
    like: bool,
    notify: bool,
    likes: number,
    title: string,
    contributors: number,
    watchers: number,
    boolPrivate: bool,
    save: bool,
    ...CardProps.type,
  },
  default: {
    author: '',
    contributors: 0,
    description: 'description',
    image: '',
    imgBottom: false,
    imgHeight: '',
    imgLayout: 'responsive',
    imgObjectFit: 'cover',
    imgPlaceholder: 'splash',
    imgWidth: '',
    like: false,
    notify: false,
    likes: 0,
    title: 'Project Title',
    watchers: 0,
    boolPrivate: false,
    save: false,
    ...CardProps.default,
    borderRadius: 'lg',
    height: 80,
    hover: true,
    variant: 'elevated',
    width: 72,
  },
  argType: {
    author: 'text',
    description: 'text',
    image: 'text',
    imgBottom: 'boolean',
    imgLayout: ImageProps.argType.layout,
    imgPlaceholder: ImageProps.argType.placeholder,
    like: 'boolean',
    notify: 'boolean',
    likes: 'number',
    title: 'text',
    contributors: 'number',
    watchers: 'number',
    boolPrivate: 'boolean',
    save: 'boolean',
    ...CardProps.argType,
  },
};

export default CardProjectProps;
