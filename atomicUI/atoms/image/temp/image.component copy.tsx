// import React, { FC } from 'react';
// import { IImage } from '../image';
// import ImageProps from '../image.props';
// import { default as NextImage } from 'next/image';
// import { purgeEmptyProps } from '../../../global';
// import classNames from 'classnames';
// import {
//   removePastCharacter,
//   getPastCharacter,
//   countNumOfCharacter,
// } from '../../../../utilities/utilities';

// interface IProps extends IImage {}

// /**
//  * Image Component
//  */
// export const Image: FC<IProps> = (props): JSX.Element => {
//   const attr: Record<string, any> | null = purgeEmptyProps(props);
//   const { alt, classes, height, placeholder, width } = props;
//   const componentClasses: Array<string> = [];

//   const imgAlt: string = !alt ? removePastCharacter(props.src, '.') : alt;

//   // if (isLoader && !props.src) props.src = 'random';

//   /**
//    * Url loader for next image component, currently used as temporary images
//    * Source: https://nextjs.org/docs/api-reference/next/image
//    *
//    * @param {string} src
//    * @param {number} width
//    * @param {number} quality
//    * @return {*}  {string}
//    */
//   // const unsplashNextUrlLoader = ({ src, width, quality }: TLoader): any => {
//   //   return `https://source.unsplash.com/${src}`;
//   // };

//   // Checks if src contains an absolute path of file or just the file, to which will auto complete path if no path is given
//   let imagePath: string = '';
//   if (countNumOfCharacter(props.src, '/') <= 1) {
//     debugger;
//     imagePath =
//       getPastCharacter(props.src) === 'svg'
//         ? `/assets/svg${props.src}`
//         : `/assets/images${props.src}`;
//   } else imagePath = props.src!;

//   componentClasses.push(...['h-auto', 'max-w-full']);

//   return (
//     <>
//       {/* <img
//         src={
//           placeholder ? 'https://source.unsplash.com/random' : imageLocation
//         }
//       /> */}
//       {/* <NextImage
//         src={props.src}
//         alt={alt}
//         width={width}
//         height={height}
//         // loader={(isLoader) && unsplashNextUrlLoader({ src: props.src })}
//         {...(attr && { ...attr })}
//       /> */}
//       {!placeholder ? (
//         <NextImage
//           src={imagePath}
//           alt={imgAlt}
//           width={width}
//           height={height}
//           // loader={(isLoader) && unsplashNextUrlLoader({ src: props.src })}
//           {...(attr && { ...attr })}
//         />
//       ) : (
//         <img
//           src="https://source.unsplash.com/random"
//           className={classNames(componentClasses, classes)}
//           height={height}
//           width={width}
//         />
//       )}
//     </>
//   );
// };

// Image.propTypes = ImageProps.type;
// Image.defaultProps = ImageProps.default;

// export default Image;
