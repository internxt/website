import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Alarm, Coin, CreditCard, Detective } from 'phosphor-react';
import Countdown from '../components/Countdown';
import moment from 'moment';

const HeroSection = ({ textContent }) => {
  const [countdownDate, setCountdownDate] = useState();
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

  //Set the countdown date. If the is ended, the date will be 1 day and 20 min after the current date
  useEffect(() => {
    if (
      !localStorage.getItem('countdownDate') ||
      localStorage.getItem('countdownDate') === localStorage.getItem('actualDate')
    ) {
      localStorage.setItem('actualDate', moment().toISOString());
      localStorage.setItem('countdownDate', moment().add(1, 'days').add(20, 'minutes').toISOString());
      setCountdownDate(moment().add(1, 'days').add(20, 'minutes').toISOString());
      return;
    } else if (localStorage.getItem('countdownDate')) {
      setCountdownDate(localStorage.getItem('countdownDate'));
      return;
    }
  }, []);

  //Manage the countdown date. If the is ended, the date will be 1 day and 20 min after the current date

  return (
    <section className="overflow-hidden pt-24">
      <div className="flex flex-row items-center justify-center space-x-48 py-24">
        <div className="flex max-w-[470px] flex-col items-start justify-center space-y-10">
          <div className="flex flex-row rounded-lg bg-gray-5 px-5 py-2">
            <Alarm size={32} className="mr-4 text-primary" />
            <Countdown dt={countdownDate} textColor={'black'} />
          </div>
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
