/* eslint-disable no-nested-ternary */
import RevealY from '@/components/components/RevealY';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import Link from 'next/link';

const FirstFeaturesSection = ({ textContent, lang }) => {
  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="relative mx-auto flex max-w-screen-2xl flex-col">
        <div className="flex flex-col items-center gap-8">
          <div className="flex w-full max-w-3xl flex-col items-center gap-6 px-6 text-center font-semibold text-black">
            <h2 className="text-4xl font-semibold sm:text-5xl sm:leading-tight">{textContent.title}</h2>
            <h3 className="max-w-3xl text-xl font-semibold text-gray-100">{textContent.subtitle}</h3>
            <p className="text-xl font-normal text-gray-80">{textContent.description}</p>
          </div>

          <Link
            href={'/pricing'}
            rel="noopener noreferrer"
            className="flex rounded-lg bg-primary px-5 py-3 text-white hover:bg-primary-dark"
          >
            {textContent.cta}
          </Link>

          <RevealY className="content flex h-full w-full flex-col px-5 pt-6">
            <Image
              src={getImage('/images/home/internxt_secure_cloud_storage.webp')}
              alt="Internxt secure cloud storage"
              draggable={false}
              loading="lazy"
              width={1920}
              height={1080}
            />
          </RevealY>
        </div>
      </div>
    </section>
  );
};

export default FirstFeaturesSection;
