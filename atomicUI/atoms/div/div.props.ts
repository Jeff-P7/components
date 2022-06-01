import PropTypes from 'prop-types';
import IDiv from './div';
import { CommonProps } from '../../../shared';
import type { IPropDefines } from '../../../shared';

interface IProps extends IPropDefines {
  type: { [key in keyof IDiv]: any };
  default: IDiv;
  argType: { [key in keyof IDiv]: any };
}

const { string, number, bool, oneOfType } = PropTypes;
const stringOrNumType = oneOfType([string, number]);

export const DivProps: IProps = {
  type: {
    colorize: bool,
    highlight: bool,
    // highlightMargin: bool,
    // highlightPadding: bool,
    // gutter: stringOrNumType,
    tag: bool,
    track: bool,
    ...CommonProps.type,
  },
  default: {
    colorize: false,
    highlight: false,
    // highlightMargin: false,
    // highlightPadding: false,
    // gutter: '',
    tag: false,
    track: false,
    ...CommonProps.default,
  },
  argType: {
    colorize: 'boolean',
    highlight: 'boolean',
    // highlightMargin: 'boolean',
    // highlightPadding: 'boolean',
    // gutter: 'text',
    tag: 'boolean',
    track: 'boolean',
    ...CommonProps.argType,
  },
};

export default DivProps;
