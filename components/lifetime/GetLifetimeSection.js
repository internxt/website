import React from 'react';
import Image from 'next/image';

const GetLifetimeSection = ({ textContent }) => (
  <section className="bg-primary-dark">
    <div className="flex flex-col items-center pt-20 pb-16">
      <div className="mb-8 flex flex-col items-center px-6 text-center font-semibold text-white">
        <h2 className="text-4xl font-semibold">{textContent.title}</h2>
        <p className="pt-4 text-xl font-normal">{textContent.description}</p>
      </div>

      <div className="hidden flex-col px-8 pt-4 lg:flex">
        <Image
          loading="lazy"
          width={673}
          height={354}
          layout="intrinsic"
          draggable={false}
          src="/images/lifetime/Devices.png"
          alt="iPhone, iPad, and Mac"
        />
      </div>
      <div className="flex flex-col px-8 pt-4 lg:hidden">
        <Image
          height={384}
          width={600}
          loading="lazy"
          layout="intrinsic"
          className="object-contain"
          src="/images/home/devicesMobileView.webp"
          alt="iPhone, iPad, and Mac"
        />
      </div>
    </div>
  </section>
);

export default GetLifetimeSection;
