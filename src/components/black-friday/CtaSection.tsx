import React from 'react';
import styles from '@/components/black-friday/BF-HeroSection.module.scss';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import Button from '@/components/shared/Button';
import { Icon } from '@mui/material';
import { CheckCircle } from '@phosphor-icons/react';

const CtaSection = ({ textContent, lang }) => {
  const icon = CheckCircle;
  return (
    <section className="overflow-hidden rounded-2xl m-4 sm:m-10 p-4 sm:p-10 bg-gray-800">
      <div className="center my-12 flex flex-col sm:flex-row items-center justify-between space-y-10 sm:space-y-0">
        <Image src={getImage('/images/black-friday/internxt_BF_1.webp')} alt="BlackFriday" width={219} height={227} />
        <div className="center flex flex-col items-center space-y-5 text-center max-w-[343px]">
          <p className="text-2xl font-medium text-white">{textContent.pretitle}</p>
          <p className="text-5xl font-bold text-white">{textContent.title}</p>
          <Button text={textContent.buttonText} />
          <div className="flex items-center space-x-2">
            <Icon component={icon} className="text-primary" />
            <span className="text-white text-lg text-medium">{textContent.moneyBack}</span>
          </div>
        </div>
        <Image src={getImage('/images/black-friday/internxt_BF_2.webp')} alt="BlackFriday" width={219} height={227} />
      </div>
      <div
        className={`absolute top-0 left-0 -z-10 flex h-full w-full ${styles.radiantGradient} pointer-events-none origin-center`}
      />
    </section>
  );
};

export default CtaSection;