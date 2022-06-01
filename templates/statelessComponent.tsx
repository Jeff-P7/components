import React, { FC } from 'react';
import PropTypes from 'prop-types';

interface Props {
  children: React.ReactNode;
}

const Template: FC<Props> = (props): JSX.Element => {
  const { children } = props;
  
  return(
    <>
      <h1 className="text-8xl" style={{ textAlign: 'center' }}>
        WHy, hellO theRe
      </h1>
      <div className="center">{children}</div>
    </>
    );
}

const propTypes: { [key in keyof Props]: any } = {
  children: PropTypes.node.isRequired
};

const defaultProps: Props = {
  children: <></>
};

Template.propTypes = propTypes;
Template.defaultProps = defaultProps;

export default Template;
