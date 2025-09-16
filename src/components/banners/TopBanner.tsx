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
        className={`fixed left-0 top-0 z-50 hidden h-[54px] w-screen items-center justify-center overflow-hidden bg-primary text-white lg:flex`}
      >
        <div className="mx-auto flex flex-row items-center justify-center">
          <div className="flex cursor-default">
            <p className="gap-2 text-base font-semibold">
              {textContent.title.normalText} 🔥
              <span> {textContent.title.boldText}</span>
            </p>
          </div>
          <Link href={'/pricing'} id={'topBannerActionButton'} className="flex cursor-pointer flex-row items-center">
            <p className="font-semibold hover:underline">{textContent.title.cta}</p>
            <CaretRight size={16} />
          </Link>
        </div>
      </div>

      <Link
        href={'/pricing'}
        className={`group fixed left-0 top-0 z-50 flex h-[64px] w-screen items-center justify-center overflow-hidden bg-primary text-white lg:hidden`}
      >
        <div className=" w-full  overflow-hidden px-3 text-center">
          <div className="flex animate-marquee flex-row whitespace-nowrap">
            <p className="mx-1 flex items-center justify-center gap-1 text-base font-semibold">
              <span>{textContent.title.normalText}</span>
              🔥
            </p>
            <Link href={'/pricing'} id={'topBannerActionButton'} className="flex cursor-pointer flex-row items-center ">
              <p className="text-base font-medium underline hover:no-underline">{textContent.title.cta}</p>
              <CaretRight size={16} />
            </Link>
          </div>
        </div>
      </Link>
    </>
  );
};

export default TopBanner;
