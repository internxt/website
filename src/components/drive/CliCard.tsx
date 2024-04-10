import { ArrowUpRight, Copy } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import copyToClipboard from '../utils/copy-to-clipboard';
import Image from 'next/image';

const AppleLogo = () => (
  <div className="mb-0.5 flex">
    <svg width="16" height="21" viewBox="0 0 27 32" fill="black" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.2912 17.0005C22.3361 21.8432 26.5454 23.4544 26.5923 23.4748C26.5566 23.5888 25.9196 25.7709 24.3745 28.0264C23.0393 29.9755 21.6532 31.9175 19.469 31.9582C17.3236 31.9979 16.6336 30.688 14.1803 30.688C11.7281 30.688 10.9617 31.9185 8.93037 31.9979C6.82264 32.0773 5.21738 29.89 3.871 27.948C1.11912 23.9755 -0.983513 16.7216 1.83971 11.8249C3.24316 9.39337 5.75043 7.85342 8.4707 7.81474C10.5407 7.77505 12.4935 9.20507 13.7594 9.20507C15.0242 9.20507 17.398 7.48497 19.894 7.73841C20.9387 7.78217 23.872 8.15978 25.7545 10.913C25.6027 11.0056 22.2556 12.9516 22.2912 17.0005ZM18.2592 5.1094C19.3783 3.75674 20.1315 1.87379 19.9256 0C18.3122 0.0651398 16.3625 1.07379 15.2057 2.42544C14.1691 3.62238 13.261 5.53892 13.5056 7.37505C15.3035 7.51449 17.1401 6.46309 18.2592 5.1094Z"
        fill="rgb(174 174 179)"
      />
    </svg>
  </div>
);

const CopyTextInput = ({ text }) => {
  const onCopy = () => {
    copyToClipboard(text);
  };

  return (
    <button
      className={`flex h-full w-full cursor-pointer flex-row items-center justify-between rounded-xl border border-gray-10 bg-white px-4 py-3 text-gray-80 shadow-sm`}
      onClick={onCopy}
    >
      <p
        className={`text-base font-medium`}
        style={{
          fontFamily: 'Fira Code VF',
        }}
      >
        {text}
      </p>

      <Copy data-tooltip-id="copy-to-clipboard" size={24} />
    </button>
  );
};

const LinkTo = ({ text }) => {
  return (
    <div className="flex flex-row items-center space-x-1 text-primary">
      <p className="text-lg font-semibold">{text}</p>
      <ArrowUpRight size={20} weight="bold" />
    </div>
  );
};

export const CliCard = ({ textContent }) => {
  return (
    <section className="flex flex-col rounded-3xl border border-gray-5 bg-gray-1 py-12">
      <div className="flex flex-col space-y-12">
        {/* First path */}
        <div className="flex flex-col items-center gap-12 pl-12 md:flex-row">
          <div className="flex flex-col space-y-10">
            <div className="flex flex-col space-y-4">
              <div className="text w-max rounded-lg bg-orange/15 py-1.5 px-2.5">
                <p className="text-sm font-bold text-orange">{textContent.new}</p>
              </div>
              <h2 className="text-5xl font-semibold text-gray-100">
                {textContent.title.bold} <br /> <span className="text-gray-40">{textContent.title.normal}</span>
              </h2>
              <p className="max-w-[384px] text-lg text-gray-100">{textContent.description}</p>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-lg font-semibold text-gray-100">{textContent.installCli}</p>
              <CopyTextInput text={textContent.command} />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <Image
              src="/images/drive/Terminal.svg"
              width={256}
              height={256}
              alt="Terminal Image"
              className="hidden rounded-l-3xl shadow-subtle md:flex"
            />
            <Image
              src="/images/drive/Terminal.svg"
              width={352}
              height={353}
              alt="Terminal Image"
              className="flex md:hidden"
            />
            <div className="flex flex-row items-center space-x-3">
              <p className="text-sm text-gray-60">{textContent.available}</p>
              {/* Logos */}
              <img src="/images/drive/Windows-logo.svg" width={16} height={16} alt="Windows image" />
              <img
                src="/images/special-offer/black-friday/Linux.svg"
                width={13.5}
                height={16}
                alt="Linux image"
                className="mt-0.5"
              />
              <AppleLogo />
            </div>
          </div>
        </div>
        <div className="mx-12 flex border border-gray-10" />
        <div className="flex flex-col items-center px-12">
          <div className="flex flex-row flex-wrap  gap-10">
            {textContent.feeds.map((item: { title: string; description: string }) => (
              <div className="flex flex-col space-y-1 md:max-w-[182px]">
                <p className="text-lg font-semibold text-gray-100">{item.title}</p>
                <p className="text-lg text-gray-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-12 flex flex-row flex-wrap items-center gap-8">
          <p className="text-lg text-gray-60">{textContent.learnMore}</p>

          <LinkTo text={textContent.readme} />
          <LinkTo text={textContent.userGuide} />
        </div>
      </div>
    </section>
  );
};
