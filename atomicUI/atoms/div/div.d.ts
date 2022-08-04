import type { ICommon } from '../../../global';
// type stringNumNoneType = string | number | 'none';

export interface IDiv extends ICommon {
  colorize?: boolean;
  // gutter?: stringNumNoneType;
  tag?: boolean;
  track?: boolean;
  highlight?: boolean;
  // highlightPadding?: boolean;
  // highlightMargin?: boolean;
}

export default IDiv;
