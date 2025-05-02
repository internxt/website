import Countdown from '@/components/components/Countdown';
import { currencyService } from '@/services/currency.service';
import Header from '@/components/shared/Header';
import { Check, ShieldCheck } from '@phosphor-icons/react';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface TitleAndOnePlanProps {
  textContent: Record<string, any>;
  header?: JSX.Element;
  footer?: JSX.Element;
  lang: GetServerSidePropsContext['locale'];
}

const TitleAndOnePlan = ({ textContent, header, footer, lang }: TitleAndOnePlanProps): JSX.Element => {
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
    <div className="max-w-[544px] flex-col pt-8 lg:flex lg:pb-10 lg:pt-24">
      {header ?? (
        <div className="flex flex-col gap-6 ">
          <div className="flex flex-col">
            <Header maxWidth="max-w-[500px]" className="text-4xl text-gray-100">
              {textContent.title.textBeforeBlueText}
              <span className="text-primary">{textContent.title.blueText}</span>
              {textContent.title.textAfterBlueText}
            </Header>
            <p className="pt-4 text-xl font-bold ">
              <span className="text-primary">{textContent.subtitle}</span>
            </p>
            <p className="pt-4 text-xl font-bold ">
              <span className="text-gray-100">{textContent.description}</span>
            </p>
          </div>
          <div className="mx-auto flex flex-col lg:mx-0">
            {textContent.features.map((feat) => (
              <div key={feat} className="flex flex-row gap-2">
                <Check className="pt-2 text-green-1 lg:pt-0" weight="bold" size={24} />
                <p className="text-left text-lg font-semibold text-gray-100 ">{feat}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-row justify-center pb-4  pt-6 lg:justify-start">
        <p className="flex flex-row items-end text-gray-100">
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
            className={`z-10 flex w-max justify-center rounded-lg bg-primary px-6 py-3 text-xl font-medium text-white hover:bg-primary-dark`}
          >
            {textContent.claimDeal}
          </Link>
        </div>
        <div className="hidden w-full max-w-[184px] flex-col items-center rounded-lg bg-primary/7 text-primary shadow-sm lg:flex lg:justify-center">
          <Countdown textFont="font-medium" textHeight="text-xl text-gray-100 " />
        </div>
      </div>

      {footer ?? (
        <div className="flex flex-row items-center justify-center space-x-3 pt-10 lg:justify-start">
          <ShieldCheck size={24} weight="fill" className="text-green-1" />
          <p className="whitespace-nowrap text-gray-100 lg:text-lg">{textContent.guarantee}</p>
        </div>
      )}
    </div>
  );
};

export default TitleAndOnePlan;
