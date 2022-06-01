import React from 'react';
import {
  MdOutlineWbSunny,
  MdOutlineNightsStay,
  MdOutlineLanguage,
  MdOutlineFacebook,
  MdArrowDropDown,
  MdArrowRightAlt,
  MdShield,
  MdOutlineShield,
  MdOutlineFavoriteBorder,
  MdOutlineFavorite,
  MdBookmarkBorder,
  MdBookmark,
  MdShare,
  MdOutlineShare,
  MdOutlineGroups,
  MdGroups,
  MdOutlineGroup,
  MdGroup,
  MdRemoveRedEye,
  MdOutlineRemoveRedEye,
  MdNotificationsNone,
  MdNotifications,
  MdChevronLeft,
  MdChevronRight,
  MdOutlinePersonOutline,
  MdPerson,
  MdGppGood,
  MdOutlineGppGood,
  MdLock,
  MdLockOutline,
  MdOutlineColorLens,
  MdBiotech,
  MdOutlineBiotech,
  MdPublic,
  MdMemory,
  MdOutlineBusinessCenter,
  MdOutlineDesignServices,
  MdOutlineMusicNote,
  MdOutlineSchool,
  MdOutlineVideocam,
  MdOutlineEngineering,
  MdApps,
  MdPowerSettingsNew,
  MdOutlinePowerSettingsNew,
  MdOutlineSettings,
  MdOutlineBrightness4,
} from 'react-icons/md';
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaBell,
  FaRegBell,
  FaCode,
  FaHandHoldingMedical,
} from 'react-icons/fa';
import { AiOutlineRocket } from 'react-icons/ai';
import { BsCodeSlash } from 'react-icons/bs';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { GrTechnology } from 'react-icons/gr';
import { BiBot } from 'react-icons/bi';
import { FiRefreshCw } from 'react-icons/fi';
// import ShieldTwoToneIcon from '@mui/icons-material/ShieldTwoTone';

export const IconDict: Record<string, any> = {
  /** Material Design */
  MdOutlineWbSunny,
  MdOutlineNightsStay,
  MdOutlineLanguage,
  MdOutlineFacebook,
  MdArrowDropDown,
  MdArrowRightAlt,
  MdShield,
  MdOutlineShield,
  MdOutlineFavoriteBorder,
  MdOutlineFavorite,
  MdBookmarkBorder,
  MdBookmark,
  MdShare,
  MdOutlineShare,
  MdOutlineGroups,
  MdGroups,
  MdOutlineGroup,
  MdGroup,
  MdRemoveRedEye,
  MdOutlineRemoveRedEye,
  MdNotificationsNone,
  MdNotifications,
  MdChevronLeft,
  MdChevronRight,
  MdOutlinePersonOutline,
  MdPerson,
  MdGppGood,
  MdOutlineGppGood,
  MdLock,
  MdLockOutline,
  MdOutlineColorLens,
  MdBiotech,
  MdOutlineBiotech,
  MdPublic,
  MdMemory,
  MdOutlineBusinessCenter,
  MdOutlineDesignServices,
  MdOutlineMusicNote,
  MdOutlineSchool,
  MdOutlineVideocam,
  MdOutlineEngineering,
  MdApps,
  MdPowerSettingsNew,
  MdOutlinePowerSettingsNew,
  MdOutlineSettings,
  MdOutlineBrightness4,
  /** Font Awesome */
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaBell,
  FaRegBell,
  FaCode,
  FaHandHoldingMedical,
  /** Bootstrap */
  BsCodeSlash,

  /** Grommet */
  GrTechnology,
  /** Hero */
  HiOutlinePencilAlt,
  /** Box */
  BiBot,
  /** Ant Design */
  AiOutlineRocket,
  /** Feather */
  FiRefreshCw,
  // none: ''
};

export const IconDictTypes: Array<string> = Object.keys(IconDict);
const iconDictTypeOf = [...IconDictTypes] as const;
export type TIconDict = typeof iconDictTypeOf[number] | string;

export default IconDict;
