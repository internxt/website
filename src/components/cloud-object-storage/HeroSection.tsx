import Image from 'next/image';
import Link from 'next/link';
import { HighlightText } from '../components/HighlightText';
import { getImage } from '@/lib/getImage';
import router from 'next/router';

export const HeroSection = ({ textContent }) => {
  return (
    <section
      className="flex h-min w-full flex-col items-center justify-between gap-8 px-5 pt-28 lg:flex-row lg:gap-16 lg:px-10 lg:py-10 lg:pt-10 xl:px-32 3xl:px-80"
      style={{ background: 'linear-gradient(360deg, #FFFFFF 0%, #E5EFFF 85.17%)' }}
    >
      <div
        className={`z-20 flex h-min w-[360px] shrink-0 flex-col items-start justify-center gap-4 rounded-xl p-6 shadow-soft backdrop-blur-55 lg:h-min lg:w-[566px] lg:gap-8 lg:rounded-16 lg:p-8`}
        style={{
          background: 'linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)',
        }}
      >
        <div className="flex h-min w-min flex-col rounded-2 border border-primary px-1">
          <p className="flex whitespace-nowrap text-sm font-semibold text-primary lg:text-lg">{textContent.label}</p>
        </div>
        <h1 className="flex flex-col text-30 font-semibold leading-tight text-gray-100 lg:gap-2 lg:text-5xl">
          <HighlightText text={textContent.title.line1} />
          <p className="flex lg:text-3xl">{textContent.title.line2}</p>
        </h1>
        <p className="text-base font-normal leading-tight text-gray-55 lg:text-xl">{textContent.description}</p>
        <Link
          href="/cloud-object-storage/checkout"
          className="z-10 flex h-min w-min items-center justify-center whitespace-nowrap rounded-sm-6 bg-primary px-6 py-4 text-base font-normal text-white hover:bg-primary-dark"
        >
          {textContent.cta}
        </Link>
      </div>
      <div className="flex">
        <Image
          src={getImage('/images/cloud-object-storage/S3.webp')}
          alt="Internxt Cloud Object Storage"
          width={515}
          height={600}
          quality={100}
        />
      </div>
    </section>
  );
};
