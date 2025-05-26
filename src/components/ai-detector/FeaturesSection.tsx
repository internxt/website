import Image from 'next/legacy/image';
import SignUpBanner from '../banners/SignUpBanner';
import { getImage } from '@/lib/getImage';

const FeaturesSection = ({ textContent, bannerText, lang }) => {
  const languageForImage = ['zh', 'zh-tw', 'ru', 'en'].includes(lang) ? 'en' : lang;
  return (
    <section className="relative bg-gray-1 py-20 lg:pb-0 lg:pt-10">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center space-y-5 px-5 lg:pt-6">
        <div className="flex w-full flex-col items-center justify-center ">
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
          <SignUpBanner textContent={bannerText} lang={lang} />
        </div>
        <div className="flex w-full max-w-[800px] flex-col space-y-8 pb-10 ">
          <div className=" p-4  ">
            <h2 className="mb-2 text-2xl text-3xl font-semibold">{textContent.aiCheckerTitle}</h2>
            <p className="whitespace-pre-line text-lg text-gray-80">{textContent.aiCheckerDescription}</p>
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
          <div className="   p-4">
            <h2 className="mb-2 text-2xl text-3xl font-semibold">{textContent.aiDetectorTitle}</h2>
            <p className="whitespace-pre-line text-lg text-gray-80">{textContent.aiDetectorDescription}</p>
          </div>
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
      </div>
    </section>
  );
};

export default FeaturesSection;
