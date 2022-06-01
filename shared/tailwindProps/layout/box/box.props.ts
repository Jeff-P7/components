import PropTypes from 'prop-types';
import { IBox } from './box';
import type { IPropDefines } from '../../../global';
import { BoxSizingTypes, BoxDecorationBreakTypes } from './box.types';

/**
 * Props interface defines layout types
 *
 * @interface IProps
 * @extends {IPropDefines}
 */
interface IProps extends IPropDefines {
  type: { [key in keyof IBox]: any };
  default: IBox;
  argType: { [key in keyof IBox]: any };
}

const { string, oneOf, oneOfType } = PropTypes;

/**
 * Box Props
 */
export const BoxProps: IProps = {
  type: {
    boxDecorationBreak: oneOfType([string, oneOf(BoxDecorationBreakTypes)]),
    boxSizing: oneOfType([string, oneOf(BoxSizingTypes)]),
  },
  default: {
    boxDecorationBreak: '',
    boxSizing: '',
  },
  argType: {
    boxDecorationBreak: BoxDecorationBreakTypes,
    boxSizing: BoxSizingTypes,
  },
};

export default BoxProps;
