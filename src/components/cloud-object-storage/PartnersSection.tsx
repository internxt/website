'use client';

import { CloudObjectStorageText } from '@/assets/types/cloud-object-storage';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { CaretRight } from '@phosphor-icons/react';
import { useState } from 'react';
import { PartnerSelector, SwitchButtonOptions } from './PartnerSelector';
import { DARK_MODE_ENABLED, DARK_MODE_LOGO_FILTER } from '@/theme.config';

interface PartnersSectionProps {
  darkMode?: boolean;
  textContent: CloudObjectStorageText['PartnersSection'];
}

export const PartnersSection = ({ darkMode = DARK_MODE_ENABLED, textContent }: PartnersSectionProps): JSX.Element => {
  const [activePartner, setActivePartner] = useState<SwitchButtonOptions>('Prosegur');

  const activeIndex = textContent.companies.indexOf(activePartner);
  const company = textContent.companiesInformation[activeIndex];

  return (
    <section
      className="flex flex-col items-center justify-center gap-8 overflow-hidden px-5 py-10 lg:gap-16 lg:p-20"
      style={{
        background: darkMode
          ? 'linear-gradient(180deg, #1C1C1C 0%, #0D0D0D 100%)'
          : 'linear-gradient(180deg, #FFFFFF 0%, #F4F8FF 100%)',
      }}
    >
      <div className="flex flex-col items-center gap-6 px-10 text-center lg:gap-10 lg:px-40">
        <p className={`text-30 font-bold ${darkMode ? 'text-white-95' : 'text-gray-95'} lg:text-3xl`}>
          {textContent.title}
        </p>
        <p className={`text-base font-medium ${darkMode ? 'text-white-95' : 'text-gray-95'} lg:text-xl`}>
          {textContent.description}
        </p>
      </div>

      <PartnerSelector textContent={textContent} activePartner={activePartner} onPlanTypeChange={setActivePartner}/>

      <div
        className={`flex w-full flex-col gap-6 rounded-16 ${darkMode ? 'bg-[#1C1C1C]' : 'bg-white'} p-8 lg:flex-row`}
      >
        <div className="relative h-[288px] w-full overflow-hidden rounded-xl lg:w-[512px]">
          <Image
          key={company.image}
            src={getImage(`/images/cloud-object-storage/${company.image}.webp`)}
            alt={`Image of ${company.image}`}
            className="object-cover animate-fadeIn"
            fill
            quality={100}
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-6 lg:w-2/3 lg:items-start">
          <Image
            src={getImage(`/images/cloud-object-storage/${company.logo}.webp`)}
            alt={`Logo of ${company.logo}`}
            width={220}
            height={40}
            quality={100}
            className={darkMode ? DARK_MODE_LOGO_FILTER : ''}
          />
          <p className={`text-lg font-medium ${darkMode ? 'text-white-95' : 'text-gray-95'}`}>{company.title}</p>
          <p className={`text-base font-normal ${darkMode ? 'text-green-120' : 'text-gray-55'}`}>
            {company.description}
          </p>
          <a
            href="#contactSalesForm"
            className="gap flex flex-row items-center text-base font-normal text-primary hover:underline"
          >
            {company.cta}
            <CaretRight className="h-5 w-5 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};
