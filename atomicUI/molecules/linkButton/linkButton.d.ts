import type { ILink } from '../../atoms/link/link';
import type { IButton } from '../../atoms/button/button';

export interface ILinkButton extends ILink, IButton {}

/**
 * Sets the condition for Button Component to select either IButton with a must
 * type of children or ILinkButtonValue
 *
 * @interface ILinkButtonChildren
 * @extends {IButton}
 */
export interface ILinkButtonChildren extends ILinkButton {
  children: React.ReactNode;
  value?: never;
}

/**
 * Sets the condition for Button Component to select either IButton with a must
 * type of value or ILinkButtonChildren
 *
 * @interface ILinkButtonValue
 * @extends {IButton}
 */
export interface ILinkButtonValue extends ILinkButton {
  value: string;
  children?: never;
}

export type TLinkButton = ILinkButtonChildren | ILinkButtonValue;

export default TLinkButton;
