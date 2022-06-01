import PropTypes from 'prop-types';
import type { ICol } from './col.d';
import { AlignColTypes, NumberRangeTypes } from './col.types';
import { IPropDefines } from '../../../shared';
import { DivProps } from '../../../atomicUI/atoms';

interface IProps extends IPropDefines {
  type: { [key in keyof ICol]: any };
  default: ICol;
  argType: { [key in keyof ICol]: any };
}

const { string, number, bool, shape, oneOf, oneOfType } = PropTypes;
const stringOrNumber = oneOfType([number, string]);

const colSize = oneOfType([bool, number, string, oneOf(['auto'])]);
const column = oneOfType([
  colSize,
  shape({
    size: colSize,
    order: stringOrNumber,
    offset: stringOrNumber,
  }),
]);

const ColProps: IProps = {
  type: {
    size: column,
    offset: stringOrNumber,
    align: oneOfType([string, oneOf(AlignColTypes)]),
    xs: column,
    sm: column,
    md: column,
    lg: column,
    xl: column,
    auto: bool,
    gutter: oneOfType([number, string]),
    order: oneOfType([number, oneOf(NumberRangeTypes)]),
    ...DivProps.type,
  },
  default: {
    size: 0,
    offset: 0,
    align: '',
    xs: 0,
    sm: 0,
    md: 0,
    lg: 0,
    xl: 0,
    auto: false,
    gutter: '',
    order: 0,
    ...DivProps.default,
  },
  argType: {
    size: 'number',
    offset: 'number',
    align: 'text',
    xs: 'number',
    sm: 'number',
    md: 'number',
    lg: 'number',
    xl: 'number',
    auto: 'boolean',
    gutter: 'text',
    order: 'number',
    ...DivProps.argType,
  },
};

export default ColProps;
