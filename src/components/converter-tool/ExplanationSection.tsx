import Image from 'next/legacy/image';
import SignUpBanner from '@/components/banners/SignUpBanner';
import Link from 'next/link';

const language = {
  en: 'EN',
  es: 'ES',
};

const ExplanationSection = ({ textContent, bannerText, lang }) => {
  const langUpperCase = language[lang] || 'EN';

  return (
    <section className="overflow-hidden bg-gray-1">
      <div className="flex flex-col items-center justify-start space-y-16 px-5 pb-16 pt-14 lg:px-10">
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
      </div>
    </section>
  );
};

export default ExplanationSection;
