import Link from 'next/link';
import { parseDynamicText } from '@/components/utils/parse-dynamic-text';
import { HighlightText } from '@/components/components/HighlightText';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';

interface HeroSectionProps {
  darkMode?: boolean;
  textContent: any;
  percentage?: number;
  competitor: string;
}

export const HeroSection = ({
  darkMode = false,
  textContent,
  percentage,
  competitor,
}: HeroSectionProps) => {
  // HighlightText needs a plain string, and {{competitor}} is always known at render time.
  const parseText = (text: string) => (typeof text === 'string' ? text.replace(/{{competitor}}/g, competitor) : text);
  const parseDiscountText = (text?: string) =>
    parseDynamicText(text, { competitor, percentage, discount: percentage }, darkMode);

  return (
    <div className="flex h-min w-full flex-col items-center justify-between gap-8 px-5 py-8 pt-28 lg:h-min lg:flex-row lg:justify-center lg:p-20 lg:px-10 lg:pt-40 xl:px-32 3xl:px-80 bg-[linear-gradient(180deg,#E5EFFF_0%,#FFFFFF_100%)] dark:bg-[linear-gradient(180deg,#082D66_0%,#1C1C1C_100%)]">
      <div className="absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 dark:bg-gray-71 lg:left-32 lg:right-32"></div>
      <div className="hidden h-auto w-full justify-between lg:flex lg:h-min">
        <div className="flex h-full flex-col items-start justify-center gap-5 text-start lg:h-min lg:w-1/2 lg:text-start">
          <h1 className="flex text-30 font-semibold 2xl:whitespace-pre-line text-gray-95 dark:text-white-95 lg:text-5xl">
            <HighlightText text={parseText(textContent.title)} />
          </h1>

          <p className="text-start text-base font-normal leading-tight text-gray-55 dark:text-green-120 lg:text-xl 2xl:whitespace-pre-line">
            {textContent.description}
          </p>

          <p className="items-center justify-center text-lg font-semibold text-gray-95 dark:text-white-95 lg:text-2xl">
            {parseDiscountText(textContent.getPrivacy)}
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
          <p className="whitespace-pre-line text-30 font-semibold leading-tight text-gray-95 dark:text-white-95 lg:text-5xl">
            <HighlightText text={parseText(textContent.title)} />
          </p>

          <p className="text-start text-base font-normal leading-tight text-gray-55 dark:text-green-120 lg:text-xl">
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
          <p className="items-center justify-center whitespace-pre-line text-lg font-semibold text-gray-95 dark:text-white-95 lg:text-2xl">
            {parseDiscountText(textContent.getPrivacy)}
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
