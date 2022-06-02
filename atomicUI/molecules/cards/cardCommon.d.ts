import { ICommon, IBorder, IFont } from '../../global';
import { TColor } from '../../../global';



export interface ICardCommon extends ICommon, IBorder, IFont {
  avatar?: string;
  backgroundColor?: TColor;
  boxShadow?: TBoxShadow;
  elevation?: number; // Shadow depth, corresponds to dp in the spec. It accepts values between 0 and 24 inclusive.
  header?: string;
  headerColor?: string;
  height?: string;
  image?: string;
  noSpace?: boolean;
  orientation?: TOrientation;
  raised?: boolean; // If true, the card will use raised styling.
  subHeader?: string;
  subHeaderColor?: string;
  subTitle?: string;
  title?: string;
  variant?: TVariantCard;
}

export default ICardCommon;

/**
 * Sources / Examples
 *
 * https://mui.com/components/cards/
 * https://mui.com/api/paper/
 *
 *
 */
