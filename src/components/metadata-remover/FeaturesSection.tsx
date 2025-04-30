import Image from 'next/legacy/image';
import SignUpBanner from '../banners/SignUpBanner';
import { getImage } from '@/lib/getImage';

const FeaturesSection = ({ textContent, bannerText, lang }) => {
  const languageForImage = ['zh', 'zh-tw', 'ru', 'en'].includes(lang) ? 'en' : lang;

  return (
    <section className="relative bg-gray-1 py-20 lg:pb-0 lg:pt-10">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center space-y-5 px-5 lg:p-16">
        <div className="flex w-full flex-col items-center justify-center">
          <SignUpBanner textContent={bannerText} lang={lang} />
          <div className="flex w-full flex-col items-center justify-center pt-10">
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
          <div className="mb-12 w-full max-w-3xl space-y-8">
            <h1 className="mb-4 text-3xl font-bold">{textContent.hero.title}</h1>
            {textContent.hero.description.map((paragraph, index) => (
              <p key={index} className="text-gray-700">
                {paragraph}
              </p>
            ))}

            <div className="mt-12">
              <h2 className="mb-6 text-2xl font-bold">{textContent.howToUse.title}</h2>
              <ul className="space-y-3">
                {textContent.howToUse.steps.map((step) => (
                  <li key={step.step} className="flex items-start">
                    <span className="mr-2 font-medium text-primary">Step {step.step}:</span>
                    {step.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="mb-6 text-2xl font-bold">{textContent.whatIs.title}</h2>
              {textContent.whatIs.description.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-gray-700 ${index < textContent.whatIs.description.length - 1 ? 'mb-4' : ''}`}
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
