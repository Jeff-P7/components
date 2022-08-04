// Box Decoration Break --------------------------------------------------------
export const BoxDecorationBreakTypes: Array<string> = ['slice', 'clone'];
const boxDecorationBreakTypeOf = [...BoxDecorationBreakTypes] as const;
export type TBoxDecorationBreak =
  | typeof boxDecorationBreakTypeOf[number]
  | string;

// Box Sizing ------------------------------------------------------------------
export const BoxSizingTypes: Array<string> = ['border', 'content'];
const boxSizingTypeOf = [...BoxSizingTypes] as const;
export type TBoxSizing = typeof boxSizingTypeOf[number] | string;

// All Transition Types --------------------------------------------------------

export type TBox = TBoxDecorationBreak | TBoxSizing;
