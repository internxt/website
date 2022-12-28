import React from 'react';
import Image from 'next/Image';

const ExplanationSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden bg-gray-1">
      <div className="flex flex-col items-center justify-start space-y-16 px-10 pt-20 pb-16">
        <div className="flex max-w-2xl flex-col space-y-3">
          <p className="text-2xl font-medium">{textContent.convertTo.title}</p>
          <p className="text-lg font-normal text-gray-80">{textContent.convertTo.description}</p>
        </div>
        <div className="flex max-w-2xl flex-col space-y-3">
          <p className="text-2xl font-medium">{textContent.convertToAgain.title}</p>
          <p className="text-lg font-normal text-gray-80">{textContent.convertToAgain.description}</p>
        </div>
        <div>
          <Image
            src="/images/converter-tool/GB-TB.png"
            width={784}
            height={385.5}
            layout="intrinsic"
            loading="lazy"
            alt="Cloud storage"
          />
        </div>
        <div className="flex w-full max-w-2xl flex-col">
          <p className="pb-3 text-2xl font-medium">{textContent.whyUseConverter.title}</p>{' '}
          {textContent.whyUseConverter.description.map((feature, index) => (
            <li className="ml-2 text-lg font-normal text-gray-80" key={index}>
              {feature.adv}
            </li>
          ))}
        </div>
        <div className="flex max-w-2xl flex-col space-y-3">
          <p className="text-2xl font-medium">{textContent.MBMeaning.title}</p>
          <p className="text-lg font-normal text-gray-80">{textContent.MBMeaning.description}</p>
        </div>
        <div className="mx-5 flex max-w-4xl flex-row bg-gradient-to-tr from-blue-20 to-blue-10">
          <div className="flex flex-col items-center justify-center px-4 pb-11 pt-12 text-center lg:items-start lg:justify-start lg:pl-11 lg:text-start">
            <Image
              src="/logos/internxt/internxt.svg"
              width={98.5}
              height={12}
              layout="intrinsic"
              loading="lazy"
              alt="Cloud storage"
            />
            <div className="flex max-w-sm flex-col space-y-2 pt-6 pb-9">
              <p className="text-4xl font-semibold">Scan files for viruses completely for free</p>
              <p className="text-xl font-medium">Root out malware before it damages your device.</p>
            </div>
            <div
              onClick={() => {
                window.location.href = '/virus-scanner';
              }}
              className="flex rounded-lg border border-primary bg-transparent text-primary"
            >
              <p className="px-5 py-3">Scan files now</p>
            </div>
          </div>
          <div className="hidden items-center justify-center lg:flex lg:px-14">
            <Image
              src="/images/converter-tool/keyLock.png"
              width={411}
              height={236}
              layout="intrinsic"
              loading="lazy"
              alt="Cloud storage"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExplanationSection;
