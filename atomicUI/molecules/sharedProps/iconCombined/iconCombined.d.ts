import { TIconDict } from '../../../atoms/icon';
import { TSpacingNumber } from '../../../../global/tailwindProps/spacing';

export interface IIconCombined {
  icon: TIconDict;
  iconRight?: boolean;
  iconSpace?: TSpacingNumber;
}

export default IIconCombined;
