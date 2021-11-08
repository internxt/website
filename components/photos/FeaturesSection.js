import React from 'react';
import { Transition } from '@headlessui/react';
import { Parallax } from 'react-parallax';
import DownloadComponent from './DownloadComponent';
import * as anim from '../../public/js/anim';

const FeaturesSection = ({
  textContent,
  device,
  lang,
  download
}) => (
  <section className="flex flex-col w-full">

    <div className="flex flex-col items-center pt-16 lg:pt-20 pb-32">

      {/* Title */}
      <Parallax
        className="flex flex-col w-full justify-center items-center text-center"
        renderLayer={(percentage) => (
          <h2 className="relative text-3xl lg:text-5xl font-semibold text-cool-gray-90 mb-10 lg:mb-20">
            <Transition
              show={anim.trigger(percentage)}
              enter="transition-all duration-500"
              enterFrom="opacity-0 transform translate-y-6"
              enterTo="opacity-100 transform translate-y-0"
              leave="transition-all duration-500 delay-250"
              leaveFrom="opacity-100 transform translate-y-0"
              leaveTo="opacity-0 transform translate-y-6"
            >
              A synced gallery for
            </Transition>
            <Transition
              show={anim.trigger(percentage)}
              enter="transition-all duration-500 delay-250"
              enterFrom="opacity-0 transform translate-y-2"
              enterTo="opacity-100 transform translate-y-0"
              leave="transition-all duration-500"
              leaveFrom="opacity-100 transform translate-y-0"
              leaveTo="opacity-0 transform translate-y-2"
            >
              all your devices.
            </Transition>
          </h2>
        )}
      />

      {/* Feature #1 - Upload from your smartphone, access wherever you want */}
      <Parallax
        className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full justify-center pt-20 lg:pb-20"
        renderLayer={(percentage) => (
          <>

            <div className="flex flex-col items-center lg:items-end lg:pr-10">
              {/* Keep items aligned to the left */}
              <div className="flex flex-col items-center lg:items-start">
                <div
                  className="bg-cool-gray-10 rounded-2xl border border-cool-gray-20 shadow-subtle"
                  style={{
                    transform: `translate(0px, ${anim.parallaxMinMax(percentage, -40, 0)}px)`,
                    width: 272,
                    height: 491
                  }}
                />

                <div className="flex flex-col mt-24 px-10 lg:px-0">
                  <h3 className="text-3xl lg:text-4xl font-semibold text-cool-gray-90 mb-6">
                    Upload from your
                    {' '}
                    <br className="hidden sm:flex" />
                    smartphone, access
                    {' '}
                    <br className="hidden sm:flex" />
                    wherever you want.
                  </h3>

                  <p className="text-base text-cool-gray-80">
                    Your photo library will always be up to
                    {' '}
                    <br className="hidden sm:flex" />
                    date in all your devices. This means that
                    {' '}
                    <br className="hidden sm:flex" />
                    you can access your synced photos even
                    {' '}
                    <br className="hidden sm:flex" />
                    when your device is lost, stolen or broken.
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex flex-col items-start">
              <div
                className="bg-cool-gray-10 rounded-2xl border border-cool-gray-20 shadow-subtle"
                style={{
                  transform: `translate(0px, -${anim.parallaxMinMax(percentage, -40, 24)}px)`,
                  width: 884,
                  height: 884
                }}
              />
            </div>

          </>
        )}
      />

      {/* Feature #2 - Share your photos with your friends and family */}
      <Parallax
        className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full justify-center pt-20 lg:pb-20"
        renderLayer={(percentage) => (
          <>

            <div className="hidden lg:flex flex-col items-end">
              <div
                className="bg-cool-gray-10 rounded-2xl border border-cool-gray-20 shadow-subtle"
                style={{
                  transform: `translate(0px, ${anim.parallaxMinMax(percentage, -40, 0)}px)`,
                  width: 884,
                  height: 884
                }}
              />
            </div>

            <div className="flex flex-col items-center lg:items-start lg:pl-10">
              <div className="flex flex-col mb-24 px-10 lg:px-0">
                <h3 className="text-3xl lg:text-4xl font-semibold text-cool-gray-90 mb-6 pt-20">
                  Share your photos
                  {' '}
                  <br className="hidden sm:flex" />
                  with your friends
                  {' '}
                  <br className="hidden sm:flex" />
                  and family.
                </h3>

                <p className="text-base text-cool-gray-80">
                  Generate a share link so you can
                  {' '}
                  <br className="hidden sm:flex" />
                  control how many times a photo
                  {' '}
                  <br className="hidden sm:flex" />
                  can be accessed and downloaded.
                </p>
              </div>

              <div
                className="order-first lg:order-last bg-cool-gray-10 rounded-2xl border border-cool-gray-20 shadow-subtle"
                style={{
                  transform: `translate(0px, ${anim.parallaxMinMax(percentage, 40, 0)}px)`,
                  width: 272,
                  height: 491
                }}
              />
            </div>

          </>
        )}
      />

      <div className="flex flex-col items-center w-full pb-10 lg:py-20 px-10 lg:px-0">
        <h3 className="text-3xl font-semibold text-center text-cool-gray-90 mb-12">
          Start syncing your photos
          {' '}
          <br className="hidden sm:flex" />
          in total privacy.
        </h3>

        {/* Download links */}
        <DownloadComponent
          textContent={textContent.DownloadLinks}
          lang={lang}
          device={device}
          download={download}
        />
      </div>

    </div>

  </section>
);

export default FeaturesSection;
