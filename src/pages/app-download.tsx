import { useEffect } from 'react';

const AppDownloadRedirect = () => {
  useEffect(() => {
    const ua = navigator.userAgent;
    const url = /iPad|iPhone|iPod/.test(ua)
      ? 'https://apps.apple.com/app/internxt-drive/idXXXXXXXXX'
      : /Android/.test(ua)
      ? 'https://play.google.com/store/apps/details?id=com.internxt.drive'
      : 'https://drive.internxt.com/app';

    window.location.replace(url);
  }, []);

  return null;
};

export default AppDownloadRedirect;
