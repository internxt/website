import { Check, X } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';

import SignUpBanner from '@/components/banners/SignUpBanner';
import { SIGNUP_DRIVE_WEB } from '@/constants';
import bannerText from '@/assets/lang/en/banners.json';

const InxtTable = ({ textContent }) => {
  return (
    <div className="flex h-full w-screen max-w-[400px] flex-1 flex-col px-5 md:px-0">
      <div className="flex w-full items-center space-x-4 bg-primary/5 py-4 pl-6">
        <Image width={32} height={32} src={'/images/comparison/competitors/internxt.webp'} alt="Internxt icon" />
        <p className="text-lg font-semibold text-gray-100">{textContent.title}</p>
      </div>
      <div className="flex h-full flex-col">
        {textContent.features.map((item) => (
          <div className="flex h-full w-full flex-row items-center bg-green-dark/7 bg-opacity-3" key={item.title}>
            <div className="flex h-full w-full max-w-xs flex-row items-center justify-between border-b border-primary border-opacity-3 bg-gray-1 pl-6">
              <div className="flex flex-col space-y-4 py-4 pr-3">
                <p className="text-lg font-semibold text-gray-100">{item.title}</p>
                <p className="text-gray-100">{item.description}</p>
              </div>
            </div>
            <div className="mx-auto flex h-full w-max flex-col">
              <div className="flex flex-grow flex-col items-center justify-center">
                <Check size={32} className="text-green-dark" weight="bold" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PCloudTable = ({ textContent }) => {
  return (
    <div className="flex h-full w-screen max-w-[400px] flex-col px-5 md:px-0">
      <div className="flex w-full items-center space-x-4 bg-primary/5 py-4 pl-6">
        <img src={'../../../logos/pcloud-alternative/pCloud.svg'} alt="pCloud icon" />
        <p className="text-lg font-semibold text-gray-100">{textContent.title}</p>
      </div>
      <div className="flex h-full flex-col">
        {textContent.features.map((item) => (
          <div className="flex h-full w-full flex-row items-center bg-red/5 bg-opacity-3" key={item.title}>
            <div className="flex h-full w-full max-w-xs flex-row items-center justify-between border-b border-primary border-opacity-3 bg-gray-1 pl-6">
              <div className="flex flex-col space-y-4 py-4 pr-3">
                <p className="text-lg font-semibold text-gray-100">{item.title}</p>
                <p className="text-gray-100">{item.description}</p>
              </div>
            </div>
            <div className="mx-auto flex h-full w-max flex-col">
              <div className="flex ">
                <X size={32} className="text-red-dark" weight="bold" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const TablesSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden py-20 px-4">
      <div className="flex flex-col items-center justify-center gap-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-5xl font-semibold text-gray-100">{textContent.title}</h2>
          <p className="text-xl text-gray-80">{textContent.description}</p>
        </div>
        {/* Tables Section */}
        {/* Tables 1 */}
        <div className="flex flex-col items-center gap-10 lg:gap-16">
          <p className="text-center text-3xl font-semibold text-gray-100">{textContent.privacyAndSecurity.title}</p>
          <div className=" flex flex-col gap-10 md:flex-row">
            <InxtTable textContent={textContent.privacyAndSecurity.inxtTable} />
            <PCloudTable textContent={textContent.privacyAndSecurity.pCloudTable} />
          </div>
        </div>
        {/* Tables 2 */}
        <div className="flex flex-col items-center gap-10 lg:gap-16">
          <p className="text-center text-3xl font-semibold text-gray-100">{textContent.costAndValue.title}</p>
          <div className=" flex flex-col gap-10 md:flex-row">
            <InxtTable textContent={textContent.costAndValue.inxtTable} />
            <PCloudTable textContent={textContent.costAndValue.pCloudTable} />
          </div>
        </div>
        {/* Tables 3 */}
        <div className="flex flex-col items-center gap-10 lg:gap-16">
          <p className="text-center text-3xl font-semibold text-gray-100">{textContent.transparencyAndTrust.title}</p>
          <div className=" flex flex-col gap-10 md:flex-row">
            <InxtTable textContent={textContent.transparencyAndTrust.inxtTable} />
            <PCloudTable textContent={textContent.transparencyAndTrust.pCloudTable} />
          </div>
        </div>
        {/* Tables 4 */}
        <div className="flex flex-col items-center gap-10 lg:gap-16">
          <p className="text-center text-3xl font-semibold text-gray-100">{textContent.userExpAndFeatures.title}</p>
          <div className=" flex flex-col gap-10 md:flex-row">
            <InxtTable textContent={textContent.userExpAndFeatures.inxtTable} />
            <PCloudTable textContent={textContent.userExpAndFeatures.pCloudTable} />
          </div>
        </div>
        <div className="flex max-w-3xl flex-col items-center gap-9 text-center">
          <p className="text-5xl font-semibold text-primary">{textContent.switchToInternxt.title}</p>
          <Link
            href={SIGNUP_DRIVE_WEB}
            className="flex w-max rounded-lg bg-primary py-3 px-5 text-xl font-medium text-white hover:bg-primary-dark"
          >
            {textContent.switchToInternxt.cta}
          </Link>
        </div>
        <SignUpBanner textContent={bannerText.SignUpPCloudAlternativeBanner2} lang="en" changeTextOrder />
      </div>
    </section>
  );
};