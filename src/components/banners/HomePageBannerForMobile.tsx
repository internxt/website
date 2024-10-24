import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';
import { getImage } from '@/lib/getImage';
import { CheckCircle} from '@phosphor-icons/react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const HomePageBannerForMobile = (redirectTo) => {
  const { dialogIsOpen } = useGlobalDialog();
  const shouldShowBanner = dialogIsOpen(GlobalDialog.MobileBannerForHome);
  const router = useRouter();
  const lang = router.locale;
  const textContent = require(`../../assets/lang/${lang}/pricing.json`);
  const bgImage= getImage('/images/campaigns/halloween/web.svg');
  return (
    <div className="flex lg:hidden flex-col justify-between gap-10 rounded-[16px] bg-orange w-full relative z-10"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex w-full flex-col items-center gap-4 px-2 py-6 text-center">
          <div className="flex w-max rounded-xl border-4 border-yellow bg-gray-100 px-6 py-3">
            <p className="text-4xl sm:text-5xl font-bold text-white">{textContent.tableSection.ctaBanner.label}</p>
          </div>
          <div className="flex w-full flex-col">
            <p className="text-4xl font-bold text-gray-100">{textContent.tableSection.ctaBanner.titleMbl1}</p> 
            <p className="text-4xl font-bold text-gray-100">{textContent.tableSection.ctaBanner.titleMbl2}</p> 
            <p className="text-4xl font-bold text-gray-100">{textContent.tableSection.ctaBanner.titleMbl3}</p> 
          </div>
          <div className="flex flex-col items-center">
          <div className="flex flex-row items-center space-x-1 text-gray-100 mb-2">
            <CheckCircle size={20} className="text-gray-100" />
            <p className="whitespace-nowrap font-medium text-sm">{textContent.tableSection.ctaBanner.guarantee}</p> 
          </div>
            <Link
              href={redirectTo ?? '#billingButtons'}
              className="flex w-max items-center rounded-lg bg-white px-3 py-2 text-base font-medium text-gray-100 hover:bg-gray-5"
            >
              {textContent.tableSection.ctaBanner.ctaMbl} 
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
  );
};
