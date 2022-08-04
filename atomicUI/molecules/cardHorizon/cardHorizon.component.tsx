import React, { FC } from 'react';
import ICardProject from './cardHorizon';
import CardHorizonProps from './cardHorizon.props';
import Card from '../../atoms/card';
import {
  borderWidthToClass,
  classesToString,
  purgeEmptyProps,
  remToPixels,
} from '../../../global';
import { Image, Text } from '../../atoms';
import { Row, Col } from '../../../grids';
import type ICard from '../../atoms/card/card';
import { HeightDict } from '../../../global/tailwindProps/sizing/sizing.dict';
import { heightToClass } from '../../../global/tailwindProps/sizing/sizing.functions';
import { BorderWidthDict } from '../../../global/tailwindProps/borders/border/border.dict';
import { removePastCharacter } from '../../../global/utilities';
import { IImage } from '../../atoms/image/image';

interface IProps extends ICardProject {}

/**
 * CardHorizon Component
 */
export const CardHorizon: FC<IProps> = (props): JSX.Element => {
  const {
    backgroundColor,
    borderColor,
    borderRadius,
    borderWidth,
    boxShadow,
    classes,
    description,
    height,
    hover,
    hoverBoxShadow,
    image,
    imgLayout,
    imgPlaceholder,
    padding,
    objectFit,
    title,
    variant,
    width,
  } = props;

  // Component classes & styles declaration
  const componentClasses: Array<string> = ['card-horizon'];
  let componentStyles: Record<string, any> = {};
  if (classes?.length) componentClasses.push(classesToString(classes));

  /**
   * Setting Image Height with Card Horizon height value
   */
  let imgHeight: number;
  const heightClass: string = heightToClass(height!);
  const numHeightPixel: number = remToPixels(HeightDict[heightClass]);
  if (variant === 'outlined') {
    const borderWidthClass: string = borderWidthToClass(borderWidth!);
    const strBorderWidthPixel: string = BorderWidthDict[borderWidthClass];
    const numBorderWidthPixel: number = parseInt(
      removePastCharacter(strBorderWidthPixel, 'px')
    );
    imgHeight = numHeightPixel - numBorderWidthPixel * 2;
  } else imgHeight = numHeightPixel;

  // Card component properties
  const cardProps: ICard = purgeEmptyProps({
    backgroundColor,
    borderRadius,
    boxShadow,
    height,
    hover,
    hoverBoxShadow,
    objectFit,
    padding,
    variant,
    width,
    ...(variant === 'outlined' && { borderColor }),
  });

  const imageProps: IImage = purgeEmptyProps({
    objectFit,
    layout: imgLayout,
    placeholder: imgPlaceholder,
  });

  return (
    <Card classes={componentClasses} {...(cardProps && { ...cardProps })}>
      <Row gutter="none">
        <Col size="auto">
          <Image
            borderRadius={borderRadius}
            // placeholder="place"
            // placeholder="splash"
            size={imgHeight!}
            src={image}
            {...(imageProps && { ...imageProps })}
          />
        </Col>
        <Col padding={1.5}>
          <Text size="sm" transform="capitalize">
            {title}
          </Text>
          <Text size="sm" weight="extralight">
            {description}
          </Text>
        </Col>
      </Row>
    </Card>
  );
};

CardHorizon.propTypes = CardHorizonProps.type;
CardHorizon.defaultProps = CardHorizonProps.default;

export default CardHorizon;
