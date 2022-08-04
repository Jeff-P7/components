// Appearance  -----------------------------------------------------------------
export const AppearanceTypes: Array<string> = ['none'];
const appearanceTypeOf = [...AppearanceTypes] as const;
export type TAppearance = typeof appearanceTypeOf[number] | string;

// Cursor ----------------------------------------------------------------------
export const CursorTypes: Array<string> = [
  'auto',
  'default',
  'pointer',
  'wait',
  'text',
  'move',
  'help',
  'not-allowed',
];
const cursorTypeOf = [...CursorTypes] as const;
export type TCursor = typeof cursorTypeOf[number] | string;

// Outline ---------------------------------------------------------------------
export const OutlineTypes: Array<string> = ['none', 'white', 'black'];
const outlineTypeOf = [...OutlineTypes] as const;
export type TOutline = typeof outlineTypeOf[number] | string;

// Pointer Events --------------------------------------------------------------
export const PointerEventsTypes: Array<string> = ['none', 'auto'];
const pointerEventsTypeOf = [...PointerEventsTypes] as const;
export type TPointerEvents = typeof pointerEventsTypeOf[number] | string;

// Resize ----------------------------------------------------------------------
export const ResizeTypes: Array<string> = ['none', 'y', 'x', 'default'];
const resizeTypeOf = [...ResizeTypes] as const;
export type TResize = typeof resizeTypeOf[number] | string;

// User Select -----------------------------------------------------------------
export const UserSelectTypes: Array<string> = ['none', 'text', 'all', 'auto'];
const userSelectTypeOf = [...UserSelectTypes] as const;
export type TUserSelect = typeof userSelectTypeOf[number] | string;

// All Transition Types --------------------------------------------------------

// export const TransitionTypes: Array<string> = [...[...AppearanceTypes]];
export type TInteractivity =
  | TAppearance
  | TCursor
  | TPointerEvents
  | TOutline
  | TResize
  | TUserSelect;
