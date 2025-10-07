import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import styles from '@/components/privacy/HeroSection.module.scss';
import Link from 'next/link';
import { Check } from '@phosphor-icons/react';

const HighlightText = ({ text, className = '' }) => {
  const parts = text.split(/(\*\*.*?\*\*)/);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <span key={index} className="text-primary">
              {part.slice(2, -2)}
            </span>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
};

const HeroSection = ({ textContent }) => (
  <section
    className="flex h-min w-full flex-col items-center justify-center gap-8 pb-10 pt-28 lg:flex-row lg:gap-16 lg:pb-20 lg:pl-40 lg:pt-40"
    style={{ background: 'linear-gradient(360deg, #FFFFFF 0%, #E5EFFF 85.17%)' }}
  >
    <div
      className={`${styles.cleanerTitleAndOnePlan} z-20 flex h-min w-[360px] shrink-0 flex-col items-start justify-center gap-4 rounded-xl p-6 shadow-soft backdrop-blur-55 lg:h-min lg:w-[509px] lg:gap-8 lg:rounded-16 lg:p-8`}
    >
      <div className="flex h-min w-min flex-col rounded-2 border border-primary px-1">
        <p className="text-sm font-semibold text-primary lg:text-lg">{textContent.label}</p>
      </div>
      <p className="text-30 font-semibold leading-tight text-gray-100 lg:text-5xl">
        <HighlightText text={textContent.title} />
      </p>
      <p className="text-base font-normal leading-tight text-gray-55 lg:text-xl">{textContent.subtitle}</p>
      <div className="flex flex-col items-start justify-center gap-1 lg:gap-2">
        {textContent.features.map((feat) => (
          <div key={feat} className="flex h-[24px] flex-row items-center justify-center gap-2">
            <Check className="hidden text-green-dark xs-md:block" size={24} />
            <Check className="block text-green-dark xs-md:hidden" size={20} />
            <p className="text-left text-sm font-medium text-gray-55 xs-md:text-lg">{feat}</p>
          </div>
        ))}
      </div>
      <Link
        href={'/pricing'}
        className="z-10 flex h-min w-min items-center justify-center whitespace-nowrap rounded-sm-6 bg-primary px-6 py-4 text-base font-normal text-white hover:bg-primary-dark"
      >
        {textContent.cta}
      </Link>
    </div>
    <Image src={getImage('/images/NAS/NAS.webp')} alt="NAS Cloud Image" width={800} height={500} quality={100} />
  </section>
);

export default HeroSection;
