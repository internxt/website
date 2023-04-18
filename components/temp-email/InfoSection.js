import Image from 'next/image';
import React from 'react';
import { steps, infoCards, bulletedList } from './components/cards';
import SignUpBanner from '../banners/SignUpBanner';

const InfoSection = ({ textContent, bannerText, lang }) => {
  return (
    <section className="overflow-hidden bg-gray-1 px-5">
      <div className="flex flex-col items-center justify-center space-y-16 pb-8 pt-4">
        <SignUpBanner textContent={bannerText} lang={lang} />
        <div className="flex max-w-2xl flex-col space-y-3 text-start">
          <p className="text-2xl font-medium">{textContent.title}</p>
          <p className="text-lg text-gray-80 md:max-w-2xl">{textContent.subtitle}</p>
        </div>
        <div className="flex flex-col">
          <Image
            src="/images/temp-email/magicImage.png"
            alt="Magic Image for Temp Mail"
            width={785}
            height={385}
            layout="intrinsic"
            quality={100}
          />
        </div>
        <div className="flex flex-col items-center space-y-9">
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
              {infoCards.map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col items-start justify-start bg-white p-8 sm:p-10 md:max-w-[488px]"
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
          <div>
            <Image
              src="/images/temp-email/SwitchToPrivacy.png"
              alt="Switch to privacy"
              width={895}
              height={355}
              layout="intrinsic"
              quality={100}
              className="cursor-pointer"
              onClick={() => {
                window.open('https://drive.internxt.com/new', '_blank');
              }}
            />
          </div>
          <div className="flex max-w-2xl flex-col space-y-3">
            <p className="text-3xl font-medium lg:text-2xl">{textContent.whenUseTempMail.title}</p>
            <p className="text-lg">{textContent.whenUseTempMail.description}</p>
            <ul className="list-disc space-y-1.5 pl-6 text-lg lg:max-w-2xl">
              {textContent.whenUseTempMail.bulletedList.map((item, index) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
