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
  const blurBgImage = getImage('/images/campaigns/euro/grass.webp');
  return (
    <div className={`${shouldShowBanner ? 'flex' : 'hidden'} relative flex-col overflow-hidden px-3 sm:px-5`}>
      {/* Desktop View */}
      <div
        className={`relative z-10 hidden w-full flex-col justify-between rounded-[16px] bg-primary sm:gap-40 sm:rounded-[32px] lg:flex lg:flex-row`}
        style={{ backgroundImage: `url('${blurBgImage}')` }}
      >
        <div className=" flex max-h-[384px] w-full min-w-[800px] flex-col items-center gap-6 py-6 text-center lg:flex-row lg:items-start lg:pl-10  lg:text-left">
          <div className="flex flex-col items-center gap-2 pl-6 pr-10 text-center lg:items-start lg:text-left">
            <div className="mt-8 flex w-max rounded-xl border-2 border-primary bg-gray-100 px-2 py-5 sm:rounded-2xl sm:border-4 sm:px-4 sm:py-2">
              <p className="text-xl font-bold text-white sm:text-2xl md:text-5xl">{textContent.label}</p>
            </div>
            <div className="flex w-full pt-5">
              <p className="whitespace-nowrap text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-4xl">
                {textContent.subtitle}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 pt-4 sm:gap-4 lg:flex-row">
              <Link
                href={redirectTo ?? '#billingButtons'}
                className="flex w-max items-center rounded-lg bg-primary px-3 py-2 text-base font-medium text-white hover:bg-primary/95 sm:px-5 sm:py-3 sm:text-lg"
              >
                {textContent.cta}
              </Link>
              <div className="flex flex-row items-center space-y-1 text-white sm:space-x-2">
                <CheckCircle size={20} className="text-primary" weight="fill" />
                <p className="whitespace-nowrap text-base font-medium sm:text-lg">{textContent.guarantee}</p>
              </div>
            </div>
            <p className="whitespace-nowrap pt-6 text-sm font-medium text-gray-30 sm:text-sm">{textContent.lastCta}</p>
          </div>
          <div className="relative flex max-h-[300px] items-center justify-center pl-20 pr-6 ">
            <Image
              src={getImage('/images/campaigns/superbowl/dust.png')}
              width={1500}
              height={1500}
              alt="Dust for scorer"
              className=" absolute left-0 top-0 z-0 object-contain"
            />
            <Image
              src={getImage('/images/campaigns/superbowl/internxt_superbowl2025.webp')}
              width={300}
              height={100}
              alt="Internxt Cloud Storage Pricing"
              className="top-10 z-10 w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div
        className={`relative z-10 flex w-full flex-col justify-between gap-10 rounded-[16px] bg-primary lg:hidden`}
        style={{ backgroundImage: `url('${blurBgImage}')` }}
      >
        <div className="flex w-full flex-col items-center gap-4 space-y-5 px-2 py-6 text-center">
          <div className="flex w-max rounded-xl border-4 border-primary bg-gray-100 px-2 py-3">
            <p className="text-4xl font-bold text-white sm:text-5xl">{textContent.label}</p>
          </div>
          <div className="flex w-full flex-col text-white">
            <p className="text-4xl font-bold">{textContent.titleMbl1}</p>
            <p className="text-4xl font-bold">{textContent.titleMbl2}</p>
            <p className="text-4xl font-bold">{textContent.titleMbl3}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-2 flex flex-row items-center space-x-1 pb-5 text-gray-5">
              <CheckCircle size={20} className="text-primary" weight="fill" />
              <p className="whitespace-nowrap text-sm font-medium">{textContent.guarantee}</p>
            </div>
            <Link
              href={redirectTo ?? '#billingButtons'}
              className="flex w-max items-center rounded-lg bg-primary px-3 py-2 text-base font-medium text-white hover:bg-primary/95"
            >
              {textContent.cta}
            </Link>
          </div>
        </div>

        <div className="flex h-full w-full flex-col object-cover xl:hidden">
          <Image
            src={getImage('/images/campaigns/superbowl/internxt_superbowl2025_mobile.webp')}
            width={377}
            height={200}
            alt="Privacy Week"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
