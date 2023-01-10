export const ARRAY_START = 0;

export const INDEX_TO_HUMAN_OFFSET = 1;

export const MAX_BREAKPOINTS = {
  SMALL_MOBILE: 360,
  MOBILE: 550,
  SMALL_TABLET: 750,
  ONLY_TABLET: 920,
  MID_TABLET: 900,
  TABLET: 1100,
  LAPTOP: 1500,
};

export const DEFAULT_REM_PX_SIZE = 16;

export const QUERIES = {
  SMALL_PHONES: `@media(max-width: ${MAX_BREAKPOINTS.SMALL_MOBILE / DEFAULT_REM_PX_SIZE}rem)`,
  PHONES: `@media(max-width: ${MAX_BREAKPOINTS.MOBILE / DEFAULT_REM_PX_SIZE}rem)`,
  SMALL_TABLET: `@media(max-width: ${MAX_BREAKPOINTS.SMALL_TABLET / DEFAULT_REM_PX_SIZE}rem)`,
  MID_TABLET: `@media(max-width: ${MAX_BREAKPOINTS.MID_TABLET / DEFAULT_REM_PX_SIZE}rem)`,
  ONLY_TABLET: `@media(max-width: ${
    MAX_BREAKPOINTS.ONLY_TABLET / DEFAULT_REM_PX_SIZE
  }rem) and (min-height: 950px)`,
  TABLETS: `@media(max-width: ${MAX_BREAKPOINTS.TABLET / DEFAULT_REM_PX_SIZE}rem)`,
  LAPTOPS: `@media(max-width: ${MAX_BREAKPOINTS.LAPTOP / DEFAULT_REM_PX_SIZE}rem)`,
  CUSTOM: (width: number): string => `@media(max-width: ${width / DEFAULT_REM_PX_SIZE}rem)`,
  HOVER_ENABLED: `@media (hover: hover) and (pointer: fine)`,
};

export const REGEX = {
  EMAIL: /^[\w-.]+@(\w+\.)+\w+$/i,
};
