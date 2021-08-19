import React from 'react'
import styles from './HeroSection.module.scss';
import { isMobile } from "react-device-detect";
import Marquee from "react-fast-marquee";

const HeroSection = ({ descriptions }) => {
  const description = descriptions["HeroSection"];

  return (
    <section>
      <div className="content pt-8">

        <div className={`flex flex-col md:flex-row items-center justify-between w-full sm:mb-6`}>
          <div className="flex w-auto md:hidden mx-20 mb-6">
            <img src="/images/home/devicesMobileView.png" draggable="false"/>
          </div>
          <div className={`flex-shrink-0 px-6 md:px-0 m-6 md:m-10 lg:m-32 flex flex-col w-screen sm:w-auto text-center md:text-left`}>
            <h1 className={`title mb-4 md:mb-8 text-4xl md:text-5xl lg:text-6xl`}>
              {description.title.line1}<br className="hidden sm:inline-flex"/> {description.title.line2}
            </h1>
            <p className={`mb-8 md:mb-8 text-lg lg:text-xl`}>
            {description.subtitle.line1}<br className="hidden sm:inline-flex"/> {description.subtitle.line2}
            </p>
            <div>
              <a href="https://drive.internxt.com/new" target="_blank">
                <button
                  type="button"
                  className="flex justify-center w-full sm:w-auto sm:inline-flex items-center px-6 py-2 border border-transparent rounded-lg text-base font-medium text-white bg-blue-60 active:bg-blue-70 focus:bg-blue-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-20 transition-all duration-75"
                >
                  {description.cta1} <span className="font-normal text-blue-30"><span className="px-1.5">—</span>{description.cta1detail}</span>
                </button>
              </a>
              <a href="/">
                <button
                  type="button"
                  className="sm:ml-3 mt-2 sm:mt-0 flex justify-center w-full sm:w-auto sm:inline-flex items-center px-6 py-2 border border-transparent rounded-lg text-base font-medium text-blue-60 bg-blue-10 active:bg-blue-20 focus:bg-blue-20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-20 transition-all duration-75"
                >
                  {description.cta2[isMobile ? "mobile" : "desktop"]}
                </button>
              </a>
            </div>
          </div>
          <div className="hidden md:flex flex-grow max-w-2xl">
            <img className="hidden xl:flex" src="/images/home/devicesAsc.png" draggable="false"/>
            <img className="flex xl:hidden" src="/images/home/devicesAscCut.png" draggable="false"/>
          </div>
        </div>

				<div className="featuredMarquee">
					<div className="flex lg:hidden">
						<Marquee className="bg-white" gradientColor="[255,255,255]" gradientWidth="32px" speed="30">
							<div className="featured flex flex-row w-full p-6">
								<img className="mr-12" src="../../logos/featured/forbes.svg" draggable="false"/>
								<img className="mr-12" src="../../logos/featured/businessinsider.svg" draggable="false"/>
								<img className="mr-12" src="../../logos/featured/techradar.svg" draggable="false"/>
								<img className="mr-12" src="../../logos/featured/techcrunch.svg" draggable="false"/>
								<img className="mr-12" src="../../logos/featured/lavanguardia.svg" draggable="false"/>
								<img src="../../logos/featured/elpais.svg" draggable="false"/>
							</div>
						</Marquee>
					</div>
					<div className="overflow-hidden hidden lg:flex">
						<div className="featured flex flex-row justify-center w-full p-6 md:px-10 lg:px-32 bg-white overflow-x-auto">
							<img className="mr-10" src="../../logos/featured/forbes.svg" draggable="false"/>
							<img className="mr-10" src="../../logos/featured/businessinsider.svg" draggable="false"/>
							<img className="mr-10" src="../../logos/featured/techradar.svg" draggable="false"/>
							<img className="mr-10" src="../../logos/featured/techcrunch.svg" draggable="false"/>
							<img className="mr-10" src="../../logos/featured/lavanguardia.svg" draggable="false"/>
							<img src="../../logos/featured/elpais.svg" draggable="false"/>
						</div>
					</div>
				</div>

      </div>
    </section>
  );
};

export default HeroSection;