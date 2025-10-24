import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { Check } from '@phosphor-icons/react';
import Link from 'next/link';
import { HighlightText } from '../components/HighlightText';

interface HeroSectionDealsProps {
  textContent: any;
}

export default function HeroSection({ textContent }: Readonly<HeroSectionDealsProps>): JSX.Element {
  return (
    <section
      className="flex h-min w-full flex-col items-center justify-center gap-8 overflow-hidden pt-28 lg:flex-row lg:justify-between lg:gap-16 lg:px-10 lg:pt-16 xl:px-32 3xl:px-80"
      style={{
        background: 'linear-gradient(180deg, #E5EFFF 0%, #FFFFFF 100%)',
      }}
    >
      <div className="flex h-min w-[345px] flex-col justify-center gap-6 lg:h-min lg:w-1/2 lg:gap-8">
        <div className="flex w-full flex-col justify-center gap-4 lg:gap-8">
          <div className="flex flex-col justify-center gap-4">
            <h1 className="w-full text-30 font-semibold leading-tight text-gray-100 lg:text-3xl">
              <HighlightText text={textContent.title} />
            </h1>
            <h2 className="text-lg leading-tight text-gray-55 lg:w-[600px] lg:text-2xl">{textContent.subtitle}</h2>
          </div>

          <div className="flex flex-col justify-center gap-1 lg:gap-2">
            {textContent.features.map((feat: string) => (
              <div key={feat} className="flex h-[24px] flex-row items-center gap-2">
                <Check className="hidden text-green-1 xs-md:block" weight="bold" size={24} />
                <Check className="block text-green-1 xs-md:hidden" weight="bold" size={20} />
                <p className="text-left text-sm font-semibold text-gray-100 lg:text-lg">{feat}</p>
              </div>
            ))}
          </div>
        </div>
        <Link
          href={'/pricing'}
          className="z-10 flex items-center justify-center whitespace-nowrap rounded-sm-6 bg-primary py-4 text-base font-medium text-white hover:bg-primary-dark lg:w-[177px]"
        >
          {textContent.cta}
        </Link>
      </div>
      <div className="hidden w-full justify-end lg:flex">
        <Image
          src={getImage('/images/reviews/hero.webp')}
          alt="Reviews Herosection image"
          height={53801}
          width={521}
          quality={100}
          className="flex-shrink-0"
        />
      </div>
    </section>
  );
}
