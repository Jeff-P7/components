import type { IDiv } from '../../../atomicUI/atoms';
import { ColSpec, TNumberRange, TAlignCol } from './col.types';

export interface ICol extends IDiv {
  /**
   * The number of columns to general size
   *
   * @type {(boolean|"auto"|number|{ size: boolean|"auto"|number, offset: number, order: "first"|"last"|number })}
   */
  size?: ColSpec;

  /**
   * Size of column offset
   *
   * @type number
   */
  offset?: TNumberRange;

  /**
   * Column alignment from start, center, to end
   *
   * @type string
   */
  align?: TAlignCol;

  /**
   * The number of columns to size on extra small devices (<576px)
   *
   * @type {(boolean|"auto"|number|{ size: boolean|"auto"|number, offset: number, order: "first"|"last"|number })}
   */
  xs?: ColSpec;

  /**
   * The number of columns to size on small devices (≥576px)
   *
   * @type {(boolean|"auto"|number|{ size: boolean|"auto"|number, offset: number, order: "first"|"last"|number })}
   */
  sm?: ColSpec;

  /**
   * The number of columns to size on medium devices (≥768px)
   *
   * @type {(boolean|"auto"|number|{ size: boolean|"auto"|number, offset: number, order: "first"|"last"|number })}
   */
  md?: ColSpec;

  /**
   * The number of columns to size on large devices (≥992px)
   *
   * @type {(boolean|"auto"|number|{ size: boolean|"auto"|number, offset: number, order: "first"|"last"|number })}
   */
  lg?: ColSpec;

  /**
   * The number of columns to size on extra large devices (≥1200px)
   *
   * @type {(boolean|"auto"|number|{ size: boolean|"auto"|number, offset: number, order: "first"|"last"|number })}
   */
  xl?: ColSpec;

  /**
   * The number of columns to size on extra extra large devices (≥1400px)
   *
   * @type {(boolean|"auto"|number|{ size: boolean|"auto"|number, offset: number, order: "first"|"last"|number })}
   */
  xxl?: ColSpec;

  /**
   * Move column apart from siblings
   *
   * @type boolean
   */
  auto?: boolean;

  gutter?: number | string;

  order?: TNumberRange;
}

export default ICol;
