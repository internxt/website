import Link from 'next/link';
import { DARK_MODE_ENABLED } from '@/theme.config';

export const EncryptedVPNSection = ({ darkMode = DARK_MODE_ENABLED, textContent, bannerText }) => {
  return (
    <section
      className={`flex flex-col items-center justify-center space-y-12 overflow-hidden ${
        darkMode ? 'bg-gray-105' : 'bg-gray-1'
      } px-5 py-20`}
    >
      <div className="flex w-full max-w-[800px] flex-col items-center justify-center space-y-12 text-center">
        <h2 className={`text-4xl font-semibold ${darkMode ? 'text-white-95' : 'text-gray-100'} lg:text-5xl`}>
          {textContent.title}
        </h2>
        <div className="flex flex-col space-y-6">
          <p className={`text-2xl font-medium ${darkMode ? 'text-cool-gray-30' : 'text-gray-80'}`}>
            {textContent.subtitle}
          </p>
          <p className={`text-lg ${darkMode ? 'text-cool-gray-30' : 'text-gray-80'}`}>{textContent.description}</p>
        </div>
        <Link
          className="flex w-max rounded-lg bg-primary px-5 py-3 text-xl font-medium text-white hover:bg-primary-dark"
          href={'/pricing'}
        >
          {textContent.cta}
        </Link>
      </div>
    </section>
  );
};
