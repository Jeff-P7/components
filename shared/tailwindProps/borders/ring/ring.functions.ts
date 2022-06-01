import IRing from './ring';
import {
  RingColorTypes,
  RingOffsetColorTypes,
  RingOffsetWidthTypes,
  RingOpacityTypes,
  RingWidthTypes,
  TRing,
} from './ring.types';

/**
 * Types
 */
type TRingFunction = (ring: TRing) => string;

/**
 * Error message if Ring value is incorrect
 *
 * @param {string} val
 * @return {*}  {string}
 */
const ringMessageError: Function = (val: string): string =>
  `Ring value ${val} is incorrect`;

/**
 * Validates if Ring is correct
 *
 * @param {string} val
 * @return {*}  {boolean}
 */
const isRingValid: Function = (
  val: string,
  propTypes: Array<string | number>
): boolean => {
  if (val && !propTypes.includes(val)) throw Error(ringMessageError(val));
  else if (val && propTypes.includes(val)) return true;
  else return false;
};

/**
 * Ring property types dictionary
 */
const RingTypesDict: Record<keyof IRing, any> = {
  ringColor: { style: '', types: RingColorTypes },
  ringOffsetColor: { style: 'offset', types: RingOffsetColorTypes },
  ringOffsetWidth: { style: 'offset', types: RingOffsetWidthTypes },
  ringOpacity: { style: 'opacity', types: RingOpacityTypes },
  ringWidth: { style: '', types: RingWidthTypes },
};

/**
 * Converts Ring property value into a class
 *
 * @param {TRing} ring
 * @param {keyof IRing} RingPropType
 * @return {*}  {string}
 */
const ringToClassFunction: Function = (
  ring: TRing,
  ringPropType: keyof IRing
): string => {
  const propType: Record<string, any> = RingTypesDict[ringPropType];

  if (isRingValid(ring, propType.types)) {
    const propStyle: string = propType.style;
    if (ring === 'default' && ringPropType === 'ringWidth') return 'ring';
    else if (propStyle) return 'ring-' + propType.style + '-' + ring;
    else return 'ring-' + ring;
  } else return '';
};

export const ringWidthToClass: TRingFunction = (ring) =>
  ringToClassFunction(ring, 'ringWidth');

export const ringStyleToClass: TRingFunction = (ring) =>
  ringToClassFunction(ring, 'ringStyle');

export { ringColorToClass } from '../../color';
export { ringOpacityToClass } from '../../opacity';
