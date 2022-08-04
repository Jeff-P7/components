import { ICommons } from '../../../global/global';

export interface IDivider extends Omit<ICommons, 'padding'>{
  borderRadius?: number;
  color?: string;
  height?: number;
  variant?: string;
  width?: number;
};

export default IDivider;