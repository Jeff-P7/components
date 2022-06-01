import PropTypes from 'prop-types';
import ILayout from './layout';

interface IProps {
  type: { [key in keyof ILayout]: any };
  default: ILayout;
  argType: { [key in keyof ILayout]: any };
}

const { string, number, bool, shape, oneOf, oneOfType, node, func } = PropTypes;

export const LayoutProps: IProps = {
  type: {
    children: node.isRequired,
  },
  default: {
    children: '',
  },
  argType: {
    children: 'string',
  },
};

export default LayoutProps;
