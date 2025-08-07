import { getImage } from '@/lib/getImage';
import Image from 'next/image';

const FeatureSection = ({ textContent }) => (
  <section className="flex h-[563px] flex-col items-center justify-around">
    <p className="text-5xl font-bold text-gray-100">{textContent.title}</p>
    <div className="relative flex h-[321px] w-[832px] flex-row">
      <Image
        src={getImage('/images/cleaner/mockup1.png')}
        alt="Cleaner HeroSection"
        height={314}
        width={530}
        quality={100}
        className="z-0"
      />

      <video
        src={getImage('/videos/cleaner/prototype.webm')}
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-44 top-20 z-10 h-[136px] w-[180px] object-cover"
      />

      <p className="text-lg font-normal text-gray-55">{textContent.description}</p>
    </div>
  </section>
);

export default FeatureSection;
