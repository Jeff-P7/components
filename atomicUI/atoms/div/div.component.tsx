import React, { FC } from 'react';
import IDiv from './div';
import classNames from 'classnames';
import { Tag } from '../../../utilsUI';
import DivProps from './div.props';
import { paddingToClass, marginToClass } from '../../../global/tailwindProps';

// Global Component Values - Unique Color Generator ----------------------------

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

interface IProps extends IDiv {}
// type Props = IDiv;

export const Div: FC<IProps> = (props): JSX.Element => {
  const {
    children,
    classes,
    styles,
    padding,
    margin,
    colorize,
    track,
    tag,
    highlight,
  } = props;

  // const color: string = colorize ? `hsl(${randNumGen()}, 100%, 30%)` : '';

  const componentClasses: Array<string> = [];
  const componentStyles: Record<string, any> = {
    ...(colorize && { backgroundColor: `hsl(${randNumGen()}, 100%, 75%)` }),
    ...styles,
  };

  // if (classes) componentClasses.push(classes);

  // Temp: Gutter is part of Bootstrap Grid, will be removed to only be utilized within bootstrap grid
  // if (padding || margin || gutter) {
  //   [padding, margin, gutter].forEach((item, index): void => {
  //     const spacerAbbr = ['p', 'm', 'g'];

  //     // Gutter values are all numbers, since 0 will negate using gutters, it will also turn false on condition, thus substituting with 'none'
  //     if (spacerAbbr[index].includes('g') && item === 'none') item = 0;

  //     if (typeof item === 'number')
  //       componentClasses.push(`${spacerAbbr[index]}-${item}`);
  //     else if (item && typeof item === 'string')
  //       componentClasses.push(spacerAbbr[index] + item);
  //   });
  // }

  // if (track) componentClasses.push('track');

  const SpacingDict: Record<string, string> = {
    '0': '0px',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '7': '1.75rem',
    '8': '2rem',
    '9': '2.25rem',
    '10': '2.5rem',
    '11': '2.75rem',
    '12': '3rem',
    '14': '3.5rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '28': '7rem',
    '32': '8rem',
    '36': '9rem',
    '40': '10rem',
    '44': '11rem',
    '48': '12rem',
    '52': '13rem',
    '56': '14rem',
    '60': '15rem',
    '64': '16rem',
    '72': '18rem',
    '80': '20rem',
    '96': '24rem',
    px: '1px',
    auto: 'auto',
    '0.5': '0.125rem',
    '1.5': '0.375rem',
    '2.5': '0.625rem',
    '3.5': '0.875rem',
  };

  // componentClasses.push(...[marginToClass(margin!), paddingToClass(padding!)]);
  if (highlight) {
    componentStyles['borderColor'] = 'blue';
    componentStyles['borderStyle'] = 'inset';
    componentStyles['borderWidth'] = SpacingDict[padding!];

    componentStyles['outlineColor'] = 'red';
    componentStyles['outlineStyle'] = 'solid';
    componentStyles['outlineWidth'] = SpacingDict[margin!];

    componentClasses.push(marginToClass(margin!));
  } else {
    componentClasses.push(
      ...[marginToClass(margin!), paddingToClass(padding!)]
    );
  }

  return (
    <div
      className={classNames(componentClasses, classes)}
      style={componentStyles}
      // {...attributes}
    >
      {/* {tag && <Tag label="Row" />} */}
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

Div.propTypes = DivProps.type;
Div.defaultProps = DivProps.default;

export default Div;
