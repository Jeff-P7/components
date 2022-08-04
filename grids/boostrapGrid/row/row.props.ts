import PropTypes from 'prop-types';
import type { IRow } from './row.d';
import { JustifyTypes, AlignRowTypes } from './row.types';
import { IPropDefines } from '../../../global';
import { DivProps } from '../../../atomicUI/atoms';

interface IProps extends IPropDefines {
  type: { [key in keyof IRow]: any };
  default: IRow;
  argType: { [key in keyof IRow]: any };
}

const { bool, oneOf, oneOfType, string, number } = PropTypes;

const RowProps: IProps = {
  type: {
    stack: bool,
    gutter: oneOfType([number, string]),
    justify: oneOfType([oneOf(JustifyTypes), string]),
    align: oneOfType([oneOf(AlignRowTypes), string]),
    ...DivProps.type,
  },
  default: {
    stack: false,
    justify: '',
    align: '',
    gutter: '',
    ...DivProps.default,
  },
  argType: {
    stack: false,
    justify: '',
    align: '',
    gutter: 'text',
    ...DivProps.argType,
  },
};

export default RowProps;
