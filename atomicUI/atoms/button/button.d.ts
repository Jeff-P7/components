import React from 'react';
import type { ICommon } from '../../../shared/props';
import type { TVariant, TSize, TFontAlign } from './button.types';
import type {
  IBorder,
  IEffects,
  IOpacity,
  ITypography,
  TColor,
} from '../../../shared/tailwindProps';

export interface IButton
  extends ICommon,
    IBorder,
    Pick<ITypography, 'fontSize' | 'textColor'>,
    Pick<IOpacity, 'backgroundOpacity'>,
    Pick<IEffects, 'boxShadow'> {
  circle?: boolean;
  color?: TColor;
  disabled?: boolean;
  fontAlign?: TFontAlign;
  fontColor?: TColor;
  fullHeight?: boolean;
  fullWidth?: boolean;
  fullXY?: boolean;
  hover?: boolean;
  label?: string;
  noShadow?: boolean;
  noSpace?: boolean;
  // noHighlight?: boolean;
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
  value?: never;
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
  children?: never;
}

export type TButton = IButtonChildren | IButtonValue;

export default TButton;
