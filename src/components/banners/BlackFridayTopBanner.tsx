import Link from 'next/link';
import { useRouter } from 'next/router';
import { CaretRight } from '@phosphor-icons/react';

export const BLACK_FRIDAY_URL = '/deals/black-friday-internxt';

const BlackFridayTopBanner = () => {
  const router = useRouter();
  const lang = router.locale;
  const bannersJson = require(`@/assets/lang/${lang}/banners.json`);
  const textContent = bannersJson.BlackFridayTopBarBanner;

  return (
    <>
      <div className="fixed left-0 top-0 z-50 flex h-12 w-full items-center overflow-hidden bg-primary text-white lg:h-[54px]">
        <Link
          href={BLACK_FRIDAY_URL}
          locale={lang}
          id="topBannerActionButton"
          className="flex h-full w-full cursor-pointer items-center lg:hidden"
        >
          <div className="flex w-full animate-marquee flex-row items-center gap-2 whitespace-nowrap text-sm font-semibold">
            <p>
              {textContent.title.normalText} {textContent.title.boldText}
            </p>
            <span className="flex shrink-0 flex-row items-center">
              {textContent.title.cta}
              <CaretRight size={16} />
            </span>
          </div>
        </Link>

        <div className="hidden w-full flex-row items-center justify-center gap-2 px-4 text-base font-semibold lg:flex">
          <p>
            {textContent.title.normalText} — {textContent.title.boldText}
          </p>
          <Link
            href={BLACK_FRIDAY_URL}
            locale={lang}
            id="topBannerActionButton"
            className="flex shrink-0 cursor-pointer flex-row items-center hover:underline"
          >
            {textContent.title.cta}
            <CaretRight size={16} />
          </Link>
        </div>
      </div>

      <div className="h-12 lg:h-[54px]" />
    </>
  );
};

export default BlackFridayTopBanner;
