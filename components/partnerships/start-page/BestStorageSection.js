import React from 'react';
import ButtonDeal from './ButtonDeal';
import Image from 'next/image';

const BestStorageSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden py-20">
      <div className="flex flex-col items-center justify-center space-y-9 text-center">
        <div className="flex max-w-[723px] flex-col space-y-4">
          <p className="text-4xl font-semibold">{textContent.title}</p>
          <p className="text-xl font-normal">{textContent.description}</p>
        </div>
        <ButtonDeal textContent={textContent} />
        <div>
          <Image
            src="/images/lifetime/Devices.png"
            width={673}
            quality={100}
            height={335}
            layout="intrinsic"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default BestStorageSection;
