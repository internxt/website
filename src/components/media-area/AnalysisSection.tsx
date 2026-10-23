import { EyeSlash, FileCloud, FileLock, Key, ShieldCheck, TrendUp } from '@phosphor-icons/react';
import { DARK_MODE_ENABLED } from '@/theme.config';

const AnalysisSection = ({ darkMode = DARK_MODE_ENABLED, textContent }) => {
  const iconSize = 32;
  const tipIcons = [
    <FileCloud size={iconSize} key={'File Cloud'} />,
    <FileLock size={iconSize} key={'File clock'} />,
    <TrendUp size={iconSize} key={'Trend Up'} />,
    <EyeSlash size={iconSize} key={'Eye Slash'} />,
    <ShieldCheck size={iconSize} key={'Shield Check'} />,
    <Key size={iconSize} key={'Key Icon'} />,
  ];

  return (
    <section className={`overflow-hidden ${darkMode ? 'bg-gray-105' : 'bg-gray-1'}`}>
      <div className="flex flex-col items-center justify-center space-y-16 px-5 py-20">
        <div className="flex max-w-[774px] flex-col space-y-4 text-center">
          <p className={`text-5xl font-semibold ${darkMode ? 'text-white-95' : 'text-gray-100'}`}>
            {textContent.title}
          </p>
          <p className={`text-xl ${darkMode ? 'text-cool-gray-30' : 'text-gray-80'}`}>{textContent.description}</p>
        </div>
        <div className="grid auto-rows-auto grid-cols-1 gap-5 px-1 sm:grid-cols-2 lg:max-w-max lg:grid-cols-3">
          {textContent.cards.map((tip, index) => (
            <div
              key={tip}
              className={`flex flex-col items-start space-y-3 rounded-2xl ${
                darkMode ? 'bg-[#1C1C1C]' : 'bg-white'
              } p-8 lg:h-full lg:max-w-[256px]`}
            >
              <p className="flex flex-col text-primary">{tipIcons[index]}</p>
              <p className="text-2xl">{tip}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnalysisSection;
