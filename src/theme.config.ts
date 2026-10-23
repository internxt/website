const GLOBAL_DARK_MODE = false;

const envDarkMode = process.env.NEXT_PUBLIC_DARK_MODE;

export const DARK_MODE_ENABLED: boolean =
  envDarkMode === 'true' ? true : envDarkMode === 'false' ? false : GLOBAL_DARK_MODE;

export const DARK_MODE_LOGO_FILTER = 'brightness-0 invert';
