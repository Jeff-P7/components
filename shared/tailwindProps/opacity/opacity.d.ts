import { TColor } from '../color';

/**
 * Border Opacity Types
 */
export const OpacityTypes: Array<number> = [
  0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100,
];
const opacityTypeOf = [...OpacityTypes] as const;
export type TOpacity = typeof opacityTypeOf[number] | number;

export interface IOpacity {
  backdropOpacity?: TOpacity;
  backgroundOpacity?: TOpacity;
  borderOpacity?: TOpacity;
  divideOpacity?: TOpacity;
  opacity?: TOpacity;
  placeholderOpacity?: TOpacity;
  ringOpacity?: TOpacity;
  textOpacity?: TOpacity;
}

export default IOpacity;
