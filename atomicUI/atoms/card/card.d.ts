import ICardCommon from '../../molecules/cards/cardCommon';
import { ICommon } from '../../../shared/props/common/common';
import { IBorder } from '../../../shared/tailwindProps/borders/border/border';
import { TBoxShadow, TVariantCard } from './card.types';
import { TSizingNumber } from '../../../shared/tailwindProps/sizing/sizing.types';
import {
  ISizing,
  THeight,
  IBorder,
  IColor,
  IEffects,
} from '../../../shared/tailwindProps';

export interface ICard
  extends ICommon,
    ISizing,
    Partial<IBorder>,
    Pick<IEffects, 'boxShadow'>,
    Pick<IColor, 'backgroundColor'> {
  // ariaLabel?: string;
  hover?: boolean;
  hoverBoxShadow?: TBoxShadow;
  size?: TSizingNumber;
  transparent?: boolean;
  variant?: TVariantCard;
  onMouseEnter?: function;
  onMouseLeave?: function;
}

export default ICard;
