// import TailwindConfigDefault from 'tailwindcss';
import {
  TDivideColor,
  TDivideOpacity,
  TDivideStyle,
  TDivideWidth,
} from './divide.types';

export interface IDivide {
  divideColor?: TDivideColor;
  divideOpacity?: TDivideOpacity;
  divideStyle?: TDivideStyle;
  divideWidth?: TDivideWidth;
}

export default IDivide;
