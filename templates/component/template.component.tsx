import React, { FC } from 'react';
import ITemplate from './template.d';
import TemplateProps from './template.props';
import classNames from 'classnames';
import { classesToString, purgeEmptyProps } from '../../global';
import { Div, Text } from '../../atomicUI/atoms';

interface IProps extends ITemplate {}

/**
 * Template Component
 */
export const Template: FC<IProps> = (props): JSX.Element => {
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

Template.propTypes = TemplateProps.type;
Template.defaultProps = TemplateProps.default;

export default Template;
