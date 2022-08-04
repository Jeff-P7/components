import React from 'react';
/**
 * A Globals file for components
 */

/**-----------------------------------------------------------------------------
 * Prop Types
 */

/**
 * Interface defines the layout of a component prop categories by type checks,
 * defaults, and argTypes
 *
 * @export
 * @interface IPropDefines
 */
export interface IPropDefines {
  type: any;
  default: any;
  argType: any;
}

/**-----------------------------------------------------------------------------
 * Typescript Types
 */

type Only<T, U> = {
  [P in keyof T]: T[P];
} & {
  [P in keyof U]?: never;
};

export type Either<T, U> = Only<T, U> | Only<U, T>;

/**-----------------------------------------------------------------------------
 * DEPRECATED / PENDING
 */

// export const ColorTypes: Array<string> = [
//     'inherit',
//     'primary',
//     'secondary',
//     'success',
//     'error',
//     'info',
//     'warning',
//   ];
