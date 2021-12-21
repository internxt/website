import React from 'react';
import {
  UilRocket,
  UilEyeSlash,
  UilUsersAlt,
  UilLock,
  UilListOl,
  UilChatBubbleUser
} from '@iconscout/react-unicons';
import styles from './FeatureSection.module.scss';

const FeatureSection = ({
  textContent
}) => (

  <section>

    <div className="flex flex-col items-center py-32">

      <div className="flex flex-col items-center text-center mb-24 font-semibold px-6">

        <h2 className="eyebrow text-4xl">
          {textContent.title.line1}
          <br className="hidden sm:inline-flex" />
          {' '}
          {textContent.title.line2}
        </h2>

      </div>

      <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-24">

        <div className="flex flex-col items-center text-center space-y-8">

          <UilEyeSlash className="w-12 h-12 text-blue-50" />

          <div className="flex flex-col items-center text-center space-y-3">

            <span className="font-semibold text-xl text-cool-gray-100">
              {textContent.features.privacy.title}
            </span>

            <span className="text-cool-gray-80">
              {textContent.features.privacy.description.line1}
              <br />
              {textContent.features.privacy.description.line2}
              <br />
              {textContent.features.privacy.description.line3}
            </span>

          </div>

        </div>

        <div className="flex flex-col items-center text-center space-y-8">

          <UilRocket className="w-12 h-12 text-blue-50" />

          <div className="flex flex-col items-center text-center space-y-3">

            <span className="font-semibold text-xl text-cool-gray-100">
              {textContent.features.multiplatform.title}
            </span>

            <span className="text-cool-gray-80">
              {textContent.features.multiplatform.description.line1}
              <br />
              {textContent.features.multiplatform.description.line2}
              <br />
              {textContent.features.multiplatform.description.line3}
            </span>

          </div>

        </div>

        <div className="flex flex-col items-center text-center space-y-8">

          <UilUsersAlt className="w-12 h-12 text-blue-50" />

          <div className="flex flex-col items-center text-center space-y-3">

            <span className="font-semibold text-xl text-cool-gray-100">
              {textContent.features.improvement.title}
            </span>

            <span className="text-cool-gray-80">
              {textContent.features.improvement.description.line1}
              <br />
              {textContent.features.improvement.description.line2}
              <br />
              {textContent.features.improvement.description.line3}
            </span>

          </div>

        </div>

        <div className="flex flex-col items-center text-center space-y-8">

          <UilLock className="w-12 h-12 text-blue-50" />

          <div className="flex flex-col items-center text-center space-y-3">

            <span className="font-semibold text-xl text-cool-gray-100">
              {textContent.features.security.title}
            </span>

            <span className="text-cool-gray-80">
              {textContent.features.security.description.line1}
              <br />
              {textContent.features.security.description.line2}
              <br />
              {textContent.features.security.description.line3}
            </span>

          </div>

        </div>

        <div className="flex flex-col items-center text-center space-y-8">

          <UilListOl className="w-12 h-12 text-blue-50" />

          <div className="flex flex-col items-center text-center space-y-3">

            <span className="font-semibold text-xl text-cool-gray-100">
              {textContent.features.new.title}
            </span>

            <span className="text-cool-gray-80">
              {textContent.features.new.description.line1}
              <br />
              {textContent.features.new.description.line2}
              <br />
              {textContent.features.new.description.line3}
            </span>

          </div>

        </div>

        <div className="flex flex-col items-center text-center space-y-8">

          <UilChatBubbleUser className="w-12 h-12 text-blue-50" />

          <div className="flex flex-col items-center text-center space-y-3">

            <span className="font-semibold text-xl text-cool-gray-100">
              {textContent.features.support.title}
            </span>

            <span className="text-cool-gray-80">
              {textContent.features.support.description.line1}
              <br />
              {textContent.features.support.description.line2}
              <br />
              {textContent.features.support.description.line3}
            </span>

          </div>

        </div>

      </div>

    </div>

    <div className="relative">

      <div className={`${styles.bloom} absolute top-0 left-0 w-full h-full z-0`} />

      <div className="relative flex flex-col items-center py-20 z-20">

        <div className="flex flex-col items-center text-center mb-8 font-semibold px-6">

          <h2 className="eyebrow text-4xl">
            {textContent.buyNowSection.title.line1}
            <br className="hidden sm:inline-flex" />
            {' '}
            {textContent.buyNowSection.title.line2}
          </h2>

        </div>

        <a href="#buy" className="flex justify-center sm:inline-flex px-6 py-2 mb-16 border border-transparent rounded-full text-base font-medium text-white bg-blue-60 active:bg-blue-70 focus:bg-blue-70 outline-none transition-all duration-75">
          <span className="whitespace-nowrap">{textContent.buyNowSection.cta}</span>
        </a>

        <div className="flex flex-col px-6">
          <img className="max-h-96" loading="lazy" src="../../images/lifetime/devices.png" alt="Eye slash" draggable="false" />
        </div>

      </div>

    </div>

  </section>

);

export default FeatureSection;
