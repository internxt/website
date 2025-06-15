import SignUpBanner from '@/components/banners/SignUpBanner';
import RenderDescription from '@/components/shared/RenderDescription';
import { Detective, File, FileZip, LockSimple, Tray, UploadSimple } from '@phosphor-icons/react';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';

export const FeaturesSection = ({ textContent, bannerText, lang }) => {
  const cards = [
    {
      icon: File,
      title: textContent.cards[0].title,
      description: textContent.cards[0].description,
    },
    {
      icon: LockSimple,
      title: textContent.cards[1].title,
      description: textContent.cards[1].description,
    },
    {
      icon: Tray,
      title: textContent.cards[2].title,
      description: textContent.cards[2].description,
    },
    {
      icon: Detective,
      title: textContent.cards[3].title,
      description: textContent.cards[3].description,
    },
    {
      icon: FileZip,
      title: textContent.cards[4].title,
      description: textContent.cards[4].description,
    },
    {
      icon: UploadSimple,
      title: textContent.cards[5].title,
      description: textContent.cards[5].description,
    },
  ];

  const languageForImage = ['zh', 'zh-tw', 'ru', 'en'].includes(lang) ? 'en' : lang;

  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center space-y-16 px-5 py-16">
        <div className="flex w-full flex-col items-center justify-center">
          <Image
            src={getImage(`/banners/Ban_Internext_728x90_${languageForImage}.jpg`)}
            alt="File Arrow Up icon"
            width={800}
            height={110}
            quality={100}
            style={{ cursor: 'pointer' }}
            onClick={() =>
              window.open(
                `https://www.bitdefender.com/pages/consumer/${languageForImage}/new/trial/ts-trial-3m/internxt/`,
                '_blank',
                'noopener noreferrer',
              )
            }
          />
        </div>
        <SignUpBanner textContent={bannerText} lang={'en'} />
        {/* Text sections */}
        <div className="flex max-w-[832px] flex-col space-y-16">
          <div className="flex flex-col space-y-3">
            <p className="text-2xl font-medium text-gray-100">{textContent.inxtFileConverter.title}</p>
            <RenderDescription description={textContent.inxtFileConverter.description} />
          </div>
          <div className="flex flex-col space-y-3">
            <p className="text-2xl font-medium text-gray-100">{textContent.howUseFileConverter.title}</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {textContent.howUseFileConverter.steps.map((feature, idx) => (
                <div key={feature.step} className="flex flex-col items-start rounded-xl bg-gray-1 p-6 shadow-md">
                  <span className="mb-2 text-2xl font-bold text-primary">{idx + 1}</span>
                  <span className="text-base text-gray-80">{feature.description}</span>
                </div>
              ))}
            </div>
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
              className={`flex flex-col items-start justify-start rounded-2xl bg-gray-1 p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl sm:p-10 md:max-w-[488px]`}
            >
              <div className="flex w-full max-w-[408px] flex-col">
                <div className="flex w-full flex-row items-center justify-between">
                  <p className="mb-6 text-2xl font-medium text-gray-100">{card.title}</p>
                  <card.icon className="mb-6 text-4xl text-primary" size={40} />
                </div>
                <p className="text-base text-gray-80 sm:text-lg">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <Image
            src={getImage(`/banners/Ban_Internext_728x90_${languageForImage}.jpg`)}
            alt="File Arrow Up icon"
            width={800}
            height={110}
            quality={100}
            style={{ cursor: 'pointer' }}
            onClick={() =>
              window.open(
                `https://www.bitdefender.com/pages/consumer/${languageForImage}/new/trial/ts-trial-3m/internxt/`,
                '_blank',
                'noopener noreferrer',
              )
            }
          />
        </div>
      </div>
    </section>
  );
};
