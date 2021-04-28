import { GetServerSidePropsContext } from 'next';
import userAgent from 'useragent';

export async function getDriveDownloadUrl(ctx: GetServerSidePropsContext) {
  const ua = ctx.req.headers['user-agent'];
  const uaParsed = userAgent.parse(ua);

  switch (uaParsed.os.family) {
    case 'iOS':
      return 'https://apps.apple.com/es/app/internxt-drive/id1465869889';
    case 'Android':
      return 'https://play.google.com/store/apps/details?id=com.internxt.cloud&hl=es';
    case 'Ubuntu':
      return 'https://internxt.com/downloads/drive.deb';
    case 'Windows':
      return 'https://internxt.com/downloads/drive.exe';
    case 'Mac OS X':
      return 'https://internxt.com/downloads/drive.dmg';
    default:
      // No borrar
      // eslint-disable-next-line no-console
      console.log('Unknown device %s. User-Agent: %s', uaParsed.os.family, ua);
      return 'https://github.com/internxt/drive-desktop/releases';
  }
}

export async function getCoreDownloadUrl(ctx: GetServerSidePropsContext) {
  const ua = ctx.req.headers['user-agent'];
  const uaParsed = userAgent.parse(ua);

  switch (uaParsed.os.family) {
    case 'Ubuntu':
      return 'https://internxt.com/downloads/core.deb';
    case 'Windows':
      return 'https://internxt.com/downloads/core.exe';
    case 'Mac OS X':
      return 'https://internxt.com/downloads/core.dmg';
    default:
      // No borrar
      // eslint-disable-next-line no-console
      console.log('Unknown device %s. User-Agent: %s', uaParsed.os.family, ua);
      return 'https://github.com/internxt/core-gui/releases';
  }
}
