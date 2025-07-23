import { getImage } from '@/lib/getImage';
import SignUpBanner from '../banners/SignUpBanner';
import Image from 'next/legacy/image';
const FeaturesSection = ({ textContent, bannerText, lang }) => {
  const languageForImage = ['zh', 'zh-tw', 'ru', 'en'].includes(lang) ? 'en' : lang;
  return (
    <section className="relative bg-gray-1 ">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center space-y-5 px-5 lg:p-16">
        <div className="flex w-full flex-col items-center justify-center pb-16">
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
        <div className="flex w-full flex-col items-center justify-center">
          <SignUpBanner textContent={bannerText} lang={lang} />

          <div className="mb-12 w-full max-w-3xl space-y-8 pt-10">
            <h1 className="mb-4 text-3xl font-bold">{textContent.hero.title}</h1>
            {textContent.hero.description.map((paragraph, index) => (
              <p key={index} className="text-gray-700 text-lg">
                {paragraph}
              </p>
            ))}
            <div className="flex w-full flex-col items-center justify-center pb-16">
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
            <div className="mt-12">
              <h2 className="mb-6 text-3xl font-bold">{textContent.howToUse.title}</h2>
              <ul className="space-y-3">
                {textContent.howToUse.steps.map((step) => (
                  <li key={step.step} className="flex items-start text-lg">
                    <div className="mr-3 mt-3 h-1 w-1 flex-shrink-0 bg-primary"></div>
                    <div className="flex flex-1 flex-shrink-0">
                      <span className="mr-2 whitespace-nowrap text-lg font-medium text-primary">Step {step.step}:</span>
                      <span className="text-lg">{step.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex w-full flex-col items-center justify-center pb-16">
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
            <div className="mt-12">
              <h2 className="mb-6 text-3xl font-bold">{textContent.whatIs.title}</h2>
              {textContent.whatIs.description.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-gray-700 text-lg ${index < textContent.whatIs.description.length - 1 ? 'mb-4' : ''}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div id="incontent_2" className="flex w-full max-w-[1000px] justify-center"></div>
      </div>
    </section>
  );
};

export default FeaturesSection;
