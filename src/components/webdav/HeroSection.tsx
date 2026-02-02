import Image from 'next/image';
import Link from 'next/link';
import { HighlightText } from '../components/HighlightText';

export const HeroSection = ({ textContent }) => {
  return (
    <section
      className="flex h-min w-full flex-col items-center justify-center gap-8 pt-28 lg:mt-16 lg:flex-row lg:gap-16 lg:py-10"
      style={{ background: 'linear-gradient(360deg, #FFFFFF 0%, #E5EFFF 85.17%)' }}
    >
      <div
        className={`z-20 flex h-min w-[360px] shrink-0 flex-col items-start justify-center gap-4 rounded-xl p-6 shadow-soft backdrop-blur-55 lg:h-min lg:w-[520px] lg:gap-8 lg:rounded-16 lg:p-8`}
        style={{
          background: 'linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)',
        }}
      >
        <div className="flex h-min w-min flex-col rounded-2 border border-primary px-1">
          <p className="flex whitespace-nowrap text-sm font-semibold text-primary lg:text-lg">{textContent.label}</p>
        </div>
        <p className="text-30 font-semibold leading-tight text-gray-100 lg:text-5xl">
          <HighlightText text={textContent.title} />
        </p>
        <p className="text-base font-normal leading-tight text-gray-55 lg:text-xl">{textContent.description}</p>
        <Link
          href={'/pricing'}
          className="z-10 flex h-min w-min items-center justify-center whitespace-nowrap rounded-sm-6 bg-primary px-6 py-4 text-base font-normal text-white hover:bg-primary-dark"
        >
          {textContent.cta}
        </Link>
      </div>
      <div className="flex lg:mt-16">
        <Image
          src={'/images/webdav/cli-and-drive-web.svg'}
          alt="CLI And Webdav Image"
          width={614}
          height={400}
          quality={100}
        />
      </div>
    </section>
  );
};
