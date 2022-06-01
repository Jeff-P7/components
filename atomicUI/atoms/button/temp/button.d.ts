import React from 'react';
import { ICommons, TColor, TTextSize, IFont } from '../../global';
import { TIconDictList } from '../icon/icon';

// import { ButtonTypeMap } from '@mui/material';

/**
 *
 *
 * @type {('inherit'
 *     | 'primary'
 *     | 'secondary'
 *     | 'success'
 *     | 'error'
 *     | 'info'
 *     | 'warning'
 *     | string)}
 */
// const colorTypes: Array<string> = [
//   'inherit',
//   'primary',
//   'secondary',
//   'success',
//   'error',
//   'info',
//   'warning',
// ];
// const colorTypeOf = [...colorTypes] as const;
// type TColor = typeof colorTypeOf[number] | string;

const VariantTypes: Array<string> = ['contained', 'outlined', 'text'];
const variantTypeOf = [...VariantTypes] as const;
type TVariant = typeof variantTypeOf[number] | string;

const SizeTypes: Array<string> = ['sm', 'md', 'lg'];
const sizeTypeOf = [...SizeTypes] as const;
type TSize = typeof sizeTypeOf[number] | string;

interface IButton extends ICommons, IFont {
  borderRadius?: string;
  circle?: boolean;
  color?: TColor;
  disabled?: boolean;
  fullHeight?: boolean;
  fullWidth?: boolean;
  fullXY?: boolean;
  // href?: string;
  icon?: string;
  iconRight?: boolean;
  label?: string;
  noSpace?: boolean;
  noShadow?: boolean;
  size?: TSize;
  slim?: boolean;
  value?: string;
  variant?: TVariant;
  onClick?: () => void;
}
// } & (
//   {fullXY?: boolean} | {slim?: boolean}
// )

/**
 * Sets the condition for Button Component to select either IButton with a must
 * type of children or IButtonValue
 *
 * @interface IButtonChildren
 * @extends {IButton}
 */
interface IButtonChildren extends IButton {
  children: React.ReactNode;
}

/**
 * Sets the condition for Button Component to select either IButton with a must
 * type of value or IButtonChildren
 *
 * @interface IButtonValue
 * @extends {IButton}
 */
interface IButtonValue extends IButton {
  value: string;
}

// default IButton;
