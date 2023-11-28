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

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  return (
    <section
      className="overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #112D91 0%, #060C40 100%)',
        height: `${height}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="relative mx-auto flex w-full justify-center py-20 lg:min-h-screen lg:max-w-screen-xl lg:py-0">
        <div className="flex w-full flex-row items-center justify-center py-10 px-5 lg:justify-between lg:py-20">
          <div className="flex w-full max-w-[488px] flex-col items-center space-y-6 text-center lg:items-start lg:text-start">
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
        </div>
      </div>
      <div className="absolute right-0 hidden h-full w-full translate-x-1/3 lg:flex 2xl:translate-x-1/2">
        <Image src="/images/lifetime/Internxt_Lifetime.webp" width={2684} height={1398} quality={100} />
      </div>
    </section>
  );
};

export default HeroSection;
