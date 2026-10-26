const GLOBAL_DARK_MODE = true;

const envDarkMode = process.env.NEXT_PUBLIC_DARK_MODE;

export const DARK_MODE_ENABLED: boolean = envDarkMode === 'true' || GLOBAL_DARK_MODE;

export const DARK_MODE_LOGO_FILTER = '[filter:invert(1)_brightness(0.55)_invert(1)_saturate(3)]';
