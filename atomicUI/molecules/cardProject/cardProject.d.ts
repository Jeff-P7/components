import ICard from '../../atoms/card/card';
import type { IObject } from '../../global/tailwindProps/layout';
import { TPlaceholder } from '../../atoms/image/image.types';
import { IImage } from '../../atoms/image/image';
import { ITransitions } from '../../global/tailwindProps';
import type { LayoutValue } from 'next/image';
export interface ICardProject
  extends ICard,
    // Pick<IObject, 'objectFit'>,
    ITransitions {
  category?: string;
  description?: string;
  image?: string;
  imgLayout?: LayoutValue;
  imgPlaceholder?: TPlaceholder;
  imgBottom?: boolean;
  imgWidth?: string;
  imgHeight?: string;
  imgObjectFit?: string;
  title?: string;
  author?: string;
  like?: boolean;
  likes?: number;
  watchers?: number;
  contributors?: number;
  boolPrivate?: boolean;
  save?: boolean;
  notify?: boolean;
}

export default ICardProject;
