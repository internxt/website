import RenderDescription from '../shared/RenderDescription';
import { DARK_MODE_ENABLED } from '@/theme.config';

export const FeaturesSection = ({ darkMode = DARK_MODE_ENABLED, textContent, lang }) => {
  return (
    <section className="overflow-hidden px-5 py-20">
      <div className="flex w-full flex-col items-center space-y-16">
        <div className="flex w-full flex-col items-center justify-center"></div>
        <div className="flex max-w-[672px] flex-col space-y-3">
          <p className={`text-2xl font-medium ${darkMode ? 'text-white-95' : 'text-gray-100'}`}>
            {textContent.howToConvert.title}
          </p>
          <p className={`text-lg ${darkMode ? 'text-cool-gray-30' : 'text-gray-80'}`}>
            {textContent.howToConvert.description}
          </p>
          <ul className="list-[square] space-y-1.5 pl-6 lg:max-w-2xl">
            {textContent.howToConvert.steps.map((feature) => (
              <li key={feature.step} className="text-lg text-primary">
                {feature.step}
                <span className={`${darkMode ? 'text-cool-gray-30' : 'text-gray-80'}`}> {feature.description}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex max-w-[672px] flex-col space-y-3">
          <p className={`text-2xl font-medium ${darkMode ? 'text-white-95' : 'text-gray-100'}`}>
            {textContent.whyConvert.title}
          </p>
          <RenderDescription description={textContent.whyConvert.paragraphs} />
        </div>
      </div>
    </section>
  );
};
