import type { IPropDefines } from '../../../global';
import IPlaceholder from './placeholder';
import { ColorProps } from '../../color';
import { OpacityProps } from '../../opacity';

/**
 * Props interface defines layout types
 *
 * @interface IProps
 * @extends {IPropDefines}
 */
interface IProps extends IPropDefines {
  type: { [key in keyof IPlaceholder]: any };
  default: IPlaceholder;
  argType: { [key in keyof IPlaceholder]: any };
}

/**
 * Placeholder Props
 */
export const PlaceholderProps: IProps = {
  type: {
    placeholderColor: ColorProps.type.placeholderColor,
    placeholderOpacity: OpacityProps.type.placeholderOpacity,
  },
  default: {
    placeholderColor: 'black',
    placeholderOpacity: 100,
  },
  argType: {
    placeholderColor: ColorProps.argType.placeholderColor,
    placeholderOpacity: OpacityProps.argType.placeholderOpacity,
  },
};

export default PlaceholderProps;
