/* eslint-disable @next/next/no-img-element */
import { CloudObjectStorageText } from '@/assets/types/cloud-object-storage';
import { getImage } from '@/lib/getImage';
import Button from '../shared/Button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Code, CodeBlock, Gauge, HandCoins, Headset, LockSimple, Resize, Star } from '@phosphor-icons/react';

interface PriceCardSectionProps {
  textContent: CloudObjectStorageText['PriceCardSection'];
}

export const CloudObjectStoragePriceCardSection = ({ textContent }: PriceCardSectionProps): JSX.Element => {
  const router = useRouter();
  const iconMap = [HandCoins, LockSimple, CodeBlock, Gauge, Resize, Code, Star, Headset];
  return (
    <section
      className="overflow-hidden px-5 py-20"
      id="storageSection"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F4F8FF 100%)' }}
    >
      <div className="absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 lg:left-32 lg:right-32"></div>
      <div className="flex flex-col items-center justify-center gap-16">
        <div className="flex max-w-[887px] flex-col items-center gap-6 text-center">
          <h2 className="text-30 font-semibold leading-tight text-gray-100 lg:whitespace-pre-line lg:text-3xl">
            {textContent.title}
          </h2>
          <h3 className="text-lg leading-tight text-gray-55">{textContent.description}</h3>
        </div>
        <div className="flex flex-col-reverse gap-16 md:flex-row">
          <div className="flex w-full max-w-[400px] flex-col justify-between rounded-2xl bg-primary md:w-screen">
            <div className="flex flex-col gap-2 p-10 text-white">
              <p className="text-4xl font-semibold leading-tight">{textContent.payAsYouGoCard.title}</p>
              <p className="text-lg">{textContent.payAsYouGoCard.description}</p>
            </div>
            <div className="flex">
              <Image
                src={getImage('/images/cloud-object-storage/internxt_s3_pricing.webp')}
                alt="Internxt s3 pricing"
                width={372}
                height={87}
              />
            </div>
          </div>

          <div className="flex w-full max-w-[400px] flex-col rounded-2xl border border-gray-10 md:w-screen md:max-w-[352px]">
            <div className="flex flex-col items-center gap-4 px-6 py-6 text-center">
              <p className="text-3xl font-semibold text-gray-95">{textContent.cardText.label}</p>
              <div className="flex flex-col items-center gap-4 text-center">
                <p className={` flex flex-row items-start space-x-1 whitespace-nowrap font-medium text-gray-100`}>
                  <span className={`currency`}>€</span>
                  <span className="price text-4xl font-bold">{textContent.cardText.price}</span>
                </p>
                <p className="text-xs font-normal text-gray-35">{textContent.cardText.perTB}</p>
              </div>
              <Button
                className="!w-full"
                text={textContent.cardText.cta}
                onClick={() => router.push('/cloud-object-storage/checkout')}
              />
            </div>

            <div className="flex flex-col gap-6 rounded-b-2xl bg-gray-1 px-6 py-6">
              <span className="flex flex-col gap-4 text-lg font-medium text-gray-100">
                {textContent.cardText.whatsIncluded.title}
                <div className={`h-[1px] w-full bg-neutral-25`} />
              </span>

              <div className="flex flex-col gap-4">
                {textContent.cardText.whatsIncluded.features.map((feature, index) => {
                  const Icon = iconMap[index];
                  return (
                    <div className="flex flex-row items-start gap-2" key={feature}>
                      {Icon && <Icon size={24} className={`shrink-0 text-primary`} />}
                      <p className="text.lg text-gray-80">{feature}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
