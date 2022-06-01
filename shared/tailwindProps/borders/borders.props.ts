import type { IPropDefines } from '../../global';
import IBorders from './borders';
import BorderProps from './border/border.props';
import DivideProps from './divide/divide.props';
import RingProps from './ring/ring.props';

interface IProps extends IPropDefines {
  type: { [key in keyof IBorders]: any };
  default: IBorders;
  argType: { [key in keyof IBorders]: any };
}

export const BordersProps: IProps = {
  type: {
    ...BorderProps.type,
    ...DivideProps.type,
    ...RingProps.type,
  },
  default: {
    ...BorderProps.default,
    ...DivideProps.default,
    ...RingProps.default,
  },
  argType: {
    ...BorderProps.argType,
    ...DivideProps.argType,
    ...RingProps.argType,
  },
};

export default BordersProps;
