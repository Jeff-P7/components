import ICard from './card';
import { TCard, VariantCardTypes, OrientationTypes } from './card.types';

/**
 * Types
 */
type TCardFunction = (card: TCard) => string;

/**
 * Error message if card value is incorrect
 *
 * @param {string} val
 * @return {*}  {string}
 */
const cardMessageError: Function = (val: string): string =>
  `card value ${val} is incorrect`;

/**
 * Validates if card is correct
 *
 * @param {string} val
 * @return {*}  {boolean}
 */
const isCardValid: Function = (
  val: string,
  propTypes: Array<string | number>
): boolean => {
  if (val && !propTypes.includes(val)) {
    debugger;
    throw new Error(cardMessageError(val));
  } else return true;
};

/**
 * card property types dictionary
 */
const CardTypesDict: Record<string, any> = {
  variant: { style: '', types: VariantCardTypes },
  //   orientation: { style: 'opacity', types: OrientationTypes },
  size: {},
};

/**
 * Converts card property value into a class
 *
 * @param {TCard} card
 * @param {keyof ICard} cardPropType
 * @return {*}  {string}
 */
const cardToClassFunction: Function = (
  card: TCard,
  cardPropType: keyof ICard
): string => {
  const propType: Record<string, any> = CardTypesDict[cardPropType];
  if (isCardValid(card, propType.types)) {
    const propStyle: string = propType.style;
    return propStyle;
  } else return '';
};

export const variantToClass: TCardFunction = (card) =>
  cardToClassFunction(card, 'variant');
