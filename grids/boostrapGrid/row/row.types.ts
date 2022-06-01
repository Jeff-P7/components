/**
 * Types of row justify horizontal column alignment
 */
export const JustifyTypes: Array<string> = [
  'around',
  'between',
  'center',
  'end',
  'evenly',
  'start',
];
export const justifyTypeOf = [...JustifyTypes] as const;
type TJustify = typeof justifyTypeOf[number] | string;

// type TJustify =
//   | string
//   | 'start'
//   | 'end'
//   | 'center'
//   | 'between'
//   | 'around'
//   | 'evenly'
//   | 'items-start'
//   | 'items-end'
//   | 'items-center'
//   | 'items-stretch';

/**
 * Types of row vertical column alignment
 */
export const AlignRowTypes: Array<string> = ['start', 'end', 'center'];
const alignTypeOf = [...AlignRowTypes] as const;
export type TAlignRow = typeof alignTypeOf[number] | string;
// type TAlignRow =
//   | string
//   | 'content-center'
//   | 'content-start'
//   | 'content-end'
//   | 'content-between'
//   | 'content-around'
//   | 'content-evenly'
//   | 'items-start'
//   | 'items-end'
//   | 'items-center'
//   | 'items-baseline'
//   | 'items-stretch';
