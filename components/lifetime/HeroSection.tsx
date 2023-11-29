import React, { useEffect, useRef, useState } from 'react';
import { Alarm, CheckCircle } from '@phosphor-icons/react';
import Countdown from '../components/Countdown';
import Header from '../shared/Header';
import Image from 'next/image';

interface HeroSectionProps {
  textContent: any;
  hideTimer?: boolean;
}

const HeroSection = ({ textContent, hideTimer }: HeroSectionProps) => {
  const [height, setHeight] = useState(0);

  return (
    <section
      className="overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #112D91 0%, #060C40 100%)',
        display: 'flex',
      }}
    >
      <div className="relative mx-4 pt-24 lg:mx-10 lg:pt-16 xl:mx-32">
        <div className="relative mx-auto flex h-full w-full max-w-screen-xl flex-col items-center justify-start lg:flex-row lg:items-stretch">
          <div className="my-6 flex flex-shrink-0 flex-col items-center px-5 text-center sm:px-0 md:my-20 md:ml-2 md:max-w-md lg:my-28 lg:ml-0 lg:max-w-xl lg:items-start lg:text-left">
            <div className="flex flex-row items-center space-x-3">
              <Alarm size={32} className="text-primary" />
              <Countdown textColor="white" dt="2023-11-30T23:59:59" />
            </div>
            <Header className="text-white lg:text-7xl">{textContent.title}</Header>
            <div className="flex flex-col space-y-10">
              <p className="max-w-[449px] text-xl font-semibold text-white">{textContent.description}</p>
              <div className="flex flex-col items-center space-y-5 lg:flex-row lg:space-x-6 lg:space-y-0">
                <button
                  onClick={() => {
                    window.scrollTo({
                      top: document.getElementById('payment').offsetTop,
                      behavior: 'smooth',
                    });
                  }}
                  className="flex items-center whitespace-nowrap rounded-lg bg-primary px-5 py-3 text-xl font-medium text-white"
                >
                  {textContent.cta1}
                </button>
                <div className="flex flex-row items-center space-x-3">
                  <CheckCircle size={24} className="text-primary" />
                  <p className="whitespace-nowrap text-lg font-medium text-gray-5">{textContent.guarantee}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden max-w-sm flex-1 items-center justify-start md:flex">
            <div className="absolute -left-16 flex h-full w-[5000px]">
              <img
                className="relative h-full object-contain object-left"
                src="/images/lifetime/Internxt_Lifetime.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
