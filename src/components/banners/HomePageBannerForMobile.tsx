import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';
import { getImage } from '@/lib/getImage';
import { CheckCircle } from '@phosphor-icons/react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const HomePageBannerForMobile = () => {
  const { dialogIsOpen } = useGlobalDialog();
  const shouldShowBanner = dialogIsOpen(GlobalDialog.MobileBannerForHome);
  const router = useRouter();
  const lang = router.locale;
  const textContent = require(`../../assets/lang/${lang}/pricing.json`);
  const blurBgImage = getImage('/images/campaigns/euro/grass.webp');

  return (
    <div className="z-10 flex  max-h-[550px] w-full flex-col justify-between gap-10 overflow-hidden rounded-[16px] border-4 border-gray-5 bg-white lg:hidden">
      <div className="flex w-full flex-col items-center gap-4 space-y-5 px-2 py-6 text-center">
        <div className="flex w-max rounded-xl border-4 border-pink bg-red-dark px-2 py-3">
          <p className="text-4xl font-bold text-white sm:text-5xl">{textContent.tableSection.ctaBanner.label}</p>
        </div>
        <div className="flex w-full flex-col text-gray-80">
          <p className="text-4xl font-bold">{textContent.tableSection.ctaBanner.titleMbl3}</p>
        </div>
        <div className="flex flex-col items-center">
          <Link
            href={'#priceTable'}
            className="flex w-max items-center rounded-lg bg-gray-5 px-3 py-2 text-base font-medium text-gray-80"
          >
            {textContent.tableSection.ctaBanner.cta}
          </Link>

          <div className="mt-4 flex flex-row items-center space-x-1 text-white">
            <CheckCircle size={20} className="text-green-1" weight="fill" />
            <p className="whitespace-nowrap text-sm font-medium text-gray-80">
              {textContent.tableSection.ctaBanner.guarantee}
            </p>
          </div>
        </div>
        <div className="relative ">
          <Image
            src={getImage('/images/campaigns/valentines/valentine_mobile.webp')}
            width={380}
            height={300}
            quality={100}
            alt="Valentines Mobile"
          />
        </div>
      </div>
    </div>
  );
};
