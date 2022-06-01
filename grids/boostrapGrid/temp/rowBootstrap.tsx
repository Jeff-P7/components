import React from 'react';
import PropTypes from 'prop-types';
import Div from '../div';
import { DivInterface } from '../../divInterProps';
import classNames from 'classnames';

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

  '',
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

  '',
];

const justifyTypeOf = [...justifyOneOfType] as const;
const alignTypeOf = [...alignOneOfType] as const;

interface Props extends DivInterface {
  stack?: boolean;
  justify?: typeof justifyTypeOf[number];
  align?: typeof alignTypeOf[number];
}

/**
 * @component RowBootstrap
 * @description bootstrap styled row component
 * @param {object} props
 * @param {nodes} props.children nodes to render part of this component
 * @param {string} props.classes list of element style classes
 * @param {bool} props.stack stack components vertically
 * @param {bool} props.justify row positioning
 * @param {bool} props.align align items
 * @returns {nodes} row component with children nodes
 */
const RowBootstrap: React.FC<Props> = (props): JSX.Element => {
  const { children, classes, justify, align, stack, style, margin, colorize, tag } = props;
  const rowBtspClasses: Array<string> = ['row'];

  if (classes) rowBtspClasses.push(classes);
  if (justify) rowBtspClasses.push(`justify-content-${justify}`);
  if (align) rowBtspClasses.push(`align-items-${align}`);

  // [classes, stack].forEach((item: any): void => {
  //   if (item) rowBtspClasses.push(item!);
  // });
  // if (stack) rowBtspClasses.push('stack');
  
  const rowStyle = {
    ...(stack && { flexDirection: 'column' }),
    ...style,
  };

  return (
    <Div
      classes={classNames(rowBtspClasses)}
      style={rowStyle}
      margin={margin}
      colorize={colorize}
      tag={tag}
    >
      {children}
    </Div>
  );
};

const propTypes: { [key in keyof Props]: any } = {
  stack: PropTypes.bool,
  justify: PropTypes.oneOf(justifyOneOfType),
  align: PropTypes.oneOf(alignOneOfType),
};

const defaultProps: Props = {
  stack: false,
  justify: '',
  align: '',
};

RowBootstrap.propTypes = propTypes;
RowBootstrap.defaultProps = defaultProps;

export default RowBootstrap;
