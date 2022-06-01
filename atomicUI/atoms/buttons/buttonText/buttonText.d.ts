import React from 'react';
import type {
  ICommon,
  TColor,
  TTextSize,
  IFont,
  TFontSize,
  ISpacing,
} from '../../../../shared';
import { IOpacity } from '../../../../shared/tailwindProps/opacity/opacity';
import { TIconDictList } from '../../icon';
import { TVariant, TSize } from './button.types';
import { IBorder, IEffects } from '../../../../shared/tailwindProps';

export interface IButton
  extends ICommon,
    IBorder,
    Partial<IFont>,
    Pick<IOpacity, 'backgroundOpacity'>,
    Pick<IEffects, 'boxShadow'> {
  circle?: boolean;
  color?: TColor;
  disabled?: boolean;
  fontColor?: TColor;
  fullHeight?: boolean;
  fullWidth?: boolean;
  fullXY?: boolean;
  hover?: boolean;
  label?: string;
  noShadow?: boolean;
  noSpace?: boolean;
  size?: TSize;
  slim?: boolean;
  value?: string;
  variant?: TVariant;
  onClick?: () => void;
}

/**
 * Sets the condition for Button Component to select either IButton with a must
 * type of children, IButtonValue, or IButtonIcon
 *
 * @interface IButtonChildren
 * @extends {IButton}
 */
export interface IButtonChildren extends IButton {
  children: React.ReactNode;
}

/**
 * Sets the condition for Button Component to select either IButton with a must
 * type of value, IButtonChildren, or IButtonIcon
 *
 * @interface IButtonValue
 * @extends {IButton}
 */
export interface IButtonValue extends IButton {
  value: string;
}

export default IButton;
