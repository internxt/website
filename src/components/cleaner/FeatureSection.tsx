import { getImage } from '@/lib/getImage';
import Image from 'next/image';

const FeatureSection = ({ textContent }) => (
  <section className="flex h-[563px] flex-col items-center justify-around">
    <p className="text-3xl font-bold text-gray-100 lg:text-5xl">{textContent.title}</p>
    <div className="relative flex h-[450px] w-full flex-col-reverse lg:h-[321px] lg:w-[832px] lg:flex-row">
      <Image
        src={getImage('/images/cleaner/mockup1.png')}
        alt="Cleaner HeroSection"
        height={314}
        width={530}
        quality={100}
        className="z-0 pt-16 lg:pt-0"
      />

      <video
        src={getImage('/videos/cleaner/prototype.webm')}
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-28 top-64 z-10 h-[136px] w-[180px] object-cover lg:left-44 lg:top-20"
      />

      <p className="px-10 text-center text-lg font-normal text-gray-55 lg:px-0 lg:text-left">
        {textContent.description}
      </p>
    </div>
  </section>
);

export default FeatureSection;
