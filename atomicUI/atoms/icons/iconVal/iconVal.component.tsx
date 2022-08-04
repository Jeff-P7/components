import React, { FC } from 'react';
import IIcon from './icon';
import IconProps from './icon.props';
import classNames from 'classnames';
import { IconContext } from 'react-icons';
import { IconDict, IconDictTypes } from './icon.dict';
import { paddingToClass, marginToClass } from '../../../../global';
import { classesToString } from '../../../../global/props/common';

interface IProps extends IIcon {}

/**
 * Icon Component
 */
export const Icon: FC<IProps> = (props): JSX.Element => {
  const { classes, color, inline, value, size, padding, margin } = props;
  const componentClasses: Array<string> = [];

  if (!IconDictTypes.includes(value!))
    throw new Error('Icon value does not exist');

  const iconValue: string = value!;
  const iconComponent: FC = IconDict[iconValue];
  const IconElement = iconComponent ? React.createElement(iconComponent) : null;

  let iconContextColor: string = '';
  if (color!.startsWith('#')) iconContextColor = color!;
  else componentClasses.push(`text-${color}`);

  componentClasses.push(
    ...[
      inline ? 'inline' : '',
      margin ? marginToClass(margin) : '',
      padding ? paddingToClass(padding) : '',
      size ? `text-${size}` : '',
    ]
  );

  if (classes?.length) componentClasses.push(classesToString(classes));

  const iconContextValues: IconContext = {
    className: classNames(componentClasses),
    color: iconContextColor,
  };

  return (
    // <Div classes={inline ? 'inline' : ''} colorize>
      <IconContext.Provider value={iconContextValues}>
        {IconElement}
      </IconContext.Provider>
    // </Div>
  );
};

Icon.propTypes = IconProps.type;
Icon.defaultProps = IconProps.default;

export default Icon;
