import PropTypes from 'prop-types';
import IList from './list.d';
import type { IPropDefines } from '../../../shared';
import { CommonProps } from '../../../shared';

/**
 * Property categorical types of defines
 *
 * @interface IProps
 * @extends {IPropDefines}
 */
interface IProps extends IPropDefines {
  type: { [key in keyof IList]: any };
  default: IList;
  argType: { [key in keyof IList]: any };
}

const {
  array,
  arrayOf,
  bool,
  func,
  node,
  number,
  oneOf,
  oneOfType,
  shape,
  string,
} = PropTypes;

export const ListProps: IProps = {
  type: {
    values: array,
    ...CommonProps.type,
  },
  default: {
    values: [],
    ...CommonProps.default,
  },
  argType: {
    values: 'array',
    ...CommonProps.argType,
  },
};

export default ListProps;
