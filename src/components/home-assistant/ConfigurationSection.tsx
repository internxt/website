import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { HomeAssistantText } from '@/assets/types/home-assistant';

interface ConfigurationSectionProps {
  textContent: HomeAssistantText['ConfigurationSection'];
}

const ConfigurationSection = ({ textContent }: ConfigurationSectionProps): JSX.Element => {
  return (
    <section className="w-full bg-white py-10 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-8 px-5 lg:gap-10 lg:px-20">
        <h2 className="max-w-[1000px] text-[30px] font-bold leading-tight text-gray-100 lg:pr-10 lg:text-5xl">
          {textContent.title}
        </h2>
        <p className="max-w-[900px] text-base font-normal leading-tight text-gray-55 lg:text-lg">
          {textContent.description}
        </p>
        <div className="flex w-full flex-col justify-center gap-6 lg:flex-row lg:gap-16">
          <Image
            src={getImage(`/images/home-assistant/configuration.webp`)}
            alt="configuration-image"
            height={500}
            width={780}
            className="h-auto w-full min-w-0 max-w-[780px] rounded"
          />
          <div className="flex w-full min-w-0 flex-col gap-6 lg:max-w-[500px]">
            {textContent.accordionCard.titles.map((title: string, index: number) => (
              <div key={title} className="border-gray-300 flex flex-col gap-6 rounded-16 border bg-white p-8 text-left">
                <span className="flex flex-row items-center gap-4 text-2xl font-medium text-primary">
                  {index + 1}
                  <h3 className="text-lg font-medium text-gray-100 lg:text-xl">{title}</h3>
                </span>

                <div className="flex flex-col overflow-hidden text-sm lg:text-base">
                  {textContent.accordionCard.descriptions[index]}
                </div>
              </div>
            ))}
            <div className="flex flex-row flex-wrap gap-4">
              {textContent.features.map((title: string) => (
                <div
                  key={title}
                  className="flex flex-row gap-6 rounded-32 border border-gray-20 bg-white p-2 text-left text-gray-80"
                >
                  {title}
                </div>
              ))}
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfigurationSection;
