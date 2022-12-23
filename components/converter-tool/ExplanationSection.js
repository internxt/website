import React from 'react';
import Image from 'next/image';

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
          <p className="pb-3 text-2xl font-medium">{textContent.whyUseConverter.title}</p>
          <p className="ml-2 text-lg font-normal text-gray-80">
            {textContent.whyUseConverter.description.map((feature, index) => (
              <li key={index}>{feature.adv}</li>
            ))}
          </p>
        </div>
        <div className="flex max-w-2xl flex-col space-y-3">
          <p className="text-2xl font-medium">{textContent.MBMeaning.title}</p>
          <p className="text-lg font-normal text-gray-80">{textContent.MBMeaning.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ExplanationSection;
