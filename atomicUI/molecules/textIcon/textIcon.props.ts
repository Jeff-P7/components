import PropTypes from 'prop-types';
import type ITextIcon from './textIcon';
import type { IPropDefines } from '../../../global';
import { TextProps } from '../../atoms/text';
// import { IconProps } from '../../atoms/icon';
import { IconCombinedProps } from '../sharedProps';

interface IProps extends IPropDefines {
  type: { [key in keyof ITextIcon]: any };
  default: ITextIcon;
  argType: { [key in keyof ITextIcon]: any };
}

const { string, number, bool, node, oneOf, oneOfType } = PropTypes;

const TextIconProps: IProps = {
  type: {
    hover: bool,
    ...IconCombinedProps.type,
    ...TextProps.type,
  },
  default: {
    hover: false,
    ...IconCombinedProps.default,
    ...TextProps.default,
  },
  argType: {
    hover: 'boolean',
    ...IconCombinedProps.argType,
    ...TextProps.argType,
  },
};

export default TextIconProps;
