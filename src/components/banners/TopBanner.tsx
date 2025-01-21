import { useRouter } from 'next/router';
import { CaretRight } from '@phosphor-icons/react';
import { handleAdsConversion } from '../services/ga.services';
import GA_TAGS from '../services/ga.tags';

interface TopBannerProps {
  isBannerFixed?: boolean;
}
const VIEW_PLANS_TAG = GA_TAGS.VIEW_PLANS_TAG;

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
        } left-0 z-50 hidden h-[54px] w-screen items-center justify-center overflow-hidden bg-primary text-white lg:flex`}
      >
        <div className="mx-auto flex flex-row items-center justify-center space-x-3">
          <div className="flex cursor-default">
            <p className="font-normal">
              🔐 {textContent.title.normalText} <span className="font-bold">{textContent.title.boldText}</span>
            </p>
          </div>
          <button
            onClick={() => handleAdsConversion('/pricing', 'TopBanner-Conversion', VIEW_PLANS_TAG, 1, 'USD')}
            id={'topBannerActionButton'}
            className="flex cursor-pointer flex-row items-center space-x-2"
          >
            <p className="font-semibold underline hover:no-underline">{textContent.title.cta}</p>
            <CaretRight size={16} />
          </button>
        </div>
      </div>
      {/* Mobile view */}
      <button
        onClick={() => handleAdsConversion('/pricing', 'TopBanner-Conversion', VIEW_PLANS_TAG, 1, 'USD')}
        className={`group fixed left-0 z-30 flex h-[65px] w-screen items-center justify-center overflow-hidden bg-primary text-white lg:hidden`}
      >
        <div className="flex flex-col items-center justify-center px-2 py-2 text-center">
          <div className="flex flex-col items-center justify-center">
            <p className="font-normal">
              🔐{textContent.title.normalText}
              <span className="font-semibold">{textContent.title.boldText}</span>
            </p>
          </div>
        </div>
      </button>
    </>
  );
};

export default TopBanner;
