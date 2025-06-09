import Image from 'next/legacy/image';
import SignUpBanner from '@/components/banners/SignUpBanner';
import Link from 'next/link';
import { getImage } from '@/lib/getImage';

const language = {
  en: 'EN',
  es: 'ES',
};

const ExplanationSection = ({ textContent, bannerText, lang }) => {
  const langUpperCase = language[lang] || 'EN';
  const languageForImage = ['zh', 'zh-tw', 'ru', 'en'].includes(lang) ? 'en' : lang;

  return (
    <section className="overflow-hidden bg-gray-1">
      <div className="flex flex-col items-center justify-start space-y-16 px-5 pb-16 pt-14 lg:px-10">
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
        <SignUpBanner textContent={bannerText} lang={lang} />
        <div className="flex max-w-2xl flex-col space-y-3">
          <p className="text-2xl font-medium">{textContent.convertTo.title}</p>
          <p className="text-lg font-normal text-gray-80">{textContent.convertTo.description}</p>
        </div>
        <div className="flex max-w-2xl flex-col space-y-3">
          <p className="text-2xl font-medium">{textContent.convertToAgain.title}</p>
          <p className="text-lg font-normal text-gray-80">{textContent.convertToAgain.description}</p>
        </div>

        <div className="flex w-full max-w-2xl flex-col">
          <p className="pb-3 text-2xl font-medium">{textContent.whyUseConverter.title}</p>{' '}
          {textContent.whyUseConverter.description.map((feature) => (
            <p className="ml-5 list-item pb-1 text-lg font-normal text-gray-80" key={feature.adv}>
              {feature.adv}
            </p>
          ))}
        </div>
        <div className="flex max-w-2xl flex-col space-y-3">
          <p className="text-2xl font-medium">{textContent.MBMeaning.title}</p>
          <p className="text-lg font-normal text-gray-80">{textContent.MBMeaning.description}</p>
        </div>
        <div className="flex cursor-pointer">
          <Link href={'/virus-scanner'} target="_blank" className="flex max-w-4xl cursor-pointer flex-row">
            <Image
              src={`/images/converter-tool/VirusScanner${langUpperCase}.webp`}
              width={897}
              height={350}
              layout={'intrinsic'}
              loading="lazy"
              alt="Virus scanner image"
            />
          </Link>
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

export default ExplanationSection;
