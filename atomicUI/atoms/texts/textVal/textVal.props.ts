import { string } from 'prop-types';
import type { IPropDefines } from '../../../../shared/global';
import { TextProps } from '../../text';
import type ITextVal from './textVal';

interface IProps extends IPropDefines {
  type: { [key in keyof ITextVal]: any };
  default: ITextVal;
  argType: { [key in keyof ITextVal]: any };
}

const TextValProps: IProps = {
  type: { value: string, ...TextProps.type },
  default: { value: '', ...TextProps.default },
  argType: { value: 'text', ...TextProps.argType },
};

export default TextValProps;
