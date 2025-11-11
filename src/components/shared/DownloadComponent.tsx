/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { ArrowCircleDown, CaretRight } from '@phosphor-icons/react';
import { useRouter } from 'next/router';

interface DownloadLinks {
  Android: string;
  iPhone: string;
  MacOS: string;
  Windows: string;
  Linux: string;
}

interface TextContent {
  downloadTitle: string;
  Desktop: string;
  Mobile: string;
  Web: string;
  downloadFor: string;
  orDownloadFor: string;
  downloadOnThe: string;
  orDownloadOnThe: string;
  getOn: string;
  orGetOn: string;
  openDriveWeb: string;
  or: string;
  Android: string;
  iPhone: string;
  MacOS: string;
  Windows: string;
  Linux: string;
}

interface DownloadComponentProps {
  textContent: TextContent;
  lang: string;
  download: DownloadLinks;
}

type OSType = 'Android' | 'iPad' | 'iPhone' | 'Windows' | 'MacOS' | 'UNIX' | 'Linux' | string;

const OS_LIST = [
  { keyword: 'Android', name: 'Android' },
  { keyword: 'iPad', name: 'iPad' },
  { keyword: 'iPhone', name: 'iPhone' },
  { keyword: 'Win', name: 'Windows' },
  { keyword: 'Mac', name: isMobile ? 'iPad' : 'MacOS' },
  { keyword: 'X11', name: 'UNIX' },
  { keyword: 'Linux', name: 'Linux' },
] as const;

const detectOS = (): OSType => {
  const userAgent = window.navigator.appVersion;
  const detectedOS = OS_LIST.find((os) => userAgent.includes(os.keyword));
  return detectedOS ? detectedOS.name : `Not known (${userAgent})`;
};

const isAppleOS = (os: OSType): boolean => {
  return os === 'iPhone' || os === 'iPad' || os === 'MacOS';
};

const formatTextWithPlaceholder = (text: string, replacement: string, isChinese: boolean): React.ReactNode => {
  if (isChinese) {
    return <span>{text.replace('<>', replacement)}</span>;
  }
  return (
    <span>
      {text} {replacement}
    </span>
  );
};

const DownloadLink: React.FC<{
  href: string;
  children: React.ReactNode;
  external?: boolean;
}> = ({ href, children, external = false }) => (
  <a
    className="flex flex-row items-center space-x-1 text-lg font-semibold text-primary hover:underline"
    href={href}
    {...(external && { target: '_blank', rel: 'noreferrer' })}
  >
    {children}
    <ArrowCircleDown size={24} weight="bold" />
  </a>
);

const SecondaryLink: React.FC<{
  href: string;
  children: React.ReactNode;
}> = ({ href, children }) => (
  <a className="font-medium text-gray-80 underline hover:no-underline" href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
);

const SecondaryDownloads: React.FC<{
  OS: OSType;
  textContent: TextContent;
  download: DownloadLinks;
  isChinese: boolean;
}> = ({ OS, textContent, download, isChinese }) => {
  const getSecondaryPlatforms = () => {
    switch (OS) {
      case 'MacOS':
        return { first: 'Linux', second: 'Windows' };
      case 'Linux':
      case 'UNIX':
        return { first: 'MacOS', second: 'Windows' };
      case 'Windows':
        return { first: 'MacOS', second: 'Linux' };
      default:
        return null;
    }
  };

  const platforms = getSecondaryPlatforms();
  if (!platforms) return null;

  const { first, second } = platforms;

  return (
    <div className="text-lg font-semibold text-gray-80">
      {isChinese ? (
        <>
          {textContent.orDownloadFor.split('<>')[0]}
          <SecondaryLink href={download[first]}>{textContent[first].split(' ')[0]}</SecondaryLink> {textContent.or}{' '}
          <SecondaryLink href={download[second]}>{textContent[second]}</SecondaryLink>
          <span>{textContent.orDownloadFor.split('<>')[1]}</span>
        </>
      ) : (
        <>
          {textContent.orDownloadFor}{' '}
          <SecondaryLink href={download[first]}>{textContent[first].split(' ')[0]}</SecondaryLink> {textContent.or}{' '}
          <SecondaryLink href={download[second]}>{textContent[second]}</SecondaryLink>
        </>
      )}
    </div>
  );
};

const DesktopSection: React.FC<{
  OS: OSType;
  textContent: TextContent;
  download: DownloadLinks;
  isChinese: boolean;
}> = ({ OS, textContent, download, isChinese }) => (
  <div className="flex flex-1 flex-grow flex-row justify-end">
    <div className="flex flex-col items-center gap-6">
      <p className="text-3xl font-medium text-black lg:text-30">{textContent.Desktop}</p>
      <DownloadLink href={download[OS]}>
        {formatTextWithPlaceholder(textContent.downloadFor, textContent[OS], isChinese)}
      </DownloadLink>

      <SecondaryDownloads OS={OS} textContent={textContent} download={download} isChinese={isChinese} />
    </div>
  </div>
);

