import { ColorTypes } from '../color';

// Background Attachment -------------------------------------------------------
export const BackgroundAttachmentTypes: Array<string> = [
  'fixed',
  'local',
  'scroll',
];
const backgroundAttachmentTypeOf = [...BackgroundAttachmentTypes] as const;
export type TBackgroundAttachment =
  | typeof backgroundAttachmentTypeOf[number]
  | string;

// Background Clip -------------------------------------------------------------
export const BackgroundClipTypes: Array<string> = [
  'border',
  'padding',
  'content',
  'text',
];
const backgroundClipTypeOf = [...BackgroundClipTypes] as const;
export type TBackgroundClip = typeof backgroundClipTypeOf[number] | string;

// Background Origin -----------------------------------------------------------
export const BackgroundOriginTypes: Array<string> = [
  'border',
  'padding',
  'content',
];
const backgroundOriginTypeOf = [...BackgroundOriginTypes] as const;
export type TBackgroundOrigin = typeof backgroundOriginTypeOf[number] | string;

// Background Position -----------------------------------------------------------
export const BackgroundPositionTypes: Array<string> = [
  'bottom',
  'center',
  'left',
  'left-bottom',
  'left-top',
  'right',
  'right-bottom',
  'right-top',
  'top',
];
const backgroundPositionTypeOf = [...BackgroundPositionTypes] as const;
export type TBackgroundPosition =
  | typeof backgroundPositionTypeOf[number]
  | string;

// Background Repeat -----------------------------------------------------------
export const BackgroundRepeatTypes: Array<string> = [
  'repeat',
  'no-repeat',
  'repeat-x',
  'repeat-y',
  'repeat-round',
  'repeat-space',
];
const backgroundRepeatTypeOf = [...BackgroundRepeatTypes] as const;
export type TBackgroundRepeat = typeof backgroundRepeatTypeOf[number] | string;

// Background Size -------------------------------------------------------------
export const BackgroundSizeTypes: Array<string> = ['auto', 'cover', 'contain'];
const backgroundSizeTypeOf = [...BackgroundSizeTypes] as const;
export type TBackgroundSize = typeof backgroundSizeTypeOf[number] | string;

// Background Image ------------------------------------------------------------
export const BackgroundImageTypes: Array<string> = [
  'none',
  'gradient-to-t',
  'gradient-to-tr',
  'gradient-to-r',
  'gradient-to-br',
  'gradient-to-b',
  'gradient-to-bl',
  'gradient-to-l',
  'gradient-to-tl',
];
const backgroundImageTypeOf = [...BackgroundImageTypes] as const;
export type TBackgroundImage = typeof backgroundImageTypeOf[number] | string;

export const BackgroundColorTypes: Array<string> = ColorTypes;
