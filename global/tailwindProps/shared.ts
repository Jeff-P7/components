/**
 * Validates if property is correct
 *
 * @param {string} val
 * @param {Array<string>} propTypes
 * @param {Function} errorMessage
 * @return {*}  {boolean}
 */
export const isPropValid: Function = (
  val: string,
  propTypes: Array<string>,
  errorMessage: Function
): boolean => {
  if (val && !propTypes.includes(val)) throw new Error(errorMessage(val));
  else if (val && propTypes.includes(val)) return true;
  else return false;
};
