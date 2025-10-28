import { getLatestReleaseInfo } from './github';

const iosURL = 'https://apps.apple.com/es/app/internxt-drive/id1465869889';
const androidURL = 'https://play.google.com/store/apps/details?id=com.internxt.cloud';
const windowsURL = 'https://internxt.com/downloads/drive.exe';
const macosURL = 'https://internxt.com/downloads/drive.dmg';
const linuxURL = 'https://internxt.com/downloads/drive.deb';
const lastReleaseURL = 'https://github.com/internxt/drive-desktop/releases';

export function getOS() {
  const userAgent = window.navigator.userAgent;
  const platform = window.navigator.platform;
  const isTouchDevice = 'maxTouchPoints' in navigator && navigator.maxTouchPoints > 0;

  const osList = [
    { test: () => /iPad/.test(userAgent), name: 'iPad' },
    { test: () => /iPhone|iPod/.test(userAgent), name: 'iPhone' },
    { test: () => /Android/.test(userAgent), name: 'Android' },
    { test: () => (/Mac/.test(platform) || /Mac/.test(userAgent)) && isTouchDevice, name: 'iPad' },
    { test: () => /Mac/.test(platform) || /Mac/.test(userAgent), name: 'MacOS' },
    { test: () => /Win/.test(platform), name: 'Windows' },
    { test: () => /Linux/.test(platform), name: 'Linux' },
    { test: () => /X11/.test(userAgent), name: 'UNIX' },
  ];

  const detected = osList.find((os) => os.test());
  return detected ? detected.name : `Not known (${userAgent})`;
}

export const downloadDriveLinks = async () => {
  const release = await getLatestReleaseInfo('internxt', 'drive-desktop').catch(() => ({
    cached: false,
    links: { linux: null, windows: null },
  }));

  const releaseMacOS = await getLatestReleaseInfo('internxt', 'drive-desktop-macos').catch(() => ({
    cached: false,
    links: { macos: null },
  }));

  const releaseLinux = await getLatestReleaseInfo('internxt', 'drive-desktop-linux').catch(() => ({
    cached: false,
    links: { linux: null },
  }));

  const platforms = {
    Android: androidURL,
    iPad: iosURL,
    iPhone: iosURL,
    Windows: release.links.windows || windowsURL,
    MacOS: releaseMacOS.links.macos || macosURL,
    UNIX: releaseLinux.links.linux || linuxURL,
    Linux: releaseLinux.links.linux || linuxURL,
    all: lastReleaseURL,
  };

  return platforms;
};
