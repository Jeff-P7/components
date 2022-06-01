import React, { FC } from 'react';
import IIcon from '../icon';
import IconProps from '../icon.props';
import classNames from 'classnames';
import { IconContext } from 'react-icons';
import { IconDict } from '../icon.dict';
// import * as Material from 'react-icons/md';
// import * as FontAwesome from 'react-icons/fa';
// import type * as allTypes from "react-icons/fa";
// import * as Material from 'react-icons/md';
// import type * as allTypes from 'react-icons/md';

// import { MdOutlineWbSunny, MdOutlineNightsStay } from 'react-icons/md';

// export const IconDict: Record<string, any> = {
//   MdOutlineWbSunny,
//   MdOutlineNightsStay,
// };

// export const IconDictTypes = Object.keys(IconDict);

interface IProps extends IIcon {}

/**
 * Icon Component
 */
const Icon: FC<IProps> = (props): JSX.Element => {
  const { classes, color, inline, name, size } = props;

  const componentClasses: Array<string> = [];
  // if (size) componentClasses.push(`text-${size}`);

  // type TAllIcons = keyof typeof allTypes;
  // const iconName: TAllIcons = Object.keys(Material).filter(item => item === name).toString();
  // const getKeyValue =
  //   <T extends object, U extends keyof T>(obj: T) =>
  //   (key: U) =>
  //     obj[key];

  // const iconName = getKeyValue(Material)(name);

  // const IconElement = React.createElement(Object.keys(Material)[name]);

  const iconName: string = name;
  const iconComponent: FC = IconDict[iconName];
  const IconElement = iconComponent ? React.createElement(iconComponent) : null;

  let iconContextColor: string = '';
  if (color!.startsWith('#')) iconContextColor = color!;
  else componentClasses.push(`text-${color}`);

  const iconContextValues: IconContext = {
    // attr: attr,
    className: classNames(componentClasses, classes),
    color: iconContextColor,
    // style: style,
  };

  componentClasses.push(
    ...[inline ? 'inline' : '', size ? `text-${size}` : '']
  );

  return (
    <IconContext.Provider value={iconContextValues}>
      {IconElement}
    </IconContext.Provider>
  );
};

Icon.propTypes = IconProps.type;
Icon.defaultProps = IconProps.default;

// export default Icon;
