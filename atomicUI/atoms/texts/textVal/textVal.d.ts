import type IText from '../../text/text';

export interface ITextVal extends IText {
    /**
   * Text value incase text is short
   *
   * @type {string}
   * @memberof IText
   */
  value: string;
}

export default ITextVal;
