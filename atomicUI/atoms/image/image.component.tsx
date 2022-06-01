import React, { FC } from 'react';
import { IImage } from './image';
import ImageProps from './image.props';
import { default as NextImage, ImageLoaderProps } from 'next/image';
import { classesToString } from '../../../shared';
import classNames from 'classnames';
import {
  borderRadiusToClass,
  objectFitToClass,
} from '../../../shared/tailwindProps';
import {
  removePastCharacter,
  getPastCharacter,
  countNumOfCharacter,
} from '../../../../utilities/utilities';

interface IProps extends IImage {}

/**
 * Image Component
 */
export const Image: FC<IProps> = (props): JSX.Element => {
  // const attr: Record<string, any> | null = purgeEmptyProps(props);
  const { alt, borderRadius, classes, objectFit, layout, placeholder, size } =
    props;

  const componentClasses: Array<string> = [];
  if (classes?.length) componentClasses.push(classesToString(classes));

  // if (layout === 'intrinsic' || layout === 'fixed') {
  //   if (height || width || size)
  //     throw new Error(
  //       `Height, width, or size values are not needed because the upper bound width is constrained already with layout ${layout}. Learn more at https://nextjs.org/docs/api-reference/next/image`
  //     );
  // }

  if ((size && props.height) || (size && props.width))
    throw new Error(
      'Height or width cannot be defined on the same instance of size property'
    );

  const imgAlt: string = !alt ? removePastCharacter(props.src, '.') : alt;

  // if (isLoader && !props.src) props.src = 'random';

  /**
   * Url loader for next image component, currently used as temporary images
   * Source: https://nextjs.org/docs/api-reference/next/image
   *
   * @param {string} src
   * @param {number} width
   * @param {number} quality
   * @return {*}  {string}
   */
  // const unsplashNextUrlLoader = ({ src, width, quality }: TLoader): any => {
  //   return `https://source.unsplash.com/${src}`;
  // };

  /**
   * Checks if src contains an absolute path of file or just the file, to which
   * will auto complete path if no path is given
   */
  let imgPath: string = '';
  if (countNumOfCharacter(props.src, '/') <= 1) {
    imgPath =
      getPastCharacter(props.src) === 'svg'
        ? `/assets/svg${props.src}`
        : `/assets/images${props.src}`;
  } else imgPath = props.src!;

  const placeholderLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return size
      ? `https://via.placeholder.com/${size}x${size}.png`
      : `https://via.placeholder.com/${props.height}x${width}.png`;
  };

  const unsplashLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return src !== 'random'
      ? `https://source.unsplash.com/featured/?${src}`
      : `https://source.unsplash.com/${width}x${props.height}`;
    // : `https://source.unsplash.com/random`;
  };

  const loader = placeholder === 'place' ? placeholderLoader : unsplashLoader;
  const _width: number = props.width || size!;
  const _height: number = props.height || size!;
  // const divClasses: Array<string> = purgeEmptyProps({imgAlt, width,});
  componentClasses.push(
    ...[borderRadiusToClass(borderRadius!), objectFitToClass(objectFit!)]
  );

  return (
    <>
      {placeholder ? (
        <NextImage
          className={classNames(componentClasses)}
          layout={layout}
          loader={loader}
          src={props.src!}
          alt={imgAlt}
          width={_width}
          height={_height}
        />
      ) : (
        <NextImage
          className={classNames(componentClasses)}
          src={imgPath}
          layout={layout}
          alt={imgAlt}
          width={_width}
          height={_height}
        />
      )}
    </>
  );
};

Image.propTypes = ImageProps.type;
Image.defaultProps = ImageProps.default;

export default Image;
