import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import Link from 'next/link';
import { HighlightText } from '../components/HighlightText';

const HeroSection = ({ textContent }) => (
  <section
    className="flex h-min
    w-full flex-col items-center justify-start gap-8 pb-8 pt-32 lg:h-[695px] lg:flex-row lg:gap-0 lg:pl-16 lg:pt-16 xl:pl-32 3xl:pl-80"
    style={{ background: 'linear-gradient(360deg, #FFFFFF 0%, #E5EFFF 85.17%)' }}
  >
    <div
      className={
        'flex h-min w-[360px] shrink-0 flex-col items-center justify-center rounded-xl shadow-soft backdrop-blur-55 lg:h-min lg:w-[580px]'
      }
      style={{
        background: 'linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)',
      }}
    >
      <div className="flex flex-col gap-4  p-6 lg:gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex h-[26px] w-[75px] flex-col items-center justify-center rounded-2 border border-primary px-1 py-0.5 ">
            <p className="text-lg font-semibold text-primary">{textContent.label}</p>
          </div>
          <p className="text-30 font-semibold leading-tight text-gray-100 lg:text-5xl">
            <HighlightText text={textContent.title} />
          </p>
        </div>

        <div className="flex  h-min w-full flex-col justify-between">
          <p className="text-base font-normal text-gray-55 lg:text-xl">{textContent.description}</p>
        </div>

        <Link
          href={'/pricing'}
          className="fle z-10 h-min w-min items-center justify-center whitespace-nowrap rounded-sm-6 bg-primary px-6 py-4 text-base font-normal text-white hover:bg-primary-dark"
        >
          {textContent.cta}
        </Link>
      </div>
    </div>
    <Image
      src={getImage('/images/meet/hero desktop.webp')}
      alt="Meet Hero Section"
      width={711}
      height={495}
      quality={100}
      className="-ml-16 hidden lg:flex"
    />
    <Image
      src={getImage('/images/meet/hero mobile.webp')}
      alt="Meet Hero Section"
      width={339}
      height={118}
      quality={100}
      className="flex lg:hidden"
    />
  </section>
);

export default HeroSection;
