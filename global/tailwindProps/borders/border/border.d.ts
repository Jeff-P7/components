// import TailwindConfigDefault from 'tailwindcss';
import {
  TBorderColor,
  TBorderOpacity,
  TBorderRadius,
  TBorderStyle,
  TBorderWidth,
} from './border.types';

export interface IBorder {
  borderColor?: TBorderColor;
  borderOpacity?: TBorderOpacity;
  borderRadius?: TBorderRadius;
  borderStyle?: TBorderStyle;
  borderWidth?: TBorderWidth;
}

export default IBorder;