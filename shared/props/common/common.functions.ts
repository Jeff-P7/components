/**
 * Checks if classes is an array, if so, it will convert to string
 *
 * @param {(string | Array<string>)} val
 * @return {*}  {string}
 */
export const classesToString: Function = (
  val: string | Array<string>
): string => {
  return Array.isArray(val) ? val.join(' ') : val;
};

export * from '../../tailwindProps/spacing';
