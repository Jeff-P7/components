import { ICommons } from '../../../shared';
import { TLayout, TPlaceholder } from './image.types';
import { TBorderRadius } from '../../../shared/tailwindProps/borders/border/border.types';
import { IObject } from '../../../shared/tailwindProps/layout/object/object';
import type { LayoutValue } from 'next/image';
export interface IImage
  extends Omit<ICommons, 'children'>,
    Pick<IObject, 'objectFit'> {
  alt?: string;
  borderRadius?: TBorderRadius;
  height?: number;
  layout?: LayoutValue;
  // layout?: TLayout;
  placeholder?: TPlaceholder;
  size?: number;
  src?: string;
  url?: string;
  width?: number;
  quality?: number; // default is 75%
  // loader?: TLoader;
  // isLoader?: boolean;
  // placeholder?: boolean | 'unsplash' | 'placeholder';
}

export type TLoader = {
  src: string;
  width?: number;
  quality?: number;
};

export default IImage;
