import React from 'react';
import type { ICommon, TColor, TFontSize, TFontWeight } from '../../global';

const LeadingTypes: Array<string> = [
  'none',
  'tight',
  'snug',
  'normal',
  'relaxed',
  'loose',
];
const leadingTypeOf = [...LeadingTypes] as const;
type TLeading = typeof leadingTypeOf[number] | string;

const AlignTypes: Array<string> = [
  'center',
  'right',
  'left',
  'justify',
];
const alignTypeOf = [...AlignTypes] as const;
type TAlign = typeof alignTypeOf[number] | string;

// type SizeType =
//   | string
//   | 'xs'
//   | 'sm'
//   | 'base'
//   | 'lg'
//   | 'xl'
//   | '2xl'
//   | '3xl'
//   | '4xl'
//   | '5xl'
//   | '6xl'
//   | '7xl'
//   | '8xl'
//   | '9xl';

// type WeightType =
//   | string
//   | 'thin'
//   | 'extralight'
//   | 'light'
//   | 'normal'
//   | 'medium'
//   | 'semibold'
//   | 'bold'
//   | 'extrabold'
//   | 'black';

// type LeadingType =
//   | string
//   | 'none'
//   | 'tight'
//   | 'snug'
//   | 'normal'
//   | 'relaxed'
//   | 'loose';

interface IText extends ICommon {
  /**
   * Alignment of text horizontally
   *
   * @type {TAlign}
   * @memberof IText
   */
  align?: TAlign;
  /**
   *
   *
   * @type {TColor}
   * @memberof IText
   */
  color?: TColor;
  inline?: boolean;
  /**
   *
   *
   * @type {boolean}
   * @memberof IText
   */
  inverted?: boolean;
  /**
   * Italic style of text
   *
   * @type {boolean}
   * @memberof IText
   */
  italic?: boolean;
  /**
   * Line-Height of text
   *
   * @type {TLeading}
   * @memberof IText
   */
  leading?: TLeading;
  /**
   * Size of text
   *
   * @type {TFontSize}
   * @memberof IText
   */
  size?: TFontSize;
  /**
   * Text value incase text is short
   *
   * @type {''}
   * @memberof IText
   */
  value?: '';
  /**
   * Weight style of text
   *
   * @type {TWeight}
   * @memberof IText
   */
  weight?: TFontWeight;
  // children?: React.ReactNode;
}

interface ITextChildren extends IText {
  children: React.ReactNode;
}

interface ITextValue extends IText {
  value: string;
}

// interface ITextChildrenORValue extends ITextChildren | ITextValue {}

default IText;
