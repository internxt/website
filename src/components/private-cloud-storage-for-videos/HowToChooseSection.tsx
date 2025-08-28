import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import AccordionCards from '../shared/AccordionCards';

const HowToChooseSection = ({ textContent }) => (
  <section className="flex h-auto w-full flex-row items-center justify-center bg-neutral-17 lg:min-h-[1000px] lg:px-10 lg:py-9 xl:px-32 3xl:px-80">
    <div className="flex w-[320px] flex-col items-center justify-between gap-2 lg:h-max lg:w-full lg:gap-12">
      <div className=" w-[320px] lg:w-[832px]">
        <p className=" text-start text-30 font-bold text-gray-100 lg:text-5xl">{textContent.title}</p>
      </div>
      <div className="flex w-[326px] flex-row items-center justify-center gap-4 pt-8 lg:hidden">
        <Image
          src={getImage('/images/cloud-storage-for-video-files/MobileImage_Drive.png')}
          alt="Cleaner HeroSection"
          height={172}
          width={83}
          quality={100}
        />
        <Image
          src={getImage('/images/cloud-storage-for-video-files/MobileImage_Search.png')}
          alt="Cleaner HeroSection"
          height={172}
          width={83}
          quality={100}
        />
        <Image
          src={getImage('/images/cloud-storage-for-video-files/MobileImage_OfficeFiles.png')}
          alt="Cleaner HeroSection"
          height={172}
          width={83}
          quality={100}
        />
      </div>
      <div className="w-[320px] pt-8 lg:w-[832px] lg:pt-0">
        <p className="text-start text-sm font-normal leading-tight text-gray-55 lg:text-lg">
          {textContent.description}
        </p>
      </div>

      <div className="flex h-min flex-row justify-between pt-8 lg:hidden">
        <AccordionCards textContent={textContent.cardDescriptions} cardWidth="w-[333px]" />
      </div>

      <div className="h-max-[692px] hidden w-[832px] flex-row justify-between lg:flex">
        <AccordionCards textContent={textContent.cardDescriptions} cardWidth="w-[440px]" />
        <div className="h-[500px]">
          <Image
            src={getImage('/images/cloud-storage-for-video-files/MobileImage_Search.png')}
            alt="Cleaner HeroSection"
            height={500}
            width={300}
            quality={100}
          />
        </div>
      </div>
    </div>
  </section>
);

export default HowToChooseSection;
