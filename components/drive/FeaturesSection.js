/* eslint-disable max-len */
import React from 'react';
import Link from 'next/link';
import { Transition } from '@headlessui/react';
import { Parallax } from 'react-parallax';
import { UilAngleRightB } from '@iconscout/react-unicons';
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
          </h2>
        )}
      />

      {/* Feature #1 - All your files available in all your devices */}
      <Parallax
        className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full justify-center pt-20 lg:pb-20"
        renderLayer={(percentage) => (
          <>

            <div className="hidden lg:flex flex-col items-end">
              <div
                className="bg-cool-gray-10 rounded-2xl border border-cool-gray-20 shadow-subtle"
                style={{
                  transform: `translate(0px, -${anim.parallaxMinMax(percentage, -40, 24)}px)`,
                  width: 884,
                  height: 884
                }}
              />
            </div>

            <div className="flex flex-col items-center lg:items-start lg:pl-10">
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
                  All your files
                  {' '}
                  <br className="hidden sm:flex" />
                  available in all
                  {' '}
                  <br className="hidden sm:flex" />
                  your devices.
                </h3>

                <p className="text-base text-cool-gray-80">
                  Securelly access all your files from
                  {' '}
                  <br className="hidden sm:flex" />
                  your computer, smartphone, tablet or
                  {' '}
                  <br className="hidden sm:flex" />
                  any kind of device with connection to
                  {' '}
                  <br className="hidden sm:flex" />
                  internet via the most secure cloud
                  {' '}
                  <br className="hidden sm:flex" />
                  storage app.
                </p>
              </div>
            </div>

          </>
        )}
      />

      {/* Feature #2 - Keep your files organized and accessible from anywhere */}
      <Parallax
        className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 w-full justify-center pt-20 lg:pb-20"
        renderLayer={(percentage) => (
          <>

            <div className="flex flex-col items-center lg:items-end lg:pr-20">
              {/* Keep items aligned to the left */}
              <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
                <div className="flex flex-col mb-20 lg:mb-24 px-10 lg:px-0">
                  <h3 className="text-3xl lg:text-4xl font-semibold text-cool-gray-90 mb-6 pt-20">
                    Keep your files
                    {' '}
                    <br className="hidden sm:flex" />
                    organized and
                    {' '}
                    <br className="hidden sm:flex" />
                    accessible from
                    {' '}
                    <br className="hidden sm:flex" />
                    anywhere.
                  </h3>

                  <p className="text-base text-cool-gray-80">
                    Internxt Drive lets you organize your
                    {' '}
                    <br className="hidden sm:flex" />
                    files in folders, rename them and filter
                    {' '}
                    <br className="hidden sm:flex" />
                    list of files to find what you want faster.
                    {' '}
                    <br className="hidden sm:flex" />
                    You can even backup your computer
                    {' '}
                    <br className="hidden sm:flex" />
                    folders like your documents folder, so
                    {' '}
                    <br className="hidden sm:flex" />
                    you always have the most recent
                    {' '}
                    <br className="hidden sm:flex" />
                    changes of your most important files.
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
            </div>

            <div className="hidden sm:flex flex-col items-start">
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
        className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 w-full justify-center pt-20 lg:pb-20"
        renderLayer={(percentage) => (
          <>

            <div className="hidden lg:flex flex-col items-end">
              <div
                className="bg-cool-gray-10 rounded-2xl border border-cool-gray-20 shadow-subtle"
                style={{
                  transform: `translate(0px, ${anim.parallaxMinMax(percentage, -40, 0)}px)`,
                  width: 884,
                  height: 548
                }}
              />
            </div>

            <div className="flex flex-col items-center lg:items-start lg:pl-10 w-full lg:w-auto">

              <div
                className="flex lg:hidden bg-cool-gray-10 rounded-2xl border border-cool-gray-20 shadow-subtle"
                style={{
                  transform: `translate(0px, ${anim.parallaxMinMax(percentage, -40, 0)}px)`,
                  width: 272,
                  height: 491
                }}
              />

              <div className="flex flex-col mb-20 lg:mb-24 px-10 lg:px-0">
                <h3 className="text-3xl lg:text-4xl font-semibold text-cool-gray-90 mb-6 pt-20">
                  Share your files
                  {' '}
                  <br className="hidden sm:flex" />
                  with ease,
                  {' '}
                  <br className="hidden sm:flex" />
                  security is on us.
                </h3>

                <p className="text-base text-cool-gray-80">
                  Internxt Drive focuses on privacy and
                  {' '}
                  <br className="hidden sm:flex" />
                  security, so you only have to focus on
                  {' '}
                  <br className="hidden sm:flex" />
                  what matters to you, like sharing files
                  {' '}
                  <br className="hidden sm:flex" />
                  with your coworkers, or the photos of
                  {' '}
                  <br className="hidden sm:flex" />
                  your last travel with your family. You
                  {' '}
                  <br className="hidden sm:flex" />
                  choose with who you want to share
                  {' '}
                  <br className="hidden sm:flex" />
                  them and how many times you want
                  {' '}
                  <br className="hidden sm:flex" />
                  it to be downloaded.
                </p>
              </div>
            </div>

          </>
        )}
      />

      {/* Feature #4 - Backup what matters to you. */}
      <Parallax
        className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full justify-center pt-20 lg:pb-20"
        renderLayer={(percentage) => (
          <>

            <div className="flex flex-col items-center lg:items-end lg:pr-20">

              <div
                className="flex lg:hidden bg-cool-gray-10 rounded-2xl border border-cool-gray-20 shadow-subtle"
                style={{
                  transform: `translate(0px, ${anim.parallaxMinMax(percentage, 0, -40)}px)`,
                  width: 272,
                  height: 491
                }}
              />

              <div className="flex flex-col mb-24 px-10 lg:px-0">
                <h4 className=" text-xs font-semibold text-orange-50 mb-2 pt-10">
                  NEW FEATURE
                </h4>

                <h3 className="text-3xl lg:text-4xl font-semibold text-cool-gray-90 mb-6">
                  Backup what
                  {' '}
                  <br className="hidden sm:flex" />
                  matters to you.
                </h3>

                <p className="text-base text-cool-gray-80">
                  Now you can keep the last version
                  {' '}
                  <br className="hidden sm:flex" />
                  of that super important project you
                  {' '}
                  <br className="hidden sm:flex" />
                  are working on, your documents
                  {' '}
                  <br className="hidden sm:flex" />
                  folder, or your university homework,
                  {' '}
                  <br className="hidden sm:flex" />
                  all of them safe in your Internxt Drive.
                </p>
              </div>
            </div>

            <div className="hidden lg:flex flex-col items-start">
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

      <div className="flex flex-col items-center w-full pb-10 lg:py-20 px-10 lg:px-0">
        <h3 className="text-3xl font-semibold text-center text-cool-gray-90 mb-12">
          Start syncing your files
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

      <div className="flex flex-col items-center text-center w-full py-16 lg:py-32 lg:pb-16 px-10 lg:px-0">
        <h3 className="text-3xl lg:text-5xl font-semibold text-center text-cool-gray-90 mb-10">
          All your files.
          <br />
          Secure and private.
        </h3>

        <p className="text-base text-cool-gray-80 mb-6">
          Privacy and security are our core, we don’t run our business on data or advertising,
          {' '}
          <br className="hidden sm:flex" />
          but on trust. We respect your rights and build amazing tools around them, not against.
        </p>

        <Link href="/privacy" locale={lang}>
          <a className="flex flex-row items-center space-x-1 text-base text-blue-50 mb-32">
            <span>Our commitment in privacy</span>
            <UilAngleRightB className="w-4 h-4" />
          </a>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 grid-row-4 lg:grid-rows-2 gap-20 lg:gap-48 text-center">

          <div className="flex flex-col items-center w-full px-2 lg:px-0 lg:w-96">
            <h4 className="text-2xl font-semibold mb-4">
              Military-grade encription.
            </h4>
            <h5 className="text-base text-cool-gray-80">
              We take your privacy very seriously, that’s why your photos are encripted so only you can access your photos.
            </h5>
          </div>

          <div className="flex flex-col items-center w-full px-2 lg:px-0 lg:w-96">
            <h4 className="text-2xl font-semibold mb-4">
              Zero-knowledge technology.
            </h4>
            <h5 className="text-base text-cool-gray-80">
              We never store or transmit files, user passwords or encryption keys in an unencrypted or unhashed form.
            </h5>
          </div>

          <div className="flex flex-col items-center w-full px-2 lg:px-0 lg:w-96">
            <h4 className="text-2xl font-semibold mb-4">
              Privacy by design.
            </h4>
            <h5 className="text-base text-cool-gray-80">
              We develop our products with the user in mind, and it’s privacy is a must in the data driven world we live in.
            </h5>
          </div>

          <div className="flex flex-col items-center w-full px-2 lg:px-0 lg:w-96">
            <h4 className="text-2xl font-semibold mb-4">
              Secure from the core
            </h4>
            <h5 className="text-base text-cool-gray-80">
              As security flaws and scandals are the daily news, we make sure our systems keep your data and files safe from attackers.
            </h5>
          </div>

        </div>
      </div>

    </div>

  </section>
);

export default FeaturesSection;
