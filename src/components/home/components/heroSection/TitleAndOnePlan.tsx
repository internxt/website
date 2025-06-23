import Countdown from '@/components/components/Countdown';
import { currencyService } from '@/services/currency.service';
import Header from '@/components/shared/Header';
import { Check, ShieldCheck } from '@phosphor-icons/react';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getImage } from '@/lib/getImage';

interface TitleAndOnePlanProps {
  textContent: Record<string, any>;
  header?: JSX.Element;
  footer?: JSX.Element;
  lang: GetServerSidePropsContext['locale'];
}

const TitleAndOnePlan = ({ textContent, header, footer, lang }: TitleAndOnePlanProps): JSX.Element => {
  const [currency, setCurrency] = useState<string>('€');
  const bgImageForMobile = getImage('/images/campaigns/summer/SummerCampaign.png');
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
    <div className="lg:pt-24">
      <div className=" max-w-[544px] flex-col rounded-3xl bg-white-summer px-6 backdrop-blur-[8px] lg:flex">
        {header ?? (
          <div className="flex flex-col gap-6 text-start ">
            <div className="flex flex-col pt-4">
              <Header maxWidth="max-w-[500px]" className="text-gray-100">
                {textContent.title.textBeforeBlueText}
                <span className="text-primary">{textContent.title.blueText}</span>
                {textContent.title.textAfterBlueText}
              </Header>
              <p className="pt-4 text-xl font-medium ">
                <span className="text-primary">{textContent.subtitle}</span>
              </p>
              <p className="pt-4 text-xl font-medium ">
                <span className="text-gray-100">{textContent.description}</span>
              </p>
            </div>
            <div className="mx-auto flex flex-col lg:mx-0">
              {textContent.features.map((feat) => (
                <div key={feat} className="flex flex-row gap-2">
                  <Check className="pt-2 text-primary lg:pt-0" weight="bold" size={24} />
                  <p className="text-regular text-left text-lg text-gray-100 ">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-row justify-start pb-4 pt-6">
          <p className="flex flex-row items-end text-gray-100">
            {textContent.startFrom.normal1}{' '}
            <span className="flex w-max flex-row items-start justify-start text-4xl font-medium text-gray-100">
              <abbr className="mt-0.5 text-base ">{currency}</abbr>
              {textContent.startFrom.price}
            </span>
            {textContent.startFrom.normal2}
          </p>
        </div>
        <div className="flex flex-col gap-4 pt-4 lg:flex-row lg:justify-start lg:gap-4">
          <div className="flex w-full flex-col items-center rounded-lg bg-white-summer-2 py-3 text-primary shadow-sm lg:order-2 lg:flex lg:w-1/2 lg:justify-center">
            <Countdown textFont="font-medium" textHeight="text-xl text-gray-100 " />
          </div>
          <div className="flex w-full flex-col items-center lg:order-1 lg:w-1/2 lg:flex-row">
            <Link
              href={'#priceTable'}
              className="z-10 flex w-full justify-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary-dark"
            >
              {textContent.claimDeal}
            </Link>
          </div>
        </div>

        {footer ?? (
          <div className="flex flex-row items-center justify-center space-x-3 pb-10 pt-4 lg:justify-start">
            <ShieldCheck size={24} weight="fill" className="text-primary" />
            <p className="whitespace-nowrap text-gray-100 lg:text-lg">{textContent.guarantee}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TitleAndOnePlan;
