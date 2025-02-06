import { useRouter } from 'next/router';
import { CaretRight } from '@phosphor-icons/react';
import { handleAdsConversion } from '../services/ga.services';
import GA_TAGS from '../services/ga.tags';
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
      {/* Desktop view */}
      <div
        className={`group ${
          isBannerFixed ? 'absolute' : 'fixed'
        } left-0 z-50 hidden h-[54px] w-screen items-center justify-center overflow-hidden bg-pink-dark text-white lg:flex`}
      >
        <div className="mx-auto flex flex-row items-center justify-center space-x-3">
          <div className="flex cursor-default">
            <p className="font-semibold">
              {textContent.title.normalText}💘 <span className="font-bold">{textContent.title.boldText}</span>
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
      {/* Mobile view */}
      <Link
        href={'/pricing'}
        className={`group fixed left-0 z-30 flex h-[65px]  w-screen items-center justify-center overflow-hidden bg-pink-dark text-white lg:hidden`}
      >
        <div className="flex h-full w-full items-center justify-center px-3 text-center md:mb-3">
          <div className="flex flex-col items-center justify-center">
            <p className="font-normal">
              {textContent.title.normalText} 💘<span className="font-semibold">{textContent.title.boldText}</span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default TopBanner;
