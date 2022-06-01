// type TButtonTypesDict = {
//   [buttonType: string]: {
//     sm: TButtonSize;
//     md: TButtonSize;
//     lg: TButtonSize;
//   };
// };

export type TButtonTypesDict = {
  [buttonType: string]: TButtonSizes;
};

// export type TButtonSizes = {
//   sm: TButtonSizeProperties;
//   md: TButtonSizeProperties;
//   lg: TButtonSizeProperties;
// };

export type TButtonSizes = {
  [buttonSize: string]: TButtonSizeProperties;
};

export type TButtonSizeProperties = {
  padding: {
    size: Array<string>;
    slim: string;
  };
  fontSize: string;
  fontWeight?: string;
};

const FontSizeDict: Record<string, string> = {
  xs: 'xs',
  sm: 'sm',
  md: 'base',
  lg: 'lg',
  xl: 'xl',
};

// Material UI Button structure
// export const ButtonTypesDict: TButtonTypesDict = {
//   contained: {
//     sm: {
//       padding: { size: ['py-1', 'px-2.5'], slim: 'p-1' },
//       fontSize: FontSizeDict.sm,
//     },
//     md: {
//       padding: { size: ['py-1.5', 'px-4'], slim: 'p-1.5' },
//       fontSize: FontSizeDict.md,
//     },
//     lg: {
//       padding: { size: ['py-2', 'px-5'], slim: 'p-2' },
//       fontSize: FontSizeDict.lg,
//     },
//     xl: {
//       padding: { size: ['py-2.5', 'px-6'], slim: 'p-2.5' },
//       fontSize: FontSizeDict.xl,
//     },
//   },
//   outlined: {
//     sm: {
//       // padding: { size: ['py-[3px]', 'px-[9px]'], slim: 'p-[3px]' },
//       padding: { size: ['py-1', 'px-2.5'], slim: 'p-1' },
//       fontSize: FontSizeDict.sm,
//     },
//     md: {
//       // padding: { size: ['py-[5px]', 'px-[15px]'], slim: 'p-[5px]' },
//       padding: { size: ['py-1.5', 'px-4'], slim: 'p-1.5' },
//       fontSize: FontSizeDict.md,
//     },
//     lg: {
//       // padding: { size: ['py-[7px]', 'px-[21px]'], slim: 'p-[7px]' },
//       padding: { size: ['py-2', 'px-5'], slim: 'p-2' },
//       fontSize: FontSizeDict.lg,
//     },
//     xl: {
//       padding: { size: ['py-2.5', 'px-6'], slim: 'p-2.5' },
//       fontSize: FontSizeDict.xl,
//     },
//   },
//   text: {
//     sm: {
//       // padding: { size: ['py-1', 'px-[5px]'], slim: 'p-1' },
//       padding: { size: ['py-1', 'px-1.5'], slim: 'p-1' },
//       fontSize: FontSizeDict.sm,
//     },
//     md: {
//       padding: { size: ['py-1.5', 'px-2'], slim: 'p-1.5' },
//       fontSize: FontSizeDict.md,
//     },
//     lg: {
//       // padding: { size: ['py-2', 'px-[11px]'], slim: 'p-2' },
//       padding: { size: ['py-2', 'px-2.5'], slim: 'p-2' },
//       fontSize: FontSizeDict.lg,
//     },
//     xl: {
//       padding: { size: ['py-2.5', 'px-3'], slim: 'p-2.5' },
//       fontSize: FontSizeDict.xl,
//     },
//   },
// };

export const ButtonTypesDict: TButtonTypesDict = {
  contained: {
    xs: {
      padding: { size: ['py-2', 'px-3'], slim: 'p-2' },
      fontSize: FontSizeDict.xs,
    },
    sm: {
      padding: { size: ['py-2', 'px-3'], slim: 'p-2' },
      fontSize: FontSizeDict.sm,
    },
    md: {
      padding: { size: ['py-2.5', 'px-5'], slim: 'p-2.5' },
      fontSize: FontSizeDict.md,
    },
    lg: {
      padding: { size: ['py-3', 'px-5'], slim: 'p-3' },
      fontSize: FontSizeDict.md,
    },
    xl: {
      padding: { size: ['py-3.5', 'px-6'], slim: 'p-3.5' },
      fontSize: FontSizeDict.md,
    },
  },
  outlined: {
    xs: {
      padding: { size: ['py-1', 'px-2.5'], slim: 'p-1' },
      fontSize: FontSizeDict.xs,
    },
    sm: {
      // padding: { size: ['py-[3px]', 'px-[9px]'], slim: 'p-[3px]' },
      padding: { size: ['py-1', 'px-2.5'], slim: 'p-1' },
      fontSize: FontSizeDict.sm,
    },
    md: {
      // padding: { size: ['py-[5px]', 'px-[15px]'], slim: 'p-[5px]' },
      padding: { size: ['py-1.5', 'px-4'], slim: 'p-1.5' },
      fontSize: FontSizeDict.md,
    },
    lg: {
      // padding: { size: ['py-[7px]', 'px-[21px]'], slim: 'p-[7px]' },
      padding: { size: ['py-2', 'px-5'], slim: 'p-2' },
      fontSize: FontSizeDict.lg,
    },
    xl: {
      padding: { size: ['py-2.5', 'px-6'], slim: 'p-2.5' },
      fontSize: FontSizeDict.xl,
    },
  },
  text: {
    xs: {
      padding: { size: ['py-1', 'px-2.5'], slim: 'p-1' },
      fontSize: FontSizeDict.xs,
    },
    sm: {
      // padding: { size: ['py-1', 'px-[5px]'], slim: 'p-1' },
      padding: { size: ['py-1', 'px-1.5'], slim: 'p-1' },
      fontSize: FontSizeDict.sm,
    },
    md: {
      padding: { size: ['py-1.5', 'px-2'], slim: 'p-1.5' },
      fontSize: FontSizeDict.md,
    },
    lg: {
      // padding: { size: ['py-2', 'px-[11px]'], slim: 'p-2' },
      padding: { size: ['py-2', 'px-2.5'], slim: 'p-2' },
      fontSize: FontSizeDict.lg,
    },
    xl: {
      padding: { size: ['py-2.5', 'px-3'], slim: 'p-2.5' },
      fontSize: FontSizeDict.xl,
    },
  },
};

export default ButtonTypesDict;
