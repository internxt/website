import React from 'react';
import RevealY from '../components/RevealY';

const FeatureSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden bg-gray-1">
      <div className="content flex flex-col items-center justify-center space-y-20 px-6 py-20">
        {/* Why start using Internxt */}
        <div className="flex flex-col items-center space-y-6 text-center">
          <h3 className="text-3xl font-semibold lg:text-5xl">{textContent.title}</h3>

          <h4 className="max-w-[774px] text-lg text-gray-80 lg:text-xl">{textContent.description}</h4>

          <RevealY className="flex h-full w-full flex-col pt-6">
            <picture>
              <source srcSet="/images/home/Internxt-secure-cloud-storage.webp" type="image/webp" />
              <img
                src="/images/home/Internxt-secure-cloud-storage.webp"
                alt="Internxt secure cloud storage"
                draggable={false}
              />
            </picture>
          </RevealY>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