const WebSection: React.FC<{ textContent: TextContent }> = ({ textContent }) => (
  <div className="flex flex-col items-center justify-between">
    <p className="pb-6 text-3xl font-medium text-black lg:text-30">{textContent.Web}</p>
    <a
      className="hidden flex-row items-center space-x-1 text-lg font-semibold text-primary hover:underline lg:flex"
      href="https://drive.internxt.com/app"
      target="_blank"
      rel="noreferrer"
    >
      <span>{textContent.openDriveWeb}</span>
      <CaretRight size={16} weight="bold" />
    </a>
  </div>
);

const MobileBadges: React.FC<{
  OS: OSType;
  lang: string;
  download: DownloadLinks;
}> = ({ OS, lang, download }) => {
  const isApple = isAppleOS(OS);
  const downloadUrl = isApple ? download.iPhone : download.Android;

  const badges = [
    { condition: isApple && lang === 'en', src: '/badges/appStoreEN.svg' },
    { condition: isApple && lang === 'es', src: '/badges/appStoreES.svg' },
    { condition: !isApple && lang === 'en', src: '/badges/playStoreEN.svg' },
    { condition: !isApple && lang === 'es', src: '/badges/playStoreES.svg' },
  ];

  return (
    <a className="flex w-full flex-col" href={downloadUrl} target="_blank" rel="noreferrer">
      {badges.map((badge, index) => (
        <img
          key={index}
          loading="lazy"
          className={`h-16 ${badge.condition ? '' : 'hidden'}`}
          src={badge.src}
          draggable="false"
          alt={`${isApple ? 'Apple App Store' : 'Google Play Store'} badge for download Internxt Drive Mobile App`}
        />
      ))}
    </a>
  );
};

const MobileSection: React.FC<{
  OS: OSType;
  textContent: TextContent;
  download: DownloadLinks;
  isChinese: boolean;
}> = ({ OS, textContent, download, isChinese }) => {
  const showAppleFirst = OS === 'MacOS';

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-3xl font-medium text-black lg:text-30">{textContent.Mobile}</p>

      {showAppleFirst ? (
        <>
          <DownloadLink href={download.iPhone} external>
            {formatTextWithPlaceholder(textContent.downloadOnThe, textContent.iPhone, isChinese)}
          </DownloadLink>

          <div className="text-lg font-semibold text-gray-80">
            {isChinese ? (
              <>
                {textContent.orGetOn.split('<>')[0]}{' '}
                <SecondaryLink href={download.Android}>{textContent.Android}</SecondaryLink>
                <span>{textContent.orGetOn.split('<>')[1]}</span>
              </>
            ) : (
              <>
                {textContent.orGetOn} <SecondaryLink href={download.Android}>{textContent.Android}</SecondaryLink>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <a
            className="flex flex-row items-center space-x-1 text-lg font-semibold text-primary"
            href={download.Android}
            target="_blank"
            rel="noreferrer"
          >
            {formatTextWithPlaceholder(textContent.getOn, textContent.Android, isChinese)}
            <CaretRight size={16} weight="bold" />
          </a>

          <div className="text-base font-semibold text-gray-80">
            {isChinese ? (
              <>
                {textContent.orDownloadOnThe.split('<>')[0]}{' '}
                <SecondaryLink href={download.iPhone}>{textContent.iPhone}</SecondaryLink>
                <span>{textContent.orDownloadOnThe.split('<>')[1]}</span>
              </>
            ) : (
              <>
                {textContent.orDownloadOnThe} <SecondaryLink href={download.iPhone}>{textContent.iPhone}</SecondaryLink>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

const DownloadComponent: React.FC<DownloadComponentProps> = ({ textContent, lang, download }) => {
  const router = useRouter();
  const [OS, setOS] = useState<OSType>('');
  const isChinese = router.locale === 'zh';

  useEffect(() => {
    setOS(detectOS());
  }, []);

  return (
    <section className="hidden w-full flex-col items-center justify-center gap-16 p-20 lg:flex">
      <div className="absolute bg-neutral-35 lg:bottom-0 lg:left-32 lg:right-32 lg:h-[1px]" />
      <p className="text-center text-2xl font-semibold text-gray-100 lg:text-4xl">{textContent.downloadTitle}</p>

      <div className="flex w-full flex-row items-center justify-between px-5 lg:items-start lg:px-10 xl:px-32 3xl:px-80 ">
        {!isMobile && (
          <div className="hidden lg:flex">
            <DesktopSection OS={OS} textContent={textContent} download={download} isChinese={isChinese} />
          </div>
        )}

        {!isMobile && (
          <div className="hidden lg:flex">
            <WebSection textContent={textContent} />
          </div>
        )}

        <div className="hidden lg:flex">
          {isMobile ? (
            <MobileBadges OS={OS} lang={lang} download={download} />
          ) : (
            <MobileSection OS={OS} textContent={textContent} download={download} isChinese={isChinese} />
          )}
        </div>
      </div>
    </section>
  );
};

export default DownloadComponent;
