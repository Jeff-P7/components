import type { ISpacing, TSpacing } from '../../tailwindProps';

/**
 * Interface with common component properties, for a single source of truth
 *
 * @interface ICommon
 */
export interface ICommon extends ISpacing {
  // ariaLabel?: string;
  children?: React.ReactNode;
  classes?: string | Array<string>;
  // dataComponent?: string;
  // dataAttr?: string;
  margin?: TSpacing;
  padding?: TSpacing;
  styles?: Record<string, any>;
  // styles?: React.CSSProperties;
}

// export default ICommon;
