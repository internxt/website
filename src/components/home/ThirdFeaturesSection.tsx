import Image from 'next/legacy/image';
import { Gift } from '@phosphor-icons/react';
import RevealX from '@/components/components/RevealX';
import { getImage } from '@/lib/getImage';
import Link from 'next/link';
import { SIGNUP_DRIVE_WEB } from '@/constants';

interface ThirdFeaturesSectionProps {
  textContent: Record<string, any>;
}

const ThirdFeaturesSection = ({ textContent }: ThirdFeaturesSectionProps): JSX.Element => {
  return (
    <section className="overflow-hidden bg-gray-1">
      <div className="flex flex-col-reverse items-center justify-center px-5 pt-16 pb-20 text-center md:flex-row md:space-y-0 md:space-x-24 md:text-start">
        <RevealX direction="right" className="flex flex-col rounded-3xl pt-10 md:pt-0">
          <Image
            src={getImage('/images/home/Online-privacy-services.webp')}
            width={496}
            height={520}
            quality={100}
            loading="lazy"
            layout="intrinsic"
            className="rounded-3xl"
            alt="Only privacy services image"
          />
        </RevealX>
        <RevealX
          direction="left"
          className="flex max-w-[390px] flex-col items-center justify-center space-y-6 md:items-start"
        >
          <Gift size={60} className="text-primary" />
          <p className="mb-6 text-4xl font-semibold sm:text-5xl sm:leading-tight">{textContent.title}</p>
          <p className="text-xl">{textContent.description}</p>
          <div>
            <Link
              href={SIGNUP_DRIVE_WEB}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-primary px-5 py-3 text-white hover:bg-primary-dark"
            >
              {textContent.cta}
            </Link>
          </div>
        </RevealX>
      </div>
    </section>
  );
};

export default ThirdFeaturesSection;
