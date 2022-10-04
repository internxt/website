import { Check } from 'phosphor-react';
import React, { useState, useEffect } from 'react';
import styles from './BF-HeroSection.module.scss';
import ButtonDeal from './components/ButtonDeal';

const HeroSection = ({ textContent, lang, country }) => {
  const [countdownDisableDays, setCountdownDisableDays] = useState(false);
  const [countdownDisableHours, setCountdownDisableHours] = useState(false);
  const [countdownDisableMinutes, setCountdownDisableMinutes] = useState(false);
  const [countdownDisableSeconds, setCountdownDisableSeconds] = useState(false);
  const billingFrequency = 12;

  function checkoutPlan(plan) {
    return `${plan}${billingFrequency}`;
  }

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

  function CountDownTimer(dt, id) {
    const end = new Date(dt);

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    let timer;

    function showRemaining() {
      const now = new Date();
      const distance = end - now;
      if (distance < 0) {
        clearInterval(timer);
        setCountdownDisableDays(false);
        setCountdownDisableHours(false);
        setCountdownDisableMinutes(false);
        setCountdownDisableSeconds(false);
        return;
      }
      const days = Math.floor(distance / day);
      const hours = Math.floor((distance % day) / hour);
      const minutes = Math.floor((distance % hour) / minute);
      const seconds = Math.floor((distance % minute) / second);

      if (days === 0) setCountdownDisableDays(true);
      if (hours === 0 && days === 0) setCountdownDisableHours(true);
      if (minutes === 0 && hours === 0 && days === 0) setCountdownDisableMinutes(true);
      if (seconds === 0 && minutes === 0 && hours === 0 && days === 0) setCountdownDisableSeconds(true);

      document.querySelector(`#${id} .days`).innerHTML = days;
      document.querySelector(`#${id} .hours`).innerHTML = hours < 10 && days > 0 ? `0${hours}` : hours;
      document.querySelector(`#${id} .minutes`).innerHTML =
        minutes < 10 && hours > 0 && days > 0 ? `0${minutes}` : minutes;
      document.querySelector(`#${id} .seconds`).innerHTML =
        seconds < 10 && minutes > 0 && hours > 0 && days > 0 ? `0${seconds}` : seconds;
    }

    timer = setInterval(showRemaining, 1000);
  }

  useEffect(() => {
    CountDownTimer('2022-11-27T00:00:00', 'countdown');
  });

  return (
    <section className="overflow-hidden">
      <div className="mx-4 border-b pt-24 lg:mx-10 xl:mx-32">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-between border-blue-10 sm:mb-6 md:flex-row">
          <div className="my-6 flex w-screen flex-shrink-0 flex-col items-center px-5 text-center sm:w-auto sm:px-0 md:my-8 md:ml-2 md:max-w-md md:items-start md:text-left lg:my-20 lg:ml-0 lg:max-w-lg">
            <h1 className="text-center text-6xl font-semibold text-white md:text-left">
              {textContent.HeroSection.title.line1}
              <br />
              {textContent.HeroSection.title.line2}
            </h1>
            <p className="mt-8 text-center text-xl text-white  md:text-left">
              {textContent.HeroSection.description1}
              <br />
              {textContent.HeroSection.description2}
            </p>
            <div className="pt-12">
              <ButtonDeal lang={lang} cta={['checkout', checkoutPlan('TB2')]} />
            </div>
          </div>
          <div className="center my-14 flex h-96 w-80 flex-col items-center rounded-2xl bg-white py-10">
            <div className="h-8 w-16 rounded-2xl	bg-blue-10 pl-5">
              <p className="items-center">{textContent.HeroSection.pricingTable.plan}</p>
            </div>
            <div className="pt-4">
              <p className="text-6xl font-semibold text-primary">{textContent.HeroSection.pricingTable.discount}</p>
            </div>
            <div className="pt-5">
              <p className="text-3xl font-medium">
                {textContent.HeroSection.pricingTable.priceNow} {currency()}
                {textContent.HeroSection.pricingTable.month}
              </p>
              <p className="text-1xl pl-8 pt-4 font-normal text-gray-40 line-through">
                {textContent.HeroSection.pricingTable.priceBefore} {currency()}
                {textContent.HeroSection.pricingTable.month}
              </p>
            </div>
            <div className="flex w-full flex-row px-8 py-5">
              <div className="w-full border-b border-gray-20" />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row items-center space-x-2">
                <div className="h-4 w-4">
                  <Check size={18} weight={'bold'} />
                </div>
                <p>{textContent.HeroSection.pricingTable.footer.line1}</p>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <div className="h-4 w-4">
                  <Check size={18} weight={'bold'} />
                </div>
                <p>{textContent.HeroSection.pricingTable.footer.line2}</p>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <div className="h-4 w-4">
                  <Check size={18} weight={'bold'} />
                </div>
                <p>{textContent.HeroSection.pricingTable.footer.line3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="countdown"
        className="flex w-full flex-col items-center justify-center space-y-12 bg-white py-20 text-white md:space-y-20"
      >
        <h2 className="text-center text-4xl font-semibold text-black">{textContent.HeroSection.timer.timeTitle}</h2>

        <div className="flex flex-row space-x-0 md:space-x-16">
          <div className="flex w-20 flex-col items-center justify-center">
            <p
              className={`days text-4xl font-light md:text-6xl ${
                countdownDisableDays ? 'text-white' : 'text-primary'
              } delay-350 transition-colors duration-150`}
            >
              0
            </p>
            <p className="text-sm font-light text-black">{textContent.HeroSection.timer.days}</p>
          </div>
          <div className="flex w-20 flex-col items-center justify-center">
            <p
              className={`hours text-4xl font-light md:text-6xl ${
                countdownDisableHours ? 'text-white' : 'text-primary'
              } delay-350 transition-colors duration-150`}
            >
              0
            </p>
            <p className="text-sm font-light text-black">{textContent.HeroSection.timer.hours}</p>
          </div>
          <div className="flex w-20 flex-col items-center justify-center">
            <p
              className={`minutes text-4xl font-light md:text-6xl ${
                countdownDisableMinutes ? 'text-white' : 'text-primary'
              } delay-350 transition-colors duration-150`}
            >
              0
            </p>
            <p className="text-sm font-light text-black">{textContent.HeroSection.timer.minutes}</p>
          </div>
          <div className="flex w-20 flex-col items-center justify-center">
            <p
              className={`seconds text-4xl font-light md:text-6xl ${
                countdownDisableSeconds ? 'text-white' : 'text-primary'
              } delay-350 transition-colors duration-150`}
            >
              0
            </p>
            <p className="text-sm font-light text-black">{textContent.HeroSection.timer.seconds}</p>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-0 left-0 -z-10 flex h-full w-full ${styles.neonBlur} pointer-events-none origin-center`}
      />
    </section>
  );
};

export default HeroSection;
