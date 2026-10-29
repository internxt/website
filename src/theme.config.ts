export const DARK_MODE_ENABLED = true;

export const DARK_MODE_EXCLUDED_PATHS: string[] = [];

export const isDarkModePage = (pathname: string): boolean =>
  DARK_MODE_ENABLED && !DARK_MODE_EXCLUDED_PATHS.includes(pathname);

export const DARK_MODE_LOGO_FILTER = '[filter:invert(1)_brightness(0.55)_invert(1)_saturate(3)]';
