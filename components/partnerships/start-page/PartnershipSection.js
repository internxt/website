import React from 'react';
import Image from 'next/image';
import { X } from '@phosphor-icons/react';

const PartnershipSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden py-20">
      <div className="flex flex-col items-center justify-center space-y-12 px-6">
        <div className="flex max-w-[750px] flex-col space-y-5 text-center">
          <h1 className="text-4xl font-semibold">{textContent.title}</h1>
          <p className="text-xl">{textContent.description1}</p>
          <p className="text-xl">{textContent.description2}</p>
        </div>
        <div className="flex flex-row space-x-8">
          <div>
            <Image
              src="/images/partnerships/start-page/Startpage_logo.svg"
              width={115}
              height={25}
              quality={100}
              alt="Partnership"
            />
          </div>
          <div>
            <X width={25} height={24} className="text-primary" weight="bold" accentHeight={10} fontWeight={150} />
          </div>
          <div>
            <Image src="/logos/internxt/internxt.svg" quality={100} width={115} height={25} alt="Internxt" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
