import Countdown from '@/components/components/Countdown';
import { currencyService } from '@/services/currency.service';
import { Check } from '@phosphor-icons/react';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '@/components/privacy/HeroSection.module.scss';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';

interface TitleAndOnePlanProps {
  textContent: Record<string, any>;
  header?: JSX.Element;
  footer?: JSX.Element;
  lang: GetServerSidePropsContext['locale'];
}

const TitleAndOnePlan = ({ textContent }: TitleAndOnePlanProps): JSX.Element => {
  const [currency, setCurrency] = useState<string>('€');

  useEffect(() => {
    currencyService
      .filterCurrencyByCountry()
      .then((currency) => {
        setCurrency(currency.currency);
      })
      .catch(() => {
        // NO OP
      });
  }, []);

  return (
    <div
      className={`${styles.titleAndOnePlanSection} flex h-[37rem] w-full flex-col items-center justify-center rounded-2xl shadow-soft backdrop-blur-55  lg:h-[571px] lg:w-[570px]`}
    >
      <div className="w-full overflow-hidden px-8 lg:w-[506px] lg:px-0">
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold leading-tight text-white lg:text-5xl">
            {textContent.title.textBeforeBlueText}
            <span className="text-primary">{textContent.title.blueText}</span>
            {textContent.title.textAfterBlueText}
          </h1>
          <p className="pb-2 pt-4 text-xl font-medium text-primary ">{textContent.subtitle}</p>
          <p className="pb-4 text-xl font-medium text-white">{textContent.description}</p>
        </div>

        <div className="flex flex-col">
          {textContent.features.map((feat) => (
            <div key={feat} className="flex min-h-[24px] flex-row items-start gap-1 pt-2 lg:gap-2 lg:pt-2">
              <Check className="mt-1 text-primary" weight="bold" size={20} />
              <p className="pt-1 text-left text-sm font-normal text-white lg:pt-0 lg:text-lg">{feat}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-row items-end pt-4 text-base font-normal text-white lg:pt-8 ">
          {textContent.startFrom.normal1}{' '}
          <span className="flex w-max flex-row text-4xl font-medium ">
            <abbr className="text-base">{currency}</abbr>
            {textContent.startFrom.price}
          </span>
          {textContent.startFrom.normal2}
        </div>

        <div className="flex flex-col-reverse gap-5 pt-6 md:flex-row">
          <Link
            href={'#priceTable'}
            className="z-10 flex h-[48px] w-full items-center justify-center rounded-sm-6 bg-primary text-base font-normal text-white hover:bg-primary-dark md:w-1/2"
          >
            {textContent.claimDeal}
          </Link>

          <div className="flex h-[48px] w-full flex-col items-center justify-center rounded-sm-6 bg-white-summer-2 text-primary shadow-soft md:w-1/2">
            <Countdown textFont="font-medium" textHeight="text-xl font-normal text-white" />
          </div>
        </div>

        <div className="flex flex-row gap-2 pt-3">
          <Image
            src={getImage('/images/campaigns/world_environment_day/shield-blue.svg')}
            alt="Internxt Blue Shield check"
            width={24}
            height={24}
          />
          <p className="whitespace-nowrap pt-3 text-sm text-white mobile-sm:pt-1">{textContent.guarantee}</p>
        </div>
      </div>
    </div>
  );
};

export default TitleAndOnePlan;
