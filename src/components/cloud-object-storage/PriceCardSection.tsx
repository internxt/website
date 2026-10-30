/* eslint-disable @next/next/no-img-element */
import { CloudObjectStorageText } from '@/assets/types/cloud-object-storage';
import { getImage } from '@/lib/getImage';
import Button from '../shared/Button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Code, CodeBlock, Gauge, HandCoins, Headset, LockSimple, Resize, Star } from '@phosphor-icons/react';
import { currencyService } from '@/services/currency.service';
import { useEffect, useState } from 'react';

interface PriceCardSectionProps {
  textContent: CloudObjectStorageText['PriceCardSection'];
}

export const CloudObjectStoragePriceCardSection = ({
  textContent,
}: PriceCardSectionProps): JSX.Element => {
  const router = useRouter();
  const iconMap = [HandCoins, LockSimple, CodeBlock, Gauge, Resize, Code, Star, Headset];
  const [currency, setCurrency] = useState("€");
  const [currencyValue, setCurrencyValue] = useState("eur");
  useEffect(() => {
    currencyService.filterObjectStorageCurrencyByCountry().then(({currency, currencyValue}) => {
      setCurrency(currency);
      setCurrencyValue(currencyValue);
    })
    .catch(() => {
      // NO OP
    })
  }, []);

  const getPrice = (currencyValue: string) => {
  if (currencyValue === 'usd') return 8;
  return 7;
};

  return (
    <section className="overflow-hidden bg-neutral-17 dark:bg-gray-105 px-5 py-20" id="billingButtons">
      <div className="absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 dark:bg-gray-71 lg:left-32 lg:right-32"></div>
      <div className="flex flex-col items-center justify-center gap-16">
        <div className="flex max-w-[887px] flex-col items-center gap-6 text-center">
          <h2 className="text-30 font-semibold leading-tight text-gray-100 dark:text-white-95 lg:whitespace-pre-line lg:text-3xl">{textContent.title}</h2>
          <p className="text-lg leading-tight text-gray-55 dark:text-green-120">{textContent.description}</p>
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

          <div className="flex w-full max-w-[400px] flex-col rounded-2xl border border-gray-10 dark:border-gray-71 md:w-screen md:max-w-[352px]">
            <div className="flex flex-col items-center gap-4 px-6 py-6 text-center">
              <p className="text-3xl font-semibold text-gray-95 dark:text-white-95">{textContent.cardText.label}</p>
              <div className="flex flex-col items-center gap-4 text-center">
                <p className="flex flex-row items-start space-x-1 whitespace-nowrap font-medium text-gray-100 dark:text-white-95">
                  <span className={`currency`}>{currency}</span>
                  <span className="price text-4xl font-bold">{getPrice(currencyValue)}</span>
                </p>
                <p className="text-xs font-normal text-gray-35">{textContent.cardText.perTB}</p>
              </div>
              <Button
                className="!w-full"
                text={textContent.cardText.cta}
                onClick={() => router.push('/cloud-object-storage/checkout')}
              />
            </div>

            <div className="flex flex-col gap-6 rounded-b-2xl bg-gray-1 dark:bg-gray-105 px-6 py-6">
              <span className="flex flex-col gap-4 text-lg font-medium text-gray-100 dark:text-white-95">
                {textContent.cardText.whatsIncluded.title}
                <div className="h-[1px] w-full bg-neutral-25 dark:bg-gray-71" />
              </span>

              <div className="flex flex-col gap-4">
                {textContent.cardText.whatsIncluded.features.map((feature, index) => {
                  const Icon = iconMap[index];
                  return (
                    <div className="flex flex-row items-start gap-2" key={feature}>
                      {Icon && <Icon size={24} className={`shrink-0 text-primary`} />}
                      <p className="text.lg text-gray-80 dark:text-cool-gray-30">{feature}</p>
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
