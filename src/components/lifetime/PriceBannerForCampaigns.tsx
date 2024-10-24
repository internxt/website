import { PricingText } from '@/assets/types/pricing';
import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';
import { getImage } from '@/lib/getImage';
import { CheckCircle } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';

export const PriceBannerForCampaigns = ({
  textContent,
  redirectTo,
}: {
  textContent: PricingText['tableSection']['ctaBanner'];
  redirectTo?: string;
}) => {
  const globalDialog = useGlobalDialog();
  const shouldShowBanner = globalDialog.dialogIsOpen(GlobalDialog.PriceBannerForCampaigns);
  const bgImage= getImage('/images/campaigns/halloween/web.svg');

  return (
   <div className={`${shouldShowBanner ? 'flex' : 'hidden'} flex-col overflow-hidden relative px-3 sm:px-5`}>
     {/* Vista para escritorio */}
      <div className="hidden lg:flex flex-col justify-between gap-20 sm:gap-40 rounded-[16px] sm:rounded-[32px] bg-orange w-full lg:flex-row relative z-10"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex w-full max-w-[500px] sm:max-w-[700px] flex-col items-center gap-2 sm:gap-4 px-2 sm:px-3 py-6 sm:py-10 text-center lg:items-start lg:pl-10 lg:text-left">
          <div className="flex w-max rounded-xl sm:rounded-2xl border-2 sm:border-4 border-yellow bg-gray-100 px-2 sm:px-4 py-1 sm:py-2">
            <p className="text-xl sm:text-2xl font-bold text-white md:text-5xl">{textContent.label}</p>
          </div>
          <div className="flex w-full flex-col">
            <p className="text-2xl sm:text-3xl font-bold text-gray-100 md:text-4xl">{textContent.subtitle}</p>
          </div>
          <div className="flex flex-col items-center gap-2 sm:gap-4 lg:flex-row">
            <Link
              href={redirectTo ?? '#billingButtons'}
              className="flex w-max items-center rounded-lg bg-white px-3 sm:px-5 py-2 sm:py-3 text-base sm:text-lg font-medium text-gray-100 lg:hover:bg-gray-5"
            >
              {textContent.cta}
            </Link>
          </div>
          <div className="flex flex-row items-center space-x-1 sm:space-x-2 text-gray-100">
            <CheckCircle size={20} className="text-gray-100" />
            <p className="whitespace-nowrap font-medium text-base sm:text-lg">{textContent.guarantee}</p>
          </div>
        </div>
        <div className="hidden w-full justify-end lg:flex">
          <Image
            src={getImage('/images/campaigns/halloween/internx_halloween_pricing.webp')}
            width={511}
            height={384}
            draggable={false}
            alt="Internxt Cloud Storage Pricing"
            className="rounded-r-[32px]"
          />
        </div>
      </div>

      {/* Vista para móviles */}
      <div className="flex lg:hidden flex-col justify-between gap-10 rounded-[16px] bg-orange w-full relative z-10"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex w-full flex-col items-center gap-4 px-2 py-6 text-center">
          <div className="flex w-max rounded-xl border-4 border-yellow bg-gray-100 px-6 py-3">
            <p className="text-4xl sm:text-5xl font-bold text-white">{textContent.label}</p>
          </div>
          <div className="flex w-full flex-col">
            <p className="text-4xl font-bold text-gray-100">{textContent.titleMbl1}</p> 
            <p className="text-4xl font-bold text-gray-100">{textContent.titleMbl2}</p> 
            <p className="text-4xl font-bold text-gray-100">{textContent.titleMbl3}</p> 
          </div>
          <div className="flex flex-col items-center">
          <div className="flex flex-row items-center space-x-1 text-gray-100 mb-2">
            <CheckCircle size={20} className="text-gray-100" />
            <p className="whitespace-nowrap font-medium text-sm">{textContent.guarantee}</p> 
          </div>
            <Link
              href={redirectTo ?? '#billingButtons'}
              className="flex w-max items-center rounded-lg bg-white px-3 py-2 text-base font-medium text-gray-100 hover:bg-gray-5"
            >
              {textContent.cta} 
            </Link>
          </div>
        </div>
         
        <div className="flex h-full w-full flex-col object-cover">
          <Image
            src={getImage('/images/campaigns/halloween/internxt_halloween_mobile.webp')}
            width={377}
            height={190}
            alt="Halloween image"
            className="w-full rounded-b-[16px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};
