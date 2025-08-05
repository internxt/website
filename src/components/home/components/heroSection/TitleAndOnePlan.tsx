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
  percentOff: string;
  minimumPrice: string;
}

const TitleAndOnePlan = ({ textContent, percentOff, minimumPrice }: TitleAndOnePlanProps): JSX.Element => {
  const parsePercentText = (text: string) =>
    typeof text === 'string' ? text.replace(/{{discount}}/g, percentOff) : text;

  const parsePriceText = (text: string) =>
    typeof text === 'string' ? text.replace(/{{minimumPrice}}/g, minimumPrice) : text;

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
      className={`${styles.titleAndOnePlanSection} flex h-[543px] w-[343px] shrink-0 flex-col items-center justify-center rounded-2xl shadow-soft backdrop-blur-55 xs-md:h-[571px] xs-md:w-[570px]`}
    >
      <div className="flex h-[503px] w-[303px] flex-col justify-between xs-md:h-[507px] xs-md:w-[506px]">
        <div className="flex h-[164px] w-full flex-col justify-between xs-md:h-[316px]">
          <div className="justify flex h-[164px] flex-col justify-between  xs-md:h-[196px]">
            <p className="h-[72px] w-full text-30 font-semibold leading-tight text-white xs-md:h-[100px] xs-md:text-5xl">
              {textContent.title.textBeforeBlueText}
              <span className="text-primary">{textContent.title.blueText}</span>
              {textContent.title.textAfterBlueText}
            </p>
            <p className="h-[24px] text-xl font-medium text-primary">{textContent.subtitle}</p>
            <p className="max-h-[44px] min-h-[24px] text-lg font-medium leading-tight text-white xs-md:h-[24px] xs-md:text-xl">
              {parsePercentText(textContent.description)}
            </p>
          </div>
          <div className="hidden h-[88px] flex-col justify-between xs-md:flex ">
            {textContent.features.map((feat) => (
              <div key={feat} className="flex h-[24px] flex-row gap-2">
                <Check className="hidden text-primary xs-md:block" weight="bold" size={24} />
                <Check className="block text-primary xs-md:hidden" weight="bold" size={20} />
                <p className="mb-2 text-left text-sm font-normal text-white xs-md:text-lg ">{feat}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex h-[88px] flex-col justify-between  xs-md:hidden ">
          {textContent.features.map((feat) => (
            <div key={feat} className="flex h-[24px] flex-row gap-2 ">
              <Check className="hidden text-primary xs-md:block" weight="bold" size={24} />
              <Check className="block text-primary xs-md:hidden" weight="bold" size={20} />
              <p className="mb-2 text-left text-sm font-normal text-white xs-md:text-lg ">{feat}</p>
            </div>
          ))}
        </div>

        <div className="flex h-[43px] flex-row items-end  text-base font-normal text-white ">
          {textContent.startFrom.normal1}{' '}
          <span className="flex w-max flex-row text-4xl font-bold ">
            <abbr className="text-base">{currency}</abbr>
            {parsePriceText(textContent.startFrom.price)}
          </span>
          {textContent.startFrom.normal2}
        </div>

        <div className="hidden h-[84px] flex-col justify-between xs-md:flex ">
          <div className="flex flex-col-reverse gap-3 md:flex-row">
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
          <div className="flex h-[22px] flex-row items-center justify-start gap-2">
            <Image
              src={getImage('/images/campaigns/world_environment_day/shield-blue.svg')}
              alt="Internxt Blue Shield check"
              width={24}
              height={24}
            />
            <p className=" text-lg font-normal text-white">{textContent.guarantee}</p>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-3 xs-md:hidden">
          <Link
            href={'#billingButtons'}
            className="z-10 flex h-[48px] w-full items-center justify-center rounded-sm-6 bg-primary text-base font-normal text-white hover:bg-primary-dark md:w-1/2"
          >
            {textContent.claimDeal}
          </Link>

          <div className="flex h-[48px] w-full flex-col items-center justify-center rounded-sm-6 bg-white-summer-2 text-primary shadow-soft md:w-1/2">
            <Countdown textFont="font-medium" textHeight="text-xl font-normal text-white" />
          </div>
        </div>
        <div className="flex h-[22px] flex-row gap-2 xs-md:hidden ">
          <Image
            src={getImage('/images/campaigns/world_environment_day/shield-blue.svg')}
            alt="Internxt Blue Shield check"
            width={24}
            height={24}
          />
          <p className="pt-1 text-xs font-normal text-white xs-md:text-lg">{textContent.guarantee}</p>
        </div>
      </div>
    </div>
  );
};

export default TitleAndOnePlan;
