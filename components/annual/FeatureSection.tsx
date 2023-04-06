import React from 'react';
import Image from 'next/image';
import RevealY from '../components/RevealY';

const FeatureSection = ({ textContent }) => (
  <section className="">
    <div className="flex flex-col items-center pt-20 pb-16">
      <RevealY className="mb-8 flex flex-col items-center justify-center space-y-6 px-6 text-center font-semibold">
        <h2 className="max-w-xl text-5xl font-semibold text-gray-100">{textContent.title}</h2>
        <p className="max-w-3xl text-xl font-normal text-gray-100">{textContent.description}</p>
        <button
          className="flex items-center rounded-lg bg-primary px-5 py-3 text-base font-medium text-white"
          onClick={() => {
            window.scrollTo({
              top: document.getElementById('payment').offsetTop,
              behavior: 'smooth',
            });
          }}
        >
          {textContent.cta}
        </button>
      </RevealY>

      <RevealY className="hidden flex-col px-8 pt-4 lg:flex">
        <Image
          loading="lazy"
          width={673}
          height={354}
          layout="intrinsic"
          draggable={false}
          src="/images/lifetime/Devices.png"
          alt="iPhone, iPad, and Mac"
        />
      </RevealY>
      <RevealY className="flex flex-col px-8 pt-4 lg:hidden">
        <Image
          height={384}
          width={600}
          loading="lazy"
          layout="intrinsic"
          className="object-contain"
          src="/images/home/devicesMobileView.webp"
          alt="iPhone, iPad, and Mac"
        />
      </RevealY>
    </div>
  </section>
);

export default FeatureSection;
