import { IDiv } from '../../../atomicUI/atoms';

export interface IContainer extends IDiv {
  // breakpoint?: string;
  fluid?: boolean;
  xxl?: boolean;
  xl?: boolean;
  lg?: boolean;
  md?: boolean;
  sm?: boolean;
  xs?: boolean;
}

export default IContainer;
