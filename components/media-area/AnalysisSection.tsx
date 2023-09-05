import { EyeSlash, FileCloud, FileLock, Key, ShieldCheck, TrendUp } from '@phosphor-icons/react';

const AnalysisSection = ({ textContent }) => {
  const iconSize = 32;
  const tipIcons = [
    <FileCloud size={iconSize} />,
    <FileLock size={iconSize} />,
    <TrendUp size={iconSize} />,
    <EyeSlash size={iconSize} />,
    <ShieldCheck size={iconSize} />,
    <Key size={iconSize} />,
  ];

  return (
    <section className="overflow-hidden bg-gray-1">
      <div className="flex flex-col items-center justify-center space-y-16 py-20 px-5">
        <div className="flex max-w-[774px] flex-col space-y-4 text-center">
          <p className="text-5xl font-semibold text-gray-100">{textContent.title}</p>
          <p className="text-xl text-gray-80">{textContent.description}</p>
        </div>
        <div className="grid auto-rows-auto grid-cols-1 gap-5 px-1 sm:grid-cols-2 lg:max-w-max lg:grid-cols-3">
          {textContent.cards.map((tip, index) => (
            <div
              key={tip}
              className="flex flex-col items-start space-y-3 rounded-2xl bg-white p-8 lg:h-full lg:max-w-[256px]"
            >
              <p className="flex flex-col text-primary">{tipIcons[index]}</p>
              <p className="text-2xl font-medium">{tip}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnalysisSection;
