import React from 'react';
import styles from '@/components/black-friday/BF-HeroSection.module.scss';
import ButtonDeal from '@/components/black-friday/components/ButtonDeal';
import { CheckCircle } from '@phosphor-icons/react/dist/ssr';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';

const CtaSection = ({ textContent, lang }) => {
  return (
    <section className="overflow-hidden p-20 bg-highlight">
  <div className={`flex flex-col lg:flex-row items-center justify-center space-y-10 lg:space-y-0 lg:space-x-10 p-10  rounded-2xl shadow-lg ${styles.radialGradient}`}>
    <div className="hidden lg:flex">
      <Image
        src={getImage('/images/black-friday/internxt_BF_1.webp')}
        height={219}
        width={277}
        alt="Hourglass"
      />
    </div>

    <div className="center flex flex-col items-center space-y-5 text-center">
      <p className="text-2xl font-medium text-white">{textContent.title}</p>
      <p className="text-5xl font-bold text-white">{textContent.subtitle}</p>
      <div className="flex">
        <ButtonDeal lang={lang} />
      </div>
      <div className="center flex flex-row items-center space-x-5 text-center">
        <CheckCircle className="text-primary" size={24} />
        <p className="text-lg font-medium text-gray-5">{textContent.guarantee}</p>
      </div>
    </div>

    <div className="hidden lg:flex justify-center">
      <Image
        src={getImage('/images/black-friday/internxt_BF_2.webp')}
        height={219}
        width={277}
        alt="Hourglass"
      />
    </div>
  </div>
 
</section>
  );
};
export default CtaSection;
