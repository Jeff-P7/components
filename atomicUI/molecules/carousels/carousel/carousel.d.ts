import type { ICommon } from '../../../global';

export interface ICarousel extends ICommon {
//   component: React.ReactNode;
  Component: Function;
  data: Record<string, any>;
  perView?: number;
//   spacing: number;
}

export default ICarousel;
