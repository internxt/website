import { useRouter } from 'next/router';
import { CaretRight } from '@phosphor-icons/react';
import { analyticsService } from '../services/analyticsService';
import { Interval, stripeService } from '../services/stripeService';
import { useEffect, useState } from 'react';

const TopBannerHomePage = ({ isBannerFixed }) => {
  const router = useRouter();
  const lang = router.locale;
  const textContent = require(`../../assets/lang/${lang}/banners.json`);
  const title = textContent.TopBarBanner.title.split(':');

  return (
    <>
      {/* Desktop view */}
      <div
        className={`group ${
          isBannerFixed ? 'absolute' : 'fixed'
        } left-0 z-50 hidden h-[54px] w-screen cursor-pointer items-center justify-center overflow-hidden bg-primary text-white md:flex`}
      >
        <div
          className="mx-auto flex flex-row items-center justify-center space-x-3"
          onClick={() => {
            // analyticsService.offerTrack({
            //   campaign: 'summersale',
            //   discount: 90,
            //   plan: priceId,
            // });
            window.open(`https://internxt.com/${lang === 'en' ? '' : lang}/password-generator`, '_blank');
          }}
        >
          <div className="flex flex-row space-x-1">
            <p className="flex flex-row font-semibold">{title[0]}:</p>
            <p className="flex flex-row font-normal">{title[1]}</p>
          </div>
          <CaretRight size={16} />

          {/* <p className="flex text-base font-semibold underline">{pickUp()}</p> */}
        </div>
      </div>
      {/* Mobile view */}
      <div
        className={`group fixed left-0 z-30 flex h-[65px] w-screen cursor-pointer items-center justify-center overflow-hidden bg-primary text-white md:hidden`}
      >
        <div className="flex flex-col items-center justify-center py-2 px-2 text-center">
          <div
            className="flex flex-col items-center justify-center"
            onClick={() =>
              window.open(`https://internxt.com/${lang === 'en' ? '' : lang}/password-generator`, '_blank')
            }
          >
            {/* <p className="flex flex-row rounded-full  font-bold">{New().toUpperCase()}</p> */}
            <p className="flex flex-row font-normal">{textContent.TopBarBanner.title}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBannerHomePage;
