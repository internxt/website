import React from 'react';
import styles from '@/components/black-friday/BF-HeroSection.module.scss';
import ButtonDeal from '@/components/black-friday/components/ButtonDeal';
import { CheckCircle } from '@phosphor-icons/react/dist/ssr';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';

const CtaSection = ({ textContent, lang }) => {
  return (
    <section className="overflow-hidden bg-highlight p-5 sm:p-10">
      {/* Versión Móvil */}
      <div
        className={`flex flex-col items-center justify-center space-y-5 lg:hidden ${styles.radialGradient} rounded-lg border-2 border-transparent p-5`}
      >
        <div className="flex flex-col items-center space-y-5 text-center">
          <p className="text-2xl font-medium text-white">{textContent.title}</p>
          <p className="text-3xl font-bold text-white">{textContent.subtitle}</p>
          <div className="flex">
            <ButtonDeal lang={lang} />
          </div>
          <div className="flex items-center justify-center space-x-2">
            <CheckCircle className="text-primary" size={24} />
            <p className="text-lg font-medium text-gray-5">{textContent.guarantee}</p>
          </div>
        </div>
        <Image
          src={getImage('/images/black-friday/internxt_black_friday_2024.webp')}
          height={219}
          width={277}
          alt="Black Friday Discounts"
        />
      </div>

      {/* Versión de Escritorio */}
      <div
        className={`relative hidden flex-col items-center justify-center space-y-10 rounded-2xl p-5 shadow-lg sm:p-10 lg:flex lg:flex-row lg:space-x-10 lg:space-y-0 ${styles.radialGradient}`}
      >
        <div className="flex justify-center lg:flex-1">
          <Image src={getImage('/images/black-friday/internxt_BF_1.webp')} height={219} width={277} alt="Hourglass" />
        </div>

        <div className="flex flex-col items-center space-y-5 text-center lg:flex-1">
          <p className="text-2xl font-medium text-white">{textContent.title}</p>
          <p className="text-5xl font-bold text-white">{textContent.subtitle}</p>
          <div className="flex">
            <ButtonDeal lang={lang} />
          </div>
          <div className="flex items-center justify-center space-x-2">
            <CheckCircle className="text-primary" size={24} />
            <p className="text-lg font-medium text-gray-5">{textContent.guarantee}</p>
          </div>
        </div>

        <div className="flex justify-center lg:flex-1">
          <Image src={getImage('/images/black-friday/internxt_BF_2.webp')} height={219} width={277} alt="Hourglass" />
        </div>
      </div>
    </section>
  );
};
export default CtaSection;
