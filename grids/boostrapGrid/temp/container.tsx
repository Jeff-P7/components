import React from 'react';
import PropTypes, { number } from 'prop-types';
import Div from './div';
import Log from '../util/log';
import classNames from 'classnames';
import { Tag } from '../util';
interface Props {
  // breakpoint?: string;
  classes?: string;
  fluid?: boolean;
  xxl?: boolean;
  xl?: boolean;
  lg?: boolean;
  md?: boolean;
  sm?: boolean;
  colorize?: boolean;
  tag?: boolean;
}

// const Container: React.FC<Props> = ({children, classes, fluid, xxl, xl, lg, md, sm}): JSX.Element => {

/**
 * @component Container
 * @description bootstrap styled container component
 * @param {object} props
 * @param {nodes} props.children nodes to render part of this component
 * @param {string} props.classes list of element style classes
 * @param {bool} props.fluid bootstrap container type style for edge to edge width
 * @param {bool} props.xxl bootstrap container type style for xxl breakpoint
 * @param {bool} props.xl bootstrap container type style for xl breakpoint
 * @param {bool} props.lg bootstrap container type style for lg breakpoint
 * @param {bool} props.md bootstrap container type style for md breakpoint
 * @param {bool} props.sm bootstrap container type style for sm breakpoint
 * @returns {nodes} container component with children nodes
 */
const Container: React.FC<Props> = (props): JSX.Element => {
  // const { children, classes, styles, fluid, margin, padding, colorize, track } = props;
  const { children, classes, colorize, tag, ...options } = props;
  const containerClasses: Array<string> = [];

  // alert(JSON.stringify(options));

  // const containerClass = [
  //   "container",
  //   ...(fluid && ['fluid'])
  // ];

  const optionsEntries = Object.entries(options);

  const optionEntry = optionsEntries.find((arr) => arr[1]);
  const [option, isSelected] =
    optionEntry !== undefined ? optionEntry : ['', false];
  // const containerClass = isSelected ? `container-${option}` : 'container';
  // if (isSelected) containerClasses.push(`container-${option}`);

  containerClasses.push(isSelected ? `container-${option}` : 'container');

  // const props = {classes, fluid, xxl, xl, lg, md, sm};

  return (
    <Div classes={classNames(containerClasses, classes)} colorize={colorize}>
      {tag && <Tag label="Container" />}
      {children}
    </Div>
    // <>
    //   {track ? (
    //     <DivPrototype colorize={colorize} {...props}>
    //       {children}
    //     </DivPrototype>
    //   ) : (
    //     <Div classes="container" margin="mx-auto" colorize={colorize} {...props}>
    //       {children}
    //     </Div>
    //   )}
    // </>
    // <IsDivPrototype classes="container" margin="mx-auto" colorize={colorize} {...props}>
    //   {children}
    // </IsDivPrototype>
  );
};

const propTypes: { [key in keyof Props]: any } = {
  // breakpoint: PropTypes.string,
  classes: PropTypes.string,
  fluid: PropTypes.bool,
  xxl: PropTypes.bool,
  xl: PropTypes.bool,
  lg: PropTypes.bool,
  md: PropTypes.bool,
  sm: PropTypes.bool,
};

const defaultProps: Props = {
  // breakpoint: ''
  classes: '',
  fluid: false,
  xxl: false,
  xl: false,
  lg: false,
  md: false,
  sm: false,
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
