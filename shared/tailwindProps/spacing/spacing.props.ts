import PropTypes from 'prop-types';
import { ISpacing } from './spacing';
import { SpacingTypes } from './spacing.types';
import type { IPropDefines } from '../../global';

/**
 * Props interface defines layout types
 *
 * @interface IProps
 * @extends {IPropDefines}
 */
interface IProps extends IPropDefines {
  type: { [key in keyof ISpacing]: any };
  default: ISpacing;
  argType: { [key in keyof ISpacing]: any };
}

const { string, oneOf, oneOfType, number, arrayOf } = PropTypes;
const SpacingOneOfType: any = oneOfType([string, number, oneOf(SpacingTypes)]);

/**
 * Spacing Props
 */
export const SpacingProps: IProps = {
  type: {
    margin: SpacingOneOfType,
    padding: SpacingOneOfType,
  },
  default: {
    margin: '',
    padding: '',
  },
  argType: {
    margin: SpacingTypes,
    padding: SpacingTypes,
  },
};

export default SpacingProps;
