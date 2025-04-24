import Image from 'next/image';
import { getImage } from '@/lib/getImage';

const CtaSection = ({ textContent }: { textContent: any; bgImage?: string; onClick?: () => void }) => {
  return (
    <section className="bg-coverpx-4 overflow-hidden bg-gray-1 py-12 md:px-96 xl:px-20">
      <div className="flex items-center justify-center space-y-8 bg-primary px-10 py-10 text-center sm:rounded-3xl">
        <div
          className={`flex flex-col items-center space-x-16 space-y-4 px-6 text-center text-white sm:flex-row sm:pr-6 sm:text-start`}
        >
          <p className="text-3xl font-semibold sm:px-6">{textContent.title}</p>
          <div className={`pr-16 pt-6 sm:pr-0 sm:pt-0 md:pr-0`}>
            <Image
              loading="eager"
              src={getImage('/icons/techradar.svg')}
              draggable="false"
              quality={100}
              width={420}
              height={72}
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
