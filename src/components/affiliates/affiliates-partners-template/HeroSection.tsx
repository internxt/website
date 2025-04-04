import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Alarm } from '@phosphor-icons/react';

import Countdown from '@/components/components/Countdown';
import Header from '@/components/shared/Header';
import usePricing from '@/hooks/usePricing';
import { getImage } from '@/lib/getImage';
import { CardsType } from '@/pages/affiliates/[filename]';
import { PriceCardsForAffiliatesPartners } from './PriceCardsForAffiliatesParnters';
import CardSkeleton from '@/components/components/CardSkeleton';
import { PromoCodeName } from '@/lib/types';
import { Interval, TransformedProduct } from '@/services/stripe.service';

interface HeroSectionForPartnerProps {
  textContent: any;
  cardsType: CardsType | undefined;
  pathname: string;
  couponName: PromoCodeName;
}

export const HeroSectionForPartner = ({ textContent, cardsType, pathname, couponName }: HeroSectionForPartnerProps) => {
  const [activeSwitchPlan, setActiveSwitchPlan] = useState<string>('5TB');
  const [activeProduct, setActiveProduct] = useState<TransformedProduct>();
  const isOnlyOnePlan = cardsType === 'one';

  const { products, coupon, loadingCards, currency, currencyValue } = usePricing({
    couponCode: couponName,
  });

  const lifetimePlans = products?.individuals[Interval.Lifetime];

  useEffect(() => {
    if (!loadingCards && lifetimePlans && lifetimePlans.length > 0) {
      const initialProduct = lifetimePlans.find((plan) => plan.storage === '5TB');
      if (initialProduct) {
        setActiveProduct(initialProduct);
        setActiveSwitchPlan('5TB');
      }
    }
  }, [loadingCards, lifetimePlans]);

  return (
    <section
      className="overflow-hidden bg-cover bg-no-repeat pt-12 lg:pb-10"
      style={{
        backgroundImage: `url('${getImage('/images/lifetime/celebration/normal-bg.png')}')`,
      }}
    >
      <div className="w-full px-4 lg:px-10 xl:px-32">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center space-y-10 px-5 py-20 lg:flex-row lg:items-start lg:justify-between lg:space-y-0 lg:px-0">
          <div className="flex max-w-[545px] flex-col items-center justify-center gap-12 text-white lg:items-start lg:justify-start">
            {cardsType === 'all' ? (
              <div className="flex flex-row items-center gap-6">
                <Image src={getImage(`/images/affiliates/logos/${pathname}.svg`)} alt="PCMag" width={74} height={89} />
                <p className="max-w-[250px] text-lg font-medium lg:text-2xl">{textContent.exclusiveLabel[pathname]}</p>
              </div>
            ) : undefined}
            <div className="hidden flex-row items-center gap-4 rounded-lg lg:flex">
              <Alarm size={32} className=" text-white" />
              <Countdown textColor={'white'} />
            </div>
            {cardsType && (
              <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
                <Header>{textContent[cardsType].title}</Header>
                {textContent[cardsType].description.map((text) => (
                  <p key={text} className="hidden text-2xl font-semibold text-white md:flex">
                    {text}
                  </p>
                ))}
              </div>
            )}
          </div>
          <div className={`hidden h-full flex-col gap-3 lg:flex ${cardsType === 'all' && 'lg:min-h-[650px]'}`}>
            {isOnlyOnePlan || (!lifetimePlans && loadingCards) ? undefined : (
              <div className="flex w-full flex-col gap-7">
                <div className="flex w-full items-center justify-center text-2xl font-medium text-white">
                  <p>{textContent.all.choosePlanLabel}</p>
                </div>
                <div id="billingButtons" className="flex flex-row rounded-lg bg-cool-gray-10 p-0.5">
                  {lifetimePlans
                    ? lifetimePlans.map((product) => (
                        <button
                          key={product.storage}
                          type="button"
                          onClick={() => {
                            setActiveSwitchPlan(product.storage);
                            setActiveProduct(product);
                          }}
                          className={`w-full rounded-lg px-6 py-0.5 font-semibold ${
                            activeSwitchPlan === product.storage ? 'bg-green text-white shadow-sm' : 'text-gray-100'
                          }`}
                        >
                          {product.storage}
                        </button>
                      ))
                    : undefined}
                </div>
              </div>
            )}
            <div className="flex flex-col">
              {activeProduct ? (
                <PriceCardsForAffiliatesPartners
                  coupon={coupon}
                  currency={currency}
                  currencyValue={currencyValue}
                  planId={activeProduct?.priceId}
                  popular={activeProduct?.storage === '5TB'}
                  price={Number(activeProduct?.price) * 0.18}
                  priceBefore={activeProduct?.price.toString().split('.')[0]}
                  storage={activeProduct.storage}
                />
              ) : (
                <CardSkeleton maxWidth="max-w-[480px]" cardWidthForDesk="xs:max-w-[480px] xs:w-screen" />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col bg-white p-3 lg:hidden">
        <div className="flex flex-col items-center justify-center gap-3">
          {isOnlyOnePlan || (!lifetimePlans && loadingCards) ? undefined : (
            <div className="flex w-full flex-col gap-7">
              <div className="hidden w-full items-center justify-center text-2xl font-medium text-white lg:flex">
                <p>{textContent.all.choosePlanLabel}</p>
              </div>
              <div id="billingButtons" className="flex flex-row rounded-lg bg-cool-gray-10 p-0.5">
                {lifetimePlans
                  ? lifetimePlans.map((product) => (
                      <button
                        key={product.storage}
                        type="button"
                        onClick={() => {
                          setActiveSwitchPlan(product.storage);
                          setActiveProduct(product);
                        }}
                        className={`w-full rounded-lg px-6 py-0.5 font-semibold ${
                          activeSwitchPlan === product.storage ? 'bg-green text-white shadow-sm' : 'text-gray-100'
                        }`}
                      >
                        {product.storage}
                      </button>
                    ))
                  : undefined}
              </div>
            </div>
          )}
          {activeProduct ? (
            <PriceCardsForAffiliatesPartners
              coupon={coupon}
              currency={currency}
              currencyValue={currencyValue}
              planId={activeProduct?.priceId}
              popular={activeProduct?.storage === '5TB'}
              price={Number(activeProduct?.price) * 0.15}
              priceBefore={activeProduct?.price.toString().split('.')[0]}
              storage={activeProduct.storage}
            />
          ) : (
            <CardSkeleton />
          )}
        </div>
      </div>
    </section>
  );
};
