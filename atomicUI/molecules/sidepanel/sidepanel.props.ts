import PropTypes from 'prop-types';
import ISidepanel from './sidepanel.d';
import type { IPropDefines } from '../../../global';
import { CommonProps } from '../../../global';
import { CardProps } from '../../atoms/card';

/**
 * Property categorical types of defines
 *
 * @interface IProps
 * @extends {IPropDefines}
 */
interface IProps extends IPropDefines {
  type: { [key in keyof ISidepanel]: any };
  default: ISidepanel;
  argType: { [key in keyof ISidepanel]: any };
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

export const SidepanelProps: IProps = {
  type: {
    value: array.isRequired,
    isIcon: bool,
    title: string.isRequired,
    ...CardProps.type,
    // ...CommonProps.type,
  },
  default: {
    value: [],
    isIcon: false,
    title: '',
    ...CardProps.default,
    // ...CommonProps.default,
  },
  argType: {
    value: 'object',
    isIcon: 'boolean',
    title: 'text',
    ...CardProps.argType,
    // ...CommonProps.argType,
  },
};

export default SidepanelProps;
