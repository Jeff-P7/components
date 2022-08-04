import React, { FC } from 'react';
import type ICol from './col';
import ColProps from './col.props';
import classNames from 'classnames';
import { Div, IDiv } from '../../../atomicUI/atoms';
import { classesToString, purgeEmptyProps } from '../../../global';

interface IProps extends ICol {}

export const Col: FC<IProps> = (props): JSX.Element => {
  const {
    align,
    auto,
    children,
    classes,
    offset,
    size,
    gutter,
    order,
    ...properties
  } = props;
  const componentClasses: Array<string> = ['col'];
  // if (classes?.length) componentClasses.push(classesToString(classes));

  componentClasses.push(
    ...[
      align ? `align-self-${align}` : '',
      offset ? `offset-${offset}` : '',
      size ? `col-${size}` : '',
      auto ? 'me-auto' : '',
      order ? `order-${order}` : '',
    ]
  );

  if (gutter)
    componentClasses.push(
      typeof gutter === 'number' ? `g-${gutter}` : 'g' + gutter
    );

  const divProps: IDiv = purgeEmptyProps(properties);
  return (
    <Div
      classes={classNames(componentClasses, classes)}
      {...(divProps && { ...divProps })}
    >
      {children}
    </Div>
  );
};

Col.propTypes = ColProps.type;
Col.defaultProps = ColProps.default;

export default Col;
