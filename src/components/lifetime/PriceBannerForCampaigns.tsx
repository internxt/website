import { useEffect, useState } from 'react';
import { PricingText } from '@/assets/types/pricing';
import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';
import { Check, TShirt } from '@phosphor-icons/react';
import Link from 'next/link';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import styles from '@/components/privacy/HeroSection.module.scss';

export const PriceBannerForCampaigns = ({
  textContent,
  redirectTo,
  percentOff,
}: {
  textContent: PricingText['tableSection']['ctaBanner'];
  redirectTo?: string;
  percentOff: string;
}) => {
  const globalDialog = useGlobalDialog();
  const [delayedRender, setDelayedRender] = useState(false);
  const shouldShowBanner = globalDialog.dialogIsOpen(GlobalDialog.PriceBannerForCampaigns);

  const bgImage = getImage('/images/campaigns/5th-anniversary/confetti.webp');
  const bgImage2 = getImage('/images/campaigns/5th-anniversary/visual (hero).webp');

  const parsePercentText = (text: string) =>
    typeof text === 'string' ? text.replace(/{{discount}}/g, percentOff) : text;

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedRender(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-20 lg:mr-4 lg:pt-24">
      <div
        className={`${
          shouldShowBanner && delayedRender ? 'flex' : 'hidden'
        } flex-col overflow-hidden xs-md:mx-10 lg:rounded-32 xl:mx-32 3xl:mx-80 ${styles.horizontalLinearGardient}`}
      >
        <div
          className={`hidden h-[370px] w-full flex-row items-center px-8 lg:flex`}
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div
            className={`${styles.titleAndOnePlanSection} flex h-[314px] w-[670px] shrink-0 flex-col items-center rounded-20 text-center backdrop-blur-[6px]`}
          >
            <div className="my-8 flex h-full flex-col justify-between">
              <div className="flex h-[80px] w-[630px] flex-col justify-between   text-start ">
                <div className="flex flex-row gap-3 ">
                  <p className="rounded-2 bg-gray-95/30 px-1 py-0.5 text-xl font-semibold text-primary">
                    {parsePercentText(textContent.label)}
                  </p>
                  <p className="text-2xl font-normal text-white">{textContent.title}</p>
                </div>
                <p className="text-4xl font-semibold text-white">{textContent.subtitle}</p>
              </div>
              <div className="flex h-[56px] w-[549px] flex-col justify-between">
                <div className="flex h-[24px] flex-row items-start gap-2">
                  <Check className="mt-1 text-primary" weight="bold" size={20} />
                  <p className="text-left text-lg font-normal text-white">{textContent.subtitle2}</p>
                </div>
                <div className="flex h-[24px] flex-row items-start gap-2">
                  <Check className="mt-1 text-primary" weight="bold" size={20} />
                  <p className="text-left text-lg font-normal text-white lg:pt-0">{textContent.subtitle3}</p>
                </div>
              </div>
              <div className="flex h-[77px] w-[630px]  flex-col justify-between ">
                <div className="flex w-full flex-row items-center gap-4 ">
                  <Link
                    href={redirectTo ?? '#billingButtons'}
                    className="flex w-1/2 items-center justify-center rounded-lg bg-primary px-3 py-2 text-center text-base font-medium text-white hover:bg-primary/95 sm:px-5 sm:py-2"
                  >
                    {textContent.cta}
                  </Link>
                  <div className="flex flex-row items-center justify-center gap-1">
                    <Image
                      src={getImage('/images/campaigns/world_environment_day/shield-blue.svg')}
                      alt="Internxt Blue Shield check"
                      width={24}
                      height={24}
                      className="hidden md:block"
                    />
                    <p className="pt-1 text-base font-medium text-white sm:text-base ">{textContent.guarantee}</p>
                  </div>
                </div>
                <p className="h-[17px] text-left text-sm font-medium text-gray-25">{textContent.lastCta}</p>
              </div>
            </div>
          </div>
          <div className="h-[314px] w-[390px] flex-col items-center justify-center lg:flex">
            <div className="ml-4 flex h-full w-full flex-col items-end justify-evenly">
              <div className="relative mt-6 h-[234px] w-full ">
                <Image
                  src={getImage('/images/campaigns/5th-anniversary/5th_anniversary_logo.png')}
                  alt="Internxt x Valencia logo"
                  fill
                  quality={100}
                />
              </div>
              <div className="relative mb-2 h-[39px] w-[253px] ">
                <Image
                  src={getImage('/images/campaigns/5th-anniversary/logos (mobile).webp')}
                  alt="Internxt x Valencia logo"
                  fill
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Banner Mobile */}
        <div
          style={{
            backgroundImage: `url('${bgImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className="relative z-10 flex h-[660px] w-screen flex-col justify-between py-5 md:pb-[1000px] lg:hidden"
        >
          <div
            className={`mx-4 flex flex-col items-center gap-2 rounded-2xl ${styles.titleAndOnePlanSection} px-2 py-4 text-center backdrop-blur-[6px] lg:items-start lg:text-left`}
          >
            <div className="flex w-max items-center rounded-2 bg-gray-95/30 px-1 py-0.5">
              <p className="text-sm font-semibold text-primary">{parsePercentText(textContent.label)}</p>
            </div>
            <div className="flex w-full flex-col pt-1">
              <p className="text-lg font-normal text-white">{textContent.title}</p>
              <p className="px-10 pt-3 text-center text-2xl font-semibold text-white">{textContent.subtitle2}</p>
            </div>
            <div className="flex w-full flex-row items-center justify-start gap-2 px-4 pt-4">
              <Image
                src={getImage('/images/campaigns/world_environment_day/shield-blue.svg')}
                alt="Internxt Blue Shield check"
                width={24}
                height={24}
              />
              <p className="whitespace-nowrap pt-0.5 text-sm font-medium text-white">{textContent.guarantee}</p>
            </div>
            <div className="flex w-full flex-row items-center justify-start gap-2 px-4 pb-2">
              <TShirt size={24} className="text-primary" />
              <p className="whitespace-nowrap pt-0.5 text-sm font-medium text-white">{textContent.gift}</p>
            </div>
            <div className="flex w-full flex-row items-center justify-start gap-2 px-0 pb-2">
              <Link
                href={redirectTo ?? '#billingButtons'}
                className="z-20 mx-4 flex w-full items-center justify-center rounded-sm-6 bg-primary px-4 py-3 text-center text-base font-normal text-white hover:bg-primary/95 sm:py-3 sm:text-lg"
              >
                {textContent.cta}
              </Link>
            </div>
          </div>
          <div className="relative h-[360px] w-full">
            <Image
              src={getImage('/images/campaigns/5th-anniversary/visual (mobile).webp')}
              alt="Internxt 5th anniversary"
              width={568}
              height={311}
              quality={100}
              className="absolute -top-4 right-1/2 z-10 translate-x-1/2 pr-8"
            />
            <Image
              src={getImage('/images/campaigns/5th-anniversary/logos (mobile).webp')}
              alt="Internxt x Valencia logo"
              width={230}
              height={100}
              quality={100}
              className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
