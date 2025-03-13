import { ShieldStar } from '@phosphor-icons/react';
import Image from 'next/legacy/image';
import RevealX from '@/components/components/RevealX';
import { goToSignUpURL } from '@/lib/auth';

const FeatureSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden py-20">
      <div className="flex flex-col items-center justify-center px-5 lg:flex-row lg:space-x-20">
        <RevealX direction="right">
          <Image
            src="/images/drive/secure-file-storage.webp"
            width={496}
            height={520}
            quality={100}
            draggable={false}
            alt="Protect your data"
          />
        </RevealX>
        <RevealX
          direction="left"
          className="flex w-full max-w-[388px] flex-col items-center space-y-6 pt-8 text-center lg:items-start lg:pt-0 lg:text-start"
        >
          <ShieldStar size={64} className="text-primary" weight="light" />
          <p className=" text-4xl font-semibold text-gray-100 lg:text-5xl">{textContent.title}</p>
          <p className="text-xl text-gray-80">{textContent.description}</p>
          <button
            className="flex w-max items-center rounded-lg bg-primary px-5 py-3 font-medium text-white"
            onClick={() => {
              goToSignUpURL();
            }}
          >
            {textContent.cta}
          </button>
        </RevealX>
      </div>
    </section>
  );
};

export default FeatureSection;
