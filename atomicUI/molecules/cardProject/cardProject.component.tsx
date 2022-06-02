import React, { FC, useState, useMemo, useEffect } from 'react';
import ICardProject from './cardProject';
import CardProjectProps from './cardProject.props';
import Card from '../../atoms/card';
import {
  borderWidthToClass,
  classesToString,
  purgeEmptyProps,
  remToPixels,
  kFormatter,
  trimString,
} from '../../../global';
import { Image, Text, Div, Icon, Tooltip } from '../../atoms';
import { Row, Col } from '../../../grids';
import type ICard from '../../atoms/card/card';
import { WidthDict } from '../../../global/tailwindProps/sizing/sizing.dict';
import { widthToClass } from '../../../global/tailwindProps/sizing/sizing.functions';
import { BorderWidthDict } from '../../../global/tailwindProps/borders/border/border.dict';
import { removePastCharacter } from '../../../../utilities';
import { IImage } from '../../atoms/image/image';
// import Tooltip from '@mui/material/Tooltip';
import ShieldTwoToneIcon from '@mui/icons-material/ShieldTwoTone';
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { default as TextIcon } from '../textIcon';
import * as CSS from 'csstype';

import { Log } from '../../../utils';

import { useCardHeaderIcon } from './subcomponents/useCardHeaderIcon.component';

interface IProps extends ICardProject {}

/**
 * CardProject Component
 */
