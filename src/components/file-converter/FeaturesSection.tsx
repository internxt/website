import RenderDescription from '../shared/RenderDescription';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';

export const FeaturesSection = ({ textContent, lang }) => {
  const languageForImage = ['zh', 'zh-tw', 'ru', 'en'].includes(lang) ? 'en' : lang;
  return (
    <section className="overflow-hidden px-5 py-20">
      <div className="flex w-full flex-col items-center space-y-16">
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
        <div className="flex max-w-[672px] flex-col space-y-3">
          <p className="text-2xl font-medium text-gray-100">{textContent.howToConvert.title}</p>
          <p className="text-lg text-gray-80">{textContent.howToConvert.description}</p>
          <ul className="list-[square] space-y-1.5 pl-6 lg:max-w-2xl">
            {textContent.howToConvert.steps.map((feature) => (
              <li key={feature.step} className="text-lg text-primary">
                {feature.step}
                <span className="text-gray-80"> {feature.description}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex max-w-[672px] flex-col space-y-3">
          <p className="text-2xl font-medium text-gray-100">{textContent.whyConvert.title}</p>
          <RenderDescription description={textContent.whyConvert.paragraphs} />
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
