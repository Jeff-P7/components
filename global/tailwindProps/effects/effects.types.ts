// Box Shadow ------------------------------------------------------------------
export const BoxShadowTypes: Array<string> = [
  'sm',
  'default',
  'md',
  'lg',
  'xl',
  '2xl',
  'inner',
  'none',
];
const boxShadowsTypeOf = [...BoxShadowTypes] as const;
export type TBoxShadow = typeof boxShadowsTypeOf[number] | string;

// All Effect Types ------------------------------------------------------------

export const EffectsTypes: Array<string> = [...[...BoxShadowTypes]];
export type TEffects = TBoxShadow;
