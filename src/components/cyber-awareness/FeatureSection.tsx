import { FileArrowDown } from '@phosphor-icons/react';
import Image from 'next/image';
import RevealX from '@/components/components/RevealX';
import { DARK_MODE_ENABLED } from '@/theme.config';

const FeatureSection = ({ darkMode = DARK_MODE_ENABLED, textContent }) => {
  return (
    <section className={`overflow-hidden ${darkMode ? 'bg-gray-105' : 'bg-gray-1'} px-5`}>
      <div className="flex flex-col-reverse items-center justify-center space-y-10 space-y-reverse py-20 lg:flex-row lg:space-x-20 lg:space-y-0">
        <Image
          src={'/images/cyber-awareness/cyber-awareness-info.png'}
          alt="Cyber Awareness info"
          width={496}
          height={520}
          draggable={false}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
        <RevealX
          direction="left"
          className="flex w-full max-w-[388px] flex-col items-center space-y-7 text-center lg:items-start lg:text-left"
        >
          <div className={`flex rounded-lg ${darkMode ? 'bg-gray-105' : 'bg-gray-5'} px-4 py-2`}>
            <p className={`text-xl font-medium ${darkMode ? 'text-white-95' : 'text-gray-100'}`}>{textContent.label}</p>
          </div>
          <FileArrowDown size={44} className="text-primary" />
          <div className="flex flex-col items-center space-y-6 lg:items-start">
            <p className={`text-5xl font-semibold ${darkMode ? 'text-white-95' : 'text-gray-100'}`}>
              {textContent.title}
            </p>
            <p className={`text-xl ${darkMode ? 'text-cool-gray-30' : 'text-gray-80'}`}>{textContent.description}</p>
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
