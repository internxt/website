import Image from 'next/image';
import SignUpBanner from '@/components/banners/SignUpBanner';
import { Bug, Detective, EyeSlash, Gift, Tray, UserPlus } from '@phosphor-icons/react';
import { getImage } from '@/lib/getImage';
import { SIGNUP_DRIVE_WEB } from '@/constants';

export const InfoSection = ({ textContent, bannerText, lang }) => {
  const infoCards = (lang) => {
    return [
      {
        icon: Bug,
        title: textContent.whyUseDisposableMail.infoCards[0].title,
        description: textContent.whyUseDisposableMail.infoCards[0].description,
      },
      {
        icon: EyeSlash,
        title: textContent.whyUseDisposableMail.infoCards[1].title,
        description: textContent.whyUseDisposableMail.infoCards[1].description,
      },
      {
        icon: Tray,
        title: textContent.whyUseDisposableMail.infoCards[2].title,
        description: textContent.whyUseDisposableMail.infoCards[2].description,
      },
      {
        icon: Detective,
        title: textContent.whyUseDisposableMail.infoCards[3].title,
        description: textContent.whyUseDisposableMail.infoCards[3].description,
      },
      {
        icon: UserPlus,
        title: textContent.whyUseDisposableMail.infoCards[4].title,
        description: textContent.whyUseDisposableMail.infoCards[4].description,
      },
      {
        icon: Gift,
        title: textContent.whyUseDisposableMail.infoCards[5].title,
        description: textContent.whyUseDisposableMail.infoCards[5].description,
      },
    ];
  };
  return (
    <section className="flex justify-center overflow-hidden bg-gray-1 px-5 py-16">
      <div className="flex max-w-[1000px] flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-16 pb-8 pt-4">
          <div id="incontent_1" className="flex w-full justify-center"></div>
          <SignUpBanner textContent={bannerText} lang={lang} />
          <div className="flex max-w-2xl flex-col space-y-3 text-start">
            <p className="text-2xl font-medium">{textContent.title}</p>
            <p className="text-lg text-gray-80 md:max-w-2xl">{textContent.subtitle}</p>
          </div>
          <div className="flex flex-col items-center space-y-9 px-1">
            <div className="flex w-full max-w-2xl flex-col space-y-3 text-start">
              <p className="text-3xl font-medium lg:text-2xl">{textContent.steps.title}</p>
              <ul className="list-disc space-y-3 pl-6">
                {textContent.steps.steps.map((item) => (
                  <li key={item.title}>
                    <span className="text-lg font-medium text-primary">{item.title}: </span>
                    <span className="text-lg text-gray-80">{item.description}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div id="incontent_2" className="flex w-full justify-center"></div>

            <div className="flex max-w-2xl flex-col space-y-3 text-start">
              <p className="text-3xl font-medium lg:text-2xl">{textContent.whatIsTempMail.title}</p>
              <p className="text-lg text-gray-80 md:max-w-2xl">{textContent.whatIsTempMail.description}</p>
            </div>
            <div className="flex max-w-2xl flex-col space-y-3 text-start">
              <p className="text-3xl font-medium lg:text-2xl">{textContent.whyUseDisposableMail.title}</p>
              <p className="text-lg text-gray-80 md:max-w-2xl">{textContent.whyUseDisposableMail.description}</p>
            </div>
            <div className="flex flex-col space-y-8">
              <div className="grid grid-cols-1 flex-row flex-wrap justify-center gap-8 sm:grid-cols-2">
                {infoCards(lang).map((card) => (
                  <div
                    key={card.title}
                    className="flex flex-col items-start justify-start rounded-2xl bg-white p-8 sm:p-10 md:max-w-[488px]"
                  >
                    <card.icon className="mb-6 text-4xl text-primary" />
                    <div className="flex w-full max-w-[400px] flex-col">
                      <p className="mb-6 text-2xl font-medium">{card.title}</p>
                      <p className="text-base text-cool-gray-80 sm:text-lg">{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div id="incontent_3" className="flex w-full justify-center"></div>

            <div className="flex">
              <Image
                src={getImage('/images/temp-email/cta_general_10_storage_en.webp')}
                alt="Switch to privacy"
                width={895}
                height={355}
                layout="intrinsic"
                quality={100}
                className="cursor-pointer"
                onClick={() => {
                  window.open(SIGNUP_DRIVE_WEB, '_blank', 'noopener noreferrer');
                }}
              />
            </div>

            <div className="flex max-w-2xl flex-col space-y-3">
              <p className="text-3xl font-medium text-gray-100 lg:text-2xl">{textContent.whenUseTempMail.title}</p>
              <p className="text-lg">{textContent.whenUseTempMail.description}</p>
              <ul className="list-disc space-y-1 pl-5 text-lg text-gray-80 lg:max-w-2xl">
                {textContent.whenUseTempMail.bulletedList.map((item, index) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div id="incontent_4" className="flex w-full justify-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
