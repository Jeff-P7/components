//  Variant Button Types -------------------------------------------------------
export const VariantTypes: Array<string> = ['contained', 'outlined', 'text'];
const variantTypeOf = [...VariantTypes] as const;
export type TVariant = typeof variantTypeOf[number] | string;

// Button Size Types -----------------------------------------------------------
export const SizeTypes: Array<string> = ['sm', 'md', 'lg'];
const sizeTypeOf = [...SizeTypes] as const;
export type TSize = typeof sizeTypeOf[number] | string;
