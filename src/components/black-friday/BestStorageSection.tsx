import React from 'react';
import styles from '@/components/black-friday/BF-HeroSection.module.scss';
import ButtonDeal from '@/components/black-friday/components/ButtonDeal';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';
const BestStorageSection = ({ textContent, lang }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center py-16 px-10 text-center md:px-20">
        <div className="top-24 flex flex-col items-center space-y-5">
          <h2 className="max-w-[526px] text-4xl font-semibold text-white md:text-5xl">
            {textContent.BestStorage.title}
          </h2>
          <h3 className="text-xl text-white">{textContent.BestStorage.subtitle}</h3>
        </div>
        <div className="py-9">
          <ButtonDeal lang={lang} />
        </div>
        <Image
          src={getImage('/images/home/internxt_secure_cloud_storage.webp')}
          alt="Internxt secure cloud storage"
          draggable="false"
          height={500}
          width={500}
        />
       
      </div>
      <div
        className={`absolute top-0 left-0 -z-10 flex h-full w-screen ${styles.radialGradient} pointer-events-none origin-center`}
      />
    </section>
  );
};

export default BestStorageSection;
