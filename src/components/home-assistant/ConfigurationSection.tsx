import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { HomeAssistantText } from '@/assets/types/home-assistant';

interface ConfigurationSectionProps {
  textContent: HomeAssistantText['ConfigurationSection'];
}

const ConfigurationSection = ({ textContent }: ConfigurationSectionProps): JSX.Element => {
  return (
    <section className="w-full bg-white py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
      <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-4 px-5 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8 lg:px-20 xl:gap-10">
        <h2 className="max-w-[930px] text-2xl font-bold leading-tight text-gray-100 xs:text-[26px] sm:text-3xl md:text-[34px] lg:pr-10 lg:text-[40px] xl:text-[44px] 2xl:text-5xl">
          {textContent.title}
        </h2>
        <p className="max-w-[800px] text-[15px] font-normal leading-tight text-gray-55 sm:text-base lg:text-[17px] xl:text-lg">
          {textContent.description}
        </p>
        <div className="flex w-full flex-col justify-center gap-4 sm:gap-5 md:gap-6 lg:flex-row lg:items-stretch lg:gap-8 xl:gap-12 2xl:gap-16">
          <div className="w-full min-w-0 lg:w-[56%] lg:flex-shrink-0">
            <Image
              src={getImage(`/images/home-assistant/configuration.webp`)}
              alt="configuration-image"
              height={500}
              width={780}
              className="h-auto w-full rounded object-contain"
            />
          </div>
          <div className="flex w-full min-w-0 flex-col gap-2 lg:flex-1">
            {textContent.accordionCard.titles.map((title: string, index: number) => (
              <div
                key={title}
                className="border-gray-300 flex flex-col justify-center gap-2 rounded-16 border bg-white p-3 text-left lg:flex-1 xl:gap-3 xl:p-4 2xl:gap-4 2xl:p-5"
              >
                <span className="flex flex-row items-center gap-3 text-base font-medium leading-none text-primary xl:gap-4 xl:text-xl 2xl:gap-5 2xl:text-2xl">
                  {index + 1}
                  <h3 className="text-sm font-medium leading-tight text-gray-100 lg:text-base xl:text-lg 2xl:text-xl">
                    {title}
                  </h3>
                </span>

                <div className="flex flex-col overflow-hidden text-xs leading-snug lg:text-sm 2xl:text-base">
                  {textContent.accordionCard.descriptions[index]}
                </div>
              </div>
            ))}
            <div className="flex flex-row flex-wrap gap-2 lg:flex-shrink-0 xl:gap-3">
              {textContent.features.map((title: string) => (
                <div
                  key={title}
                  className="flex flex-row rounded-32 border border-gray-20 bg-white p-2 text-left text-[11px] leading-none text-gray-80 lg:text-xs 2xl:p-3 2xl:text-sm"
                >
                  {title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfigurationSection;
