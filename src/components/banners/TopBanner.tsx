import { useRouter } from 'next/router';
import { CaretRight, Sun } from '@phosphor-icons/react';

const TopBanner = ({ isBannerFixed }) => {
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
        } left-0 z-50 hidden h-[54px] w-screen items-center justify-center overflow-hidden bg-primary text-white md:flex`}
      >
        <div className="mx-auto flex flex-row items-center justify-center space-x-3">
          <div className="flex cursor-default">
            <p className="font-normal">
              <span className="font-bold">{textContent.title.boldText}</span>
              {textContent.title.normalText}
            </p>
          </div>
          <button
            id={'topBannerActionButton'}
            className="flex cursor-pointer flex-row items-center space-x-2"
            onClick={() => {
              router.push('/lifetime');
            }}
          >
            <p className="font-semibold underline hover:no-underline">{textContent.title.cta}</p>
            <CaretRight size={16} />
          </button>
        </div>
      </div>
      {/* Mobile view */}
      <div
        className={`group fixed left-0 z-30 flex h-[65px] w-screen items-center justify-center overflow-hidden bg-primary text-white md:hidden`}
      >
        <div className="flex flex-col items-center justify-center py-2 px-2 text-center">
          <button
            className="flex flex-col items-center justify-center"
            onClick={() => {
              router.push('/lifetime');
            }}
          >
            <p className="font-normal">
              <span className="font-semibold">{textContent.title.boldText}</span>
              {textContent.title.normalText}
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default TopBanner;
