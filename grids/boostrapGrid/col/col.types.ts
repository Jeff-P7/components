// Part of this declaration was inspired by react-components source https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Col.tsx

export const NumberRangeTypes: Array<number> = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
];
const numberRangeTypeOf = [...NumberRangeTypes] as const;
export type TNumberRange = typeof numberRangeTypeOf | number;

type NumberAttr =
  | number
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12';

type ColOrderNumber = number | '1' | '2' | '3' | '4' | '5';
type ColOrder = ColOrderNumber | 'first' | 'last';
type ColSize = boolean | 'auto' | TNumberRange;
export type ColSpec =
  | ColSize
  | { size?: ColSize; offset?: TNumberRange; order?: ColOrder };

export const AlignColTypes: Array<string> = ['start', 'center', 'end'];
const alignColTypeOf = [...AlignColTypes] as const;
export type TAlignCol = typeof alignColTypeOf[number] | string;
