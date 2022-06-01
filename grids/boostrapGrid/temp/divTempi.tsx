import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DivInterface, propsAndDefaults } from './divInterProps';
import { Tag } from '../util';

// Global Component Values - Unique Color Generator ---------------------------

const generatedColors: Array<string> = [];
const randNumGen = (): string => Math.floor(Math.random() * 360).toString();

const randColorGen = (): string => {
  let strNum = randNumGen();

  while (generatedColors.includes(strNum)) {
    strNum = randNumGen();
  }

  generatedColors.push(strNum);

  return strNum;
};

// end of GCV ------------------------------------------------------------------

type Props = DivInterface;

const Div: React.FC<Props> = (props): JSX.Element => {
  const {
    children,
    classes,
    style,
    padding,
    margin,
    gutter,
    colorize,
    track,
    tag,
    ...attributes
  } = props;

  const color: string = colorize ? `hsl(${randNumGen()}, 100%, 75%)` : '';
  // const color: string = colorize ? `hsl(${randNumGen()}, 100%, 30%)` : '';

  const divClasses: Array<string> = [];
  const divStyle = {
    ...(colorize && { backgroundColor: color }),
    ...style,
  };

  if (classes) divClasses.push(classes);

  if (padding || margin || gutter) {
    [padding, margin, gutter].forEach((item, index): void => {
      const spacerAbbr = ['p', 'm', 'g'];

      // Gutter values are all numbers, since 0 will negate using gutters, it will also turn false on condition, thus substituting with 'none'
      if (spacerAbbr[index].includes('g') && item === 'none') item = 0;

      if (typeof item === 'number')
        divClasses.push(`${spacerAbbr[index]}-${item}`);
      else if (item && typeof item === 'string')
        divClasses.push(spacerAbbr[index] + item);
    });
  }

  if (track) divClasses.push('track');

  return (
    <div className={classNames(divClasses)} style={divStyle} {...attributes}>
      {tag && <Tag label="Row" />}
      {/* {track && (
        <DivTracker
          instanceCount={instanceCount}
          renderCount={renderCountRef.current++}
          pHandleClick={cHandleClick}
        />
      )} */}

      {children}
    </div>
  );
};

const propTypes: { [key in keyof Props]: any } = {
  ...propsAndDefaults.propTypes,
};

const defaultProps: Props = {
  ...propsAndDefaults.defaultProps,
};

Div.propTypes = propTypes;
Div.defaultProps = defaultProps;

export default Div;
