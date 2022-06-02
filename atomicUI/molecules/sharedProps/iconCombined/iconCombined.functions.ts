import { default as IIconCombined } from './iconCombined.d';

/**
 * Creates css class from icon position and spacing values
 *
 * @param {boolean} iconRight
 * @param {Pick<IIConCombined, 'iconSpace'>} iconSpace
 * @return {*}  {string}
 */
export const marginDirectionToClass: Function = (
  iconRight: boolean,
  iconSpace: Pick<IIconCombined, 'iconSpace'>
): string => (iconRight ? `l-${iconSpace}` : `r-${iconSpace}`);
