import Image from 'next/legacy/image';
import RevealX from '@/components/components/RevealX';
import { goToSignUpURL } from '@/lib/auth';

const FeatureSection = ({ textContent, IconComponent }) => {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Icon with replaceable component */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center justify-center w-32 h-32 rounded-2xl bg-gradient-to-br from-[#A7C5FD] to-[#0052D4] shadow-xl">
          <IconComponent size={64} className="text-white"  />
        </div>
      </div> */}

      <div className="relative flex flex-col items-center justify-center px-5 lg:flex-row lg:space-x-20 z-10">
        

        <RevealX
          direction="right"
          className="flex w-full max-w-[388px] flex-col items-center space-y-6 pt-8 text-center lg:items-start lg:pt-0 lg:text-start"
        >
          <IconComponent size={64} className="text-white flex items-center justify-center w-22 h-22 rounded-2xl bg-gradient-to-br from-[#A7C5FD] to-[#0052D4] shadow-xl p-3" weight="light" />
          <p className="text-4xl font-semibold text-gray-100 lg:text-5xl">{textContent.title}</p>
          <p className="text-xl text-gray-80">{textContent.description}</p>
          {/* <button
            className="flex w-max items-center rounded-lg bg-primary px-5 py-3 font-medium text-white"
            onClick={() => goToSignUpURL()}
          >
            {textContent.cta}
          </button> */}
        </RevealX>

        <RevealX direction="left">
          <Image
            src="/images/drive/secure-file-storage.webp"
            width={496}
            height={520}
            quality={100}
            draggable={false}
            alt="Protect your data"
          />
        </RevealX>
      </div>
    </section>
  );
};

export default FeatureSection;
