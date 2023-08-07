import React, { useEffect } from 'react';
import Image from 'next/image';
import { Alarm, Coin, CreditCard, Detective } from '@phosphor-icons/react';
import Countdown from '../components/Countdown';
import { checkout } from '../../lib/auth';
import Infinity from '/public/images/lifetime/infinity.svg';
import { Interval, stripeService } from '../services/stripeService';
import { CouponType } from '../../pages/api/stripe/get_coupons';

const TWOTB_OFF_COUPON = 'P8PSpVs6';

const HeroSection = ({ textContent }) => {
  const [priceId, setPriceId] = React.useState('');
  const [coupon, setCoupon] = React.useState(null);
  const feeds = [
    {
      icon: Coin,
      title: textContent.feeds.firstFeed,
    },
    {
      icon: CreditCard,
      title: textContent.feeds.secondFeed,
    },
    {
      icon: Detective,
      title: textContent.feeds.thirdFeed,
    },
  ];

  useEffect(() => {
    stripeService.getSelectedPrice(Interval.Year, '2TB').then((price) => {
      setPriceId(price.priceId);
    });

    stripeService.getCoupon(CouponType.TwoTBCoupon75).then((coupon) => {
      setCoupon(coupon);
    });
  }, []);

  return (
    <section className="overflow-hidden pt-12">
      <div className="xl:pl-58 flex w-full flex-col items-center justify-center space-y-10 py-24 px-6 lg:flex-row lg:space-x-10 lg:space-y-0 xl:space-x-56 xl:pl-32">
        <div className="flex flex-col items-center justify-center space-y-10 lg:items-start lg:justify-start">
          <div className="flex max-w-[470px] flex-col items-center justify-center space-y-10 lg:items-start">
            <div className="flex flex-row rounded-lg bg-gray-5 px-5 py-2">
              <Alarm size={32} className="mr-4 text-primary" />
              <Countdown textColor={'black'} dt={'2023-08-25T00:00:00'} />
            </div>
            <div className="flex flex-col space-y-16">
              <div className="flex flex-col text-center lg:text-start">
                <p className="text-7xl font-bold">
                  {textContent.lifetimeTitle.line1}
                  <span className="text-primary">{textContent.lifetimeTitle.blueText}</span>
                  {textContent.lifetimeTitle.line2}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center lg:items-start">
                <div className="flex flex-col items-start space-y-4">
                  {feeds.map((feed) => (
                    <div className="flex flex-row items-center space-x-4" key={feed.title}>
                      <feed.icon size={32} className="text-primary" />
                      <p className="text-xl font-medium text-gray-80">{feed.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-5 space-x-8 lg:flex-row lg:space-y-0">
            <button
              className="flex w-max items-center justify-center rounded-lg bg-primary px-5 py-3 font-semibold text-white hover:bg-primary-dark"
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById('priceTable').offsetTop,
                  behavior: 'smooth',
                })
              }
            >
              {textContent.cta.title}
            </button>
          </div>
        </div>
        <div className="hidden flex-col rounded-3xl lg:flex">
          {/* <div className="absolute h-[520px] w-[487px] rounded-3xl shadow-2xl" /> */}
          <Image
            alt="Internxt lifetime plan"
            src="/images/pricing/internxt-lifetime-plan.png"
            className="z-10 shadow-2xl"
            width={613}
            height={520}
            layout="intrinsic"
            loading="eager"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
