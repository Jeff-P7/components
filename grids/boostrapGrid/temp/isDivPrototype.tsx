import React from 'react';
import { DivInterface, propsAndDefaults } from './divInterProps';
import DivPrototype from './divPrototype';
import Div from './div';

type Props = DivInterface;

const IsDivPrototype: React.FC<Props> = (props): JSX.Element => {
  const { children, colorize, track } = props;

  return (
    <>
      {colorize || track ? (
        <DivPrototype colorize={colorize} {...props}>{children}</DivPrototype>
      ) : (
        <Div {...props}>{children}</Div>
      )}
    </>
  );
};

const propTypes: { [key in keyof Props]: any } = {
  ...propsAndDefaults.propTypes
};

const defaultProps: Props = {
  ...propsAndDefaults.defaultProps
};

IsDivPrototype.propTypes = propTypes;
IsDivPrototype.defaultProps = defaultProps;

export default IsDivPrototype;
