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
} from 'react-icons/md';
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';

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
  /** Font Awesome */
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  // none: ''
};

export const IconDictTypes: Array<string> = Object.keys(IconDict);

export default IconDict;
