import React, { useEffect } from 'react';
import { checkout } from '@/lib/auth';
import { analyticsService } from '@/components/services/analytics.service';
import { stripeService } from '@/components/services/stripe.service';
import { PriceCardProps } from './PriceCard';
import { PromoCodeName } from '@/lib/types';

export default function SpecialPriceCard({
  planType,
  storage,
  price,
  billingFrequency,
  cta,
  popular,
  lang,
  currency,
}: PriceCardProps) {
  const [coupon, setCoupon] = React.useState<string>();
  const billingFrequencyList = {
    lifetime: 'lifetime',
    month: 'monthly',
    year: 'annually',
  };

  useEffect(() => {
    stripeService
      .getCoupon(PromoCodeName.AnnualDiscount)
      .then((coupon) => {
        setCoupon(coupon);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const onOfferClick = () => {
    if (cta[1] === 'Free plan') {
      window.open(`${process.env.NEXT_PUBLIC_DRIVE_WEB}/new`, '_self');
    } else {
      analyticsService.offerTrack({
        campaign: '80ANNUAL DISCOUNT',
        discount: 80,
        plan: cta[1],
        coupon: coupon,
      });
      checkout({
        planId: cta[1],
        planType: 'individual',
        promoCodeId: coupon,
        mode: billingFrequency === 'lifetime' ? 'payment' : 'subscription',
      });
    }
  };

  const contentText = require(`../../assets/lang/${lang}/priceCard.json`);

  return (
    <div
      className={`priceCard card ${
        popular ? 'bg-primary shadow-lg' : ''
      } m-2 flex w-max flex-shrink-0 flex-grow-0 flex-col overflow-hidden rounded-2xl xs:w-72`}
    >
      <div
        className={`mostPopular ${
          popular ? '' : 'hidden'
        } flex flex-col items-center justify-center py-2 text-sm font-medium text-white`}
      >
        {contentText.cta.discount}
      </div>

      <div className={`info flex flex-col items-center justify-center  bg-white p-4 pt-6`}>
        <div
          className={`storage flex max-w-min flex-row whitespace-nowrap py-1 px-4 pb-0.5 ${
            popular ? 'bg-blue-10 text-primary' : 'bg-neutral-20 text-neutral-80'
          } rounded-full font-medium`}
        >
          <p>
            {price <= 0 && <>{contentText.price.free}</>}
            {storage}
            <span className={`${planType.toLowerCase() === 'individual' ? 'hidden' : ''} text-sm`}>
              {contentText.perUserSlash}
            </span>
          </p>
        </div>

        <div
          className={`planPrice flex flex-col items-center justify-center space-y-2
            py-8`}
        >
          {price <= 0 ? (
            <>
              <p className={` flex flex-row items-start space-x-0.5 font-bold text-black`}>
                <p className={` flex flex-row items-start space-x-0.5 font-medium`}>
                  <span className="price text-4xl font-semibold">
                    {price <= 0 ? `${contentText.freePlan}` : price.toFixed(2)}
                  </span>
                </p>
              </p>
              <div
                className={`priceBreakdown flex text-gray-100 ${
                  planType.toLowerCase() === 'individual' ? 'flex-row space-x-px' : 'flex-col items-center'
                }`}
              >
                <span className={`currency`}>{currency}</span>
                <span className="price text-2xl font-semibold">{Math.abs((price * 20) / 100).toFixed(2)[0]}</span>
              </div>
            </>
          ) : (
            <>
              <p className={` flex flex-row items-start space-x-0.5 font-bold text-black`}>
                <span className={`currency ${price <= 0 ? 'hidden' : ''}`}>{currency}</span>
                <span className="price text-4xl font-semibold">{Math.abs((price * 20) / 100).toFixed(2)}</span>
              </p>
              <div
                className={`priceBreakdown flex text-gray-100 ${
                  planType.toLowerCase() === 'individual' ? 'flex-row items-end space-x-px' : 'flex-col items-center'
                }`}
              >
                <p className={` flex flex-row items-start space-x-0.5 font-medium `}>
                  <span className={`currency ${price <= 0 ? 'hidden' : ''}`}>{currency}</span>
                  <span className="price text-2xl font-semibold line-through">
                    {price <= 0 ? `${contentText.freePlan}` : price.toFixed(2)}
                  </span>
                </p>
              </div>
            </>
          )}

          <div
            className={`totalBilling ${
              planType.toLowerCase() === 'individual' ? 'flex' : 'hidden'
            } flex-row text-sm font-medium text-gray-50
            `}
          >
            <p className={`${price <= 0 ? 'hidden' : ''}`}>
              <span className="billingFrequency">
                {contentText.billingFrequencyLabel[billingFrequencyList[billingFrequency as string]]}
              </span>
            </p>
            <p className={`${price <= 0 ? '' : 'hidden'}`}>{contentText.price.freeForever}</p>
          </div>
        </div>

        <div
          tabIndex={0}
          id={`planButton${storage}`}
          onClick={() => {
            onOfferClick();
          }}
          className="flex w-full flex-row"
        >
          <div className="subscribePlan flex w-full origin-center cursor-pointer select-none items-center justify-center rounded-lg border border-transparent bg-primary px-6 py-2 text-lg  font-medium text-white transition-all duration-75 focus:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2 active:translate-y-0.5 active:bg-primary-dark sm:text-base">
            <p className={`${price <= 0 ? 'hidden' : ''} ${planType.toLowerCase() === 'individual' ? '' : 'hidden'}`}>
              {contentText.cta.get} {storage}
            </p>

            <p className={`${price <= 0 ? '' : 'hidden'} ${planType.toLowerCase() === 'individual' ? '' : 'hidden'}`}>
              {contentText.cta.signUpNow}
            </p>

            <p className={`${planType.toLowerCase() === 'individual' ? 'hidden' : ''}`}>{contentText.cta.getStarted}</p>
          </div>
        </div>
      </div>

      <div className="featureList flex flex-col border-t border-neutral-20 bg-neutral-10 p-6 text-neutral-500">
        <div className="flex flex-col space-y-2 text-sm">
          {billingFrequency === 'lifetime' && (
            <div className={`flex flex-row items-start space-x-2 font-semibold`}>
              <img
                loading="lazy"
                className="mt-0.5 translate-y-px select-none"
                src="/icons/checkPrimary.svg"
                draggable="false"
                alt="check icon"
              />
              <span className="flex">
                {`${contentText.features.enjoyForever.enjoy} ${storage} ${contentText.features.enjoyForever.forever}`}
              </span>
            </div>
          )}
          <div className="flex flex-row items-start space-x-2">
            <img
              loading="lazy"
              className="mt-0.5 translate-y-px select-none"
              src="/icons/checkPrimary.svg"
              draggable="false"
              alt="check icon"
            />
            <span>{contentText.features.encryptedFiles}</span>
          </div>
          <div className="flex flex-row items-start space-x-2">
            <img
              loading="lazy"
              className="mt-0.5 translate-y-px select-none"
              src="/icons/checkPrimary.svg"
              draggable="false"
              alt="check icon"
            />
            <span>{contentText.features.accessFromAnywhere}</span>
          </div>
          <div className="flex flex-row items-start space-x-2">
            <img
              loading="lazy"
              className="mt-0.5 translate-y-px select-none"
              src="/icons/checkPrimary.svg"
              draggable="false"
              alt="check icon"
            />
            <span>{contentText.features.allServices}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
