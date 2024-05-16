/* eslint-disable no-nested-ternary */
import RevealY from '@/components/components/RevealY';
import Image from 'next/image';
import { SIGNUP_DRIVE_WEB_URL } from '@/constants';

const FirstFeaturesSection = ({ textContent, lang }) => {
  return (
    <section className="overflow-hidden bg-gray-1">
      <div className="relative mx-auto flex max-w-screen-2xl flex-col">
        <div className="flex flex-col items-center py-16">
          <div className="mb-8 flex flex-col items-center px-6 text-center font-semibold text-black">
            <h2 className="mb-6 text-4xl font-semibold sm:text-5xl sm:leading-tight">
              {textContent.title.line1}
              <br className="hidden sm:flex" /> {textContent.title.line2}
            </h2>
            <h3 className="mb-6 w-full max-w-3xl text-xl font-normal">{textContent.subtitle}</h3>
          </div>

          <button
            className="flex rounded-lg bg-primary px-5 py-3 text-white hover:bg-primary-dark"
            onClick={() => {
              window.open(SIGNUP_DRIVE_WEB_URL, '_blank', 'noopener noreferrer');
            }}
          >
            {textContent.cta}
          </button>

          <RevealY className="content flex h-full w-full flex-col px-5 pt-6">
            <Image
              src="/images/home/internxt_secure_cloud_storage.webp"
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
