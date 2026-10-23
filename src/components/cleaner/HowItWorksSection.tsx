import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import AccordionCards from '../shared/AccordionCards';
import { DARK_MODE_ENABLED } from '@/theme.config';

const HowItWorksSection = ({ darkMode = DARK_MODE_ENABLED, textContent }) => (
  <section
    className={`flex h-[600px] w-full flex-row items-center justify-center ${
      darkMode ? 'bg-gray-105' : 'bg-neutral-15'
    } lg:h-[780px] lg:px-10 lg:py-9 lg:pb-0 xl:px-32 3xl:px-80`}
  >
    <div className="flex w-[320px] flex-col items-center justify-between gap-2 lg:h-[650px] lg:w-full lg:gap-12">
      <div className="h-[58px] w-[320px] lg:w-[832px]">
        <p className={` text-start text-30 font-bold ${darkMode ? 'text-white-95' : 'text-gray-100'} lg:text-5xl`}>
          {textContent.title}
        </p>
      </div>
      <div className="h-[44px] w-[320px] lg:w-[832px]">
        <p
          className={`text-start text-base font-normal leading-tight ${
            darkMode ? 'text-green-120' : 'text-gray-55'
          } lg:text-lg`}
        >
          {textContent.description}
        </p>
      </div>
      <div className="mt-14 flex h-min flex-row justify-between  lg:hidden ">
        <AccordionCards textContent={textContent.cardDescriptions} />
      </div>
      <div className="mt-2 hidden h-[480px] flex-row justify-between lg:flex">
        <AccordionCards textContent={textContent.cardDescriptions} />
        <div className="relative h-[314px] w-[530px]">
          <Image
            src={getImage('/images/cleaner/mockup2.png')}
            alt="Cleaner HeroSection"
            height={314}
            width={500}
            quality={100}
            className="ml-10"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
