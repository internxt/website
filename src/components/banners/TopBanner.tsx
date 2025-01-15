import { useRouter } from 'next/router';
import { CaretRight } from '@phosphor-icons/react';

interface TopBannerProps {
  isBannerFixed?: boolean;
}

const SEND_TO = process.env.GOOGLE_ANALYTICS_SENDTO;
const TopBanner = ({ isBannerFixed }: TopBannerProps) => {
  const router = useRouter();
  const lang = router.locale;
  const bannersJson = require(`@/assets/lang/${lang}/banners.json`);
  const textContent = bannersJson.TopBarBanner;

  const handleConversion = (url: string) => {
    const callback = () => {
      if (url) {
        window.location.href = url;
      }
    };
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: SEND_TO,
        value: 1.0,
        currency: 'EUR',
        event_callback: callback,
      });
    } else {
      callback();
    }
  };

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
            onClick={() => handleConversion('/pricing')}
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
        onClick={() => handleConversion('/pricing')}
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
