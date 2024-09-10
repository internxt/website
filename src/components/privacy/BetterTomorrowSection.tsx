import Image from 'next/legacy/image';
import { CaretRight, ShieldStar } from '@phosphor-icons/react';
import RevealX from '@/components/components/RevealX';
import Link from 'next/link';

const BetterTomorrowSection = ({ textContent, lang }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col-reverse items-center justify-center px-5 pb-20 pt-16 text-center md:flex-row md:space-x-24 md:space-y-0 md:text-start">
        <div className="flex flex-col rounded-3xl pt-10 md:pt-0">
          <Image
            src="/images/privacy/encrypted-file-storage.webp"
            width={496}
            height={520}
            quality={100}
            layout="intrinsic"
            className="rounded-3xl"
            alt="encrypted file storage"
            draggable={false}
          />
        </div>
        <RevealX
          direction="left"
          className="flex max-w-[390px] flex-col items-center justify-center space-y-6 md:items-start"
        >
          <ShieldStar size={60} className="text-primary" />
          <p className="mb-6 text-4xl font-semibold sm:text-5xl sm:leading-tight">{textContent.title}</p>
          <p className="text-xl">{textContent.description}</p>

          <Link
            href={'/'}
            hrefLang={lang}
            className="flex cursor-pointer flex-row items-center justify-center space-x-1 text-primary hover:text-primary-dark hover:underline"
          >
            <p className="text-lg font-semibold">{textContent.cta}</p>
            <CaretRight size={14} weight="bold" />
          </Link>
        </RevealX>
      </div>
    </section>
  );
};

export default BetterTomorrowSection;
