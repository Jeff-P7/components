import React from 'react';
import PropTypes from 'prop-types';
import { textAlign } from '@mui/system';
// import styles from './tag.module.scss';
import styled from '@emotion/styled';
import { css, Global, keyframes } from '@emotion/react';

interface Props {
  //   children: React.ReactNode;
  label: string;
  skipLine?: number;
}

const Tag: React.FC<Props> = ({ label, skipLine }): JSX.Element => {

  const PStyled = styled('p')`
    text-align: right;
    color: blue;
    position: relative;
  `;

  const SpanStyled = styled('span')`
    position: absolute;
    top: ${.5 * (skipLine! + 1)}rem;
    right: .5rem;
    z-index: 100;
  `;

  return (
    <PStyled>
      {/* <p>pushing</p> */}
      <SpanStyled>{label}</SpanStyled>
      {/* <SpanStyled>{`Span ${label}`}</SpanStyled> */}
    </PStyled>
  );
};

const propTypes: { [key in keyof Props]: any } = {
  //   children: PropTypes.node.isRequired,
  label: PropTypes.string,
  skipLine: PropTypes.number,
};

const defaultProps: Props = {
  //   children: <></>,
  label: '',
  skipLine: 0
};

Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;

export default Tag;
