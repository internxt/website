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
              All kind of files.
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
              On all your devices.
            </Transition>
          </h1>
        )}
      />

      {/* Feature #1 - All your files available in all your devices */}
      <Parallax
        className="grid grid-cols-2 gap-20 w-full justify-center pt-20 pb-20"
        renderLayer={(percentage) => (
          <>

            <div className="flex flex-col items-end">
              <div
                className="bg-cool-gray-10 rounded-2xl border border-cool-gray-20 shadow-subtle"
                style={{
                  transform: `translate(0px, -${anim.parallaxMinMax(percentage, -40, 24)}px)`,
                  width: 884,
                  height: 884
                }}
              />
            </div>

            <div className="flex flex-col items-start pl-10">
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
                  All your files
                  <br />
                  available in all
                  <br />
                  your devices.
                </h3>

                <p className="text-base text-cool-gray-80">
                  Securelly access all your files from
                  <br />
                  your computer, smartphone, tablet or
                  <br />
                  any kind of device with connection to
                  <br />
                  internet via our web app.
                </p>
              </div>
            </div>

          </>
        )}
      />

      {/* Feature #2 - Keep your files organized and accessible from anywhere */}
      <Parallax
        className="grid grid-cols-2 gap-20 w-full justify-center pt-20 pb-20"
        renderLayer={(percentage) => (
          <>

            <div className="flex flex-col items-end pr-20">
              {/* Keep items aligned to the left */}
              <div className="flex flex-col items-start">
                <div className="flex flex-col mb-24">
                  <h3 className="text-4xl font-semibold text-cool-gray-90 mb-6 pt-20">
                    Keep your files
                    <br />
                    organized and
                    <br />
                    accessible from
                    <br />
                    anywhere.
                  </h3>

                  <p className="text-base text-cool-gray-80">
                    Internxt Drive lets you organize your
                    <br />
                    files in folders, rename them and filter
                    <br />
                    list of files to find what you want faster.
                    <br />
                    You can even backup your computer
                    <br />
                    folders like your documents folder, so
                    <br />
                    you always have the most recent
                    <br />
                    changes of your most important files.
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
            </div>

            <div className="flex flex-col items-start">
              <div
                className="bg-cool-gray-10 rounded-2xl border border-cool-gray-20 shadow-subtle"
                style={{
                  transform: `translate(0px, ${anim.parallaxMinMax(percentage, -40, 0)}px)`,
                  width: 884,
                  height: 884
                }}
              />
            </div>

          </>
        )}
      />

      {/* Feature #3 - Share your files with ease, security is on us */}
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
                  height: 548
                }}
              />
            </div>

            <div className="flex flex-col items-start pl-10">
              <div className="flex flex-col mb-24">
                <h3 className="text-4xl font-semibold text-cool-gray-90 mb-6 pt-20">
                  Share your files
                  <br />
                  with ease,
                  <br />
                  security is on us.
                </h3>

                <p className="text-base text-cool-gray-80">
                  Internxt Drive focuses on privacy and
                  <br />
                  security, so you only have to focus on
                  <br />
                  what matters to you, like sharing files
                  <br />
                  with your coworkers, or the photos of
                  <br />
                  your last travel with your family. You
                  <br />
                  choose with who you want to share
                  <br />
                  them and how many times you want
                  <br />
                  it to be downloaded.
                </p>
              </div>
            </div>

          </>
        )}
      />

      {/* Feature #4 - Backup what matters to you. */}
      <Parallax
        className="grid grid-cols-2 gap-20 w-full justify-center pt-20 pb-20"
        renderLayer={(percentage) => (
          <>

            <div className="flex flex-col items-end pr-20">
              <div className="flex flex-col mb-24">
                <h4 className=" text-xs font-semibold text-orange-50 mb-2 pt-10">
                  NEW FEATURE
                </h4>

                <h3 className="text-4xl font-semibold text-cool-gray-90 mb-6">
                  Backup what
                  <br />
                  matters to you.
                </h3>

                <p className="text-base text-cool-gray-80">
                  Now you can keep the last version
                  <br />
                  of that super important project you
                  <br />
                  are working on, your documents
                  <br />
                  folder, or your university homework,
                  <br />
                  all of them safe in your Internxt Drive.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start">
              <div
                className="bg-cool-gray-10 rounded-2xl border border-cool-gray-20 shadow-subtle"
                style={{
                  transform: `translate(0px, ${anim.parallaxMinMax(percentage, 0, -40)}px)`,
                  width: 664,
                  height: 469
                }}
              />
            </div>

          </>
        )}
      />

      <div className="flex flex-col items-center w-full py-20">
        <h3 className="text-3xl font-semibold text-center text-cool-gray-90 mb-12">
          Start syncing your files
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
