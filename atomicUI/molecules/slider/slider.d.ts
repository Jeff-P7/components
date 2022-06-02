import type { ICommon } from '../../global';

export interface ISlider extends ICommon {
  // data: Record<string, any>;
  perView?: number;
  dots?: boolean;
//   spacing: number;
}

export default ISlider;
