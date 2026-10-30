import { Asterisk } from '@phosphor-icons/react';
import SignUpBanner from '../banners/SignUpBanner';

const FirstBold = ({ text, className = '' }) => {
  if (!text) return null;
  const palabras = text.split(' ');
  return (
    <span className={className}>
      <span className="font-semibold">{palabras[0]}</span> {palabras.slice(1).join(' ')}
    </span>
  );
};

export const FeaturesSection = ({ darkMode = false, textContent, bannerText, lang }) => {
  return (
    <section className="overflow-hidden px-5 py-20 dark:bg-gray-95">
      <div className="flex w-full flex-col items-center space-y-8">
        <SignUpBanner textContent={bannerText} lang={'en'} darkMode={darkMode} />
        <div className="flex max-w-[832px] flex-col pt-16">
          <div className="flex flex-col">
            <p className="pb-4 text-center text-2xl font-medium text-gray-100 dark:text-white-95">
              {textContent.howToConvert.title}
            </p>
            <div className="flex flex-col">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {textContent.howToConvert.steps.map((feature, idx) => (
                  <div
                    key={feature.step}
                    className="flex w-[256px] flex-col items-start gap-6 rounded-xl bg-gray-1 dark:bg-gray-105 p-6 shadow-md"
                  >
                    <span className="mb-2 text-2xl font-medium text-primary">{idx + 1}</span>
                    <FirstBold
                      text={feature.description}
                      className="text-base text-gray-80 dark:text-cool-gray-30"
                    />
                  </div>
                ))}
              </div>
              <p className="pt-6 text-base text-gray-80 dark:text-cool-gray-30">
                {textContent.howToConvert.outro}
              </p>
            </div>
          </div>
        </div>
        <div className="flex max-w-[832px] flex-col">
          <p className="pb-4 text-2xl font-medium text-gray-100 dark:text-white-95">
            {textContent.whyConvert.title}
          </p>
          <p className="pb-1 text-base text-gray-80 dark:text-cool-gray-30">
            {textContent.whyConvert.intro}
          </p>
          <ul className="my-2 flex flex-col space-y-3 pl-10">
            {textContent.whyConvert.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-center space-x-2">
                <Asterisk size={20} className="mt-1 text-primary" />
                <span className="text-base text-gray-80 dark:text-cool-gray-30">{bullet}</span>
              </li>
            ))}
          </ul>
          <p className="pt-2 text-base text-gray-80 dark:text-cool-gray-30">
            {textContent.whyConvert.outro}
          </p>
        </div>
      </div>
    </section>
  );
};
