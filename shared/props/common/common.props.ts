import PropTypes from 'prop-types';
import type { IPropDefines } from '../../global';
import { ICommon } from './common';
import { SpacingProps } from '../../tailwindProps';

/**
 * Property categorical types of defines
 *
 * @interface IProps
 * @extends {IPropDefines}
 */
interface IProps extends IPropDefines {
  type: { [key in keyof ICommon]: any };
  default: ICommon;
  argType: { [key in keyof ICommon]: string | Array<string> };
}

const { string, number, oneOfType, arrayOf, node, object } = PropTypes;

export const CommonProps: IProps = {
  type: {
    children: node.isRequired,
    classes: oneOfType([string, arrayOf(string)]),
    // dataComponent: string,
    styles: object,
    ...SpacingProps.type,
  },
  default: {
    children: '',
    classes: '',
    // dataComponent: '',
    styles: {},
    ...SpacingProps.default,
  },
  argType: {
    children: 'object',
    classes: 'text',
    // dataComponent: 'text',
    styles: 'object',
    ...SpacingProps.argType,
  },
};

export default CommonProps;
