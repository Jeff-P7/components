import type { IButtonIcon } from '../buttonIcon';

export interface ILinkButtonIcon extends IButtonIcon {
    active?: boolean;
    href: string;
    // icon?: string;
    // value: string;
}

export default ILinkButtonIcon;
