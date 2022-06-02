import PropTypes from 'prop-types';
import ILinkButton from './linkButton';
import type { IPropDefines } from '../../global';
import { ButtonProps } from '../../atoms/button';
import { ILink, LinkProps } from '../../atoms/link';

interface IProps extends IPropDefines {
  type: { [key in keyof ILinkButton]: any };
  default: ILinkButton;
  argType: { [key in keyof ILinkButton]: any };
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

// const filteredButtonProps: Record<string, any> = pickPropDefines(['variant'], ButtonProps);

// Temporary fix till I deal with pickPropDefines
const buttonPickPropList: string | Array<string> = [
  'variant',
  'color',
  'fullHeight',
];

export const LinkButtonProps: IProps = {
  type: {
    ...LinkProps.type,
    ...ButtonProps.type,
  },
  default: {
    ...LinkProps.default,
    ...ButtonProps.default,
    variant: 'text',
    hover: false,
  },
  argType: {
    ...LinkProps.argType,
    ...ButtonProps.argType,
  },
};

export default LinkButtonProps;
