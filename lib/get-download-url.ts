import { GetServerSidePropsContext } from 'next';
import userAgent from 'useragent';
import { isMobile } from 'react-device-detect';
import { getLatestReleaseInfo } from './github';

const iosURL = 'https://apps.apple.com/es/app/internxt-drive/id1465869889';
const androidURL = 'https://play.google.com/store/apps/details?id=com.internxt.cloud';
const windowsURL = 'https://internxt.com/downloads/drive.exe';
const macosURL = 'https://internxt.com/downloads/drive.dmg';
const linuxURL = 'https://internxt.com/downloads/drive.deb';
const lastReleaseURL = 'https://github.com/internxt/drive-desktop/releases';

export function getOS() {
  const osList = [
    { keyword: 'Android', name: 'Android' },
    { keyword: 'iPad', name: 'iPad' },
    { keyword: 'iPhone', name: 'iPhone' },
    { keyword: 'Win', name: 'Windows' },
    { keyword: 'Mac', name: isMobile ? 'iPad' : 'MacOS' },
    { keyword: 'X11', name: 'UNIX' },
    { keyword: 'Linux', name: 'Linux' },
  ];

  const res = osList.find((os) => window.navigator.appVersion.indexOf(os.keyword) !== -1);

  return res ? res.name : `Not known (${window.navigator.appVersion})`;
}

export async function getDriveDownloadUrl(ctx: GetServerSidePropsContext) {
  const ua = ctx.req.headers['user-agent'];
  const uaParsed = userAgent.parse(ua);

  const info = await getLatestReleaseInfo('internxt', 'drive-desktop').catch(() => ({
    cached: false,
    links: { linux: null, windows: null },
  }));
  const infoMacOS = await getLatestReleaseInfo('internxt', 'drive-desktop-macos').catch(() => ({
    cached: false,
    links: { macos: null },
  }));

  switch (uaParsed.os.family) {
    case 'iOS':
      return 'https://apps.apple.com/es/app/internxt-drive/id1465869889';
    case 'Android':
      return 'https://play.google.com/store/apps/details?id=com.internxt.cloud';
    case 'Ubuntu':
      return info.links.linux || 'https://internxt.com/downloads/drive.deb';
    case 'Windows':
      return info.links.windows || 'https://internxt.com/downloads/drive.exe';
    case 'Mac OS X':
      return infoMacOS.links.macos || 'https://internxt.com/downloads/drive.dmg';
    default:
      // No borrar
      // eslint-disable-next-line no-console
      console.log('Unknown device %s. User-Agent: %s', uaParsed.os.family, ua);
      return 'https://github.com/internxt/drive-desktop/releases';
  }
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

  const platforms = {
    Android: androidURL,
    iPad: iosURL,
    iPhone: iosURL,
    Windows: release.links.windows || windowsURL,
    MacOS: releaseMacOS.links.macos || macosURL,
    UNIX: release.links.linux || linuxURL,
    Linux: release.links.linux || linuxURL,
    all: lastReleaseURL,
  };

  return platforms;
};
