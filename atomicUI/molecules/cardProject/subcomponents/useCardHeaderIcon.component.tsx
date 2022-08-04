import React, { FC, useState } from 'react';
import { Tooltip, Icon, Div } from '../../../atoms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import classNames from 'classnames';
import { bool } from 'prop-types';
import { Log } from '../../../../utilsUI';
import useToggle from '../../../../hooks/useToggle';

type TCardHeaderIcon = { save?: boolean; notify?: boolean };
// export function useCardHeaderIcon(props: TCardHeaderIcon) {
export const useCardHeaderIcon = (
  props: TCardHeaderIcon
): Record<string, any> => {
  const { save, notify } = props;
  // const [isHidden, setIsHidden] = useState<boolean>(false);
  // const [isSave, setIsSave] = useState<boolean>(save!);
  // const [isNotify, setIsNotify] = useState<boolean>(notify!);

  const [isHidden, toggleIsHidden] = useToggle();
  const [isSave, toggleIsSave] = useToggle(save!);
  const [isNotify, toggleIsNotify] = useToggle(notify!);

  const cHandleOnMouseEvent: Function = (): void => {
    toggleIsHidden(!isHidden);
    // setIsHidden(!isHidden);
  };

  const handleClickSave: Function = (): void => toggleIsSave(!isSave);
  const handleClickNotify: Function = (): void => toggleIsNotify(!isNotify);

  const iconProps: Record<string, {}> = {
    color: 'white',
    size: 'xl',
    inline: true,
    hover: true,
  };

  const iconClasses: string =
    'animate__animated animate__faster cursor-pointer transition transform hover:scale-150';

  const fadeSave: string[] = [iconClasses];
  const fadeNotify: string[] = [iconClasses];
  if (!isHidden) {
    fadeSave.push(isSave ? 'animate__fadeIn' : 'animate__fadeOut');
    fadeNotify.push(isNotify ? 'animate__fadeIn' : 'animate__fadeOut');
  } else {
    fadeSave.push('animate__fadeIn');
    fadeNotify.push('animate__fadeIn');
  }

  const mdIconProps: Record<string, any> = {
    stroke: '#000000',
    strokeWidth: 3,
    strokeOpacity: 0.05,
    fontSize: 'small',
    sx: { color: 'white', paintOrder: 'stroke' },
  };

  const divClasses: string = 'inline';

  // const fadeSave: string = iconClasses + ' ' +`animate__fade${!isHidden && save ? 'In' : 'Out'}`;
  // const fadeNotify: string = iconClasses + ' ' +`animate__fade${!isHidden && notify ? 'In' : 'Out'}`;

  return {
    cHandleOnMouseEvent,
    render: (
      <React.Fragment>
        <Tooltip title="Save">
          <div
            className={classNames(fadeSave, divClasses)}
            onClick={() => handleClickSave()}
          >
            {isSave ? (
              <BookmarkIcon {...mdIconProps} />
            ) : (
              <BookmarkBorderIcon {...mdIconProps} />
            )}
            {/* <BookmarkBorderIcon classes={fadeSave} {...mdIconProps} /> */}
            {/* <Icon
              value={save ? 'MdBookmark' : 'MdBookmarkBorder'}
              classes={fadeSave}
              {...iconProps}
            /> */}
          </div>
        </Tooltip>
        <Tooltip title="Notify">
          <div
            className={classNames(fadeNotify, divClasses)}
            onClick={() => handleClickNotify()}
          >
            {isNotify ? (
              <NotificationsIcon {...mdIconProps} />
            ) : (
              <NotificationsNoneIcon {...mdIconProps} />
            )}
            {/* <NotificationsNoneIcon classes={fadeNotify} {...mdIconProps} /> */}
            {/* <Icon
              value={notify ? 'MdNotifications' : 'MdNotificationsNone'}
              classes={fadeNotify}
              {...iconProps}
            /> */}
          </div>
        </Tooltip>
        {/* <Log value={{isSave, isNotify}}/> */}
      </React.Fragment>
    ),
  };
};

useCardHeaderIcon.propTypes = { save: bool, notify: bool };
useCardHeaderIcon.defaultProps = { save: false, notify: false };

export default useCardHeaderIcon;
