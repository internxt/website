import { useRouter } from 'next/router';
import { CaretRight } from '@phosphor-icons/react';
import Link from 'next/link';

interface TopBannerProps {
  isBannerFixed?: boolean;
}

const TopBanner = ({ isBannerFixed }: TopBannerProps) => {
  const router = useRouter();
  const lang = router.locale;
  const bannersJson = require(`@/assets/lang/${lang}/banners.json`);
  const textContent = bannersJson.TopBarBanner;

  return (
    <>
      <div
        className={`group ${
          isBannerFixed ? 'absolute' : 'fixed'
        } left-0 z-50 hidden h-[54px] w-screen items-center justify-center overflow-hidden bg-primary text-white lg:flex`}
      >
        <div className="mx-auto flex flex-row items-center justify-center space-x-3">
          <div className="flex cursor-default">
            <p>
              {lang === 'en' ? (
                <>
                  {textContent.title.normalText}🔥
                  <span className="ml-1 font-bold">{textContent.title.boldText}</span>
                </>
              ) : (
                <>
                  <span className="font-bold">{textContent.title.normalText}</span>🔥
                  {textContent.title.boldText}
                </>
              )}
            </p>
          </div>
          <Link
            href={'/pricing'}
            id={'topBannerActionButton'}
            className="flex cursor-pointer flex-row items-center space-x-2"
          >
            <p className="font-semibold underline hover:no-underline">{textContent.title.cta}</p>
            <CaretRight size={16} />
          </Link>
        </div>
      </div>

      <Link
        href={'/pricing'}
        className={`group fixed left-0 z-30 flex h-[65px]  w-screen items-center justify-center overflow-hidden bg-primary pt-2 text-white lg:hidden`}
      >
        <div className=" h-full w-full items-center justify-center px-3 text-center md:mb-3">
          <div className="flex flex-col items-center justify-center">
            {textContent.title.normalText} 🔥
            <span className=" ml-1 font-bold">{textContent.title.boldText}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default TopBanner;
