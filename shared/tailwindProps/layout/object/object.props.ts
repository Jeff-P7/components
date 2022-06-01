import PropTypes from 'prop-types';
import { IObject } from './object';
import type { IPropDefines } from '../../../global';
import { ObjectFitTypes, ObjectPositionTypes } from './object.types';

/**
 * Props interface defines layout types
 *
 * @interface IProps
 * @extends {IPropDefines}
 */
interface IProps extends IPropDefines {
  type: { [key in keyof IObject]: any };
  default: IObject;
  argType: { [key in keyof IObject]: any };
}

const { string, oneOf, oneOfType } = PropTypes;

/**
 * Object Props
 */
export const ObjectProps: IProps = {
  type: {
    objectFit: oneOfType([string, oneOf(ObjectFitTypes)]),
    objectPosition: oneOfType([string, oneOf(ObjectPositionTypes)]),
  },
  default: {
    objectFit: '',
    objectPosition: '',
  },
  argType: {
    objectFit: ObjectFitTypes,
    objectPosition: ObjectPositionTypes,
  },
};

export default ObjectProps;
