// Sizing ----------------------------------------------------------------------

export const SizingNumberTypes: Array<number> = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44,
  48, 52, 56, 60, 64, 72, 80, 96,
];
const sizingNumberTypeOf = [...SizingNumberTypes] as const;
export type TSizingNumber = typeof sizingNumberTypeOf[number] | number;

// Width -----------------------------------------------------------------------

export const WidthBaseTypes: Array<string> = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '14',
  '16',
  '20',
  '24',
  '28',
  '32',
  '36',
  '40',
  '44',
  '48',
  '52',
  '56',
  '60',
  '64',
  '72',
  '80',
  '96',
  'auto',
  'px',
  '0.5',
  '1.5',
  '2.5',
  '3.5',
  '1/2',
  '1/3',
  '2/3',
  '1/4',
  '2/4',
  '3/4',
  '1/5',
  '2/5',
  '3/5',
  '4/5',
  '1/6',
  '2/6',
  '3/6',
  '4/6',
  '5/6',
  '1/12',
  '2/12',
  '3/12',
  '4/12',
  '5/12',
  '6/12',
  '7/12',
  '8/12',
  '9/12',
  '10/12',
  '11/12',
  'full',
  'screen',
  'min',
  'max',
];
const widthBaseTypeOf = [...WidthBaseTypes] as const;
export type TWidthBase = typeof widthBaseTypeOf[number] | string;

export const WidthTypes: Array<string | number> = [
  ...[...WidthBaseTypes, ...SizingNumberTypes],
];
export type TWidth = TWidthBase | TSizingNumber;

// Min Width -------------------------------------------------------------------

export const MinWidthTypes: Array<string> = ['0', 'full', 'min', 'max'];
const minWidthTypeOf = [...MinWidthTypes] as const;
export type TMinWidth = typeof minWidthTypeOf | string;

// Max Width -------------------------------------------------------------------

export const MaxWidthTypes: Array<string> = [
  '0',
  'none',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
  '7xl',
  'full',
  'min',
  'max',
  'prose',
  'screen-sm',
  'screen-md',
  'screen-lg',
  'screen-xl',
  'screen-2xl',
];
const maxWidthTypeOf = [...MaxWidthTypes] as const;
export type TMaxWidth = typeof maxWidthTypeOf | string;

// Height ----------------------------------------------------------------------

const HeightBaseTypes: Array<string> = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '14',
  '16',
  '20',
  '24',
  '28',
  '32',
  '36',
  '40',
  '44',
  '48',
  '52',
  '56',
  '60',
  '64',
  '72',
  '80',
  '96',
  'auto',
  'px',
  '0.5',
  '1.5',
  '2.5',
  '3.5',
  '1/2',
  '1/3',
  '2/3',
  '1/4',
  '2/4',
  '3/4',
  '1/5',
  '2/5',
  '3/5',
  '4/5',
  '1/6',
  '2/6',
  '3/6',
  '4/6',
  '5/6',
  'full',
  'screen',
];
const heightBaseTypeOf = [...HeightBaseTypes] as const;
export type THeightBase = typeof heightBaseTypeOf | string;

export const HeightTypes: Array<string | number> = [
  ...[...HeightBaseTypes, ...SizingNumberTypes],
];
export type THeight = THeightBase | TSizingNumber;

// Min Height ------------------------------------------------------------------

export const MinHeightTypes: Array<string> = ['0', 'full', 'screen'];
const minHeightTypeOf = [...MinHeightTypes] as const;
export type TMinHeight = typeof minHeightTypeOf | string;

// Max Height ------------------------------------------------------------------

const MaxHeightBaseTypes: Array<string> = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '14',
  '16',
  '20',
  '24',
  '28',
  '32',
  '36',
  '40',
  '44',
  '48',
  '52',
  '56',
  '60',
  '64',
  '72',
  '80',
  '96',
  '0.5',
  '1.5',
  '2.5',
  '3.5',
  'px',
  'full',
  'screen',
];
const maxHeightBaseTypeOf = [...MaxHeightBaseTypes] as const;
export type TMaxHeightBase = typeof maxHeightBaseTypeOf | string;

export const MaxHeightTypes: Array<string | number> = [
  ...[...MaxHeightBaseTypes, ...SizingNumberTypes],
];
export type TMaxHeight = TMaxHeightBase | TSizingNumber;

// Sizing All Types ------------------------------------------------------------

export type TSizing =
  | THeight
  | TMaxHeight
  | TMaxWidth
  | TMinHeight
  | TMinWidth
  | TWidth;
