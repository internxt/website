import { GetServerSidePropsContext } from 'next';
import userAgent from 'useragent';
import { isMobile } from 'react-device-detect';
import { getLatestReleaseInfo } from './github';
import { ANDROID_URL, IOS_URL, LAST_RELEASE_URL, LINUX_URL, MACOS_URL, WINDOWS_URL } from '@/constants';

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
      return IOS_URL;
    case 'Android':
      return ANDROID_URL;
    case 'Ubuntu':
      return info.links.linux || LINUX_URL;
    case 'Windows':
      return info.links.windows || WINDOWS_URL;
    case 'Mac OS X':
      return infoMacOS.links.macos || MACOS_URL;
    default:
      // No borrar
      // eslint-disable-next-line no-console
      console.log('Unknown device %s. User-Agent: %s', uaParsed.os.family, ua);
      return LAST_RELEASE_URL;
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

  const releaseLinux = await getLatestReleaseInfo('internxt', 'drive-desktop-linux').catch(() => ({
    cached: false,
    links: { linux: null },
  }));

  const platforms = {
    Android: ANDROID_URL,
    iPad: IOS_URL,
    iPhone: IOS_URL,
    Windows: release.links.windows || WINDOWS_URL,
    MacOS: releaseMacOS.links.macos || MACOS_URL,
    UNIX: releaseLinux.links.linux || LINUX_URL,
    Linux: releaseLinux.links.linux || LINUX_URL,
    all: LAST_RELEASE_URL,
  };

  return platforms;
};
