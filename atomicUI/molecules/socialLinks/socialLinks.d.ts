import { ShallowWrapper } from 'enzyme';
import type { ICommon } from '../../../global';

export interface ISocialLinks extends ICommon {
    data?: Shape,
    isHorizontal?: boolean,
    isDark?: boolean
}

export default ISocialLinks;
