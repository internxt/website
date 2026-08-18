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
        <h2 className="ha-config-title max-w-[930px] text-[30px] font-bold leading-tight text-gray-100 lg:pr-10 lg:text-5xl xl:text-6xl">
          {textContent.title}
        </h2>
        <p className="max-w-[800px] text-base font-normal leading-tight text-gray-55 lg:text-lg">
          
          {textContent.description}
        </p>
        <div className="flex w-full flex-col justify-center gap-6 lg:flex-row lg:items-stretch lg:gap-16">
              <div className="w-full min-w-0 lg:w-[56%] lg:flex-shrink-0 lg:-ml-6 xl:-ml-12 xl:h-[620px] xl:flex xl:items-center">
            <Image
              src={getImage(`/images/home-assistant/configuration.webp`)}
              alt="configuration-image"
              height={500}
              width={780}
              className="h-full w-full rounded object-contain"
            />
          </div>
              <div className="flex w-full min-w-0 flex-col gap-2 lg:flex-1 lg:justify-between lg:gap-4">
            {textContent.accordionCard.titles.map((title: string, index: number) => (
              <div key={title} className="ha-config-card border-gray-300 flex flex-col gap-2 rounded-16 border bg-white p-3 text-left lg:gap-4 lg:p-5 xl:gap-6 xl:p-6">
                <span className="flex flex-row items-center gap-3 text-base font-medium text-primary lg:gap-4 lg:text-xl xl:gap-6 xl:text-2xl">
                  {index + 1}
                  <h3 className="text-sm font-medium text-gray-100 lg:text-base xl:text-xl">{title}</h3>
                </span>

                <div className="flex flex-col overflow-hidden text-xs leading-snug lg:text-sm xl:text-base">
                  {textContent.accordionCard.descriptions[index]}
                </div>
              </div>
            ))}
            <div className="flex flex-row flex-wrap gap-2 lg:gap-3">
              {textContent.features.map((title: string) => (
                <div
                  key={title}
                  className="ha-config-feature flex flex-row gap-3 rounded-32 border border-gray-20 bg-white p-2 text-left text-[11px] text-gray-80 lg:text-xs xl:text-sm xl:p-3"
                >
                  {title}
                </div>
              ))}
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <style jsx>{`
          @media (min-width: 1025px) and (max-width: 1380px) {
          .ha-config-image {
            height: 560px;
            display: flex;
            align-items: center;
          }
            .ha-config-right {
              height: 560px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
          .ha-config-card {
            padding: 0.75rem !important;
            gap: 0.5rem !important;
          }
          .ha-config-card h3 {
            font-size: 1rem !important;
          }
          .ha-config-title {
            font-size: 2.6rem !important;
          }
          .ha-config-feature {
            padding: 0.4rem !important;
            font-size: 12px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ConfigurationSection;
