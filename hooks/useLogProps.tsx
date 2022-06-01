import React, { useEffect, useState, useRef, FC } from 'react';
import PropTypes from 'prop-types';

// interface IProps {
//   value: any;
//   replacer?: string | null;
//   space?: number;
//   childrens?: boolean;
//   isCode?: boolean;
// }

const PositionTypes: Array<string> = [
  'top',
  'topRight',
  'right',
  'bottomRight',
  'bottom',
  'bottomLeft',
  'left',
  'topLeft',
];
const positionTypeOf = [...PositionTypes] as const;
type TPosition = typeof positionTypeOf[number] | string;

interface IProps {
  value: any;
  position: TPosition;
}

const useLogProps: Function = (props) => {
  //   const { value, replacer, space, childrens, isCode } = props;
  const { value, position } = props;
  const logRef = useRef();

  const { children, ...properties } = value;
  const objLog = childrens ? value : properties;
  const stringified = isCode
    ? JSON.stringify(objLog, null, space)
    : JSON.stringify(objLog);

  return {
    render: (
      <pre>
        <code>{stringified}</code>
        <code>{JSON.stringify(logRef.toString)}</code>
      </pre>
    ),
  };
};

// const { object, func, number, bool } = PropTypes;
// const propTypes: { [key in keyof Props]: any } = {
//   value: object.isRequired,
//   replacer: func,
//   space: number,
//   childrens: bool,
//   isCode: bool,
// };

// const defaultProps: Props = {
//   value: '',
//   replacer: null,
//   space: 2,
//   childrens: false,
//   isCode: false,
// };

// const { object, func, number, bool, oneOf, oneOfType, string } = PropTypes;
// const propTypes: { [key in keyof IProps]: any } = {
//   value: object.isRequired,
//   position: oneOfType([oneOf(PositionTypes), string]),
// };

// const defaultProps: IProps = {
//   value: '',
//   position: 'top',
// };

// useLogProps.propTypes = propTypes;
// useLogProps.defaultProps = defaultProps;

export default useLogProps;
