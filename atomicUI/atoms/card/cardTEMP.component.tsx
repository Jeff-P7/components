// import React from 'react';
// import PropTypes from 'prop-types';
// import { Div, Text } from '../../../elements';

// interface Props {
//   /** required child node for card embodiment */
//   children: React.ReactNode;
//   /** title of card */
//   title?: string;
//   /** marginal card space */
//   margin?: number | string;
//   /** dropshadow card values */
//   isDropshadow?: boolean;
//   /** card corner border radius */
//   borderRadius?: string;
// }

// /**
//  * @component Card
//  * @description Card UI
//  * @param {object} props
//  * @param {nodes} props.children nodes to render part of this component
//  * @param {string} props.title bootstrap container type style for edge to edge width
//  * @param {number | string} props.margin card margin
//  * @param {bool} props.dropshadow card dropshadow values
//  * @param {string} props.borderRadius corner radius
//  * @return {nodes} card component with children nodes
//  */
// const Card: React.FC<Props> = (props): JSX.Element => {
//   const { children, title, margin, isDropshadow, borderRadius } = props;
//   const cardClasses = [];

//   if (isDropshadow) cardClasses.push('filter drop-shadow-xl');
//   cardClasses.push(borderRadius ? `rounded-${borderRadius}` : 'rounded');

//   return (
//     <Div
//       colorize
//       classes={cardClasses.join(' ') + ' w-full p-3'}
//       margin={margin}
//     >
//       {title && (
//         <Text align="center" size="3xl">
//           {title}
//         </Text>
//       )}
//       <div className="center">{children}</div>
//     </Div>
//   );
// };

// const propTypes: { [key in keyof Props]: any } = {
//   children: PropTypes.node.isRequired,
//   title: PropTypes.string,
//   margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   isDropshadow: PropTypes.bool,
//   borderRadius: PropTypes.string,
// };

// const defaultProps: Props = {
//   children: <></>,
//   title: '',
//   margin: '',
//   isDropshadow: true,
//   borderRadius: 'lg',
// };

// Card.propTypes = propTypes;
// Card.defaultProps = defaultProps;

// export default Card;
