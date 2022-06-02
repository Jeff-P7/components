import ICard from '../../atoms/card/card';
import { IObject } from '../../global/tailwindProps/layout';
import { TPlaceholder } from '../../atoms/image/image.types';
import { IImage } from '../../atoms/image/image';
import { ITransitions } from '../../global/tailwindProps';
import type { LayoutValue } from 'next/image';

export interface ICardHorizon
  extends ICard,
    // Pick<IObject, 'objectFit'>,
    ITransitions {
  description?: string;
  image?: string;
  imgLayout?: LayoutValue;
  imgPlaceholder?: TPlaceholder;
  imgRight?: boolean;
  title?: string;
}

export default ICardHorizon;
