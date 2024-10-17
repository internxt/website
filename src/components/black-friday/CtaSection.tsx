import React from 'react';
import styles from '@/components/black-friday/BF-HeroSection.module.scss';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import Button from '@/components/shared/Button';
import { Icon } from '@mui/material';
import { CheckCircle } from '@phosphor-icons/react';

const CtaSection = ({ textContent}) => {
  const icon = CheckCircle;
  return (
      <section className="overflow-hidden bg-highlight py-20 px-5 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
         <div className={`flex flex-col sm:flex-row items-center rounded-2xl m-8 sm:m-16 p-6 sm:p-12 ${styles.radiantGradient} justify-between`}>
          <Image src={getImage('/images/black-friday/internxt_BF_1.webp')} alt="BlackFriday" width={219} height={227} className="flex-shrink-0 mb-6 sm:mb-0" />
          <div className="center flex flex-col items-center space-y-5 text-center max-w-[343px] flex-grow">
            <p className="text-2xl font-medium text-white">{textContent.pretitle}</p>
            <p className="text-5xl font-bold text-white">{textContent.title}</p>
            <Button text={textContent.buttonText} />
            <div className="flex items-center space-x-2">
              <Icon component={icon} className="text-primary" />
              <span className="text-white text-lg text-medium">{textContent.moneyBack}</span>
            </div>
          </div>
          <Image src={getImage('/images/black-friday/internxt_BF_2.webp')} alt="BlackFriday" width={219} height={227} className="flex-shrink-0" />
        </div>
      </div>
    </section>
  );
};

export default CtaSection;