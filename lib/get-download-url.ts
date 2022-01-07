import { GetServerSidePropsContext } from 'next';
import userAgent from 'useragent';
import { getLatestReleaseInfo } from './github';

export async function getDriveDownloadUrl(ctx: GetServerSidePropsContext) {
  const ua = ctx.req.headers['user-agent'];
  const uaParsed = userAgent.parse(ua);

  const info = await getLatestReleaseInfo('internxt', 'drive-desktop').catch(() => ({ cached: false, links: { linux: null, windows: null, macos: null } }));

  switch (uaParsed.os.family) {
    case 'iOS':
      return 'https://apps.apple.com/es/app/internxt-drive/id1465869889';
    case 'Android':
      return 'https://play.google.com/store/apps/details?id=com.internxt.cloud&hl=es';
    case 'Ubuntu':
      return info.links.linux || 'https://internxt.com/downloads/drive.deb';
    case 'Windows':
      return info.links.windows || 'https://internxt.com/downloads/drive.exe';
    case 'Mac OS X':
      return info.links.macos || 'https://internxt.com/downloads/drive.dmg';
    default:
      // No borrar
      // eslint-disable-next-line no-console
      console.log('Unknown device %s. User-Agent: %s', uaParsed.os.family, ua);
      return 'https://github.com/internxt/drive-desktop/releases';
  }
}

export const downloadDriveByPlatform = async () => {
  const info = await getLatestReleaseInfo('internxt', 'drive-desktop').catch(() => ({ cached: false, links: { linux: null, windows: null, macos: null } }));

  const platforms = {
    ios: 'https://apps.apple.com/es/app/internxt-drive/id1465869889',
    android: 'https://play.google.com/store/apps/details?id=com.internxt.cloud&hl=es',
    linux: info.links.linux || 'https://internxt.com/downloads/drive.deb',
    windows: info.links.windows || 'https://internxt.com/downloads/drive.exe',
    mac: info.links.macos || 'https://internxt.com/downloads/drive.dmg',
    all: 'https://github.com/internxt/drive-desktop/releases'
  };

  return platforms;
};

export async function getPlatform(ctx: GetServerSidePropsContext) {
  const ua = ctx.req.headers['user-agent'];
  const uaParsed = userAgent.parse(ua);

  switch (uaParsed.os.family) {
    case 'iOS':
      return 'iOS';
    case 'Android':
      return 'Android';
    case 'Ubuntu':
      return 'Linux';
    case 'Windows':
      return 'Windows';
    case 'Mac OS X':
      return 'macOS';
    default:
      return null;
  }
}

// export async function getCoreDownloadUrl(ctx: GetServerSidePropsContext) {
//   const ua = ctx.req.headers['user-agent'];
//   const uaParsed = userAgent.parse(ua);
//   return 'https://github.com/internxt/core-daemon';

//   // switch (uaParsed.os.family) {
//   //   case 'Ubuntu':
//   //     return 'https://internxt.com/downloads/core.deb';
//   //   case 'Windows':
//   //     return 'https://internxt.com/downloads/core.exe';
//   //   case 'Mac OS X':
//   //     return 'https://internxt.com/downloads/core.dmg';
//   //   default:
//   //     // No borrar
//   //     // eslint-disable-next-line no-console
//   //     console.log('Unknown device %s. User-Agent: %s', uaParsed.os.family, ua);
//   //     return 'https://github.com/internxt/core-daemon';
//   // }
// }
