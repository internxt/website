import Link from 'next/link';
import { formatText } from '@/components/utils/format-text';
import { HighlightText } from '@/components/components/HighlightText';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';

interface HeroSectionProps {
  textContent: any;
  percentage: number;
  competitor: string;
}

export const HeroSection = ({ textContent, percentage, competitor }: HeroSectionProps) => {
  const parseText = (text: string) => (typeof text === 'string' ? text.replace(/{{competitor}}/g, competitor) : text);

  return (
    <div
      className="flex h-min w-full flex-col items-center justify-between gap-8 px-5 py-8 pt-28 lg:h-min lg:flex-row lg:justify-center lg:p-20 lg:px-10 lg:pt-40 xl:px-32 3xl:px-80"
      style={{ background: 'linear-gradient(180deg, #E5EFFF 0%, #FFFFFF 100%)' }}
    >
      <div className="absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 lg:left-32 lg:right-32"></div>
      <div className="hidden h-auto w-full justify-between lg:flex lg:h-min">
        <div className="flex h-full flex-col items-start justify-center gap-5 text-start lg:h-min lg:w-1/2 lg:text-start">
          <p className="text-30 font-semibold text-gray-95 lg:text-5xl">
            <HighlightText text={parseText(textContent.title)} />
          </p>

          <p className="whitespace-pre-line text-start text-base font-normal leading-tight text-gray-55 lg:text-xl">
            {textContent.description}
          </p>

          <p className="items-center justify-center text-lg font-semibold text-gray-95 lg:text-2xl">
            {formatText(parseText(textContent.getPrivacy), { percentage: percentage?.toString() ?? '70' })}
          </p>

          <Link
            href={'#billingButtons'}
            className="z-10 flex h-[48px] w-min items-center justify-center whitespace-nowrap rounded-sm-6 bg-primary px-6 text-base font-normal text-white hover:bg-primary-dark"
          >
            {textContent.cta}
          </Link>
        </div>
        <Image
          loading="lazy"
          src={getImage(`/images/comparison/Internxt-${competitor}.webp`)}
          draggable="false"
          alt={`Comparison between Internxt and ${competitor}`}
          width={470}
          height={120}
          quality={100}
          className="h-auto w-[470px] object-contain"
        />
      </div>

      <div className="flex lg:hidden">
        <div className="flex h-full flex-col items-start justify-center gap-5 text-start lg:h-min lg:w-1/2 lg:text-start">
          <p className="text-30 font-semibold text-gray-95 lg:text-5xl">
            <HighlightText text={parseText(textContent.title)} />
          </p>

          <p className="whitespace-pre-line text-start text-base font-normal leading-tight text-gray-55 lg:text-xl">
            {textContent.description}
          </p>
          <Image
            loading="lazy"
            src={getImage(`/images/comparison/Internxt-${competitor}.webp`)}
            draggable="false"
            alt={`Comparison between Internxt and ${competitor}`}
            width={508}
            height={166}
            quality={100}
          />
          <p className="items-center justify-center text-lg font-semibold text-gray-95 lg:text-2xl">
            {formatText(parseText(textContent.getPrivacy), { percentage: percentage?.toString() ?? '70' })}
          </p>

          <Link
            href={'#billingButtons'}
            className="z-10 flex h-[48px] w-full items-center justify-center whitespace-nowrap rounded-sm-6 bg-primary px-6 text-base font-normal text-white hover:bg-primary-dark"
          >
            {textContent.cta}
          </Link>
        </div>
      </div>
    </div>
  );
};
