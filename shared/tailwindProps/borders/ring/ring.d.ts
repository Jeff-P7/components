import {
  TRingColor,
  TRingOffsetColor,
  TRingOffsetWidth,
  TRingOpacity,
  TRingWidth,
} from './ring.types';

export interface IRing {
  ringColor?: TRingColor;
  ringOffsetColor?: TRingOffsetColor;
  ringOffsetWidth?: TRingOffsetWidth;
  ringOpacity?: TRingOpacity;
  ringWidth?: TRingWidth;
}

export default IRing;
