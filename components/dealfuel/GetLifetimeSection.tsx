import React from 'react';
import RevealY from '../components/RevealY';

const GetLifetimeSection = ({ textContent }) => (
  <section className="bg-primary-dark">
    <div className="flex flex-col items-center pt-20 pb-16">
      <div className="mb-8 flex flex-col items-center px-6 text-center font-semibold text-white">
        <h2 className="text-4xl font-semibold">{textContent.title}</h2>
        <p className="pt-4 text-xl font-normal">{textContent.description}</p>
      </div>

      <RevealY className="content flex h-full w-full flex-col px-5 pt-6">
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
  </section>
);

export default GetLifetimeSection;
