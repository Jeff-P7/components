import { IICon } from '../../atoms/icon/icon';
import { IButton, ButtonProps } from '../../atoms/button';
import { TIconDict } from '../../atoms/icon/icon';
import { TFontSize } from '../../global/tailwindProps';
import { IIcon } from '../../atoms/icon';

export interface IIconButton extends IButton, Pick<IIcon, 'value'> {
//   icon: TIconDict;
//   iconSize: TFontSize;
}

export default IIconButton;
