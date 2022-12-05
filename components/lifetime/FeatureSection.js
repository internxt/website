import { ArrowsClockwise, EyeSlash, Gauge, ListChecks, LockKey, User } from 'phosphor-react';
import React from 'react';

const FeatureSection = ({ textContent }) => (
  <section>
    <div className="my-10 mb-32 flex flex-col items-center md:my-20">
      <div className="mb-16 flex flex-col items-center px-6 text-center font-semibold">
        <h2 className="text-4xl font-semibold">{textContent.title}</h2>
        <p className="max-w-[778px] pt-4 text-xl font-normal text-gray-80">{textContent.description}</p>
      </div>

      <div className="grid grid-flow-row grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex max-w-[254px] flex-col items-center space-y-3 text-center">
          <EyeSlash size={48} weight={'regular'} className="text-primary" />
          <div className="flex flex-col items-center space-y-3 text-center">
            <span className="text-xl font-semibold ">{textContent.features.privacy.title}</span>

            <span className="font-regular text-md">{textContent.features.privacy.description}</span>
          </div>
        </div>

        <div className="flex max-w-[254px] flex-col items-center space-y-3 text-center">
          <Gauge size={48} weight={'regular'} className="text-primary" />
          <div className="flex flex-col items-center space-y-3 text-center">
            <span className="text-xl font-semibold ">{textContent.features.fastSync.title}</span>
            <span className="font-regular text-md">{textContent.features.fastSync.description}</span>
          </div>
        </div>

        <div className="flex max-w-[254px] flex-col items-center space-y-3 text-center">
          <LockKey size={48} weight={'regular'} className="text-primary" />
          <div className="flex flex-col items-center space-y-3 text-center">
            <span className="text-xl font-semibold ">{textContent.features.security.title}</span>

            <span className="font-regular text-md">{textContent.features.security.description}</span>
          </div>
        </div>

        <div className="flex max-w-[254px] flex-col items-center space-y-3 text-center">
          <ArrowsClockwise size={48} weight={'regular'} className="text-primary" />
          <div className="flex flex-col items-center space-y-3 text-center">
            <span className="text-xl font-semibold ">{textContent.features.sharing.title}</span>

            <span className="font-regular text-md">{textContent.features.sharing.description}</span>
          </div>
        </div>

        <div className="flex max-w-[254px] flex-col items-center space-y-3 text-center">
          <ListChecks size={48} weight={'regular'} className="text-primary" />
          <div className="flex flex-col items-center space-y-3 text-center">
            <span className="text-xl font-semibold ">{textContent.features.multiplatform.title}</span>

            <span className="font-regular text-md">{textContent.features.multiplatform.description}</span>
          </div>
        </div>

        <div className="flex max-w-[254px] flex-col items-center space-y-3 text-center">
          <User size={48} weight={'regular'} className="text-primary" />
          <div className="flex flex-col items-center space-y-3 text-center">
            <span className="text-xl font-semibold ">{textContent.features.zeroKnowledge.title}</span>

            <span className="font-regular text-md">{textContent.features.zeroKnowledge.description}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
