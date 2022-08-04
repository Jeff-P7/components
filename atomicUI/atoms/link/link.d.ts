import type { ICommon, TColor, TFontSize } from '../../../global';
import type IButton from '../button';
import { VariantTypes, TVariant } from '../button';

export interface ILink extends ICommon {
  // color?: TColor;
  // fullHeight?: boolean;
  href: string;
  value?: string;
  // variant?: TVariant;
  // fontSize?: TFontSize;
  // backgroundColor?: string;
}

/**
 * Sets the condition for Button Component to select either IButton with a must
 * type of children or ILinkValue
 *
 * @interface ILinkChildren
 * @extends {IButton}
 */
export interface ILinkChildren extends ILink {
  children: React.ReactNode;
}

/**
 * Sets the condition for Button Component to select either IButton with a must
 * type of value or ILinkChildren
 *
 * @interface ILinkValue
 * @extends {IButton}
 */
export interface ILinkValue extends ILink {
  value: string;
}

export default ILink;
