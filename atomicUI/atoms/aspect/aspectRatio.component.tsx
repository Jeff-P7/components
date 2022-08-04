import React, { FC } from 'react';
import IAspectRatio from './aspect';
import AspectRatioProps from './aspect.props';
import classNames from 'classnames';
import { classesToString, purgeEmptyProps } from '../../../global';
import { Div, Text } from '..';

interface IProps extends IAspectRatio {}

/**
 * AspectRatio Component
 */
export const AspectRatio: FC<IProps> = (props): JSX.Element => {
  const { children, classes, styles, ...properties } = props;
  const componentClasses: Array<string> = [];
  if (classes?.length) componentClasses.push(classesToString(classes));

  const componentStyles: Record<string, any> = { ...styles };
  const attr: Record<string, any> | null = purgeEmptyProps(properties);
  return (
    <Div
      classes={classNames(componentClasses)}
      styles={componentStyles}
      {...(attr && { ...attr })}
    >
      <Text size="8xl" align="center">
        WHy, hellO theRe {children}
      </Text>
    </Div>
  );
};

AspectRatio.propTypes = AspectRatioProps.type;
AspectRatio.defaultProps = AspectRatioProps.default;

export default AspectRatio;
