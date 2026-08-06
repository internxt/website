import Link from 'next/link';
import { CheckCircle } from '@phosphor-icons/react';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';

export const HeroSection = ({ textContent }) => {

  return (
    <section
      className="mt-20 flex w-full min-h-[60vh] flex-col items-center justify-center gap-8 px-8 py-8 lg:mt-10 lg:min-h-auto lg:flex-row lg:justify-between lg:gap-10 lg:px-10 lg:pt-10 xl:px-32 3xl:px-80"
      style={{ background: 'linear-gradient(360deg, #FFFFFF 0%, #E5EFFF 85.17%)' }}
    >
      <div
        className={`z-20 h-min flex w-full shrink-0 flex-col items-start justify-center gap-4 rounded-xl p-6 py-5 shadow-soft backdrop-blur-55 lg:w-1/2 lg:max-w-[600px] lg:gap-8 lg:rounded-16 lg:p-8`}
        style={{
          background: 'linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)',
        }}
      >
        <div className="flex h-min w-min flex-col rounded-2 border border-primary px-1">
          <p className="flex whitespace-nowrap text-sm font-semibold text-primary lg:text-lg">{textContent.label}</p>
        </div>
        <h1 className="flex flex-col text-[30px] font-semibold leading-tight text-gray-100 lg:gap-2 lg:text-5xl">
          {textContent.title}
        </h1>
        <p className="text-base font-normal leading-tight text-gray-55 lg:text-xl">{textContent.description}</p>
        <div className="flex flex-col gap-2">
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
