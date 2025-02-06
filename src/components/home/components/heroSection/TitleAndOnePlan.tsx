import Countdown from '@/components/components/Countdown';
import { currencyService } from '@/components/services/currency.service';
import { handleAdsConversion } from '@/components/services/ga.services';
import GA_TAGS from '@/components/services/ga.tags';
import Header from '@/components/shared/Header';
import { Check, ShieldCheck } from '@phosphor-icons/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface TitleAndOnePlanProps {
  textContent: Record<string, any>;
  header?: JSX.Element;
  footer?: JSX.Element;
}

const TitleAndOnePlan = ({ textContent, header, footer }: TitleAndOnePlanProps): JSX.Element => {
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
    <div className="max-w-[544px] flex-col gap-6  ">
      {header ?? (

        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <Header maxWidth="max-w-[500px]" className="text-gray-100 lg:text-white">
              {textContent.title.line1} <span className="text-primary">{textContent.title.blueText}</span>
              {textContent.title.line2}
            </Header>
            <p className="text-xl font-bold text-gray-100 ">
              {textContent.description.normal1}
              <span className="text-primary">{textContent.description.blue}</span>
              {textContent.description.normal2}
            </p>
          </div>
          <div className="mx-auto flex flex-col lg:mx-0">
            {textContent.features.map((feat) => (
              <div key={feat} className="flex flex-row gap-2">
                <Check className="text-green-1" weight="bold" size={24} />
                <p className="text-lg font-semibold text-gray-100 ">{feat}</p>
              </div>
            ))}
          </div>
        </div>
      )}


      <div className="flex flex-row justify-center pb-4 lg:justify-start">
        <p className="flex flex-row items-end text-gray-100 lg:text-white">
          {textContent.startFrom.normal1}{' '}
          <span className="flex w-max flex-row items-start justify-start text-4xl font-bold text-gray-100">
            <abbr className="mt-0.5 text-base ">{currency}</abbr>
            {textContent.startFrom.price}
          </span>
          {textContent.startFrom.normal2}
        </p>
      </div>
      <div className="flex flex-row justify-center gap-4 pt-4 lg:justify-start ">
        <div className="flex flex-col items-center lg:flex-row">
          <Link
            href={'#priceTable'}
            className={`z-10 flex w-max justify-center rounded-lg bg-primary px-10 py-3 text-xl font-medium text-white hover:bg-primary-dark`}
          >
            {textContent.claimDeal}
          </Link>
        </div>
        <div className="hidden w-full max-w-[240px] flex-col items-center rounded-lg bg-primary/45 text-primary shadow-sm lg:flex lg:justify-center">
          <Countdown textFont="font-medium" textHeight="text-xl text-white" />
        </div>
      </div>

      {footer ?? (
        <div className="flex flex-row items-center justify-center space-x-3 pt-2 pt-4 text-gray-100 lg:justify-start">
          <ShieldCheck size={24} weight="fill" className="text-primary" />
          <p className="whitespace-nowrap text-gray-100 lg:text-lg">{textContent.guarantee}</p>
        </div>
      )}
    </div>
  );
};

export default TitleAndOnePlan;
