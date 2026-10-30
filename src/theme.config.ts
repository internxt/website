export const DARK_MODE_ENABLED = true;

export const DARK_MODE_EXCLUDED_PATHS: string[] = [];

export const isDarkModePage = (
  pathname: string,
  excludedPaths: readonly string[] = DARK_MODE_EXCLUDED_PATHS,
): boolean => DARK_MODE_ENABLED && !excludedPaths.includes(pathname);

export const DARK_MODE_LOGO_FILTER = 'dark:[filter:invert(1)_brightness(0.55)_invert(1)_saturate(3)]';
