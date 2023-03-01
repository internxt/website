import Image from 'next/image';
import React from 'react';
import { steps, infoCards, bulletedList } from './components/cards';

const InfoSection = () => {
  return (
    <section className="overflow-hidden px-5">
      <div className="flex flex-col items-center justify-center space-y-16">
        <div className="flex max-w-2xl flex-col space-y-3 text-start">
          <p className="text-2xl font-medium">Internxt’s free temporary email</p>
          <p className="text-lg font-normal leading-5 text-gray-80">
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
        <div className="flex flex-col items-center justify-center space-y-9">
          <p className="text-2xl font-medium">How to use Internxt’s temporary email address generator</p>
          <div className="flex flex-row flex-wrap justify-center gap-x-5 text-center sm:justify-start sm:text-start">
            {steps.map((step, index) => (
              <div className="flex max-w-[256px] flex-col space-y-1 p-8" key={step.title}>
                <p className="text-sm font-semibold text-gray-60">{step.title}</p>
                <p className="text-xl font-medium">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="flex max-w-2xl flex-col space-y-3 text-start">
            <p className="text-2xl font-medium">What is a temporary email address?</p>
            <p className="text-lg font-normal leading-5 text-gray-80">
              A temporary or disposable email address is a tool for a user with a unique email address to obtain a
              temporary email address for your current contact. A temporary email address service allows you to create a
              new email address that passes validity needed to sign-up for services or newsletters or website accounts
              without having to hand over your true identity.
            </p>
          </div>
          <div className="flex max-w-2xl flex-col space-y-3 text-start">
            <p className="text-2xl font-medium">Why use disposable mail services?</p>
            <p className="text-lg font-normal leading-5 text-gray-80">
              Your email address is like your online ID, you shouldn’t just hand it over to anyone. Protect your main
              account and keep your inbox clean by using a temporary email address for one-time or short-term
              communications. 
            </p>
          </div>
          <div className="flex flex-col space-y-8">
            <div className="grid grid-cols-1 flex-row flex-wrap justify-center gap-x-8 space-y-8 sm:grid-cols-2 sm:space-y-0">
              {infoCards.map((card, index) => (
                <div
                  key={card.title}
                  className="flex flex-col items-start justify-start rounded-2xl bg-cool-gray-5 p-8 sm:p-10 md:max-w-[488px]"
                >
                  <card.icon className="mb-6 text-4xl text-primary" />
                  <p className="mb-6 text-2xl font-medium">{card.title}</p>
                  <p className="text-lg text-cool-gray-80 sm:text-base">{card.description}</p>
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
                window.location.replace('https://drive.internxt.com/new', '_blank');
              }}
            />
          </div>
          <div className="flex max-w-2xl flex-col space-y-3">
            <p className="text-2xl font-medium">When to use a temporary email address?</p>
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
