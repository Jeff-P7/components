import React, { FC } from 'react';
import { IRow } from './row';
import { Div, IDiv } from '../../../atomicUI/atoms';
import classNames from 'classnames';
import RowProps from './row.props';
import { purgeEmptyProps, classesToString } from '../../../global';

interface IProps extends IRow {}

export const Row: FC<IProps> = (props): JSX.Element => {
  const {
    children,
    classes,
    justify,
    align,
    stack,
    styles,
    gutter,
    ...properties
  } = props;

  const componentClasses: Array<string> = ['row'];
  // if (classes?.length) componentClasses.push(classesToString(classes));

  componentClasses.push(
    ...[
      align ? `align-items-${align}` : '',
      justify ? `justify-content-${justify}` : '',
    ]
  );

  if (gutter)
    componentClasses.push(
      typeof gutter === 'number' ? `g-${gutter}` : 'g' + gutter
    );

  const componentStyles: Record<string, {}> = {
    ...(stack ? { flexDirection: 'column' } : {}),
    ...styles,
  };

  const divProps: IDiv = purgeEmptyProps(properties);
  return (
    <Div
      classes={classNames(componentClasses, classes)}
      styles={componentStyles}
      {...(divProps && { ...divProps })}
    >
      {children}
    </Div>
  );
};

Row.propTypes = RowProps.type;
Row.defaultProps = RowProps.default;

export default Row;
