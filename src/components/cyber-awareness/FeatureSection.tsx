import { FileArrowDown } from '@phosphor-icons/react';
import Image from 'next/legacy/image';
import RevealX from '@/components/components/RevealX';

const FeatureSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden bg-gray-1 px-5">
      <div className="flex flex-col-reverse items-center justify-center space-y-10 space-y-reverse py-20 lg:flex-row lg:space-y-0 lg:space-x-20">
        <Image
          src={'/images/cyber-awareness/cyber-awareness-info.png'}
          alt="Cyber Awareness info"
          width={496}
          height={520}
          draggable={false}
        />
        <RevealX
          direction="left"
          className="flex w-full max-w-[388px] flex-col items-center space-y-7 text-center lg:items-start lg:text-left"
        >
          <div className="flex rounded-lg bg-gray-5 py-2 px-4">
            <p className="text-xl font-medium text-gray-100">{textContent.label}</p>
          </div>
          <FileArrowDown size={44} className="text-primary" />
          <div className="flex flex-col items-center space-y-6 lg:items-start">
            <p className="text-5xl font-semibold text-gray-100">{textContent.title}</p>
            <p className="text-xl text-gray-80">{textContent.description}</p>
            <a href="/images/cyber-awareness/Internxt-Checklist.pdf" download={true}>
              <button className="rounded-lg bg-primary px-6 py-2 font-medium text-white hover:bg-primary-dark">
                {textContent.cta}
              </button>
            </a>
          </div>
        </RevealX>
      </div>
    </section>
  );
};

export default FeatureSection;
