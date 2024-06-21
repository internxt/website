import Image from 'next/image';
import { LinkTo } from './components/LinkTo';
import { CommandTextInputCopy } from '../shared/CommandTextInputCopy';
import { AppleLogo } from '../shared/icons/AppleIcon';
import { GH_README_LINK, USER_GUIDE_LINK } from '@/constants';
import { getImage } from '@/lib/getImage';

export const CliCard = ({ textContent }) => {
  return (
    <section className="flex flex-col rounded-3xl border border-gray-5 bg-gray-1 py-12">
      <div className="flex flex-col space-y-12">
        {/* First path */}
        <div className="flex flex-col items-center gap-12 md:flex-row md:justify-between md:pl-12">
          <div className="flex flex-col space-y-10 px-5 md:px-0">
            <div className="flex flex-col space-y-4">
              <div className="text w-max rounded-lg bg-orange/15 py-1.5 px-2.5">
                <p className="text-sm font-bold text-orange">{textContent.new}</p>
              </div>
              <h2 className="max-w-[550px] text-5xl font-semibold leading-tight text-gray-100">
                {textContent.title.bold} <br /> <span className="text-gray-40">{textContent.title.normal}</span>
              </h2>
              <p className="max-w-[384px] text-lg text-gray-100">{textContent.description}</p>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-lg font-semibold text-gray-100">{textContent.installCli}</p>
              <CommandTextInputCopy text={textContent.command} />
            </div>
          </div>
          <div className="flex w-full flex-col space-y-3 pl-5 md:w-max md:pl-0">
            <Image
              src={getImage('/images/drive/Terminal.svg')}
              width={256}
              height={256}
              alt="Terminal Image"
              className="hidden w-max rounded-l-3xl shadow-subtle md:flex"
            />
            <div className="flex justify-end md:hidden">
              <Image
                src={getImage('/images/drive/Terminal.svg')}
                width={352}
                draggable={false}
                height={353}
                alt="Terminal Image"
                className="flex w-full translate-x-0.5 object-cover md:hidden"
              />
            </div>
            <div className="flex flex-row items-center space-x-3 px-5">
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
              <AppleLogo width={16} height={21} />
            </div>
          </div>
        </div>
        <div className="mx-5 flex border border-gray-10 md:mx-12" />
        <div className="flex flex-col items-center px-5 md:px-12">
          <div className="flex flex-row flex-wrap  gap-10">
            {textContent.feeds.map((item: { title: string; description: string }) => (
              <div className="flex flex-col space-y-1 md:max-w-[182px]">
                <p className="text-lg font-semibold text-gray-100">{item.title}</p>
                <p className="text-lg text-gray-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-5 flex flex-col gap-3 md:mx-12 md:flex-row md:items-center md:gap-8">
          <p className="text-lg text-gray-60">{textContent.learnMore}</p>
          <LinkTo text={textContent.readme} linkToRedirect={GH_README_LINK} />
          <LinkTo text={textContent.userGuide} linkToRedirect={USER_GUIDE_LINK} />
        </div>
      </div>
    </section>
  );
};
