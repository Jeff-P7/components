export const LayoutTypes: Array<string> = [
  'fill',
  'fixed',
  'intrinsic',
  'responsive',
];
const layoutTypeOf = [...LayoutTypes] as const;
export type TLayout = typeof layoutTypeOf[number] | undefined;

export const PlaceholderTypes: Array<string> = ['splash', 'place'];
const placeholderTypeOf = [...PlaceholderTypes] as const;
export type TPlaceholder = typeof placeholderTypeOf[number] | string;
