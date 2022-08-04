import React, { useEffect, useState, useRef, FC } from 'react';
import PropTypes from 'prop-types';
import { Div, Card, Text, Tooltip, Icon } from '../atomicUI/atoms';
import classNames from 'classnames';
import { ICommon } from '../global/props/common';
import { trimString, purgeEmptyProps } from '../global/utilities';
import { useCountRenders } from '../hooks/useCountRenders';
import { IconButton } from '../atomicUI/molecules';

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

interface IProps extends Omit<ICommon, 'children'> {
  values: Record<string, any>;
  position?: TPosition;
}

const Log: FC<IProps> = (props) => {
  //   const { value, replacer, space, childrens, isCode } = props;
  const { classes, values, position } = props;
  // const logRef = useRef();

  // const { children, ...properties } = values;
  // const objLog = childrens ? value : properties;
  // const stringified = isCode
  //   ? JSON.stringify(objLog, null, space)
  //   : JSON.stringify(objLog);

  const PositionDict: Record<string, string> = {
    top: 'inset-x-0 top-0 mx-auto',
    topRight: 'top-0 right-0 ',
    right: 'inset-y-0 right-0 mr-5 mt-40',
    bottomRight: 'bottom-0 right-0',
    bottom: 'inset-x-0 bottom-0',
    bottomLeft: 'bottom-0 left-0',
    left: 'inset-y-0 left-0 ml-5 mt-40',
    topLeft: 'left-0 top-0',
  };

  const componentClasses: Array<string> = [
    `fixed ${PositionDict[position!]}`,
    'w-60',
  ];

  const purgedProps: Record<string, any> = purgeEmptyProps(values);
  const keyProps: Array<string> = Object.keys(purgedProps);

  const [renderCount] = useCountRenders();

  return (
    <Div classes={classNames(componentClasses, classes)}>
      <Card
        classes="w-auto"
        borderRadius="2xl"
        variant="elevated"
        padding={3}
        boxShadow="xl"
      >
        <Div classes="border-b flex items-center" padding="y-1">
          <Text value="Prop Values" size="xs" transform="uppercase" />

          <Div classes="flex items-center" margin="l-auto">
            <IconButton
              value="FiRefreshCw"
              fontSize="xs"
              color="primary"
              size="xs"
              padding="none"
              variant="text"
              circle
            />
            <Text size="xs" transform="uppercase" inline>
              {`rendered: ${renderCount}`}
            </Text>
          </Div>
        </Div>

        {keyProps.map((item: any, index: number) => {
          // const propValue: string = `${item}: ${values[item]}`;
          const value: string = values[item].toString();
          const trimmedValue: string = trimString(value, 22);
          return (
            <Div margin="t-0.5" key={index}>
              <Tooltip title={value} placement="right">
                <Text value={`${item}: `} weight="medium" inline />
                <Text value={trimmedValue} inline italic />
              </Tooltip>
            </Div>
          );
        })}
      </Card>
    </Div>
  );
};

const { object, func, number, bool, oneOf, oneOfType, string } = PropTypes;
const propTypes: { [key in keyof IProps]: any } = {
  values: object.isRequired,
  position: oneOfType([oneOf(PositionTypes), string]),
};

const defaultProps: IProps = {
  values: {},
  position: 'left',
};

Log.propTypes = propTypes;
Log.defaultProps = defaultProps;

export default Log;
