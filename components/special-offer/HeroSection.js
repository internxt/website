/* eslint-disable max-len */
/* eslint-disable prefer-const */
import React, { useState, useEffect } from 'react';
import { UilCheck } from '@iconscout/react-unicons';
import { redirectToCheckoutAction } from '../CheckoutForm';

const HeroSection = ({
  textContent,
  lang
}) => {
  const plans = [
    {
      id: 0,
      price: '4.49',
      priceBefore: '8.99',
      bill: '53.88',
      stripeID: 'TB2_50_OFF_Annual'
    },
    {
      id: 1,
      price: '4.99',
      priceBefore: '9.99',
      bill: '4.99',
      stripeID: 'TB2_50_OFF_Monthly'
    }
  ];

  const [selected, setSelected] = useState(0);
  const [countdownDisableDays, setCountdownDisableDays] = useState(false);
  const [countdownDisableHours, setCountdownDisableHours] = useState(false);
  const [countdownDisableMinutes, setCountdownDisableMinutes] = useState(false);
  const [countdownDisableSeconds, setCountdownDisableSeconds] = useState(false);

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
      document.querySelector(`#${id} .hours`).innerHTML = (hours < 10 && days > 0) ? `0${hours}` : hours;
      document.querySelector(`#${id} .minutes`).innerHTML = (minutes < 10 && hours > 0 && days > 0) ? `0${minutes}` : minutes;
      document.querySelector(`#${id} .seconds`).innerHTML = (seconds < 10 && minutes > 0 && hours > 0 && days > 0) ? `0${seconds}` : seconds;
    }

    timer = setInterval(showRemaining, 1000);
  }

  useEffect(() => {
    CountDownTimer('2021-11-27T00:00:00', 'countdown');
  });

  return (

    <section id="buy" className="relative flex flex-col w-full pt-10 bg-cool-gray-100 overflow-hidden">

      <div className="flex flex-col lg:flex-row items-center justify-center px-8 lg:px-0 py-24 pb-20 lg:py-32 space-y-20 lg:space-y-0 lg:space-x-20 xl:space-x-40">

        {/* Main title */}
        <div className="flex flex-col text-left">

          <h1 className="text-5xl sm:text-6xl font-semibold text-white mb-6 sm:mb-10">
            <p>{textContent.title.line1}</p>
            <p>{textContent.title.line2}</p>
            <p>{textContent.title.line3}</p>
            <p>{textContent.title.line4}</p>
          </h1>

          <div className="flex flex-col space-y-2 sm:space-y-4">

            <h3 className="text-sm font-normal w-full text-cool-gray-60">
              {textContent.legal.endtime}
            </h3>

            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full text-white">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => { setSelected(plan.id); }}
                  className={`flex flex-col flex-grow flex-1 p-4 space-y-4 select-none rounded-lg border-2 ${selected === plan.id ? 'bg-blue-60 bg-opacity-10 border-blue-60' : 'border-cool-gray-60 bg-white bg-opacity-1'}`}
                >

                  <div className="flex flex-row w-full justify-between items-center">
                    <span className="text-base sm:text-sm">{textContent.plans.name[plan.id]}</span>
                    <div className={`flex flex-col justify-center items-center ${selected === plan.id ? 'opacity-100' : 'opacity-0'} rounded-full bg-blue-60 text-white -m-0.5 lg:m-0 p-0.5`}>
                      <UilCheck className="w-5 lg:w-4 h-5 lg:h-4" />
                    </div>
                  </div>

                  <div className="flex flex-row space-x-0.5">

                    <div className="flex flex-row space-x-1 items-start">
                      <span className="text-base font-semibold">€</span>
                      <span className="text-4xl font-bold">{plan.price}</span>
                    </div>

                    <div className="flex flex-col space-x-1 items-start">
                      <div className="relative flex flex-row ml-2 items-start opacity-40 text-white">
                        <span className="text-supporting-1 font-semibold mt-1 mr-0.5">€</span>
                        <span className="text-base font-medium">{plan.priceBefore}</span>
                        <div className="absolute top-1/2 left-0 w-full h-0.5 transform -translate-y-1/2 bg-white" />
                      </div>
                      <span className="text-supporting-2 font-bold">{textContent.plans.monthly}</span>
                    </div>

                  </div>

                  <div className="flex flex-row items-center">
                    <span className="text-xs sm:text-supporting-2 font-normal opacity-40">
                      {textContent.plans.billing[plan.id].before}
                      {' '}
                      {plan.bill}
                      {'€ '}
                      {textContent.plans.billing[plan.id].after}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              tabIndex={0}
              onClick={() => { redirectToCheckoutAction({ product: plans[selected].stripeID }); }}
              className="flex justify-center w-full sm:w-auto items-center p-3 border border-transparent rounded-lg text-base font-semibold tracking-wider text-white bg-blue-60 active:bg-blue-70 outline-none transition-colors duration-75 cursor-pointer select-none"
            >
              {textContent.cta}
            </button>

            <div className="flex flex-col text-supporting-2 font-normal text-center w-full text-cool-gray-60">
              {textContent.legal.warn.line1}
              <br className="hidden sm:inline-flex" />
              {' '}
              {textContent.legal.warn.line2}
            </div>

          </div>

        </div>

        {/* Features grid */}
        <div>
          <div
            className="hidden md:flex lg:hidden xl:flex"
            style={{
              backgroundImage: `url(/images/special-offer/black-friday/${lang}/grid4x3.svg)`,
              width: 560,
              height: 416
            }}
          />

          <div
            className="hidden xs:flex md:hidden lg:flex xl:hidden"
            style={{
              backgroundImage: `url(/images/special-offer/black-friday/${lang}/grid3x4.svg)`,
              width: 417,
              height: 560
            }}
          />

          <div
            className="flex flex-col flex-grow xs:hidden w-screen px-6"
          >
            <img loading="lazy" className="w-full" src={`/images/special-offer/black-friday/${lang}/grid2x6.svg`} draggable="false" alt="internxt product features" />
          </div>
        </div>

      </div>

      <div id="countdown" className="flex flex-col items-center justify-center w-full bg-cool-gray-90 text-white py-20 space-y-12 md:space-y-20">

        <h3 className="text-4xl font-semibold text-center">{textContent.timeEnding}</h3>

        <div className="flex flex-row space-x-0 md:space-x-16">
          <div className="flex w-20 flex-col items-center justify-center">
            <p className={`days text-4xl md:text-6xl font-bold ${countdownDisableDays ? 'text-cool-gray-80' : 'text-white'} transition-colors duration-150 delay-350`}>0</p>
            <p className="text-sm font-medium text-cool-gray-60">{textContent.days}</p>
          </div>
          <div className="flex w-20 flex-col items-center justify-center">
            <p className={`hours text-4xl md:text-6xl font-bold ${countdownDisableHours ? 'text-cool-gray-80' : 'text-white'} transition-colors duration-150 delay-350`}>0</p>
            <p className="text-sm font-medium text-cool-gray-60">{textContent.hours}</p>
          </div>
          <div className="flex w-20 flex-col items-center justify-center">
            <p className={`minutes text-4xl md:text-6xl font-bold ${countdownDisableMinutes ? 'text-cool-gray-80' : 'text-white'} transition-colors duration-150 delay-350`}>0</p>
            <p className="text-sm font-medium text-cool-gray-60">{textContent.minutes}</p>
          </div>
          <div className="flex w-20 flex-col items-center justify-center">
            <p className={`seconds text-4xl md:text-6xl font-bold ${countdownDisableSeconds ? 'text-cool-gray-80' : 'text-white'} transition-colors duration-150 delay-350`}>0</p>
            <p className="text-sm font-medium text-cool-gray-60">{textContent.seconds}</p>
          </div>
        </div>

      </div>

    </section>

  );
};

export default HeroSection;
