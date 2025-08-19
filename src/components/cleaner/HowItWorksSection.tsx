import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import AccordionCards from '../shared/AccordionCards';

const HowItWorksSection = ({ textContent }) => (
  <section className="flex h-[650px] w-full flex-row items-center justify-between  bg-neutral-15  lg:h-[660px] lg:px-10 lg:py-9 lg:pb-0 xl:px-32 3xl:px-80">
    <div className="flex w-[300px] flex-col justify-between pt-6 lg:h-[650px] lg:w-full">
      <div className="h-[58px] ">
        <p className="text-3xl font-bold text-gray-100 lg:text-5xl">{textContent.title}</p>
      </div>
      <div className="h-[44px] ">
        <p className="text-lg font-normal text-gray-55">{textContent.description}</p>
      </div>
      <div className="mt-28 flex h-min flex-row justify-between  lg:hidden ">
        <AccordionCards textContent={textContent.cardDescriptions} />
      </div>
      <div className="mt-8 hidden h-[480px] flex-row justify-between lg:flex">
        <AccordionCards textContent={textContent.cardDescriptions} />
        <div className="h-[314px] w-[530px]">
          <Image
            src={getImage('/images/cleaner/mockup2.png')}
            alt="Cleaner HeroSection"
            height={314}
            width={530}
            quality={100}
          />
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
