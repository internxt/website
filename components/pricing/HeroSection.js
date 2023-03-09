import Image from 'next/image';
import { Coin, CreditCard, Detective } from 'phosphor-react';
import React from 'react';
import Countdown from '../components/Countdown';

const HeroSection = ({ textContent }) => {
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

  return (
    <section className="overflow-hidden pt-24">
      <div className="flex flex-row items-center justify-center space-x-48 py-24">
        <div className="flex max-w-[470px] flex-col items-start justify-center space-y-10">
          <Countdown dt={'2023-03-09T20:00:00'} />
          <div className="flex flex-col space-y-16">
            <div className="flex flex-col">
              <p className="text-7xl font-bold">{textContent.title.line1}</p>
              <p className="text-7xl font-bold text-primary">{textContent.title.line2}</p>
            </div>
            <div className="flex flex-col">
              {feeds.map((feed) => (
                <div className="flex flex-row items-center space-x-4">
                  <feed.icon size={32} className="text-primary" />
                  <p className="text-xl font-medium text-gray-80">{feed.title}</p>
                </div>
              ))}
            </div>
          </div>
          <button className="flex rounded-lg bg-primary px-5 py-3 font-semibold text-white">{textContent.cta}</button>
        </div>
        <div className="flex flex-col">
          <Image
            alt="Woman with laptop"
            src="/images/pricing/WomanWithLaptop.png"
            className=" rounded-3xl"
            width={496}
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
