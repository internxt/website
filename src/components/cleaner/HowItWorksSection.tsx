import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import AccordionCards from '../shared/AccordionCards';

const HowItWorksSection = ({ textContent }) => (
  <section className="flex h-[887px] w-full flex-row items-center justify-center bg-neutral-15 lg:px-10 lg:py-9 xl:px-32 3xl:px-80">
    <div className="flex h-[719px] flex-col justify-between  ">
      <div className="h-[58px]">
        <p className="text-5xl font-bold text-gray-100">{textContent.title}</p>
      </div>
      <div className="h-[44px]">
        <p className="text-lg font-normal text-gray-55">{textContent.description}</p>
      </div>
      <div className="flex h-[521px] flex-row justify-between ">
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
