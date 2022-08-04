import PropTypes from 'prop-types';
import IDivider from './divider';
import { CommonProps, omitProps } from '../../../global';

interface IProps {
  type: { [key in keyof IDivider]: any };
  default: IDivider;
  argType: { [key in keyof IDivider]: any };
}

const { string, number, bool, shape, oneOf, oneOfType, node, func } = PropTypes;

export const DividerProps: IProps = {
  type: {
    borderRadius: number,
    color: string,
    height: number,
    variant: string,
    width: number,
    ...omitProps('padding', CommonProps.type),
  },
  default: {
    borderRadius: 0,
    color: 'black',
    height: 0,
    margin: 'y-4',
    variant: '',
    width: 0,
    ...omitProps(['padding', 'margin'], CommonProps.default),
  },
  argType: {
    borderRadius: 'number',
    classes: 'string',
    color: 'string',
    height: 'number',
    margin: 'string',
    variant: 'string',
    width: 'number',
    ...omitProps('padding', CommonProps.argType),
  },
};

export default DividerProps;
