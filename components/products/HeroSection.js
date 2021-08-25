import React from 'react'
import styles from './HeroSection.module.scss';
import { isMobile } from "react-device-detect";

const HeroSection = ({textContent, download, lang, platform}) => {
  return (
    <section>
      <div className="content pt-8">

        <div className={`flex flex-col md:flex-row items-center justify-between w-full sm:mb-6`}>
          <div className={`flex-shrink-0 px-6 md:px-0 m-6 md:m-10 lg:m-32 lg:mr-16 flex flex-col w-screen sm:w-auto text-center md:text-left`}>
            <h1 className={`title mb-4 md:mb-8 text-4xl md:text-5xl lg:text-6xl`}>
              {textContent.title}
            </h1>
            <p className={`mb-8 md:mb-8 text-lg lg:text-xl text-neutral-500`}>
              {textContent.subtitle.line1}<br className="hidden sm:inline-flex"/> {textContent.subtitle.line2}
            </p>
						
            <div>
              
                {(platform === 'Windows' || platform === 'macOS' || platform === 'Linux') ?
                  
                  <>
                    <a href={download} target="_self">
                      <button type="button" className="flex justify-center w-full sm:w-auto sm:inline-flex items-center px-6 py-2 border border-transparent rounded-lg text-base font-medium text-white bg-blue-60 active:bg-blue-70 focus:bg-blue-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-20 transition-all duration-75">
                        {textContent.download} {' for ' + platform}
                      </button>
                    </a>
                    <a>
                      <button type="button" className="sm:ml-3 mt-2 sm:mt-0 flex justify-center w-full sm:w-auto sm:inline-flex items-center p-2 border border-transparent rounded-lg text-base font-medium text-blue-60">
                        {textContent.otherPlatforms}
                      </button>
                    </a>
                  </>
                  
                :

                  <a href={download} className="flex justify-center mb-4 mt-2">
                    <img className={`h-14 ${(platform === 'iOS' && lang === 'en') ? '' : 'hidden'}`} src="/badges/appStoreEN.svg" draggable="false" alt="Apple App Store badge for download Internxt Drive Mobile App"/>
                    <img className={`h-14 ${(platform === 'iOS' && lang === 'es') ? '' : 'hidden'}`} src="/badges/appStoreES.svg" draggable="false" alt="Apple App Store badge for download Internxt Drive Mobile App"/>
                    <img className={`h-14 ${(platform === 'Android' && lang === 'en') ? '' : 'hidden'}`} src="/badges/playStoreEN.svg" draggable="false" alt="Google Play Store badge for download Internxt Drive Mobile App"/>
                    <img className={`h-14 ${(platform === 'Android' && lang === 'es') ? '' : 'hidden'}`} src="/badges/playStoreES.svg" draggable="false" alt="Google Play Store badge for download Internxt Drive Mobile App"/>
                  </a>

                }
                
            </div>
          </div>

          <div className="flex w-auto md:hidden">
            <img src="/images/products/iPhoneCut.png" className={`${platform === 'iOS' ? '' : 'hidden'}`} draggable="false" alt="iPhone with Internxt App on screen"/>
            <img src="/images/products/pixel4xlCut.png" className={`${platform !== 'iOS' ? '' : 'hidden'}`} draggable="false" alt="iPhone with Internxt App on screen"/>
          </div>

          <div className="hidden md:flex flex-grow max-w-2xl">
            <img className="hidden xl:flex" src="/images/home/devicesAsc.png" draggable="false"  alt="desktop, laptop and phone with Internxt app"/>
            <img className="flex xl:hidden" src="/images/home/devicesAscCut.png" draggable="false"  alt="desktop, laptop and phone with Internxt app"/>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;