export const CardProject: FC<IProps> = (props): JSX.Element => {
  const {
    author,
    backgroundColor,
    borderColor,
    borderRadius,
    borderWidth,
    boxShadow,
    classes,
    color,
    contributors,
    description,
    height,
    hover,
    hoverBoxShadow,
    image,
    imgLayout,
    imgPlaceholder,
    imgObjectFit,
    like,
    likes,
    // objectFit,
    margin,
    padding,
    title,
    variant,
    watchers,
    width,
    boolPrivate,
    save,
    notify,
  } = props;

  const { cHandleOnMouseEvent, render } = useCardHeaderIcon({
    save,
    notify,
  });

  // const [isHidden, setIsHidden] = useState<boolean>(false);

  // Component classes & styles declaration
  const componentClasses: Array<string> = [
    'card-project max-h-96 relative',
    'transition transform',
    // 'aspect-w-16 aspect-h-9',
  ];
  
  let componentStyles: CSS.Properties = {
    transitionDuration: '200ms',
    transitionProperty: 'box-shadow,color,transform',
    transitionTimingFunction: 'cubic-bezier(.333,1.666,.333,1.666)',
    transform: 'scale(1.01)',
    boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)',
  };

  if (classes?.length) componentClasses.push(classesToString(classes));

  const pHandleOnMouseEvent: Function = (): void => {
    cHandleOnMouseEvent();
  };

  // const cHandleOnMouseEvent: Function = (): void => {
  //   setIsHidden(!isHidden);
  // };

  /**
   * Setting Image Height with Card Project height value
   */
  // let imgWidth: number;
  // const widthClass: string = widthToClass(width!);
  // const numWidthPixel: number = remToPixels(WidthDict[widthClass]);
  // if (variant === 'outlined') {
  //   const borderWidthClass: string = borderWidthToClass(borderWidth!);
  //   const strBorderWidthPixel: string = BorderWidthDict[borderWidthClass];
  //   const numBorderWidthPixel: number = parseInt(
  //     removePastCharacter(strBorderWidthPixel, 'px')
  //   );
  //   imgWidth = numWidthPixel - numBorderWidthPixel * 2; // NOSONAR
  // } else imgWidth = numWidthPixel; // NOSONAR

  // Card component properties
  const cardProps: ICard = purgeEmptyProps({
    backgroundColor,
    borderRadius,
    boxShadow,
    height,
    // hover,
    hoverBoxShadow,
    padding,
    variant,
    width,
    image,
    margin,
    color,
    // classes: 'max-h-96 flex flex-col flex-1',
    // classes: ' relative',
    // classes: classNames('max-h-96 relative', classes),
    onMouseEnter: pHandleOnMouseEvent,
    onMouseLeave: pHandleOnMouseEvent,

    ...(variant === 'outlined' && { borderColor }),
  });

  const imageStyles: Record<string, any> = {
    aspectRatio: '16/9',
  };

  const imageProps: IImage = purgeEmptyProps({
    borderRadius,
    imgObjectFit,
    styles: imageStyles,
    layout: imgLayout,
    // layout: 'fill',
    placeholder: imgPlaceholder,
    // classes: 'bg-center flex-auto',
  });

  // const strLikes: string = likes!.toString();
  const likesVal: string = kFormatter(likes);
  const contributorsVal: string = kFormatter(contributors);
  const watchersVal: string = kFormatter(watchers);

  return (
    <>
      {/* <Log values={props} /> */}

      <Card
        classes={componentClasses}
        onMouseEnter={cHandleOnMouseEvent}
        styles={componentStyles}
        {...(cardProps && { ...cardProps })}
      >
        {/* Card Header ------------------------------------------------------ */}

        <Div data-name="card-img">
          <Image
            height={120}
            width={200}
            objectFit="cover"
            src={image}
            {...(imageProps && { ...imageProps })}
          />
          <Div
            data-name="card-img-header"
            classes="absolute inset-x-0 top-0 flex flex-wrap items-center"
            padding="x-0.5"
          >
            <Tooltip title="Private">
              <div
                data-name="card-img-header-private"
                className="flex-initial"
                hidden={!boolPrivate}
              >
                <ShieldRoundedIcon
                  // stroke={'#cbd5e1'}
                  stroke={'#000000'}
                  strokeWidth={3}
                  strokeOpacity={0.03}
                  fontSize="small"
                  sx={{ color: 'white', paintOrder: 'stroke' }}
                />
              </div>
            </Tooltip>
            <Div
              data-name="card-img-header-like&save"
              classes="flex-initial ml-auto"
            >
              {render}
            </Div>
          </Div>
        </Div>

        {/* Card Content ----------------------------------------------------- */}

        <Div classes="card-content" padding={2.5}>
          <Text tag="h4" transform="capitalize">
            {title}
          </Text>
          <Text tag="h6" weight="extralight">
            {description}
          </Text>

          {/* Card Content Footer */}

          <Div
            data-name="card-footer"
            classes="absolute inset-x-0 bottom-0 flex flex-wrap items-center"
            padding={1.5}
          >
            <Tooltip title="Author" placement="left">
              <div
                data-name="card-footer-author"
                className="flex items-center flex-auto"
              >
                <Image
                  size={25}
                  classes="rounded-full vertical-middle"
                  placeholder="splash"
                  inline
                />
                {/* <TextVal
                value="by"
                variant="h6"
                variantSize="xs"
                weight="light"
                margin="l-1"
                inline
              /> */}
                <Text
                  value={trimString(author!, 10)}
                  color="gray-700"
                  size="xs"
                  // weight="medium"
                  margin="l-1"
                  inline
                />
              </div>
            </Tooltip>
            <div className="flex items-center ml-auto">
              <Tooltip title="Contributors" placement="bottom" margin="r-1">
                <TextIcon
                  color="gray-500"
                  icon="MdGroup"
                  size="xs"
                  // weight="light"
                  value={contributorsVal}
                />
              </Tooltip>
              <Tooltip title="Watchers" placement="bottom" margin="r-1">
                <TextIcon
                  color="gray-500"
                  icon="MdRemoveRedEye"
                  size="xs"
                  value={watchersVal}
                />
              </Tooltip>
              <Tooltip title="Like" placement="bottom" margin="r-0.5">
                <TextIcon
                  color="gray-500"
                  icon="MdOutlineFavorite"
                  size="xs"
                  value={likesVal}
                  hover
                />
              </Tooltip>
              <Tooltip title="Share" placement="right">
                <div data-name="card-footer-share" className="flex-initial">
                  <Icon color="gray-500" value="MdShare" size="xs" hover />
                </div>
              </Tooltip>
            </div>
          </Div>
        </Div>
      </Card>
    </>
  );
};

// const CardProjectImg: FC = (): JSX.Element => {
// };

CardProject.propTypes = CardProjectProps.type;
CardProject.defaultProps = CardProjectProps.default;

export default CardProject;

type TCardIconInfo = {
  icon: string;
  text: string;
  tooltip?: string;
  tooltipPlacement?: string;
};
const CardIconInfo: FC<TCardIconInfo> = ({
  icon,
  text,
  tooltip,
  tooltipPlacement,
}): JSX.Element => (
  <div className="flex flex-wrap flex-initial">
    <TextIcon color="black" icon={icon} size="sm" value={text} />
  </div>
);
