import React from 'react';
import styles from '@/components/black-friday/BF-HeroSection.module.scss';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';


const PlatformSection = ({ textContent }) => {
  const platforms = [
    {
    title: textContent.PlatformSection.web,
    image: getImage('/images/special-offer/black-friday/Globe.svg'),
    alt: 'Web image'
    },
    {
    title: textContent.PlatformSection.iOS,
    image: getImage('/images/special-offer/black-friday/iOS.svg'),
    alt: 'iOS icon'
    },
    {
    title: textContent.PlatformSection.android,
    image: getImage('/images/special-offer/black-friday/Android.svg'),
    alt: 'Android image'
    },
    {
    title: textContent.PlatformSection.mac,
    image: getImage('/images/special-offer/black-friday/MacOs.svg'),
    alt: 'iOS icon'
    },
    {
    title: textContent.PlatformSection.windows,
    image: getImage('/images/special-offer/black-friday/Windows.svg'),
    alt: 'Windows image'
    },
    {
    title: textContent.PlatformSection.linux,
    image: getImage('/images/special-offer/black-friday/Linux.svg'),
    alt: 'Linux image'
    }
  ];


  return (
    <section className="overflow-hidden bg-black">
      
      <div className="flex flex-col items-center py-12">
        <div className="center flex items-center px-20 pb-16 text-center">
          <p className="text-5xl font-semibold text-white">
            {textContent.PlatformSection.title}
          </p>
        </div>
        <div className="flex items-center px-20 pb-16 text-center">
          <p className="text-xl font-semibold text-gray-5">
            {textContent.PlatformSection.subtitle}
          </p>
        </div>
        <div className="sm:gap-x-30 flex flex-row flex-wrap justify-center gap-y-10 gap-x-20 lg:gap-x-40">
          {platforms.map((platform) => (
            <div key={platform.alt} className="flex flex-col  items-center space-y-6">
              <div className="flex h-14 w-14 items-center justify-center bg-gray-100 rounded-full text-white">
                <Image
                  src={platform.image}
                  width={26.5}
                  height={32}
                  alt={platform.alt}
                  className={platform.title === textContent.PlatformSection.web ? '' : 'filter invert'}
                />
              </div>
              <p className="text-gray-5">{platform.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PlatformSection;
