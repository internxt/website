import Image from 'next/image';
import { getImage } from '@/lib/getImage';

const CtaSection = ({ textContent }: { textContent: any }) => {
  return (
    <section className="bg-coverpx-4 overflow-hidden py-12">
      <div className="flex items-center justify-center space-y-8 bg-primary px-10 py-10 text-center">
        <div className={`flex flex-col items-center space-x-16 space-y-4 px-6 text-center text-white  sm:pr-6 `}>
          <p className="px-30 text-3xl font-semibold sm:px-6 lg:w-[1000px]">{textContent.title}</p>
          <div className={`pr-14 sm:pr-0 sm:pt-0 md:pr-0`}>
            <Image
              loading="eager"
              src={getImage('/icons/techradar.svg')}
              draggable="false"
              quality={100}
              width={210}
              height={36}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="FloatingSection Icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
