import type IButtonVal from './buttonVal';
import { ButtonProps } from '../../button';
import { IPropDefines } from '../../../../shared/global';
import { string } from 'prop-types';
interface IProps extends IPropDefines {
  type: { [key in keyof IButtonVal]: any };
  default: IButtonVal;
  argType: { [key in keyof IButtonVal]: any };
}

export const ButtonValProps: IProps = {
  type: {
    ...ButtonProps.type,
  },
  default: {
    ...ButtonProps.default,
  },
  argType: {
    ...ButtonProps.argType,
  },
};

export default ButtonValProps;
