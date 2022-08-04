import PropTypes from 'prop-types';
import { IListStyle } from './listStyle';
import { ListStyleTypeTypes, ListStylePositionTypes } from './listStyle.types';
import type { IPropDefines } from '../../../global';

/**
 * Props category define types
 *
 * @interface IProps
 * @extends {IPropDefines}
 */
interface IProps extends IPropDefines {
  type: { [key in keyof IListStyle]: any };
  default: IListStyle;
  argType: { [key in keyof IListStyle]: string };
}

const { string, oneOf, oneOfType } = PropTypes;

/**
 * ListStyle Props
 */
export const ListStyleProps: IProps = {
  type: {
    listStylePosition: oneOfType([string, oneOf(ListStylePositionTypes)]),
    listStyleType: oneOfType([string, oneOf(ListStyleTypeTypes)]),
  },
  default: {
    listStylePosition: '',
    listStyleType: '',
  },
  argType: {
    listStylePosition: 'text',
    listStyleType: 'text',
  },
};

export default ListStyleProps;
