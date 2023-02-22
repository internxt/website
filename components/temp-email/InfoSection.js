import Image from 'next/image';
import { Bug, Detective, EyeSlash, Gift, Tray, UserPlus } from 'phosphor-react';
import React from 'react';

const InfoSection = () => {
  return (
    <section className="overflow-hidden py-20">
      <div className="flex flex-col items-center justify-center space-y-16">
        <div className="flex max-w-2xl flex-col space-y-3 text-start">
          <p className="text-2xl font-medium">Internxt’s free temporary email</p>
          <p className="text-lg font-normal leading-5 text-gray-80">
            No more spam, ads, newsletters, promotions, hackers, scammers, and bots. Keep your real inbox clean, secure,
            and free of sketchy emails.  Our disposable email account generator is Internxt's is Internxt's newest
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
          <div className="gap flex flex-row flex-wrap gap-x-5">
            <div className="flex max-w-[256px] flex-col space-y-1 p-8">
              <p className="text-sm font-semibold text-gray-60">Step 1</p>
              <p className="text-xl font-medium">Copy your disposable email address</p>
            </div>
            <div className="flex max-w-[256px] flex-col space-y-1 p-8">
              <p className="text-sm font-semibold text-gray-60">Step 2</p>
              <p className="text-xl font-medium">Use the address on your desired service</p>
            </div>
            <div className="flex max-w-[256px] flex-col space-y-1 p-8">
              <p className="text-sm font-semibold text-gray-60">Step 3</p>
              <p className="text-xl font-medium">Wait a few moments for a response or verification email</p>
            </div>
            <div className="flex max-w-[256px] flex-col space-y-1 p-8">
              <p className="text-sm font-semibold text-gray-60">Step 4</p>
              <p className="text-xl font-medium">All emails received will appear in your inbox above</p>
            </div>
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
            <div className="mt-16 flex flex-row flex-wrap justify-center space-y-8 px-8 sm:space-y-0 sm:space-x-8">
              <div className="flex flex-col items-start justify-start rounded-2xl bg-cool-gray-5 p-8 sm:p-10 md:max-w-[488px]">
                <Bug className="mb-6 text-4xl text-primary" />
                <p className="mb-6 text-2xl font-medium">Avoid spam email and annoying subscriptions</p>
                <p className="text-lg text-cool-gray-80 sm:text-base">
                  Sign up for anything without compromising your real email account and overloading your personal inbox.
                  Perfect for snagging coupon codes and sign-up offers. 
                </p>
              </div>
              <div className="flex flex-col items-start justify-start rounded-2xl bg-cool-gray-5 p-8 sm:p-10 md:max-w-[488px]">
                <EyeSlash className="mb-6 text-4xl text-primary" />
                <p className="mb-6 text-2xl font-medium">Hide personal information with a temporary email account</p>
                <p className="text-lg text-cool-gray-80 sm:text-base">
                  Recipients won't get any access to your name, photo, phone number, email address, or any other
                  personal information associated with your real account.
                </p>
              </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center px-8 md:space-x-8">
              <div className="flex flex-col items-start justify-start rounded-2xl bg-cool-gray-5 p-8 sm:p-10 md:max-w-[488px]">
                <Tray className="mb-6 text-4xl text-primary" />
                <p className="mb-6 text-2xl font-medium">Send and receive from a temporary mailbox</p>
                <p className="text-lg text-cool-gray-80 sm:text-base">
                  Hold a full conversation and respond back from your temp mail address. It’s temporary mail, not
                  instantly disposable mail.
                </p>
              </div>
              <div className="flex flex-col items-start justify-start rounded-2xl bg-cool-gray-5 p-8 sm:p-10 md:max-w-[488px]">
                <Detective className="mb-6 text-4xl text-primary" />
                <p className="mb-6 text-2xl font-medium">Message anonymously from a random address</p>
                <p className="text-lg text-cool-gray-80 sm:text-base">
                  Not sure if your intended recipient can be trusted? Is the site you want to contact suspicious? Afraid
                  of malware? Use a random address thanks to Internxt's fake address generator.
                </p>
              </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center px-8 md:space-x-8">
              <div className="flex flex-col items-start justify-start rounded-2xl bg-cool-gray-5 p-8 sm:p-10 md:max-w-[488px]">
                <UserPlus className="mb-6 text-4xl text-primary" />
                <p className="mb-6 text-2xl font-medium">No need for a temp or new Gmail account</p>
                <p className="text-lg text-cool-gray-80 sm:text-base">
                  Don’t juggle real accounts anymore. With Internxt's fake mail, simply create an account, use it, and
                  ditch it when you're ready. Don’t get weighed down managing multiple accounts.
                </p>
              </div>
              <div className="flex flex-col items-start justify-start rounded-2xl bg-cool-gray-5 p-8 sm:p-10 md:max-w-[488px]">
                <Gift className="mb-6 text-4xl text-primary" />
                <p className="mb-6 text-2xl font-medium">Get referral perks without inviting friends</p>
                <p className="text-lg text-cool-gray-80 sm:text-base">
                  Want to get a discount or extra perks from an online service, but you're not comfortable giving away
                  your friends' emails? Invite your temp email instead!
                </p>
              </div>
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
              <li>Sign up for free trials</li>
              <li>Test you app</li>
              <li>Sign up for a double (or multiple) accounts</li>
              <li>Eliminate spam</li>
              <li>Sign up for store loyalty card</li>
              <li>Communicate with suspicious accounts</li>
              <li>Create anonymous accounts</li>
              <li>Try out online services risk-free</li>
              <li>Verify trivial accounts</li>
              <li>Prank friends</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
