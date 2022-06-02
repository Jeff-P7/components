import type { ICommon } from '../../global';
import type { ICard } from '../../../components/ui';

export interface ISidepanel extends ICard {
    value: Array<any>;
    title?: string;
    isIcon?: boolean;
    // value: Array<string | Record<string, string>>;
}

export default ISidepanel;
