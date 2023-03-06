import Image from 'next/image';
import React from 'react';
import { steps, infoCards, bulletedList } from './components/cards';

const InfoSection = () => {
  return (
    <section className="overflow-hidden bg-gray-1 px-5">
      <div className="flex flex-col items-center justify-center space-y-16 pb-8 pt-4">
        <div className="flex max-w-2xl flex-col space-y-3 text-start">
          <p className="text-2xl font-medium">Internxt’s free temporary email</p>
          <p className="text-lg text-gray-80 md:max-w-2xl">
            No more spam, ads, newsletters, promotions, hackers, scammers, and bots. Keep your real inbox clean, secure,
            and free of sketchy emails. Our disposable email account generator is Internxt's is Internxt's newest
            privacy tool built to provide free, anonymous, temporary, and random addresses without storing any of your
            personal data.
          </p>
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
            <p className="text-3xl font-medium lg:text-2xl">How to use Internxt’s temporary email address generator</p>
            <ul className="list-disc space-y-3 pl-6">
              {steps.map((item, index) => (
                <li key={item}>
                  <span className="text-lg font-medium text-primary">{item.title}: </span>
                  <span className="text-lg text-gray-80">{item.description}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex max-w-2xl flex-col space-y-3 text-start">
            <p className="text-3xl font-medium lg:text-2xl">What is a temporary email address?</p>
            <p className="text-lg text-gray-80 md:max-w-2xl">
              A temporary or disposable email address is a tool for a user with a unique email address to obtain a
              temporary email address for your current contact. A temporary email address service allows you to create a
              new email address that passes validity needed to sign-up for services or newsletters or website accounts
              without having to hand over your true identity.
            </p>
          </div>
          <div className="flex max-w-2xl flex-col space-y-3 text-start">
            <p className="text-3xl font-medium lg:text-2xl">Why use disposable mail services?</p>
            <p className="text-lg text-gray-80 md:max-w-2xl">
              Your email address is like your online ID, you shouldn’t just hand it over to anyone. Protect your main
              account and keep your inbox clean by using a temporary email address for one-time or short-term
              communications. 
            </p>
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
            <p className="text-3xl font-medium lg:text-2xl">When to use a temporary email address?</p>
            <p className="text-lg">
              The sky's the limit when it comes to use cases for a temporary mailbox. Anything that needs an email can
              instantly be made anonymous and commitment free with a temporary email address. Below are the best
              examples of when to use fake mail:
            </p>
            <ul className="list-disc space-y-1.5 pl-6 text-lg lg:max-w-2xl">
              {bulletedList.map((item, index) => (
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
