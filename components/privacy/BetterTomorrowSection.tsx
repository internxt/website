import Image from 'next/image';
import { CaretRight, ShieldStar } from 'phosphor-react';
import RevealX from '../components/RevealX';

const BetterTomorrowSection = ({ textContent, lang }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col-reverse items-center justify-center px-5 pt-16 pb-20 text-center md:flex-row md:space-y-0 md:space-x-24 md:text-start">
        <div className="flex flex-col rounded-3xl pt-10 md:pt-0">
          <Image
            src="/images/privacy/encrypted-file-storage.png"
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

          <div
            className="flex cursor-pointer flex-row items-center justify-center space-x-1 text-primary hover:text-primary-dark hover:underline"
            onClick={() => {
              window.open(`https://internxt.com/${lang}`, '_blank');
            }}
          >
            <p className="text-xl font-semibold">{textContent.cta}</p>
            <CaretRight size={14} weight="bold" />
          </div>
        </RevealX>
      </div>
    </section>
  );
};

export default BetterTomorrowSection;
