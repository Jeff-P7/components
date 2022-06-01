/**
 * Spacing all sides types for margin and padding
 */
export const SpacingAllTypes: Array<string> = [
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
  'px',
  'auto',
  '0.5',
  '1.5',
  '2.5',
  '3.5',
];
const spacingAllTypeOf = [...SpacingAllTypes] as const;
export type TSpacingAll = typeof spacingAllTypeOf[number] | string;

/**
 * Spacing all sides number types for margin and padding
 */
export const SpacingNumberTypes: Array<number> = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44,
  48, 52, 56, 60, 64, 72, 80, 96, 0.5, 1.5, 2.5, 3.5,
];
const spacingNumberTypeOf = [...SpacingNumberTypes] as const;
export type TSpacingNumber = typeof spacingNumberTypeOf[number] | number;

/**
 * Spacing X horizontal sides types for margin and padding
 */
export const SpacingXTypes: Array<string> = [
  'x-0',
  'x-1',
  'x-2',
  'x-3',
  'x-4',
  'x-5',
  'x-6',
  'x-7',
  'x-8',
  'x-9',
  'x-10',
  'x-11',
  'x-12',
  'x-14',
  'x-16',
  'x-20',
  'x-24',
  'x-28',
  'x-32',
  'x-36',
  'x-40',
  'x-44',
  'x-48',
  'x-52',
  'x-56',
  'x-60',
  'x-64',
  'x-72',
  'x-80',
  'x-96',
  'x-px',
  'x-auto',
  'x-0.5',
  'x-1.5',
  'x-2.5',
  'x-3.5',
];
// export const SpacingXTypes: Array<string> = SpacingAllTypes.map(
//   (item) => 'x-' + item
// );
const spacingXTypeOf = [...SpacingXTypes] as const;
export type TSpacingX = typeof spacingXTypeOf[number] | string;

/**
 * Spacing Y vertical sides types for margin and padding
 */
export const SpacingYTypes: Array<string> = [
  'y-0',
  'y-1',
  'y-2',
  'y-3',
  'y-4',
  'y-5',
  'y-6',
  'y-7',
  'y-8',
  'y-9',
  'y-10',
  'y-11',
  'y-12',
  'y-14',
  'y-16',
  'y-20',
  'y-24',
  'y-28',
  'y-32',
  'y-36',
  'y-40',
  'y-44',
  'y-48',
  'y-52',
  'y-56',
  'y-60',
  'y-64',
  'y-72',
  'y-80',
  'y-96',
  'y-px',
  'y-auto',
  'y-0.5',
  'y-1.5',
  'y-2.5',
  'y-3.5',
];
// export const SpacingYTypes: Array<string> = SpacingAllTypes.map(
//   (item) => 'y-' + item
// );
const spacingYTypeOf = [...SpacingYTypes] as const;
export type TSpacingY = typeof spacingYTypeOf[number] | string;

/**
 * Spacing top side types for margin and padding
 */
export const SpacingTopTypes: Array<string> = [
  't-0',
  't-1',
  't-2',
  't-3',
  't-4',
  't-5',
  't-6',
  't-7',
  't-8',
  't-9',
  't-10',
  't-11',
  't-12',
  't-14',
  't-16',
  't-20',
  't-24',
  't-28',
  't-32',
  't-36',
  't-40',
  't-44',
  't-48',
  't-52',
  't-56',
  't-60',
  't-64',
  't-72',
  't-80',
  't-96',
  't-px',
  't-auto',
  't-0.5',
  't-1.5',
  't-2.5',
  't-3.5',
];
// export const SpacingTopTypes: Array<string> = SpacingAllTypes.map(
//   (item) => 't-' + item
// );
const spacingTopTypeOf = [...SpacingTopTypes] as const;
export type TSpacingTop = typeof spacingTopTypeOf[number] | string;

/**
 * Spacing right side types for margin and padding
 */
export const SpacingRightTypes: Array<string> = [
  'r-0',
  'r-1',
  'r-2',
  'r-3',
  'r-4',
  'r-5',
  'r-6',
  'r-7',
  'r-8',
  'r-9',
  'r-10',
  'r-11',
  'r-12',
  'r-14',
  'r-16',
  'r-20',
  'r-24',
  'r-28',
  'r-32',
  'r-36',
  'r-40',
  'r-44',
  'r-48',
  'r-52',
  'r-56',
  'r-60',
  'r-64',
  'r-72',
  'r-80',
  'r-96',
  'r-px',
  'r-auto',
  'r-0.5',
  'r-1.5',
  'r-2.5',
  'r-3.5',
];
// export const SpacingRightTypes: Array<string> = SpacingAllTypes.map(
//   (item) => 'r-' + item
// );
const spacingRightTypeOf = [...SpacingRightTypes] as const;
export type TSpacingRight = typeof spacingRightTypeOf[number] | string;

/**
 * Spacing bottom side types for margin and padding
 */
export const SpacingBottomTypes: Array<string> = [
  'b-0',
  'b-1',
  'b-2',
  'b-3',
  'b-4',
  'b-5',
  'b-6',
  'b-7',
  'b-8',
  'b-9',
  'b-10',
  'b-11',
  'b-12',
  'b-14',
  'b-16',
  'b-20',
  'b-24',
  'b-28',
  'b-32',
  'b-36',
  'b-40',
  'b-44',
  'b-48',
  'b-52',
  'b-56',
  'b-60',
  'b-64',
  'b-72',
  'b-80',
  'b-96',
  'b-px',
  'b-auto',
  'b-0.5',
  'b-1.5',
  'b-2.5',
  'b-3.5',
];
// export const SpacingBottomTypes: Array<string> = SpacingAllTypes.map(
//   (item) => 'b-' + item
// );
const spacingBottomTypeOf = [...SpacingBottomTypes] as const;
export type TSpacingBottom = typeof spacingBottomTypeOf[number] | string;

/**
 * Spacing left side types for margin and padding
 */
export const SpacingLeftTypes: Array<string> = [
  'l-0',
  'l-1',
  'l-2',
  'l-3',
  'l-4',
  'l-5',
  'l-6',
  'l-7',
  'l-8',
  'l-9',
  'l-10',
  'l-11',
  'l-12',
  'l-14',
  'l-16',
  'l-20',
  'l-24',
  'l-28',
  'l-32',
  'l-36',
  'l-40',
  'l-44',
  'l-48',
  'l-52',
  'l-56',
  'l-60',
  'l-64',
  'l-72',
  'l-80',
  'l-96',
  'l-px',
  'l-auto',
  'l-0.5',
  'l-1.5',
  'l-2.5',
  'l-3.5',
];
// export const SpacingLeftTypes: Array<string> = SpacingAllTypes.map(
//   (item) => 'l-' + item
// );
const spacingLeftTypeOf = [...SpacingLeftTypes] as const;
export type TSpacingLeft = typeof spacingLeftTypeOf[number] | string;

/**
 * General spacing types
 */
export type TSpacing =
  | TSpacingAll
  | TSpacingNumber
  | TSpacingY
  | TSpacingX
  | TSpacingTop
  | TSpacingRight
  | TSpacingBottom
  | TSpacingLeft;

/**
 * List of all Spacing Types
 */
export const SpacingTypes: Array<string | number> = [
  ...[
    ...SpacingAllTypes,
    ...SpacingNumberTypes,
    ...SpacingXTypes,
    ...SpacingYTypes,
    ...SpacingTopTypes,
    ...SpacingRightTypes,
    ...SpacingBottomTypes,
    ...SpacingLeftTypes,
  ],
];
