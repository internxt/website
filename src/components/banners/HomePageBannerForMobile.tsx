import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';
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
      } w-full flex-col overflow-hidden rounded-[32px] bg-primary pt-10 md:hidden`}
    >
      <div className="flex w-full flex-col items-center justify-center space-y-6 text-center text-white lg:items-start lg:text-left">
        <div className="flex w-max rounded-2xl border-4 border-primary/7 bg-white py-2 px-5">
          <p className="text-4xl font-bold text-primary">{textContent.tableSection.ctaBanner.label}</p>
        </div>
        <div className="flex w-full max-w-[253px] flex-col space-y-4">
          <p className="text-4xl font-bold text-white">{textContent.tableSection.ctaBanner.title}</p>
        </div>
        <div className="flex flex-col items-center gap-4 lg:flex-row">
          <button
            onClick={() => {
              router.push('/lifetime');
            }}
            className="flex w-max items-center rounded-lg bg-white px-3.5 py-1.5 text-lg font-medium text-gray-100 hover:bg-primary"
          >
            {textContent.tableSection.ctaBanner.cta}
          </button>
          <div className="flex flex-row items-center space-x-3 text-white">
            <CheckCircle size={24} className="text-white" />
            <p className="text-sm font-medium">{textContent.tableSection.ctaBanner.guarantee}</p>
          </div>
        </div>
      </div>
      <div className="flex h-full flex-col">
        <Image
          src="/images/banners/data_privacy_internxt_mobile.webp"
          loading="lazy"
          width={377}
          height={190}
          alt="Spring sale image"
          className="object-cover"
        />
      </div>
    </div>
  );
};
