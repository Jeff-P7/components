import { DivInterface } from '../divInterProps';
import PropTypes from 'prop-types';

const justifyOneOfType: Array<string> = [
  'start',
  'end',
  'center',
  'between',
  'around',
  'evenly',

  'items-start',
  'items-end',
  'items-center',
  'items-stretch',

  'self-auto',
  'self-start',
  'self-end',
  'self-center',
  'self-stretch',

  ''
];

const alignOneOfType: Array<string> = [
  'content-center',
  'content-start',
  'content-end',
  'content-between',
  'content-around',
  'content-evenly',

  'items-start',
  'items-end',
  'items-center',
  'items-baseline',
  'items-stretch',

  'self-auto',
  'self-start',
  'self-end',
  'self-center',
  'self-stretch',

  ''
];

// const justifyTypeOf: ReadonlyArray<string> = [...justifyOneOfType];
const justifyTypeOf = [...justifyOneOfType] as const;
const alignTypeOf = [...alignOneOfType] as const;

export interface RowFlex extends DivInterface {
  stack?: boolean;
  justify?: typeof justifyTypeOf[number];
  align?: typeof alignTypeOf[number];
}

// PropTypes
const propTypes: { [key in keyof RowFlex]: any } = {
  stack: PropTypes.bool,
  justify: PropTypes.oneOf(justifyOneOfType),
  align: PropTypes.oneOf(alignOneOfType)
};

// Defaults
const defaultProps: RowFlex = {
  stack: false,
  justify: '',
  align: ''
};

export const flexPropsAndDefaults = { propTypes, defaultProps };
