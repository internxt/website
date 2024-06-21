/* eslint-disable no-nested-ternary */
import RevealY from '@/components/components/RevealY';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import Link from 'next/link';
import { SIGNUP_DRIVE_WEB } from '@/constants';

const FirstFeaturesSection = ({ textContent, lang }) => {
  return (
    <section className="overflow-hidden bg-white">
      <div className="relative mx-auto flex max-w-screen-2xl flex-col">
        <div className="flex flex-col items-center py-16">
          <div className="mb-8 flex flex-col items-center px-6 text-center font-semibold text-black">
            <h2 className="mb-6 text-4xl font-semibold sm:text-5xl sm:leading-tight">
              {textContent.title.line1}
              <br className="hidden sm:flex" /> {textContent.title.line2}
            </h2>
            <h3 className="mb-6 w-full max-w-3xl text-xl font-normal">{textContent.subtitle}</h3>
          </div>

          <Link
            href={SIGNUP_DRIVE_WEB}
            target="_blank"
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
