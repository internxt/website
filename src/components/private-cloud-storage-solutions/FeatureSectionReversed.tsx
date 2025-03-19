import Image from 'next/legacy/image';
import RevealX from '@/components/components/RevealX';
import { goToSignUpURL } from '@/lib/auth';

const FeatureSectionReversed = ({ textContent, IconComponent }) => {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="relative z-10 flex flex-col items-start justify-center px-5 lg:flex-row lg:space-x-20">
        <RevealX
          direction="right"
          className="flex w-full max-w-[388px] flex-col items-center space-y-6 pt-8 text-center lg:items-start lg:pt-0 lg:text-start"
        >
          <IconComponent
            size={64}
            className="w-22 h-22 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#A7C5FD] to-[#0052D4] p-3 text-white shadow-xl"
            weight="light"
          />
          <p className="text-4xl font-semibold text-gray-100 lg:text-5xl">{textContent.title}</p>
          <p className="text-xl text-gray-80">
            {Array.isArray(textContent.description)
              ? textContent.description.map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                    <br />
                  </span>
                ))
              : textContent.description}
          </p>
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

export default FeatureSectionReversed;
