import { TColor, ColorTypes } from '../../color';
import { TOpacity, OpacityTypes } from '../../opacity';

// Ring Width ----------------------------------------------------------------

export const RingWidthBaseTypes: Array<string> = [
  '0',
  '1',
  '2',
  'default',
  '4',
  '8',
  'inset',
];
const RingWidthBaseTypeOf = [...RingWidthBaseTypes] as const;
export type TRingWidthBase = typeof RingWidthBaseTypeOf[number] | string;

export const RingWidthNumberTypes: Array<number> = [0, 1, 2, 4, 8];
const RingWidthNumberTypeOf = [...RingWidthNumberTypes] as const;
export type TRingWidthNumber = typeof RingWidthNumberTypeOf[number] | number;

export const RingWidthTypes: Array<string | number> = [
  ...[...RingWidthBaseTypes, ...RingWidthNumberTypes],
];

export type TRingWidth = TRingWidthBase | TRingWidthNumber;

// Ring Offset Width -----------------------------------------------------------

export const RingOffsetWidthTypes: Array<string> = [
  'offset-0',
  'offset-1',
  'offset-2',
  'offset-4',
  'offset-8',
];
// export const RingOffsetWidthTypes: Array<string> = RingWidthNumberTypes.map(
//   (item) => 'offset-' + item
// );
const ringOffsetWidthTypeOf = [...RingOffsetWidthTypes] as const;
export type TRingOffsetWidth = typeof ringOffsetWidthTypeOf[number] | string;

// Ring Offset Color -----------------------------------------------------------

export const RingOffsetColorTypes: Array<string> = ColorTypes.map(
  (item) => 'offset-' + item
);
const ringOffsetColorTypeOf = [...RingOffsetColorTypes] as const;
export type TRingOffsetColor = typeof ringOffsetColorTypeOf[number] | string;

// Ring Color ----------------------------------------------------------------
export const RingColorTypes: Array<string> = ColorTypes;
export type TRingColor = TColor;
// Ring Opacity --------------------------------------------------------------
export const RingOpacityTypes: Array<number> = OpacityTypes;
export type TRingOpacity = TOpacity;

// All Ring Types ------------------------------------------------------------

// export const RingTypes: Array<string | number> = [
//   ...[
//     ...RingColorTypes,
//     ...RingOffsetColorTypes,
//     ...RingOffsetWidthTypes,
//     ...RingOpacityTypes,
//     ...RingWidthTypes,
//   ],
// ];

export type TRing =
  | TRingColor
  | TRingOpacity
  | TRingOffsetColor
  | TRingOffsetWidth
  | TRingWidth;
