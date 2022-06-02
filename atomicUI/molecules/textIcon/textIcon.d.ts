import type IText from '../../atoms/text/text';
import { IICon, TIconDict } from '../../atoms/icon';
import { IIconCombined } from '../sharedProps/iconCombined';
export interface ITextIcon extends IText, IIconCombined  {
  hover?: boolean;
}

/**
 * Sets the condition for Button Component to select either ITextIcon with a must
 * type of children or ITextIconValue
 *
 * @export
 * @interface ITextIconChildren
 * @extends {ITextIcon}
 */
export interface ITextIconChildren extends ITextIcon {
  children: React.ReactNode;
  value?: never;
}

/**
 * Sets the condition for Button Component to select either ITextIcon with a must
 * type of value or ITextIconChildren
 *
 * @export
 * @interface ITextIconValue
 * @extends {ITextIcon}
 */
export interface ITextIconValue extends ITextIcon {
  value: string;
  children?: never;
}

export type TTextIcon = ITextIconChildren | ITextIconValue;

export default TTextIcon;
