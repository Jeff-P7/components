import PropTypes from 'prop-types';
import { ILayout } from './layout';
import type { IPropDefines } from '../../global';
import { ObjectProps } from './object';
import { BoxProps } from './box';
import {
  ClearTypes,
  ContainerTypes,
  DisplayTypes,
  FloatsTypes,
  IsolationTypes,
  OverflowTypes,
  OverscrollTypes,
  PositionTypes,
  VisibilityTypes,
  ZIndexTypes,
} from './layout.types';

/**
 * Props interface defines layout types
 *
 * @interface IProps
 * @extends {IPropDefines}
 */
interface IProps extends IPropDefines {
  type: { [key in keyof ILayout]: any };
  default: ILayout;
  argType: { [key in keyof ILayout]: any };
}

const { string, oneOf, oneOfType, number } = PropTypes;

/**
 * InterILayout Props
 */
export const LayoutProps: IProps = {
  type: {
    clear: oneOfType([string, oneOf(ClearTypes)]),
    container: oneOfType([string, oneOf(ContainerTypes)]),
    display: oneOfType([string, oneOf(DisplayTypes)]),
    floats: oneOfType([string, oneOf(FloatsTypes)]),
    isolation: oneOfType([string, oneOf(IsolationTypes)]),
    overflow: oneOfType([string, oneOf(OverflowTypes)]),
    overscroll: oneOfType([string, oneOf(OverscrollTypes)]),
    position: oneOfType([string, oneOf(PositionTypes)]),
    visibility: oneOfType([string, oneOf(VisibilityTypes)]),
    zIndex: oneOfType([string, oneOf(ZIndexTypes)]),
    ...BoxProps.type,
    ...ObjectProps.type,
  },
  default: {
    clear: '',
    container: '',
    display: '',
    floats: '',
    isolation: '',
    overflow: '',
    overscroll: '',
    position: '',
    visibility: '',
    zIndex: '',
    ...BoxProps.default,
    ...ObjectProps.default,
  },
  argType: {
    clear: ClearTypes,
    container: ContainerTypes,
    display: DisplayTypes,
    floats: FloatsTypes,
    isolation: IsolationTypes,
    overflow: OverflowTypes,
    overscroll: OverscrollTypes,
    position: PositionTypes,
    visibility: VisibilityTypes,
    zIndex: ZIndexTypes,
    ...BoxProps.argType,
    ...ObjectProps.argType,
  },
};

export default LayoutProps;
