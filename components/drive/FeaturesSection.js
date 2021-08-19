import React from 'react'
import styles from './FeaturesSection.module.scss';

const FeaturesSection = ({ descriptions }) => {
  const description = descriptions["FeaturesSection"];

  return (
    <section className="bg-neutral-10">
      <div className="content">
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
      </div>
    </section>
  );
};

export default FeaturesSection;