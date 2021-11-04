import React from 'react';
import { Transition } from '@headlessui/react';
import { Parallax } from 'react-parallax';
import DownloadComponent from './DownloadComponent';
import * as anim from '../../public/js/anim';

const FeaturesSection = ({
  textContent,
  download
}) => (
  <section className="flex flex-col w-full">

    <div className="flex flex-col items-center pt-20 pb-32">

      {/* Title */}
      <Parallax
        className="flex flex-col w-full justify-center items-center text-center"
        renderLayer={(percentage) => (
          <h1 className="relative text-5xl font-semibold text-cool-gray-90 mb-20">
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
          </h1>
        )}
      />

      {/* Feature #1 - Upload from your smartphone, access wherever you want */}
      <Parallax
        className="grid grid-cols-2 gap-20 w-full justify-center pt-20 pb-20"
        renderLayer={(percentage) => (
          <>

            <div className="flex flex-col items-end pr-10">
              {/* Keep items aligned to the left */}
              <div className="flex flex-col items-start">
                <div
                  className="bg-cool-gray-10 rounded-2xl border border-cool-gray-20 shadow-subtle"
                  style={{
                    transform: `translate(0px, ${anim.parallaxMinMax(percentage, -40, 0)}px)`,
                    width: 272,
                    height: 491
                  }}
                />

                <div className="flex flex-col mt-24">
                  <h3 className="text-4xl font-semibold text-cool-gray-90 mb-6">
                    Upload from your
                    <br />
                    smartphone, access
                    <br />
                    wherever you want.
                  </h3>

                  <p className="text-base text-cool-gray-80">
                    Your photo library will always be up to
                    <br />
                    date in all your devices. This means that
                    <br />
                    you can access your synced photos even
                    <br />
                    when your device is lost, stolen or broken.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start">
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
        className="grid grid-cols-2 gap-20 w-full justify-center pt-20 pb-20"
        renderLayer={(percentage) => (
          <>

            <div className="flex flex-col items-end">
              <div
                className="bg-cool-gray-10 rounded-2xl border border-cool-gray-20 shadow-subtle"
                style={{
                  transform: `translate(0px, ${anim.parallaxMinMax(percentage, -40, 0)}px)`,
                  width: 884,
                  height: 884
                }}
              />
            </div>

            <div className="flex flex-col items-start pl-10">
              <div className="flex flex-col mb-24">
                <h3 className="text-4xl font-semibold text-cool-gray-90 mb-6 pt-20">
                  Share your photos
                  <br />
                  with your friends
                  <br />
                  and family.
                </h3>

                <p className="text-base text-cool-gray-80">
                  Generate a share link so you can
                  <br />
                  control how many times a photo
                  <br />
                  can be accessed and downloaded.
                </p>
              </div>

              <div
                className="bg-cool-gray-10 rounded-2xl border border-cool-gray-20 shadow-subtle"
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

      <div className="flex flex-col items-center w-full py-20">
        <h3 className="text-3xl font-semibold text-center text-cool-gray-90 mb-12">
          Start syncing your photos
          <br />
          in total privacy.
        </h3>

        {/* Download links */}
        <DownloadComponent
          textContent={textContent.DownloadLinks}
          download={download}
        />
      </div>

    </div>

  </section>
);

export default FeaturesSection;
