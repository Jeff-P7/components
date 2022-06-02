import React from 'react';
import PropTypes from 'prop-types';
import { Avatar as MaterialAvatar } from '@mui/material';

interface Props {
  alt?: string;
  children?: React.ReactNode;
  sizes?: string;
  src?: string;
  sx?: Array<func | object> | func | object;
  variant?: 'circular' | 'rounded' | 'square' | string;
}

const Avatar: React.FC<Props> = (props): JSX.Element => (
  <MaterialAvatar {...props}>{props.children}</MaterialAvatar>
);

const propTypes: { [key in keyof Props]: any } = {
  alt: PropTypes.string,
  children: PropTypes.node,
  sizes: PropTypes.string,
  src: PropTypes.string,
  sx: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  variant: PropTypes.string,
};

const defaultProps: Props = {
  alt: '',
  children: <></>,
  sizes: '',
  src: '',
  sx: {},
  variant: 'circular',
};

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
