import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';
import { getImage } from '@/lib/getImage';
import { CheckCircle } from '@phosphor-icons/react';
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';

export const HomePageBannerForMobile = () => {
  const { dialogIsOpen } = useGlobalDialog();
  const shouldShowBanner = dialogIsOpen(GlobalDialog.MobileBannerForHome);
  const router = useRouter();
  const lang = router.locale;
  const textContent = require(`../../assets/lang/${lang}/pricing.json`);

  return (
    <div
      className={`${
        shouldShowBanner ? 'flex' : 'hidden'
      } w-full max-w-md flex-col overflow-hidden rounded-[32px] pt-10 md:hidden`}
      style={{
        backgroundImage: `url(${getImage('/images/campaigns/euro/grass.webp')})`,
      }}
    >
      <div className="flex w-full flex-col items-center justify-center space-y-6 pb-5 text-center text-white">
        <div className="flex items-center gap-1.5 rounded-xl bg-gray-100 py-2 px-5 ring-4 ring-primary">
          <p className="text-4xl font-bold text-white">{textContent.tableSection.ctaBanner.label}</p>
        </div>
        <div className="flex w-full max-w-[253px] flex-col space-y-4">
          <p className="text-4xl font-bold text-white">{textContent.tableSection.ctaBanner.title}</p>
        </div>
        <div className="flex flex-col items-center gap-4 lg:flex-row">
          <button
            onClick={() => {
              router.push('/pricing');
            }}
            className="flex w-max items-center rounded-lg bg-primary px-3.5 py-1.5 text-lg font-medium text-white hover:bg-primary"
          >
            {textContent.tableSection.ctaBanner.cta}
          </button>
          <div className="flex flex-row items-center space-x-3 text-white">
            <CheckCircle size={24} className="text-primary" weight="fill" />
            <p className="text-sm font-medium">{textContent.tableSection.ctaBanner.guarantee}</p>
          </div>
        </div>
      </div>
      <div className="flex h-full w-full flex-col">
        <div className="flex h-full w-full flex-col">
          <Image
            src={getImage('/images/campaigns/euro/mobile.webp')}
            width={377}
            height={190}
            alt="Euro 2024 image"
            className="flex h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
