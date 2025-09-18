import SignUpBanner from '@/components/banners/SignUpBanner';
import RenderDescription from '@/components/shared/RenderDescription';
import { Browsers, CopySimple, FolderSimpleDashed, Keyhole, Planet, UserCircleMinus } from '@phosphor-icons/react';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';

export const FeaturesSection = ({ textContent, bannerText, lang }) => {
  const cards = [
    {
      icon: FolderSimpleDashed,
      title: textContent.cards[0].title,
      description: textContent.cards[0].description,
    },
    {
      icon: Keyhole,
      title: textContent.cards[1].title,
      description: textContent.cards[1].description,
    },
    {
      icon: UserCircleMinus,
      title: textContent.cards[2].title,
      description: textContent.cards[2].description,
    },
    {
      icon: Browsers,
      title: textContent.cards[3].title,
      description: textContent.cards[3].description,
    },
    {
      icon: Planet,
      title: textContent.cards[4].title,
      description: textContent.cards[4].description,
    },
    {
      icon: CopySimple,
      title: textContent.cards[5].title,
      description: textContent.cards[5].description,
    },
  ];

  const languageForImage = ['zh', 'zh-tw', 'ru', 'en'].includes(lang) ? 'en' : lang;

  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center space-y-16 px-5 py-16">
        <SignUpBanner textContent={bannerText} lang={'en'} />
        {/* Text sections */}
        <div className="flex max-w-[672px] flex-col space-y-16">
          <div className="flex flex-col space-y-3">
            <p className="text-2xl font-medium text-gray-100">{textContent.inxtFileConverter.title}</p>
            <RenderDescription description={textContent.inxtFileConverter.description} />
          </div>
          <div className="flex flex-col space-y-3">
            <p className="text-2xl font-medium text-gray-100">{textContent.howUseFileConverter.title}</p>
            <ul className="list-[square] space-y-1.5 pl-6 lg:max-w-2xl">
              {textContent.howUseFileConverter.steps.map((feature) => (
                <li key={feature.step} className="text-lg text-primary">
                  {feature.step}
                  <span className="text-gray-80"> {feature.description}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl font-medium text-gray-100">{textContent.whyUseFileConverter.title}</p>
            <p className="text-lg text-gray-80">{textContent.whyUseFileConverter.description}</p>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 flex-row flex-wrap justify-center gap-8 sm:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`flex flex-col items-start justify-start rounded-2xl bg-gray-1 p-8 sm:p-10 md:max-w-[488px]`}
            >
              <card.icon className="mb-6 text-4xl text-primary" size={32} />
              <div className="flex w-full max-w-[408px] flex-col">
                <p className="mb-6 text-2xl font-medium text-gray-100">{card.title}</p>
                <p className="text-base text-gray-80 sm:text-lg">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
