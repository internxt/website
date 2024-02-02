/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { Transition, Disclosure } from '@headlessui/react';
import Link from 'next/link';
import setUTM from '../../lib/conversions';
import LanguageMobileBox from './components/LanguageMobileBox';
import Image from 'next/legacy/image';
import axios from 'axios';
import { Camera, CaretDown, CaretUp, HardDrives, PaperPlaneTilt } from '@phosphor-icons/react';
import moment from 'moment';

export default function Footer({
  textContent,
  lang,
  hideNewsletter,
  darkMode,
}: {
  textContent: any;
  lang: string;
  hideNewsletter?: boolean;
  darkMode?: boolean;
}) {
  const [platforms, setPlatforms] = useState<any>();
  const year = moment().format('YYYY');

  useEffect(() => {
    setUTM();

    axios.get(`${window.location.origin}/api/download`).then((res) => {
      setPlatforms(res.data.platforms);
    });
  }, []);

  return (
    <section
      id="footer"
      className={`flex w-full flex-col overflow-hidden lg:pb-10 ${
        darkMode ? 'bg-[#111111] text-white' : 'bg-gray-5 bg-opacity-50'
      }`}
    >
      <div className="flex w-full flex-col items-center justify-center px-6 pt-16 sm:p-20 sm:py-12">
        <div className="flex w-full max-w-[896px] flex-col items-center justify-center space-y-8 pb-9 text-center lg:flex-row lg:items-start lg:space-y-0 lg:space-x-32 lg:text-left">
          {/* Download app for iOS and Android */}

          <div className="flex w-full max-w-[384px] flex-col items-center justify-center space-y-3 lg:items-start">
            <div className="flex flex-col space-y-1">
              <h2 className="text-lg font-medium ">{textContent.DownloadApp.title}</h2>
              <p className={`${darkMode ? 'text-cool-gray-30' : 'text-gray-80'} text-sm`}>
                {textContent.DownloadApp.description}
              </p>
            </div>
            {/* Images */}
            <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
              <div className="flex">
                <Image
                  src="/images/footer/app-store.svg"
                  width={148}
                  height={44}
                  quality={100}
                  className="cursor-pointer"
                  alt="Download on the App Store"
                  onClick={() => {
                    platforms && window.open(platforms.iPhone, '_blank');
                  }}
                />
              </div>
              <div className="flex">
                <Image
                  src="/images/footer/store-for-android.svg"
                  onClick={() => {
                    platforms && window.open(platforms.Android, '_blank');
                  }}
                  width={148}
                  height={44}
                  className="cursor-pointer"
                  alt="Get it on Google Play"
                />
              </div>
            </div>
          </div>

          <div
            className={`${
              hideNewsletter ? 'hidden' : 'flex'
            } mb-10 max-w-[384px] flex-col items-center justify-center space-y-3 text-center md:items-start md:text-left `}
          >
            <div className="flex w-full flex-col space-y-1 md:max-w-sm">
              <h2 className="text-lg font-medium">{textContent.NewsletterSection.title}</h2>
              <p className={`text-base sm:text-sm ${darkMode ? 'text-cool-gray-30' : 'text-gray-80'}`}>
                {textContent.NewsletterSection.description}
              </p>
            </div>

            <form
              data-code="r3s4c1"
              method="post"
              target="_blank"
              rel="noopener"
              action="https://app.mailerlite.com/webforms/submit/r3s4c1"
              className="flex w-full flex-col items-center justify-center md:flex-row"
            >
              <input type="hidden" name="ml-submit" value="1" />
              <input
                name="fields[email]"
                type="email"
                placeholder={`${textContent.NewsletterSection.input}`}
                className={`flex h-auto w-full flex-row rounded-lg px-4 py-3 text-lg outline-none sm:py-2 sm:text-base md:w-64 ${
                  darkMode
                    ? 'border-cool-gray-70 bg-cool-gray-90 focus:border-primary focus:ring-opacity-30'
                    : 'border-cool-gray-20 bg-white focus:border-blue-50 focus:ring-opacity-20'
                } mb-2 appearance-none border text-left transition-all duration-150 focus:ring focus:ring-primary`}
                required
              />
              <input
                name="signup"
                type="submit"
                value={`${textContent.NewsletterSection.cta}`}
                className="ml-2 flex w-full cursor-pointer items-center justify-center rounded-lg border border-transparent bg-primary px-4 py-3 text-lg font-medium text-white transition-all duration-75 hover:bg-primary-dark focus:outline-none active:bg-primary-dark sm:mb-2 sm:py-2 sm:text-base"
              />
            </form>
            <span className="text-sm text-gray-40">
              {textContent.NewsletterSection.privacy}{' '}
              <Link href="/legal" locale={lang} legacyBehavior>
                <span className="cursor-pointer underline">{textContent.NewsletterSection.privacyLink}</span>
              </Link>
            </span>
          </div>
        </div>

        {/* Separator */}
        <div
          className={`${hideNewsletter ? 'hidden' : 'flex'} h-px w-full max-w-[896px] ${
            darkMode ? 'bg-cool-gray-90' : 'bg-cool-gray-10'
          } lg:mb-10`}
        />

        {/* Footer content */}
        <footer className="flex max-w-[896px] items-center justify-center">
          {/* Desktop version */}
          <div className="hidden w-full flex-col items-center justify-center md:space-y-16 lg:flex">
            <div className="flex w-full flex-row justify-between md:justify-center lg:space-x-20">
              <div className="flex flex-1 flex-col items-center lg:flex-none">
                <div className="flex flex-shrink-0 flex-col space-y-3">
                  <h3 className="text-lg font-medium">{textContent.FooterSection.sections.products.title}</h3>
                  <div
                    className={`flex flex-col space-y-1.5 text-base ${
                      darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'
                    }`}
                  >
                    <Link href="/drive" locale={lang} passHref className="hover:text-primary">
                      {textContent.FooterSection.sections.products.drive}
                    </Link>

                    <Link href="/photos" locale={lang} passHref className="hover:text-primary">
                      {textContent.FooterSection.sections.products.photos}
                    </Link>

                    <a
                      href="https://send.internxt.com"
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-row items-center hover:text-primary"
                    >
                      <div>{textContent.FooterSection.sections.products.send}</div>
                    </a>

                    <Link href="/pricing" locale={lang} passHref className="hover:text-primary">
                      {textContent.FooterSection.sections.products.pricing}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col items-center lg:flex-none">
                <div className="flex flex-shrink-0 flex-col space-y-3">
                  <h3 className="text-lg font-medium">{textContent.FooterSection.sections.company.title}</h3>
                  <div
                    className={`flex flex-col space-y-1.5 text-base ${
                      darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'
                    }`}
                  >
                    <Link href="/about" locale={lang} passHref className="hover:text-primary">
                      {textContent.FooterSection.sections.company.about}
                    </Link>

                    <Link href="/privacy" locale={lang} passHref className="hover:text-primary">
                      {textContent.FooterSection.sections.company.privacy}
                    </Link>

                    <a
                      href={`https://blog.internxt.com/${
                        lang === 'es' ? 'es/como-internxt-protege-tus-datos/' : 'how-internxt-protects-your-data/'
                      }`}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-primary"
                    >
                      {textContent.FooterSection.sections.company.security}
                    </a>

                    <Link
                      href="/open-source"
                      locale={lang}
                      passHref
                      className="flex max-w-[200px] flex-row items-center hover:text-primary"
                    >
                      {textContent.FooterSection.sections.company.openSource}
                      {lang !== 'en' && (
                        <div className=" ml-2 flex h-max items-center justify-center rounded-full bg-primary bg-opacity-15 py-1 px-2 text-xs font-medium uppercase text-primary">
                          {textContent.FooterSection.new}
                        </div>
                      )}
                    </Link>

                    <Link href="/legal" locale={lang} passHref className="hover:text-primary">
                      {textContent.FooterSection.sections.company.legal}
                    </Link>

                    {lang === 'en' && (
                      <>
                        <Link
                          href="/media-area"
                          locale={lang}
                          passHref
                          className="flex max-w-[200px] flex-row items-center hover:text-primary"
                        >
                          {textContent.FooterSection.sections.company.mediaArea}
                        </Link>
                        <Link
                          href="/use-cases"
                          locale={lang}
                          passHref
                          className="flex max-w-[200px] flex-row items-center hover:text-primary"
                        >
                          {textContent.FooterSection.sections.company.useCases}
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col items-center lg:flex-none">
                <div className="flex flex-shrink-0 flex-col space-y-3">
                  <h3 className="text-lg font-medium">{textContent.FooterSection.sections.join.title}</h3>
                  <div
                    className={`flex flex-col space-y-1.5 text-base ${
                      darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'
                    }`}
                  >
                    <Link href="/newsletter-subscribe" className="hover:text-primary" legacyBehavior>
                      {textContent.FooterSection.sections.join.newsletter}
                    </Link>
                    <a href="https://drive.internxt.com/new" target="_top" className="hover:text-primary">
                      {textContent.FooterSection.sections.join.signup}
                    </a>

                    <p
                      onClick={() => {
                        window.open('https://help.internxt.com', '_blank');
                      }}
                      className="cursor-pointer hover:text-primary"
                    >
                      {textContent.FooterSection.sections.join.support}
                    </p>

                    <a href="https://drive.internxt.com/login" target="_top" className="hover:text-primary">
                      {textContent.FooterSection.sections.join.login}
                    </a>

                    <a
                      href="https://github.com/internxt"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-primary"
                    >
                      {textContent.FooterSection.sections.join.github}
                    </a>

                    <a
                      href={`/whitepaper/internxt-white-paper.pdf`}
                      target="_blank"
                      rel="noreferrer"
                      download={true}
                      className="hover:text-primary"
                    >
                      {textContent.FooterSection.sections.join.whitePaper}
                    </a>

                    <a href="https://internxt.com/affiliates" target="_blank" className="hover:text-primary">
                      {textContent.FooterSection.sections.join.affiliates}
                    </a>

                    <Link lang={lang} href={'/cloud-storage-for-education'} className="hover:text-primary">
                      {textContent.FooterSection.sections.join.storageForEducation}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex max-w-[180px] flex-col items-center lg:flex-none">
                <div className="flex flex-shrink-0 flex-col space-y-3">
                  <h3 className="text-lg font-medium">{textContent.FooterSection.sections.resources.title}</h3>
                  <div
                    className={`flex flex-col space-y-1.5 text-base ${
                      darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'
                    }`}
                  >
                    <a
                      href={`https://blog.internxt.com/${lang === 'es' ? 'es/' : ''}`}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-primary"
                    >
                      {textContent.FooterSection.sections.resources.blog}
                    </a>
                    <Link
                      href="/cloud-storage-comparison"
                      locale={lang}
                      passHref
                      className="w-full max-w-[160px] hover:text-primary"
                    >
                      {textContent.FooterSection.sections.resources.comparison}
                    </Link>

                    <Link
                      href="/privacy-directory"
                      locale={lang}
                      passHref
                      className="w-full max-w-[265px] hover:text-primary"
                    >
                      {textContent.FooterSection.sections.resources.directoryOfPrivacyOrganizations}
                    </Link>

                    <Link href="/cyber-awareness" locale={lang} passHref className="hover:text-primary">
                      {textContent.FooterSection.sections.resources.cyberAwareness}
                    </Link>
                    <Link
                      href="/what-does-google-know-about-me"
                      locale={lang}
                      passHref
                      className="flex items-center hover:text-primary"
                    >
                      {textContent.FooterSection.sections.resources.whatGoogleKnowsAboutMe}
                    </Link>
                    {lang === 'en' && (
                      <Link
                        href="/internxt-library"
                        locale={lang}
                        passHref
                        className="flex flex-row items-center hover:text-primary"
                      >
                        {textContent.FooterSection.sections.resources.inxtLibrary}
                        <div className=" ml-2 flex h-max items-center justify-center rounded-full bg-primary bg-opacity-15 py-1 px-2 text-xs font-medium uppercase text-primary">
                          {textContent.FooterSection.new}
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex max-w-[220px] flex-col items-center lg:flex-none">
                <div className="flex flex-shrink-0 flex-col space-y-3">
                  <h3 className="text-lg font-medium">{textContent.FooterSection.sections.tools.title}</h3>
                  <div
                    className={`flex flex-col space-y-1.5 text-base ${
                      darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'
                    }`}
                  >
                    <Link href="/byte-converter" locale={lang} passHref className="hover:text-primary">
                      {textContent.FooterSection.sections.tools.byteConverter}
                    </Link>

                    <Link href="/temporary-email" locale={lang} passHref className="hover:text-primary">
                      {textContent.FooterSection.sections.tools.temporaryEmail}
                    </Link>

                    <Link href="/password-checker" locale={lang} passHref className="hover:text-primary">
                      {textContent.FooterSection.sections.tools.passwordChecker}
                    </Link>

                    <Link href="/virus-scanner" locale={lang} passHref className="hover:text-primary">
                      {textContent.FooterSection.sections.tools.fileVirusScan}
                    </Link>

                    <Link
                      href="/password-generator"
                      locale={lang}
                      passHref
                      className="flex items-center hover:text-primary"
                    >
                      {textContent.FooterSection.sections.tools.passwordGenerator}
                      <div className="ml-2 flex h-max items-center justify-center rounded-full bg-primary bg-opacity-15 py-1 px-2 text-xs font-medium uppercase text-primary">
                        {textContent.FooterSection.new}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div
              className={`${hideNewsletter ? 'hidden' : 'flex'} h-px w-full ${
                darkMode ? 'bg-cool-gray-90' : 'bg-cool-gray-10'
              } mb-10`}
            />

            {/* Logos */}
            <div className="flex w-full max-w-[900px] flex-row justify-between">
              <div className="flex flex-row items-center space-x-4">
                <Link href="/" locale={lang} className="flex flex-shrink-0">
                  <img
                    loading="lazy"
                    src={`../../logos/internxt/${darkMode ? 'white' : 'cool-gray-90'}.svg`}
                    alt="Internxt logo"
                  />
                </Link>
                <p className={`text-xs ${darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'}`}>
                  {textContent.FooterSection.copyright.line1 + year + textContent.FooterSection.copyright.line2}
                </p>
              </div>
              <div className="flex flex-row space-x-1">
                <a href="https://twitter.com/Internxt" target="_blank" className="h-4 py-[7px] pr-2" rel="noreferrer">
                  <img
                    loading="lazy"
                    className="h-3.5"
                    src={`/icons/social/X_logo.svg`}
                    draggable="false"
                    alt="twitter icon"
                  />
                </a>
                <a
                  href="https://www.facebook.com/internxt"
                  target="_blank"
                  className="h-6 py-1.5 pr-2"
                  rel="noreferrer"
                >
                  <img
                    loading="lazy"
                    className="h-4"
                    src={`/icons/social/${darkMode ? 'cool-gray-30' : 'cool-gray-60'}/facebook.svg`}
                    draggable="false"
                    alt="facebook icon"
                  />
                </a>
                <a
                  href="https://linkedin.com/company/internxt"
                  target="_blank"
                  className="h-6 py-1.5 pr-2"
                  rel="noreferrer"
                >
                  <img
                    loading="lazy"
                    className="h-4"
                    src={`/icons/social/${darkMode ? 'cool-gray-30' : 'cool-gray-60'}/linkedin.svg`}
                    draggable="false"
                    alt="linkedin icon"
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCW2SxWdVEAEACYuejCgpGwg/featured"
                  target="_blank"
                  className="h-6 py-1.5 pr-2"
                  rel="noreferrer"
                >
                  <img
                    loading="lazy"
                    className="h-4"
                    src={`/icons/social/${darkMode ? 'cool-gray-30' : 'cool-gray-60'}/youtube.svg`}
                    draggable="false"
                    alt="youtube icon"
                  />
                </a>
                <a href="https://instagram.com/internxt/" target="_blank" className="h-6 py-1.5 pr-2" rel="noreferrer">
                  <img
                    loading="lazy"
                    className="h-4"
                    src={`/icons/social/${darkMode ? 'cool-gray-30' : 'cool-gray-60'}/instagram.svg`}
                    draggable="false"
                    alt="instagram icon"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile version */}
          <div
            className={`${
              darkMode ? 'bg-[#111111] text-white' : 'bg-gray-5 bg-opacity-50'
            } flex flex-col overflow-hidden lg:hidden`}
          >
            <Disclosure as="div" className="w-screen">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between px-6 py-4 text-lg font-medium">
                    <span className="flex flex-row">{textContent.FooterSection.sections.products.title}</span>
                    <CaretDown className={`${open ? 'hidden' : 'flex'} text-gray-80`} weight="bold" />
                    <CaretUp className={`${!open ? 'hidden' : 'flex'} text-gray-80`} weight="bold" />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="-translate-y-10 opacity-0"
                    enterTo="translate-y-0 opacity-100"
                    leave="transition duration-200 ease-out"
                  >
                    <Disclosure.Panel
                      className={`flex flex-col px-6 font-semibold ${!open ? 'hidden' : 'flex'} ${
                        darkMode ? 'bg-black text-gray-30' : 'bg-gray-1 text-gray-60'
                      } space-y-8 p-4`}
                    >
                      <Link href="/drive" locale={lang} passHref legacyBehavior>
                        <div className="flex flex-row space-x-2">
                          <HardDrives className={`h-6 w-6 ${!darkMode && 'text-gray-80'}`} />
                          <p>{textContent.FooterSection.sections.products.drive}</p>
                        </div>
                      </Link>

                      <Link href="/photos" locale={lang} passHref legacyBehavior>
                        <div className="flex flex-row space-x-2">
                          <Camera className={`h-6 w-6 ${!darkMode && 'text-gray-80'}`} />
                          <p>{textContent.FooterSection.sections.products.photos}</p>
                        </div>
                      </Link>

                      <a
                        href="https://send.internxt.com"
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-row items-center"
                      >
                        <div className="flex flex-row space-x-2">
                          <PaperPlaneTilt className={`h-6 w-6 ${!darkMode && 'text-gray-80'}`} />
                          <p>{textContent.FooterSection.sections.products.send}</p>
                        </div>
                      </a>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="w-screen">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between px-6 py-4 text-lg font-medium">
                    <span className="flex flex-row">{textContent.FooterSection.sections.company.title}</span>
                    <CaretDown className={`${open ? 'hidden' : 'flex'} text-gray-80`} weight="bold" />
                    <CaretUp className={`${!open ? 'hidden' : 'flex'} text-gray-80`} weight="bold" />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="-translate-y-10 opacity-0"
                    enterTo="translate-y-0 opacity-100"
                    leave="transition duration-200 ease-out"
                  >
                    <Disclosure.Panel
                      className={`flex flex-col bg-gray-1 px-6 font-semibold ${!open ? 'hidden' : 'flex'} ${
                        darkMode ? 'bg-black text-gray-30' : 'text-gray-60'
                      } space-y-8 p-4`}
                    >
                      <Link href="/about" locale={lang} passHref>
                        {textContent.FooterSection.sections.company.about}
                      </Link>

                      <Link href="/privacy" locale={lang} passHref>
                        {textContent.FooterSection.sections.company.privacy}
                      </Link>

                      <Link
                        href={`https://blog.internxt.com/${
                          lang === 'es' ? 'es/como-internxt-protege-tus-datos/' : 'how-internxt-protects-your-data/'
                        }`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-row items-center"
                        legacyBehavior
                      >
                        <div>{textContent.FooterSection.sections.company.security}</div>
                      </Link>

                      <Link
                        href="/open-source"
                        locale={lang}
                        passHref
                        className="flex max-w-[200px] flex-row items-center hover:text-primary"
                      >
                        {textContent.FooterSection.sections.company.openSource}
                        {lang !== 'en' && (
                          <div className=" ml-2 flex h-max items-center justify-center rounded-full bg-primary bg-opacity-15 py-1 px-2 text-xs font-medium uppercase text-primary">
                            {textContent.FooterSection.new}
                          </div>
                        )}
                      </Link>

                      <Link href="/legal" locale={lang} passHref>
                        {textContent.FooterSection.sections.company.legal}
                      </Link>

                      {lang === 'en' && (
                        <>
                          <Link
                            href="/media-area"
                            locale={lang}
                            passHref
                            className="flex max-w-[200px] flex-row items-center hover:text-primary"
                          >
                            {textContent.FooterSection.sections.company.mediaArea}
                          </Link>
                          <Link
                            href="/use-cases"
                            locale={lang}
                            passHref
                            className="flex max-w-[200px] flex-row items-center hover:text-primary"
                          >
                            {textContent.FooterSection.sections.company.useCases}
                            <div className=" ml-2 flex h-max items-center justify-center rounded-full bg-primary bg-opacity-15 py-1 px-2 text-xs font-medium uppercase text-primary">
                              {textContent.FooterSection.new}
                            </div>
                          </Link>
                        </>
                      )}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="w-screen">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between px-6 py-4 text-lg font-medium">
                    <span className="flex flex-row">{textContent.FooterSection.sections.join.title}</span>
                    <CaretDown className={`${open ? 'hidden' : 'flex'} text-gray-80`} weight="bold" />
                    <CaretUp className={`${!open ? 'hidden' : 'flex'} text-gray-80`} weight="bold" />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="-translate-y-10 opacity-0"
                    enterTo="translate-y-0 opacity-100"
                    leave="transition duration-200 ease-out"
                  >
                    <Disclosure.Panel
                      className={`flex flex-col bg-gray-1 px-6 font-semibold ${!open ? 'hidden' : 'flex'} ${
                        darkMode ? 'bg-black text-gray-30' : 'text-gray-60'
                      } space-y-8 p-4`}
                    >
                      <a href="/newsletter-subscribe" target="_top" className="hover:text-primary">
                        {textContent.FooterSection.sections.join.newsletter}
                      </a>
                      <a href="https://drive.internxt.com/new" target="_blank">
                        {textContent.FooterSection.sections.join.signup}
                      </a>

                      <a href="https://drive.internxt.com/login" target="_blank">
                        {textContent.FooterSection.sections.join.login}
                      </a>

                      <a href="https://github.com/internxt" target="_blank" rel="noreferrer">
                        {textContent.FooterSection.sections.join.github}
                      </a>
                      <a href="/whitepaper/internxt-white-paper.pdf" download={true} className="hover:text-primary">
                        {textContent.FooterSection.sections.join.whitePaper}
                      </a>
                      <Link href="/affiliates" target="_blank" legacyBehavior>
                        {textContent.FooterSection.sections.join.affiliates}
                      </Link>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="w-screen">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between px-6 py-4 text-lg font-medium">
                    <span className="flex flex-row">{textContent.FooterSection.sections.resources.title}</span>
                    <CaretDown className={`${open ? 'hidden' : 'flex'} text-gray-80`} weight="bold" />
                    <CaretUp className={`${!open ? 'hidden' : 'flex'} text-gray-80`} weight="bold" />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="-translate-y-10 opacity-0"
                    enterTo="translate-y-0 opacity-100"
                    leave="transition duration-200 ease-out"
                  >
                    <Disclosure.Panel
                      className={`flex flex-col bg-gray-1 px-6 font-semibold ${!open ? 'hidden' : 'flex'} ${
                        darkMode ? 'bg-black text-gray-30' : 'text-gray-60'
                      } space-y-8 p-4`}
                    >
                      <a
                        href={`https://blog.internxt.com/${lang === 'es' ? 'es/' : ''}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {textContent.FooterSection.sections.resources.blog}
                      </a>

                      <Link href="/privacy-directory" locale={lang} passHref>
                        {textContent.FooterSection.sections.resources.directoryOfPrivacyOrganizations}
                      </Link>

                      <Link href="/cyber-awareness" locale={lang} passHref>
                        {textContent.FooterSection.sections.resources.cyberAwareness}
                      </Link>

                      <Link href="/what-does-google-know-about-me" locale={lang} passHref>
                        {textContent.FooterSection.sections.resources.whatGoogleKnowsAboutMe}
                      </Link>

                      {lang === 'en' && (
                        <Link
                          href="/internxt-library"
                          locale={lang}
                          passHref
                          className="flex items-center hover:text-primary"
                        >
                          {textContent.FooterSection.sections.resources.inxtLibrary}
                        </Link>
                      )}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="w-screen">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between px-6 py-4 text-lg font-medium">
                    <span className="flex flex-row">{textContent.FooterSection.sections.tools.title}</span>
                    <CaretDown className={`${open ? 'hidden' : 'flex'} text-gray-80`} weight="bold" />
                    <CaretUp className={`${!open ? 'hidden' : 'flex'} text-gray-80`} weight="bold" />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="-translate-y-10 opacity-0"
                    enterTo="translate-y-0 opacity-100"
                    leave="transition duration-200 ease-out"
                  >
                    <Disclosure.Panel
                      className={`flex flex-col bg-gray-1 px-6 font-semibold ${!open ? 'hidden' : 'flex'} ${
                        darkMode ? 'bg-black text-gray-30' : 'text-gray-60'
                      } space-y-8 p-4`}
                    >
                      <Link href="/byte-converter" locale={lang} passHref>
                        {textContent.FooterSection.sections.tools.byteConverter}
                      </Link>

                      <Link href="/temporary-email" locale={lang} passHref>
                        {textContent.FooterSection.sections.tools.temporaryEmail}
                      </Link>

                      <Link href="/password-checker" locale={lang} passHref legacyBehavior>
                        <div>{textContent.FooterSection.sections.tools.passwordChecker}</div>
                      </Link>

                      <Link href="/virus-scanner" locale={lang} passHref>
                        {textContent.FooterSection.sections.tools.fileVirusScan}
                      </Link>
                      <Link href="/password-generator" locale={lang} passHref legacyBehavior>
                        {textContent.FooterSection.sections.tools.passwordGenerator}
                      </Link>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            {/* Language selection for mobile view */}
            <LanguageMobileBox darkMode={darkMode} />

            <div className="flex flex-col items-center space-y-4 py-10">
              <div className="flex flex-row space-x-1">
                <a href="https://twitter.com/Internxt" target="_blank" className="h-8 py-2 pr-6" rel="noreferrer">
                  <img
                    loading="lazy"
                    className="h-4"
                    src={`/icons/social/X_logo.svg`}
                    draggable="false"
                    alt="twitter icon"
                  />
                </a>
                <a
                  href="https://www.facebook.com/internxt"
                  target="_blank"
                  className="h-8 py-1.5 pr-6"
                  rel="noreferrer"
                >
                  <img
                    loading="lazy"
                    className="h-5"
                    src={`/icons/social/${darkMode ? 'cool-gray-30' : 'cool-gray-60'}/facebook.svg`}
                    draggable="false"
                    alt="facebook icon"
                  />
                </a>
                <a
                  href="https://linkedin.com/company/internxt"
                  target="_blank"
                  className="h-8 py-1.5 pr-6"
                  rel="noreferrer"
                >
                  <img
                    loading="lazy"
                    className="h-5"
                    src={`/icons/social/${darkMode ? 'cool-gray-30' : 'cool-gray-60'}/linkedin.svg`}
                    draggable="false"
                    alt="linkedin icon"
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCW2SxWdVEAEACYuejCgpGwg/featured"
                  target="_blank"
                  className="h-8 py-1.5 pr-6"
                  rel="noreferrer"
                >
                  <img
                    loading="lazy"
                    className="h-5"
                    src={`/icons/social/${darkMode ? 'cool-gray-30' : 'cool-gray-60'}/youtube.svg`}
                    draggable="false"
                    alt="youtube icon"
                  />
                </a>
                <a href="https://instagram.com/internxt/" target="_blank" className="h-8 py-1.5 pr-6" rel="noreferrer">
                  <img
                    loading="lazy"
                    className="h-5"
                    src={`/icons/social/${darkMode ? 'cool-gray-30' : 'cool-gray-60'}/instagram.svg`}
                    draggable="false"
                    alt="instagram icon"
                  />
                </a>
              </div>

              <p className={`text-xs ${darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'}`}>
                {textContent.FooterSection.copyright.line1 + year + textContent.FooterSection.copyright.line2}
              </p>

              <Link href="/" locale={lang} className="flex flex-shrink-0">
                <img
                  loading="lazy"
                  src={`../../logos/internxt/${darkMode ? 'white' : 'cool-gray-90'}.svg`}
                  alt="Internxt logo"
                />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  return {
    props: {
      lang,
    },
  };
}
