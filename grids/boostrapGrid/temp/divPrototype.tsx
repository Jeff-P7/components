import React from 'react';
import PropTypes from 'prop-types';
import { DivInterface } from './divInterProps';
import Div from './div';

// Global Component Values -----------------------------------------------------

let _instanceCount: number = 0;

// end of GCV ------------------------------------------------------------------

type Props = DivInterface;

const DivPrototype: React.FC<Props> = (props): JSX.Element => {
  const { children, classes, margin, colorize, track } = props;
  // const color: string = colorize ? `hsl(${randNumGen()}, 100%, 75%)` : '';
  
  return (
    <>
      {/* {React.isValidElement(children)
        ? React.cloneElement(children, {
            style: { backgroundColor: color },
            ...props
          })
        : children} */}
        
      <Div style={{ backgroundColor: color }} {...props}>
        {children}
      </Div>
    </>
  );
};

const propTypes: { [key in keyof Props]: any } = {
  children: PropTypes.node.isRequired,
  colorize: PropTypes.bool,
  track: PropTypes.bool
};

const defaultProps: Props = {
  colorize: false,
  track: false
};

DivPrototype.propTypes = propTypes;
DivPrototype.defaultProps = defaultProps;

export default DivPrototype;
