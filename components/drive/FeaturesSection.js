import React from 'react'
import styles from './FeaturesSection.module.scss';

const FeaturesSection = ({ descriptions }) => {
  const description = descriptions["FeaturesSection"];

  return (
    <section className="bg-neutral-10">
      <div className="content px-6 pb-24 flex flex-col">
        <div className={`flex flex-col items-center justify-center w-full text-center flex-shrink-0 py-12 md:py-24`}>
            <h3 className={`mb-2 text-base font-medium text-neutral-60`}>
              {description.eyebrow}
            </h3>
            <h2 className={`mb-10 text-4xl sm:text-5xl font-semibold`}>
              {description.title.line1}<br className="hidden sm:flex"/> {description.title.line2}
            </h2>
            <p className={`mb-4 text-xl md:text-lg text-neutral-500`}>
            {description.subtitle.line1}<br className="hidden sm:inline-flex"/> {description.subtitle.line2}<br className="hidden sm:inline-flex"/> {description.subtitle.line3}
            </p>
            <a href="/" className="text-lg font-semibold sm:font-normal text-blue-60">
                {description.cta}
              </a>
        </div>

        <div className="grid mx-auto grid-cols-2 grid-rows-1 gap-6 sm:gap-10 lg:p-10 max-w-5xl">
          
          <div className={`col-span-2 ${styles.featureBox} grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-0 auto-cols-min bg-white rounded-3xl overflow-hidden`}>
            <div className={`sm:row-auto flex flex-col flex-shrink-0 pb-0 p-12 sm:pb-12 lg:p-16 space-y-6`}>
              <span className="text-5xl sm:text-4xl font-semibold">
                {description.feature1.title.line1}<br/>{description.feature1.title.line2}
              </span>
              <span className="text-xl text-neutral-500">
                {description.feature1.description}
              </span>
              <a href="/" className="hidden text-lg text-blue-60">
                {description.feature1.cta}
              </a>
            </div>
            <div className={`${styles.securebydesignImage}`}></div>
          </div>

          <div className={`col-span-2 sm:col-span-1 z-10 ${styles.featureBox} flex flex-col md:flex-1 justify-self-start p-12 px-8 lg:p-16 lg:py-14 bg-white rounded-3xl overflow-hidden space-y-8`}>
            <img className="flex lg:max-w-xs" src="/images/home/devicesDesc.png" draggable="false"/>
            <div className="flex flex-col text-center space-y-4">
              <span className="text-5xl sm:text-4xl font-semibold">
                {description.feature2.title.line1}<br className="flex sm:hidden"/> {description.feature2.title.line2}
              </span>
              <span className="text-xl text-neutral-500">
                {description.feature2.description}
              </span>
              <a href="/" className="text-lg text-blue-60">
                {description.feature2.cta}
              </a>
            </div>
          </div>

          <div className={`col-span-2 sm:col-span-1 z-10 ${styles.featureBox} flex flex-col justify-self-start md:flex-1 p-12 px-8 lg:p-16 lg:py-14 bg-white rounded-3xl overflow-hidden space-y-8`}>
            <img className=" h-20 sm:h-24" src="/icons/lock.svg" draggable="false"/>
            <div className="flex flex-col text-center space-y-4">
              <span className="text-5xl sm:text-4xl font-semibold">
                {description.feature3.title.line1}<br className="hidden sm:flex"/> {description.feature3.title.line2}
              </span>
              <span className="text-xl text-neutral-500">
                {description.feature3.description}
              </span>
              <a href="/" className="hidden text-lg text-blue-60">
                {description.feature3.cta}
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;