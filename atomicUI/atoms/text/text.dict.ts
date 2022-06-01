// type variantSizes

// type TVariantDict =

// export const VariantDict: Record<string, any> = {
//   h1: {
//     '4xl': '9xl',
//     '3xl': '8xl',
//     '2xl': '7xl',
//     xl: '6xl',
//     lg: '5xl',
//     md: '4xl',
//     sm: '3xl',
//   },
//   h2: {
//     lg: '4xl',
//     md: '3xl',
//     sm: '2xl',
//   },
//   h3: {
//     lg: '3xl',
//     md: '2xl',
//     sm: 'xl',
//   },
//   h4: {
//     lg: '2xl',
//     md: 'xl',
//     sm: 'lg',
//   },
//   h5: {
//     lg: 'xl',
//     md: 'lg',
//     sm: 'base',
//   },
//   h6: {
//     lg: 'lg',
//     md: 'base',
//     sm: 'sm',
//     xs: 'xs',
//   },
//   p: {
//     '9xl': '9xl',
//     '8xl': '8xl',
//     '7xl': '7xl',
//     '6xl': '6xl',
//     '5xl': '5xl',
//     '4xl': '4xl',
//     '3xl': '3xl',
//     '2xl': '2xl',
//     xl: 'xl',
//     lg: 'lg',
//     md: 'base',
//     sm: 'sm',
//     xs: 'xs',
//   },
// };

export const VariantDict: Record<string, any> = {
  h1: {
    lg: '9xl',
    md: '8xl',
    sm: '7xl',
  },
  h2: {
    lg: '7xl',
    md: '6xl',
    sm: '5xl',
  },
  h3: {
    lg: '5xl',
    md: '4xl',
    sm: '3xl',
  },
  h4: {
    lg: '3xl',
    md: '2xl',
    sm: 'xl',
  },
  h5: {
    lg: 'xl',
    md: 'lg',
    sm: 'base',
  },
  h6: {
    lg: 'base',
    md: 'sm',
    sm: 'xs',
  },
  p: {
    '9xl': '9xl',
    '8xl': '8xl',
    '7xl': '7xl',
    '6xl': '6xl',
    '5xl': '5xl',
    '4xl': '4xl',
    '3xl': '3xl',
    '2xl': '2xl',
    xl: 'xl',
    lg: 'lg',
    md: 'base',
    sm: 'sm',
    xs: 'xs',
  },
};

export const VariantDictTypes = Object.keys(VariantDict);
const variantDictTypeOf = [...VariantDictTypes] as const;
export type TVariantDict = typeof variantDictTypeOf[number] | string;
