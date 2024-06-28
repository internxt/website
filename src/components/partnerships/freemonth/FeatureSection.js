import React from 'react';
import { UilEyeSlash, UilTachometerFast, UilLock, UilDesktop, UilChatBubbleUser } from '@iconscout/react-unicons';

const FeatureSection = ({ textContent }) => (
  <section>
    <div className="flex flex-col items-center py-16">
      <div className="flex flex-col items-center text-center mb-10 lg:mb-16 font-medium px-6">
        <h2 className="eyebrow text-4xl">
          {textContent.title.line1}
          <br className="hidden sm:inline-flex" /> {textContent.title.line2}
        </h2>
      </div>

      <div className="flex flex-row flex-wrap justify-center w-full max-w-7xl">
        <div className="flex flex-col w-full sm:w-80 items-center text-center space-y-8 mx-12 my-6 lg:my-10">
          <UilEyeSlash className="w-12 h-12 text-blue-50" />

          <div className="flex flex-col items-center text-center space-y-3">
            <span className="font-medium text-xl text-cool-gray-100">{textContent.features.privacy.title}</span>

            <span className="text-cool-gray-80">
              {textContent.features.privacy.description.line1} {textContent.features.privacy.description.line2}{' '}
              {textContent.features.privacy.description.line3}
            </span>
          </div>
        </div>

        <div className="flex flex-col w-full sm:w-80 items-center text-center space-y-8 mx-12 my-6 lg:my-10">
          <UilTachometerFast className="w-12 h-12 text-blue-50" />

          <div className="flex flex-col items-center text-center space-y-3">
            <span className="font-medium text-xl text-cool-gray-100">{textContent.features.speed.title}</span>

            <span className="text-cool-gray-80">
              {textContent.features.speed.description.line1} {textContent.features.speed.description.line2}{' '}
              {textContent.features.speed.description.line3}
            </span>
          </div>
        </div>

        <div className="flex flex-col w-full sm:w-80 items-center text-center space-y-8 mx-12 my-6 lg:my-10">
          <UilLock className="w-12 h-12 text-blue-50" />

          <div className="flex flex-col items-center text-center space-y-3">
            <span className="font-medium text-xl text-cool-gray-100">{textContent.features.security.title}</span>

            <span className="text-cool-gray-80">
              {textContent.features.security.description.line1} {textContent.features.security.description.line2}{' '}
              {textContent.features.security.description.line3}
            </span>
          </div>
        </div>

        <div className="flex flex-col w-full sm:w-80 items-center text-center space-y-8 mx-12 my-6 lg:my-10">
          <UilDesktop className="w-12 h-12 text-blue-50" />

          <div className="flex flex-col items-center text-center space-y-3">
            <span className="font-medium text-xl text-cool-gray-100">{textContent.features.multiplatform.title}</span>

            <span className="text-cool-gray-80">
              {textContent.features.multiplatform.description.line1}{' '}
              {textContent.features.multiplatform.description.line2}{' '}
              {textContent.features.multiplatform.description.line3}
            </span>
          </div>
        </div>

        <div className="flex flex-col w-full sm:w-80 items-center text-center space-y-8 mx-12 my-6 lg:my-10">
          <UilChatBubbleUser className="w-12 h-12 text-blue-50" />

          <div className="flex flex-col items-center text-center space-y-3">
            <span className="font-medium text-xl text-cool-gray-100">{textContent.features.support.title}</span>

            <span className="text-cool-gray-80">
              {textContent.features.support.description.line1} {textContent.features.support.description.line2}{' '}
              {textContent.features.support.description.line3}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-full z-0" />

      <div className="relative flex flex-col items-center py-20 z-20">
        <div className="flex flex-col items-center text-center mb-8 px-6">
          <h3 className="text-4xl font-medium mb-4">
            {textContent.buyNowSection.title.line1}
            <br className="hidden sm:inline-flex" /> {textContent.buyNowSection.title.line2}
          </h3>

          <h4 className="text-lg lg:text-xl text-cool-gray-80">
            {textContent.buyNowSection.description.line1}
            <br className="hidden sm:inline-flex" /> {textContent.buyNowSection.description.line2}
            <br className="hidden sm:inline-flex" /> {textContent.buyNowSection.description.line3}
          </h4>
        </div>

        <a
          href="#buy"
          className="flex justify-center sm:inline-flex px-6 py-2 mb-16 border border-transparent rounded-full text-base font-medium text-white bg-primary active:bg-primary-dark focus:bg-primary-dark outline-none transition-all duration-75"
        >
          <span className="whitespace-nowrap">{textContent.buyNowSection.freemonth}</span>
        </a>

        <div className="flex flex-col px-6">
          <img
            className="max-h-96"
            loading="lazy"
            src="../../images/partnerships/devices.png"
            alt="Eye slash"
            draggable="false"
          />
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
