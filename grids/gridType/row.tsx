import React from 'react';
import PropTypes from 'prop-types';
import Div from './div';
import { DivInterface, propsAndDefaults } from '../divInterProps';
import DivPrototype from '../divPrototype';
import RowBootstrap from '../boostrapGrid/temp/rowBootstrap';
import RowFlex from '../tailwindFlexGrid/rowFlex';
import RowGrid from '../tailwindCSSGrid/rowGrid';
import IsDivPrototype from '../boostrapGrid/temp/isDivPrototype';
import { Tag, Log } from '../../util';
import classNames from 'classnames';

// const rowOneOfType: Array<string> = [
//   'flex',
//   'grid',
//   'btsp',
//   ''
// ];

// const rowTypeOf = [...rowOneOfType] as const;
interface Props extends DivInterface {
  rowType?: 'flex' | 'grid' | 'btsp';
  stack?: boolean;
  justify?: string;
  align?: string;
}

const Row: React.FC<Props> = (props): JSX.Element => {
  const { children, style, stack, justify, align, colorize, track } = props;
  // const rowClasses: Array<string> = ['row'];
  // rowClasses.push('row');

  // const rowProps = {
  //   classes: rowClasses,
  //   ...props
  // }

  // props.classes = 'row';
  // if (stack) props.classes = props.classes + ' stack';
  // if (stack)
  //   Row.Props.style = {
  //     flexDirection: 'column',
  //     ...props.style
  //   };

  // const rowStyle = {
  //   ...(stack && {flexDirection: 'column'}),
  //   ...style
  // }

  // const RowType: React.FC = (children: React.ReactNode, props: Props) => ({
  // const RowType: React.FC<Props> = (props) => {
  //   const rowTypes = {
  //     btsp: <RowBootstrap {...props}>{children}</RowBootstrap>,
  //     flex: <RowFlex {...props}>{children}</RowFlex>,
  //     grid: <RowGrid {...props}>{children}</RowGrid>
  //   };

  //   return rowTypes[props.rowType];
  // };

  const rowTypes = {
    btsp: (
      <RowBootstrap justify={justify} stack={stack} align={align} {...props}>
        {children}
      </RowBootstrap>
    ),
    flex: <RowFlex {...props}>{children}</RowFlex>,
    grid: <RowGrid {...props}>{children}</RowGrid>,
  };

  // return rowTypes[props.rowType];
  return rowTypes['btsp'];
};

// const withDivPrototype =
//   (Component) =>
//   ({ children, colorize, track, ...props }) => {
//     if (colorize || track) return <Component {...props}>{children}</Component>;

//     return <Div {...props}>{children}</Div>;
//   };

const propTypes: { [key in keyof Props]: any } = {
  rowType: PropTypes.string,
  stack: PropTypes.bool,
  justify: PropTypes.oneOf([
    'start',
    'center',
    'end',
    'around',
    'between',
    'evenly',
    '',
  ]),
  ...propsAndDefaults.propTypes,
};

const defaultProps: Props = {
  rowType: 'btsp',
  stack: false,
  justify: '',
  ...propsAndDefaults.defaultProps,
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
