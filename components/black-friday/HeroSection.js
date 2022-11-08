import { Alarm, Check, CircleWavyCheck, Clock } from 'phosphor-react';
import React, { useState, useEffect } from 'react';
import styles from './BF-HeroSection.module.scss';
import ButtonDeal from './components/ButtonDeal';
import Countdown from './components/Countdown';

const HeroSection = ({ textContent, lang, country, isAffiliate }) => {
  const HeroSectionDescription = isAffiliate
    ? textContent.HeroSection.description.replace('6', '7')
    : textContent.HeroSection.description;

  const currency = () => {
    switch (country) {
      case 'US':
        return '$';
      case 'GB':
        return '£';
      default:
        return '€';
    }
  };

  const features = [
    {
      id: 1,
      text: 'Encrypted file storage and sharing',
    },
    {
      id: 2,
      text: 'Access your files from any device',
    },
    {
      id: 3,
      text: 'Get access to al our services',
    },
    {
      id: 4,
      text: 'No unauthorized data access',
    },
  ];

  return (
    <section className="relative -mt-16 flex w-full flex-col overflow-hidden">
      <div className="relative flex overflow-hidden">
        <div className="mx-4 flex w-full max-w-screen-xl flex-col items-center justify-around border-primary/5 py-16 sm:mb-6 md:flex-row lg:mx-10 xl:mx-24">
          <div className="my-6 flex w-screen flex-shrink-0 flex-col items-center px-5 text-center sm:w-auto sm:px-0 md:my-8 md:ml-2 md:max-w-md md:items-start md:text-left lg:ml-0 lg:max-w-lg">
            <div className="flex flex-row items-center pb-6">
              <Alarm size={32} className="mr-4 text-primary" />
              <Countdown />
            </div>
            <h1 className="text-center text-7xl font-semibold text-white md:text-left">
              {textContent.HeroSection.title.line1}
              <br />
              {textContent.HeroSection.title.line2}
            </h1>
            <p className="mt-6 text-center text-3xl text-white md:text-left">{HeroSectionDescription}</p>
            <p className="pt-3 text-3xl font-bold text-primary">Only 3.59 {currency()}/mo</p>
            <div className="pt-10">
              <ButtonDeal lang={lang} />
            </div>
          </div>
          <div className="relative z-10 flex h-[590px] items-center justify-center px-5 pl-11 lg:px-0">
            <div className="flex">
              <img src="/images/special-offer/black-friday/file_icons.png" />
            </div>
            <div className="absolute right-0 top-0 left-0 bottom-0 m-auto flex max-h-[263px] max-w-[612px]">
              <img src="/images/special-offer/black-friday/discount.png" />
            </div>
          </div>
        </div>
        <div
          className={`absolute top-0 left-0 -z-10 flex h-full w-screen ${styles.neonBlur} pointer-events-none origin-center`}
        />
      </div>
      <div className="sm:gap-x-30 flex flex-row flex-wrap justify-center gap-y-10 gap-x-20 py-14">
        {features.map((feature) => (
          <div
            className="flex max-w-[185px] flex-col items-center justify-center space-y-4 text-center"
            key={feature.index}
          >
            <CircleWavyCheck size={40} weight="fill" className="mr-4 text-primary" />
            <p className="text-xl font-semibold ">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
