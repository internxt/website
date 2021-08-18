import React from 'react'
import styles from './HeroSection.module.scss';
import { isMobile } from "react-device-detect";

const HeroSection = ({ descriptions }) => {
  const description = descriptions["HeroSection"];

  return (
    <section>
      <div className="content">
        <div className={`flex flex-col md:flex-row items-center justify-between w-full my-12`}>
          <div className="flex md:hidden mx-20 mb-6">
            <img src="/images/drive/devicesMobileView.png"/>
          </div>
          <div className={`${styles.heroSection} px-6 m-6 md:m-10 lg:m-32 flex flex-col w-screen sm:w-auto text-center md:text-left`}>
            <h1 className={`title mb-8 text-5xl lg:text-6xl`}>
              {description.title}
            </h1>
            <p className={`mb-8 text-lg lg:text-xl`}>
              {description.subtitle}
            </p>
            <div>
              <button
                type="button"
                className="flex justify-center w-full sm:w-auto sm:inline-flex items-center px-6 py-2 border border-transparent rounded-lg text-base font-semibold text-white bg-blue-60 active:bg-blue-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-20 transition-all duration-75"
              >
                {description.cta1} <span className="font-normal text-blue-30"><span className="px-1.5">—</span>{description.cta1detail}</span>
              </button>
              <button
                type="button"
                className="sm:ml-3 mt-2 sm:mt-0 flex justify-center w-full sm:w-auto sm:inline-flex items-center px-6 py-2 border border-transparent rounded-lg text-base font-semibold text-blue-60 bg-blue-10 active:bg-blue-20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-20 transition-all duration-75"
              >
                {description.cta2[isMobile ? "mobile" : "desktop"]}
              </button>
            </div>
          </div>
          <div className="hidden md:flex flex-grow-0 max-w-2xl">
            <img src="/images/drive/devicesAscCut.png"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;