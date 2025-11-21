import { HighlightText } from '@/components/components/HighlightText';
import { getImage } from '@/lib/getImage';
import { Check } from '@phosphor-icons/react';
import Image from 'next/image';

interface HeroSectionProps {
  textContent: {
    title: string;
    description: string;
    features: string[];
  };
}

export const HeroSection = ({ textContent }: HeroSectionProps) => {
  return (
    <section
      className="relative flex w-full flex-col items-center justify-center px-5 py-8 pt-28 lg:flex-row lg:gap-12 lg:p-20 lg:px-10  xl:px-32 3xl:px-80"
      style={{ background: 'linear-gradient(180deg, #E5EFFF 0%, #FFFFFF 100%)' }}
    >
      <div className="absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 lg:left-32 lg:right-32" />

      <div className="relative w-full py-20 ">
        <div className="absolute inset-0 z-10 translate-x-96 translate-y-20 transform lg:w-full">
          <Image
            src={getImage(`/images/datacenters-and-certifications/datacenters-hero.webp`)}
            alt="Internxt data centers and certifications"
            width={841}
            height={200}
            quality={100}
            className="h-[393px] w-full"
          />
          <Image
            src={getImage(`/images/datacenters-and-certifications/datacenters.webp`)}
            alt="Internxt data centers and certifications"
            width={433}
            height={200}
            quality={100}
            className="absolute right-96 top-2 h-[433px] w-[433px]"
          />
        </div>
        <div className="relative z-10 flex flex-col gap-8 self-start p-4 lg:w-1/2">
          <h1 className="whitespace-pre-line text-30 font-semibold leading-tight text-gray-95 lg:text-5xl">
            <HighlightText text={textContent.title} />
          </h1>
          <p className="whitespace-pre-line text-lg font-normal leading-tight text-gray-55 lg:text-xl">
            {textContent.description}
          </p>
          <ul className="flex flex-col gap-2">
            {textContent.features.map((feat) => (
              <li key={feat} className="flex items-center gap-2">
                <Check className="flex-shrink-0 text-green-1" weight="bold" size={24} />
                <span className="text-sm font-semibold text-gray-100 lg:text-lg">{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-6 lg:hidden">
        <div className="flex flex-col gap-4">
          <h1 className="whitespace-pre-line text-30 font-semibold leading-tight text-gray-95">
            <HighlightText text={textContent.title} />
          </h1>

          <p className="whitespace-pre-line text-lg font-normal leading-tight text-gray-55">
            {textContent.description}
          </p>
        </div>
      </div>
    </section>
  );
};
