import type { IconContext } from 'react-icons';
import { IconDictTypes } from './icon.dict';
import { ICommon, TColor, TFontSize } from '../../../global';

const IconDictTypeOf = [...IconDictTypes] as const;
export type TIconDict = typeof IconDictTypeOf[number] | string;

export interface IIcon extends ICommon, Partial<IconContext> {
  color?: TColor;
  inline?: boolean;
  value?: TIconDict;
  size?: TFontSize;
  hover?: boolean;

  // attr: object;
  // color: string;
  // size: string;
  // style: object;
}

export default IIcon;
