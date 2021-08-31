import React from 'react'
import styles from './FeaturesSection.module.scss';

const FeaturesSection = ({textContent, lang}) => {
  return (
    <section className="bg-neutral-10">
      <div className="content px-6 pb-24 flex flex-col">
        <div className={`flex flex-col items-center justify-center w-full text-center flex-shrink-0 py-20 md:py-24`}>
            <h3 className={`mb-1 text-base font-medium text-neutral-50`}>
              {textContent.eyebrow}
            </h3>
            <h2 className={`mb-6 text-4xl sm:text-5xl font-semibold`}>
              {textContent.title.line1}<br className="hidden sm:flex"/> {textContent.title.line2}
            </h2>
            <p className={`mb-6 text-lg text-neutral-500`}>
            {textContent.subtitle.line1}<br className="hidden sm:inline-flex"/> {textContent.subtitle.line2}<br className="hidden sm:inline-flex"/> {textContent.subtitle.line3}
            </p>
            <a href={`${lang ? (lang === "en" ? "" : lang) : ""}/products`} className="text-lg font-semibold sm:font-normal text-blue-60">
              <div className="flex flex-row items-center">{textContent.cta}<img className="mt-0.5 ml-2" src="/icons/chevronBoldBlue60.svg" draggable="false"/></div>
            </a>
        </div>

        <div className="grid mx-auto grid-cols-2 grid-rows-1 gap-6 sm:gap-10 lg:p-10 max-w-5xl">
          
          <div data-aos="fade-up" data-aos-duration="500" className={`col-span-2 ${styles.featureBox} grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-0 auto-cols-min bg-white rounded-3xl overflow-hidden`}>
            <div className={`sm:row-auto flex flex-col flex-shrink-0 pb-0 p-12 sm:pb-12 lg:p-16 space-y-6`}>
              <span className="text-4xl font-semibold">
                {textContent.feature1.title.line1}<br/>{textContent.feature1.title.line2}
              </span>
              <span className="text-lg text-neutral-500">
                {textContent.feature1.description}
              </span>
              <a href="https://help.internxt.com/en/articles/5387164-what-is-zero-knowledge-encryption" target="_blank" className="text-lg text-blue-60">
                <div className="flex flex-row items-center">{textContent.feature1.cta}<img className="mt-0.5 ml-2" src="/icons/chevronBlue60.svg" draggable="false"/></div>
              </a>
            </div>
            <div className={`${styles.securebydesignImage}`} role="img" alt="file being encrypted" aria-label="file being encrypted"></div>
          </div>

          <div data-aos="fade-up" data-aos-duration="500" className={`col-span-2 sm:col-span-1 z-10 ${styles.featureBox} flex flex-col md:flex-1 justify-self-start p-12 px-8 lg:p-16 lg:py-14 bg-white rounded-3xl overflow-hidden space-y-8`}>
            <img className="flex lg:max-w-xs mb-6" src="/images/home/devicesDesc.png" draggable="false" alt="dektop, laptop and phone with Internxt app"/>
            <div className="flex flex-col text-left space-y-6">
              <span className="text-4xl font-semibold">
                {textContent.feature2.title.line1}<br className="flex sm:hidden"/> {textContent.feature2.title.line2}
              </span>
              <span className="text-lg text-neutral-500">
                {textContent.feature2.description}
              </span>
              <a href={`${lang ? (lang === "en" ? "" : lang) : ""}/products`} className="text-lg text-blue-60">
                <div className="flex flex-row items-center">{textContent.feature2.cta}<img className="mt-0.5 ml-2" src="/icons/chevronBlue60.svg" draggable="false"/></div>
              </a>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="500" className={`col-span-2 sm:col-span-1 z-10 ${styles.featureBox} flex flex-col justify-self-start md:flex-1 p-12 px-8 lg:p-16 lg:py-14 bg-white rounded-3xl overflow-hidden space-y-8`}>
            <img className="h-16 w-12 sm:h-24 sm:w-20 mb-2 sm:mb-6" src="/icons/lock.svg" draggable="false" alt="privacy lock icon"/>
            <div className="flex flex-col text-left space-y-6">
              <span className="text-4xl font-semibold">
                {textContent.feature3.title.line1}<br className="hidden sm:flex"/> {textContent.feature3.title.line2}
              </span>
              <span className="text-lg text-neutral-500">
                {textContent.feature3.description}
              </span>
              <a href="/" target="_blank" className="text-lg text-blue-60 hidden">
                <div className="flex flex-row items-center">{textContent.feature3.cta}<img className="mt-0.5 ml-2" src="/icons/chevronBlue60.svg" draggable="false"/></div>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;