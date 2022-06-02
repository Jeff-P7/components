import React, { FC } from 'react';
import ILinkButtonIcon from './linkButtonIcon';
import LinkButtonIconProps from './linkButtonIcon.props';
import classNames from 'classnames';
// import { classesToString, purgeEmptyProps } from '../../../global';
import { Link } from '../../atoms';
import { default as ButtonIcon } from '../buttonIcon';

interface IProps extends ILinkButtonIcon {}

/**
 * LinkButtonIcon Component
 */
export const LinkButtonIcon: FC<IProps> = (props): JSX.Element => {
  const { classes, styles, href, icon, active, value, fontSize, color, fullWidth } = props; //NOSONAR
  const componentClasses: Array<string> = [];
  // if (classes?.length) componentClasses.push(classesToString(classes));

  // const componentStyles: Record<string, any> = { ...styles };
  // const attr: Record<string, any> | null = purgeEmptyProps(properties);

  if (active) componentClasses.push(`bg-${color} bg-opacity-10`);

  return (
    <Link href={href}>
      <ButtonIcon
        value={value}
        icon={icon!}
        variant="text"
        fontSize={fontSize}
        classes={classNames(componentClasses, classes)}
        fullWidth={fullWidth}
      />
    </Link>
  );
};

LinkButtonIcon.propTypes = LinkButtonIconProps.type;
LinkButtonIcon.defaultProps = LinkButtonIconProps.default;

export default LinkButtonIcon;
