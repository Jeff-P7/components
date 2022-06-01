import React, { FC } from 'react';
import type { IList} from './list.d';
import ListProps from './list.props';
import classNames from 'classnames';
import { classesToString, purgeEmptyProps } from '../../../shared';
import { Div, Text } from '../../../atomicUI/atoms';

interface IProps extends IList {}

/**
 * List Component
 */
export const List: FC<IProps> = (props): JSX.Element => {
  const { values } = props;
  // const { values, classes, styles, ...properties } = props;
  // const componentClasses: Array<string> = [];
  // if (classes?.length) componentClasses.push(classesToString(classes));

  // const componentStyles: Record<string, any> = { ...styles };
  // const attr: Record<string, any> | null = purgeEmptyProps(properties);
  return (
    // <ul className={classNames(classes)}>
    <ul>
      {values.map((item: any) => (
        <li><Div colorize highlight>{item}</Div></li>
      ))}
    </ul>
  );
};

List.propTypes = ListProps.type;
List.defaultProps = ListProps.default;

export default List;
