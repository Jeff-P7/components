import TailwindConfigDefault from 'tailwindcss';

// export const ColorTypes: Array<string> = [
//   'primary-100',
//   'primary-200',
//   'primary-500',
//   'primary-600',
//   'primary-700',

//   'secondary-100',
//   'secondary-200',
//   'secondary-500',
//   'secondary-600',
//   'secondary-700',

//   'tertiary-100',
//   'tertiary-200',
//   'tertiary-500',
//   'tertiary-600',
//   'tertiary-700',

//   'gray-50',
//   'gray-100',
//   'gray-200',
//   'gray-300',
//   'gray-400',
//   'gray-500',
//   'gray-600',
//   'gray-700',
//   'gray-800',
//   'gray-900',

//   'white',
//   'black',
//   'inherit',
// ];
export const ColorTypes: Array<string> = [
  'primary-light',
  'primary',
  'primary-dark',

  'secondary-light',
  'secondary',
  'secondary-dark',

  'tertiary-light',
  'tertiary',
  'tertiary-dark',

  'gray-light',
  'gray',
  'gray-dark',

  'gray-50',
  'gray-100',
  'gray-200',
  'gray-300',
  'gray-400',
  'gray-500',
  'gray-600',
  'gray-700',
  'gray-800',
  'gray-900',

  'white',
  'black',
  'inherit',
];
const colorTypeOf = [...ColorTypes] as const;
export type TColor = typeof colorTypeOf[number] | string;

export interface IColor extends Partial<TailwindConfigDefault> {
  backgroundColor?: TColor;
  borderColor?: TColor;
  caretColor?: TColor;
  color?: TColor;
  divideColor?: TColor;
  placeholderColor?: TColor;
  ringColor?: TColor;
  ringOffsetColor?: TColor;
  textColor?: TColor;
  //   gradientColorStops?: TColor;
}

export default IColor;
