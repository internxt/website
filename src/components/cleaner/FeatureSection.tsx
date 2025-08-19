import { getImage } from '@/lib/getImage';
import Image from 'next/image';

const FeatureSection = ({ textContent }) => (
  <section className="flex h-[563px] flex-col items-center justify-around ">
    <p className="text-3xl font-bold text-gray-100 lg:text-5xl">{textContent.title}</p>
    <div className="relative flex h-[360px] w-full flex-col-reverse items-center lg:h-[321px] lg:w-[832px] lg:flex-row lg:items-start">
      <Image
        src={getImage('/images/cleaner/mockup1.png')}
        alt="Cleaner HeroSection"
        height={314}
        width={530}
        quality={100}
        className="z-0 hidden pt-16 lg:flex lg:pt-0"
      />

      <Image
        src={getImage('/images/cleaner/mockup1.png')}
        alt="Cleaner HeroSection"
        height={350}
        width={350}
        quality={100}
        className="z-0 flex justify-center  pt-8 lg:hidden lg:pt-0"
      />
      <video
        src={getImage('/videos/cleaner/prototype.mp4')}
        autoPlay
        loop
        muted
        playsInline
        className="absolute bottom-[32px] z-10 h-[155px] w-[205px] rounded-lg object-cover lg:left-[120px] lg:top-7 lg:h-[236px] lg:w-[300px]"
      />

      <p className="px-10 text-center text-lg font-normal text-gray-55 lg:px-0 lg:text-left">
        {textContent.description}
      </p>
    </div>
  </section>
);

export default FeatureSection;
