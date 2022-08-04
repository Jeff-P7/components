import PropTypes from 'prop-types';
import ILink from './link';
import type { IPropDefines } from '../../../global';
import { CommonProps, pickProps, FontProps } from '../../../global';
import { ButtonProps } from '../button';

interface IProps extends IPropDefines {
  type: { [key in keyof ILink]: any };
  default: ILink;
  argType: { [key in keyof ILink]: any };
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

export const LinkProps: IProps = {
  type: {
    href: string,
    value: string,
    fontSize: FontProps.type.fontSize,
    ...CommonProps.type,
    ...pickProps(buttonPickPropList, ButtonProps.type),
  },
  default: {
    href: '',
    value: '',
    // variant: 'text',
    // fontSize: FontProps.default.fontSize,
    // color: '#fff',
    ...CommonProps.default,
    // ...pickProps(buttonPickPropList, ButtonProps.default),
  },
  argType: {
    href: 'text',
    value: 'text',
    // fontSize: FontProps.argType.fontSize,
    ...CommonProps.argType,
    ...pickProps(buttonPickPropList, ButtonProps.argType),
  },
};

export default LinkProps;
