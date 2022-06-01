
export const TagTypes: Array<string> = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
];

const tagTypeOf = [...TagTypes] as const;
export type TTag = typeof tagTypeOf[number] | string;

// const defaultTagMapping = {
//     h1: 'h1',
//     h2: 'h2',
//     h3: 'h3',
//     h4: 'h4',
//     h5: 'h5',
//     h6: 'h6',
//     subtitle1: 'h6',
//     subtitle2: 'h6',
//     body1: 'p',
//     body2: 'p',
//     inherit: 'p',
//   };
