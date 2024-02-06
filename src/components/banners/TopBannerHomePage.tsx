import { useRouter } from 'next/router';
import { CaretRight } from '@phosphor-icons/react';
import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';

const TopBannerHomePage = ({ isBannerFixed }) => {
  const router = useRouter();
  const lang = router.locale;
  const textContent = require(`@/assets/lang/${lang}/banners.json`);
  const globalDialog = useGlobalDialog();

  return (
    <>
      {/* Desktop view */}
      <div
        className={`group ${
          isBannerFixed ? 'absolute' : 'fixed'
        } left-0 z-50 hidden h-[54px] w-screen items-center justify-center overflow-hidden bg-primary text-white md:flex`}
      >
        <div onKeyDown={() => {}} className="mx-auto flex flex-row items-center justify-center space-x-3">
          <div className="flex cursor-default">
            <p className="font-normal">
              {textContent.TopBarBanner.title.normalText}
              <span className="font-semibold">{textContent.TopBarBanner.title.boldText}</span>
            </p>
          </div>
          <button
            className="flex cursor-pointer flex-row items-center space-x-2"
            onClick={() => {
              globalDialog.openDialog(GlobalDialog.Wheel);
            }}
          >
            <p className="font-semibold underline hover:no-underline">{textContent.TopBarBanner.title.cta}</p>
            <CaretRight size={16} />
          </button>

          {/* <p className="flex text-base font-semibold underline">{pickUp()}</p> */}
        </div>
      </div>
      {/* Mobile view */}
      <div
        className={`group fixed left-0 z-30 flex h-[65px] w-screen items-center justify-center overflow-hidden bg-primary text-white md:hidden`}
      >
        <div className="flex flex-col items-center justify-center py-2 px-2 text-center">
          <div
            onKeyDown={() => {}}
            className="flex flex-col items-center justify-center"
            onClick={() => {
              globalDialog.openDialog(GlobalDialog.Wheel);
            }}
          >
            {/* <p className="flex flex-row rounded-full  font-bold">{New().toUpperCase()}</p> */}
            <p className="font-normal">
              {textContent.TopBarBanner.title.normalText}
              <span className="font-semibold">{textContent.TopBarBanner.title.boldText}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBannerHomePage;
