// ListStyleType ---------------------------------------------------------------
/**
 * List style type list types
 */
export const ListStyleTypeTypes: Array<string> = ['none', 'disc', 'decimal'];
const listStyleTypeTypeOf = [...ListStyleTypeTypes] as const;
/**
 * List style type list types
 */
export type TListStyleType = typeof listStyleTypeTypeOf[number] | string;

// ListStylePosition -----------------------------------------------------------
/**
 * List style position list types
 */
export const ListStylePositionTypes: Array<string> = ['inside', 'outside'];
const listStylePositionTypeOf = [...ListStylePositionTypes] as const;
/**
 * List style position types
 */
export type TListStylePosition =
  | typeof listStylePositionTypeOf[number]
  | string;

// All ListStyle types ---------------------------------------------------------
/**
 * All list style types type
 */
export type TListStyle = TListStylePosition | TListStyleType;

/**
 * List of All ListStyle types
 */
// export const ListStyleTypes: Array<string> = [
//   ...ListStylePositionTypes,
//   ...ListStyleTypeTypes,
// ];
