import {
  THeight,
  TMaxHeight,
  TMaxWidth,
  TMinHeight,
  TMinWidth,
  TWidth,
} from './sizing.types';

export interface ISizing {
  height?: THeight;
  maxHeight?: TMaxHeight;
  maxWidth?: TMaxWidth;
  minHeight?: TMinHeight;
  minWidth?: TMinWidth;
  width?: TWidth;
}

export default ISizing;
