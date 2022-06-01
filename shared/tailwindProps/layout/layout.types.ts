// Container  ------------------------------------------------------------------
export const ContainerTypes: Array<string> = ['none'];
const containerTypeOf = [...ContainerTypes] as const;
export type TContainer = typeof containerTypeOf[number] | string;

// Display ---------------------------------------------------------------------
export const DisplayTypes: Array<string> = [
  'block',
  'inline-block',
  'inline',
  'flex',
  'inline-flex',
  'table',
  'inline-table',
  'table-caption',
  'table-cell',
  'table-column',
  'table-column-group',
  'table-footer-group',
  'table-header-group',
  'table-row-group',
  'table-row',
  'flow-root',
  'grid',
  'inline-grid',
  'contents',
  'list-item',
  'hidden',
];
const displayTypeOf = [...DisplayTypes] as const;
export type TDisplay = typeof displayTypeOf[number] | string;

// Floats -----------------------------------------------------------------------
export const FloatsTypes: Array<string> = ['right', 'left', 'none'];
const floatsTypeOf = [...FloatsTypes] as const;
export type TFloats = typeof floatsTypeOf[number] | string;

// Clear -----------------------------------------------------------------------
export const ClearTypes: Array<string> = ['left', 'right', 'both', 'none'];
const clearTypeOf = [...ClearTypes] as const;
export type TClear = typeof clearTypeOf[number] | string;

// Isolation -------------------------------------------------------------------
export const IsolationTypes: Array<string> = ['isolate', 'isolation'];
const isolationTypeOf = [...IsolationTypes] as const;
export type TIsolation = typeof isolationTypeOf[number] | string;

// Overflow --------------------------------------------------------------------
export const OverflowTypes: Array<string> = [
  'auto',
  'hidden',
  'visible',
  'scroll',
  'x-auto',
  'y-auto',
  'x-hidden',
  'y-hidden',
  'x-visible',
  'y-visible',
  'x-scroll',
  'y-scroll',
];
const overflowTypeOf = [...OverflowTypes] as const;
export type TOverflow = typeof overflowTypeOf[number] | string;

// Overscroll ------------------------------------------------------------------
export const OverscrollTypes: Array<string> = [
  'auto',
  'contain',
  'none',
  'y-auto',
  'y-contain',
  'y-none',
  'x-auto',
  'x-contain',
  'x-none',
];
const overscrollTypeOf = [...OverscrollTypes] as const;
export type TOverscroll = typeof overscrollTypeOf[number] | string;

// Position -------------------------------------------------------------------
export const PositionTypes: Array<string> = [
  'static',
  'fixed',
  'absolute',
  'relative',
  'sticky',
];
const positionTypeOf = [...PositionTypes] as const;
export type TPosition = typeof positionTypeOf[number] | string;

// Inset -----------------------------------------------------------------------
// export const InsetTypes: Array<string> = ['none', 'text', 'all', 'auto'];
// const insetTypeOf = [...InsetTypes] as const;
// export type TInset = typeof insetTypeOf[number] | string;

// Visibility ------------------------------------------------------------------
export const VisibilityTypes: Array<string> = ['visible', 'invisible'];
const visibilityTypeOf = [...VisibilityTypes] as const;
export type TVisibility = typeof visibilityTypeOf[number] | string;

// Z Index ---------------------------------------------------------------------
export const ZIndexTypes: Array<string> = [
  '0',
  '10',
  '20',
  '30',
  '40',
  '50',
  'auto',
];
const zIndexTypeOf = [...ZIndexTypes] as const;
export type TZIndex = typeof zIndexTypeOf[number] | string;

// All Transition Types --------------------------------------------------------

// export const TransitionTypes: Array<string> = [...[...ContainerTypes]];
export type TLayout =
  | TClear
  | TContainer
  | TDisplay
  | TFloats
  | TIsolation
  | TOverflow
  | TOverscroll
  | TPosition
  | TVisibility
  | TZIndex;
