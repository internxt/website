import { useRouter } from 'next/router';
import { CaretRight } from '@phosphor-icons/react';
import { checkout } from '../../lib/auth';

const TopBannerHomePage = ({ isBannerFixed }) => {
  const router = useRouter();
  const lang = router.locale;
  const textContent = require(`../../assets/lang/${lang}/banners.json`);

  return (
    <>
      {/* Desktop view */}
      <div
        className={`group ${
          isBannerFixed ? 'absolute' : 'fixed'
        } left-0 z-40 hidden h-[54px] w-screen cursor-pointer items-center justify-center overflow-hidden bg-primary text-white md:flex`}
      >
        <div
          className="mx-auto flex flex-row items-center justify-center space-x-3"
          onClick={() =>
            window.open(
              'https://internxt.com/what-does-google-know-about-me/?utm_source=website&utm_medium=banner&utm_campaign=google_knows',
              '_blank',
            )
          }
        >
          <p className="flex flex-row font-normal">{textContent.SummerOffer.title}</p>
          <CaretRight size={16} />

          {/* <p className="flex text-base font-semibold underline">{pickUp()}</p> */}
        </div>
      </div>
      {/* Mobile view */}
      <div
        className={`group fixed left-0 z-30 flex h-auto w-screen cursor-pointer items-center justify-center overflow-hidden bg-primary text-white md:hidden`}
      >
        <div className="flex flex-col items-center justify-center py-2 px-2 text-center">
          <div
            className="flex flex-col items-center justify-center"
            onClick={() =>
              window.open(
                'https://internxt.com/what-does-google-know-about-me/?utm_source=website&utm_medium=banner&utm_campaign=google_knows',
                '_blank',
              )
            }
          >
            {/* <p className="flex flex-row rounded-full  font-bold">{New().toUpperCase()}</p> */}
            <p className="flex flex-row font-normal">{textContent.SummerOffer.title}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBannerHomePage;
