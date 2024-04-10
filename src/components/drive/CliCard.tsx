import { AppleLogo, ArrowUpRight, Copy, LinuxLogo } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import copyToClipboard from '../utils/copy-to-clipboard';
import Image from 'next/image';

const CopyTextInput = ({ text }) => {
  const [borderColor, setBorderColor] = useState(false);

  useEffect(() => {
    if (borderColor) {
      setTimeout(() => {
        setBorderColor(false);
      }, 4000);
    }
  }, [borderColor]);

  const onCopy = () => {
    setBorderColor(true);
    copyToClipboard(text);
  };

  return (
    <button
      className={`flex h-full w-full cursor-pointer flex-row items-center justify-between rounded-xl bg-white text-gray-80 shadow-sm ${
        borderColor ? 'border border-primary' : 'border border-gray-10'
      } px-4 py-3`}
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

      <Copy data-tooltip-id="copy-to-clipboard" size={24} className={`${borderColor ? 'text-primary' : ''}`} />
    </button>
  );
};

const LinkTo = ({ text }) => {
  return (
    <div className="flex flex-row items-center space-y-1 text-primary">
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
              className="hidden md:flex"
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
              <img src="/images/special-offer/black-friday/Linux.svg" width={13.5} height={16} alt="Linux image" />
              <AppleLogo weight="fill" className="text-gray-40" />
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
