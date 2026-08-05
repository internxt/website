import Link from 'next/link';
import { CheckCircle } from '@phosphor-icons/react';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';

export const HeroSection = ({ textContent }) => {

  return (
    <section
      className="flex w-full flex-col items-center justify-between gap-8 px-8 pt-28 lg:pt-28 lg:flex-row lg:gap-10 lg:px-10 lg:pt-10 xl:px-32 3xl:px-80"
      style={{ background: 'linear-gradient(360deg, #FFFFFF 0%, #E5EFFF 85.17%)' }}
    >
      <div
        className={`z-20 h-min flex flex-1 flex-col items-start justify-center gap-4 rounded-xl p-6 py-5 lg:py-10 shadow-soft backdrop-blur-55 lg:max-w-[600px] lg:gap-8 lg:rounded-16 lg:p-8`}
        style={{
          background: 'linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)',
        }}
      >
        <div className="flex h-min w-min flex-col rounded-2 border border-primary px-1">
          <p className="flex whitespace-nowrap text-sm font-semibold text-primary lg:text-lg">{textContent.label}</p>
        </div>
        <h1 className="flex flex-col text-[30px] font-semibold leading-tight text-gray-100 lg:gap-2 lg:text-6xl">
          {textContent.title}
        </h1>
        <p className="text-base font-normal leading-tight text-gray-55 lg:text-xl">{textContent.description}</p>
        <div className="flex flex-col">
          <Link
            href="/pricing"
            className="z-10 flex h-min w-min items-center justify-center whitespace-nowrap rounded-sm-6 bg-primary px-6 py-4 text-base font-normal text-white hover:bg-primary-dark"
          >
            {textContent.cta}
          </Link>
          <div className="flex flex-row items-center justify-center gap-2 pt-3 lg:justify-start">
            <CheckCircle size={24} color="#32C356" weight="fill" />
              <p className="whitespace-nowrap text-base lg:text-base text-gray-55">
                {textContent.garantee}
              </p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center lg:min-w-0 lg:pt-10">
        <Image
                className="h-auto w-full object-contain"
                src={getImage('/images/photos/photo.webp')}
                alt="Internxt Drive panel interface"
                height={563}
                width={750}
                quality={200}
        />
      </div>
    </section>
  );
};
