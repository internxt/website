import React from 'react'
import styles from './FeaturesSection.module.scss';

const FeaturesSection = ({ descriptions }) => {
  const description = descriptions["FeaturesSection"];

  return (
    <section className="bg-neutral-10">
      <div className="content px-6 pb-24">
        <div className={`flex flex-col items-center justify-center w-full text-center flex-shrink-0 px-10 md:px-0 py-12 md:py-24`}>
            <h3 className={`mb-1 text-base font-medium text-blue-50`}>
              {description.eyebrow}
            </h3>
            <h2 className={`mb-4 text-4xl font-semibold`}>
              {description.title.line1}<br className="hidden sm:flex"/> {description.title.line2}
            </h2>
            <p className={`mb-8 text-base lg:text-lg text-neutral-500`}>
            {description.subtitle.line1}<br className="hidden sm:inline-flex"/> {description.subtitle.line2}<br className="hidden sm:inline-flex"/> {description.subtitle.line3}
            </p>
        </div>

        <div className="flex flex-row flex-wrap">
          <div className={`${styles.featureBox} flex flex-col self-auto lg:flex-row bg-white rounded-3xl mb-10`}>
            <div className="flex flex-col flex-shrink-0 p-10 lg:p-20 pb-0">
              <span className="text-4xl font-semibold mb-4">
                {description.feature1.title.line1}<br/>{description.feature1.title.line2}
              </span>
              <span className="text-xl text-neutral-500 mb-4">
                {description.feature1.description}
              </span>
              <a href="/" className="text-lg text-blue-60 mb-4">
                {description.feature1.cta}
              </a>
            </div>
            <img className="flex lg:self-stretch max-h-96" src="/images/home/ipad.png" draggable="false"/>
          </div>

          <div className={`${styles.featureBox} flex flex-col flex-1 self-auto p-10 lg:p-20 bg-white rounded-3xl  mb-10`}>
            <div className="flex flex-col flex-shrink-0" style={{'maxWidth':'24ch'}}>
              <span className="text-4xl font-semibold mb-4">
                {description.feature2.title.line1}<br/>{description.feature2.title.line2}
              </span>
              <span className="text-xl text-neutral-500 mb-4">
                {description.feature2.description}
              </span>
              <a href="/" className="text-lg text-blue-60 mb-10">
                {description.feature2.cta}
              </a>
            </div>
            <img className="flex lg:max-w-xs" src="/images/home/devicesDesc.png" draggable="false"/>
          </div>

          <div className={`${styles.featureBox} flex flex-col flex-1 self-auto p-10 lg:p-20 bg-white rounded-3xl  mb-10`}>
            <img src="/images/home/lock.svg" className="h-12 w-10"/>
            <span className="text-4xl font-semibold mb-8 mt-4">
              {description.feature3.title.line1}<br/>{description.feature3.title.line2}
            </span>
            <span className="text-xl text-neutral-500 mb-4" style={{'maxWidth':'24ch'}}>
              {description.feature3.description}
            </span>
            <a href="/" className="text-lg text-blue-60">
              {description.feature3.cta}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;