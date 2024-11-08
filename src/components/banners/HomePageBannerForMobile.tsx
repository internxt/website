import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';
import { getImage } from '@/lib/getImage';
import { CheckCircle } from '@phosphor-icons/react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const HomePageBannerForMobile = (redirectTo) => {
  const { dialogIsOpen } = useGlobalDialog();
  const shouldShowBanner = dialogIsOpen(GlobalDialog.MobileBannerForHome);
  const router = useRouter();
  const lang = router.locale;
  const textContent = require(`../../assets/lang/${lang}/pricing.json`);
  const bgImage = getImage('/images/black-friday/clouds.webp');
  return (
    <div className={`${shouldShowBanner ? 'flex' : 'hidden'} relative flex-col overflow-hidden px-3 sm:px-5`}>
      <div
        className="relative z-10 flex w-full flex-col justify-between gap-10 rounded-[16px] bg-orange lg:hidden"
        style={{
          backgroundImage: `url(${bgImage}), linear-gradient(180deg, #0066ff 0%, #000000 100%)`,
          backgroundSize: 'cover, cover',
          backgroundPosition: 'center, center',
        }}
      >
        <div className="flex w-full flex-col items-center gap-4 px-2 py-6 text-center">
          <div className="flex w-max rounded-xl border-4 border-primary bg-gray-100 px-2 py-3">
            <p className="text-4xl font-bold text-white sm:text-5xl">{textContent.tableSection.ctaBanner.label}</p>
          </div>
          <div className="flex w-full flex-col text-white">
            <p className="text-4xl font-bold">{textContent.tableSection.ctaBanner.titleMbl1}</p>
            <p className="text-4xl font-bold">{textContent.tableSection.ctaBanner.titleMbl2}</p>
            <p className="text-4xl font-bold">{textContent.tableSection.ctaBanner.titleMbl3}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-2 flex flex-row items-center space-x-1 text-gray-30">
              <CheckCircle size={20} className="text-primary" />
              <p className="whitespace-nowrap text-sm font-medium">{textContent.tableSection.ctaBanner.guarantee}</p>
            </div>
            <Link
              href={'#priceTable'}
              className="flex w-max items-center rounded-lg bg-white px-3 py-2 text-base font-medium text-gray-100 hover:bg-gray-5"
            >
              {textContent.tableSection.ctaBanner.cta}
            </Link>
          </div>
        </div>

        <div className="flex h-full w-full flex-col object-cover">
          <Image
            src={getImage('/images/black-friday/internxt_black_friday_2024.webp')}
            width={377}
            height={377}
            alt="Black Friday image"
            className="w-full rounded-b-[16px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};
