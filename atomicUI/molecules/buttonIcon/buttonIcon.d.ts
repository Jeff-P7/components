import type { IBorder } from '../../global/tailwindProps/borders/border/border';
import type { IButton } from '../../atoms/button/button';
// import type { ITextIcon } from '../textIcon';
// import { TIconDict } from '../../atoms/icon';
// import { TSpacingNumber } from '../../../global/tailwindProps/spacing/spacing.types';
import { IIconCombined } from '../sharedProps/iconCombined';

export interface IButtonIcon extends IButton, IIconCombined {}

/**
 * Sets the condition for Button Component to select either IButton with a must
 * type of children, IButtonValue, or IButtonIcon
 *
 * @export
 * @interface IButtonIconChildren
 * @extends {IButtonIcon}
 */
export interface IButtonIconChildren extends IButtonIcon {
  children: React.ReactNode;
  value?: never;
}

/**
 * Sets the condition for Button Component to select either IButton with a must
 * type of value, IButtonChildren, or IButtonIcon
 *
 * @export
 * @interface IButtonIconValue
 * @extends {IButtonIcon}
 */
export interface IButtonIconValue extends IButtonIcon {
  value: string;
  children?: never;
}

export type TButtonIcon = IButtonIconChildren | IButtonIconValue;

export default TButtonIcon;

// export default function ButtonIcon(props: TButtonIcon): JSX.Element;
