import PropTypes from 'prop-types';

// Types
export type stringOrNumType = string | number;

export type stringNumNoneType = string | number | 'none';

// Interfaces
export interface DivInterface {
  children?: React.ReactNode;
  classes?: string;
  style?: Record<string, string>;
  padding?: stringNumNoneType;
  /** margin div property */
  margin?: stringNumNoneType;
  gutter?: stringNumNoneType;
  colorize?: boolean;
  track?: boolean;
  tag?: boolean;
}

// PropTypes
export const stringOrNumPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]);

const propTypes: { [key in keyof DivInterface]: any } = {
  children: PropTypes.node.isRequired,
  // classes: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  classes: PropTypes.string,
  style: PropTypes.object,
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gutter: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  colorize: PropTypes.bool,
  track: PropTypes.bool,
  tag: PropTypes.bool,
};

// Defaults
const defaultProps: DivInterface = {
  children: <div />,
  classes: '',
  style: {},
  padding: '',
  margin: '',
  gutter: '',
  colorize: false,
  track: false,
  tag: false,
};

export const propsAndDefaults = { propTypes, defaultProps };
