/* eslint-disable max-len */
import React from 'react';
import { Transition, Disclosure } from '@headlessui/react';
import { UilMinus } from '@iconscout/react-unicons';
import Link from 'next/link';
import cookies from '../../lib/cookies';
import setUTM from '../../lib/conversions';
import styles from './Footer.module.scss';

export default function Footer({ textContent, lang, hideNewsletter, darkMode }) {
  const [consentCookie, setConsentCookie] = React.useState(true);

  const handleAcceptCookies = () => {
    localStorage.setItem('CookieConsent', 'true');
    setConsentCookie(true);
  };

  React.useEffect(() => {
    const cookie = localStorage.getItem('CookieConsent');
    setUTM();

    if (!cookie) setConsentCookie(false);
  }, []);

  return (
    <section
      className={`flex w-full flex-col pb-10 ${darkMode ? 'bg-cool-gray-100 text-white' : 'bg-gray-5 bg-opacity-50'}`}
    >
      <div className="flex w-full flex-col items-center justify-center px-6 py-16 sm:p-20 sm:py-12">
        {/* Newsletter */}
        <div
          className={`${
            hideNewsletter ? 'hidden' : 'flex'
          } mb-10 w-full flex-col items-start justify-center space-y-6 md:flex-row md:space-x-20 md:space-y-0`}
        >
          <div className="flex w-full flex-col space-y-1 md:max-w-sm">
            <h2 className="text-lg font-medium">{textContent.NewsletterSection.title}</h2>
            <p className={`text-base sm:text-sm ${darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'}`}>
              {textContent.NewsletterSection.description}
            </p>
          </div>

          <form
            data-code="r3s4c1"
            method="post"
            target="_blank"
            rel="noopener"
            action="https://app.mailerlite.com/webforms/submit/r3s4c1"
            className="flex w-full flex-col items-center justify-center md:w-auto"
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
              className="mb-6 flex w-full cursor-pointer items-center justify-center rounded-lg border border-transparent bg-primary px-4 py-3 text-lg font-medium text-white transition-all duration-75 focus:outline-none active:bg-primary-dark sm:mb-2 sm:py-2 sm:text-base"
            />
            <span className="text-xs text-cool-gray-40 sm:text-supporting-2">
              {textContent.NewsletterSection.privacy}{' '}
              <Link href="/legal" locale={lang}>
                <span className="cursor-pointer underline">{textContent.NewsletterSection.privacyLink}</span>
              </Link>
            </span>
          </form>
        </div>

        {/* Separator */}
        <div
          className={`${hideNewsletter ? 'hidden' : 'flex'} h-px w-full ${
            darkMode ? 'bg-cool-gray-90' : 'bg-cool-gray-10'
          } mb-10`}
        />

        {/* Footer content */}
        <footer className="w-full">
          {/* Desktop version */}
          <div className="hidden flex-col items-center md:flex md:space-y-16">
            <div className="flex w-full flex-row justify-between md:justify-center lg:space-x-20 xl:space-x-32">
              <div className="flex flex-1 flex-col items-center lg:flex-none">
                <div className="flex flex-shrink-0 flex-col space-y-3">
                  <h3 className="text-lg font-medium">{textContent.FooterSection.sections.products.title}</h3>
                  <div
                    className={`flex flex-col space-y-1.5 text-base ${
                      darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'
                    }`}
                  >
                    <Link href="/drive" locale={lang} passHref>
                      <a>{textContent.FooterSection.sections.products.drive}</a>
                    </Link>

                    <Link href="/photos" locale={lang} passHref>
                      <a>{textContent.FooterSection.sections.products.photos}</a>
                    </Link>

                    <a
                      href="https://send.internxt.com"
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-row items-center"
                    >
                      <div>{textContent.FooterSection.sections.products.send}</div>
                      <div className="pointer-events-none ml-2 flex flex-row items-center whitespace-nowrap rounded-full bg-orange bg-opacity-15 px-2 text-supporting-1 font-medium uppercase text-orange">
                        {textContent.FooterSection.new}
                      </div>
                    </a>

                    <Link href="/pricing" locale={lang} passHref>
                      <a>{textContent.FooterSection.sections.products.pricing}</a>
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
                    <Link href="/about" locale={lang} passHref>
                      <a>{textContent.FooterSection.sections.company.about}</a>
                    </Link>

                    <Link href="/privacy" locale={lang} passHref>
                      <a>{textContent.FooterSection.sections.company.privacy}</a>
                    </Link>

                    <a
                      href={`https://blog.internxt.com/${
                        lang === 'es' ? 'es/como-internxt-protege-tus-datos/' : 'how-internxt-protects-your-data/'
                      }`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {textContent.FooterSection.sections.company.security}
                    </a>

                    <Link href="/legal" locale={lang} passHref>
                      <a>{textContent.FooterSection.sections.company.legal}</a>
                    </Link>

                    <a href="https://help.internxt.com/" target="_blank" rel="noreferrer">
                      {textContent.FooterSection.sections.company.support}
                    </a>

                    <Link href="/cloud-storage-comparison" locale={lang} passHref>
                      <a>{textContent.FooterSection.sections.company.comparison}</a>
                    </Link>
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
                    <a href="https://drive.internxt.com/new" target="_top">
                      {textContent.FooterSection.sections.join.signup}
                    </a>

                    <a href="https://drive.internxt.com/login" target="_top">
                      {textContent.FooterSection.sections.join.login}
                    </a>

                    <a href="https://t.me/internxt" target="_blank" rel="noreferrer">
                      {textContent.FooterSection.sections.join.community}
                    </a>

                    <a href="https://github.com/internxt" target="_blank" rel="noreferrer">
                      {textContent.FooterSection.sections.join.github}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col items-center lg:flex-none">
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
                    >
                      {textContent.FooterSection.sections.resources.blog}
                    </a>

                    <Link href="/privacy-directory" locale={lang} passHref>
                      <a>{textContent.FooterSection.sections.resources.directoryOfPrivacyOrganizations}</a>
                    </Link>

                    <Link href="/password-checker" locale={lang} passHref>
                      <a>{textContent.FooterSection.sections.resources.passwordChecker}</a>
                    </Link>

                    <Link href="/virus-scanner" locale={lang} passHref>
                      <a>{textContent.FooterSection.sections.resources.fileVirusScan}</a>
                    </Link>

                    <Link href="/cyber-awareness" locale={lang} passHref>
                      <a>{textContent.FooterSection.sections.resources.cyberAwareness}</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center space-y-4">
              <div className="flex flex-row space-x-1">
                <a href="https://twitter.com/Internxt" target="_blank" className="h-6 py-1.5 pr-2" rel="noreferrer">
                  <img
                    loading="lazy"
                    className="h-4"
                    src={`/icons/social/${darkMode ? 'cool-gray-30' : 'cool-gray-60'}/twitter.svg`}
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

              <p className={`text-xs ${darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'}`}>
                {textContent.FooterSection.copyright}
              </p>

              <Link href="/" locale={lang}>
                <a className="flex flex-shrink-0">
                  <img
                    loading="lazy"
                    src={`../../logos/internxt/${darkMode ? 'white' : 'cool-gray-90'}.svg`}
                    alt="Internxt logo"
                  />
                </a>
              </Link>
            </div>
          </div>

          {/* Mobile version */}
          <div className="flex flex-col md:hidden">
            <Disclosure as="div" className={`border-b ${darkMode ? 'border-cool-gray-90' : 'border-cool-gray-10'}`}>
              {({ open }) => (
                <div>
                  <Disclosure.Button className="flex w-full items-center justify-between py-4 text-lg font-medium">
                    <span className="flex flex-row">{textContent.FooterSection.sections.products.title}</span>
                    <span className="relative h-5 w-5">
                      <UilMinus
                        className={`absolute top-0 left-0 h-full w-full ${
                          (open && darkMode) || (!open && !darkMode) ? 'text-cool-gray-30' : 'text-cool-gray-60'
                        } transition duration-300 ${open ? 'text-cool-gray-30' : '-rotate-180'}`}
                      />
                      <UilMinus
                        className={`absolute top-0 left-0 h-full w-full ${
                          (open && darkMode) || (!open && !darkMode) ? 'text-cool-gray-30' : 'text-cool-gray-60'
                        } transition duration-300 ${open ? 'text-cool-gray-30' : '-rotate-90'}`}
                      />
                    </span>
                  </Disclosure.Button>

                  <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="-translate-y-10 opacity-0"
                    enterTo="translate-y-0 opacity-100"
                    leave="transition duration-0"
                  >
                    <Disclosure.Panel
                      className={`flex flex-col ${
                        darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'
                      } space-y-4 p-4 pt-2`}
                    >
                      <Link href="/drive" locale={lang} passHref>
                        <a>{textContent.FooterSection.sections.products.drive}</a>
                      </Link>

                      <Link href="/photos" locale={lang} passHref>
                        <a>{textContent.FooterSection.sections.products.photos}</a>
                      </Link>

                      <a
                        href="https://send.internxt.com"
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-row items-center"
                      >
                        <div>{textContent.FooterSection.sections.products.send}</div>
                        <div className="pointer-events-none ml-2 flex flex-row items-center whitespace-nowrap rounded-full bg-orange bg-opacity-15 px-2 py-1 text-supporting-1 font-medium uppercase text-orange">
                          {textContent.FooterSection.new}
                        </div>
                      </a>

                      <Link href="/pricing" locale={lang} passHref>
                        <a>{textContent.FooterSection.sections.products.pricing}</a>
                      </Link>
                    </Disclosure.Panel>
                  </Transition>
                </div>
              )}
            </Disclosure>

            <Disclosure as="div" className={`border-b ${darkMode ? 'border-cool-gray-90' : 'border-cool-gray-10'}`}>
              {({ open }) => (
                <div>
                  <Disclosure.Button className="flex w-full items-center justify-between py-4 text-lg font-medium">
                    <span className="flex flex-row">{textContent.FooterSection.sections.company.title}</span>
                    <span className="relative h-5 w-5">
                      <UilMinus
                        className={`absolute top-0 left-0 h-full w-full ${
                          (open && darkMode) || (!open && !darkMode) ? 'text-cool-gray-30' : 'text-cool-gray-60'
                        } transition duration-300 ${open ? 'text-cool-gray-30' : '-rotate-180'}`}
                      />
                      <UilMinus
                        className={`absolute top-0 left-0 h-full w-full ${
                          (open && darkMode) || (!open && !darkMode) ? 'text-cool-gray-30' : 'text-cool-gray-60'
                        } transition duration-300 ${open ? 'text-cool-gray-30' : '-rotate-90'}`}
                      />
                    </span>
                  </Disclosure.Button>

                  <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="-translate-y-10 opacity-0"
                    enterTo="translate-y-0 opacity-100"
                    leave="transition duration-0"
                  >
                    <Disclosure.Panel
                      className={`flex flex-col ${
                        darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'
                      } space-y-4 p-4 pt-2`}
                    >
                      <Link href="/about" locale={lang} passHref>
                        <a>{textContent.FooterSection.sections.company.about}</a>
                      </Link>

                      <Link href="/privacy" locale={lang} passHref>
                        <a>{textContent.FooterSection.sections.company.privacy}</a>
                      </Link>

                      <a
                        href={`https://blog.internxt.com/${
                          lang === 'es' ? 'es/como-internxt-protege-tus-datos/' : 'how-internxt-protects-your-data/'
                        }`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {textContent.FooterSection.sections.company.security}
                      </a>

                      <Link href="/legal" locale={lang} passHref>
                        <a>{textContent.FooterSection.sections.company.legal}</a>
                      </Link>

                      <a href="https://help.internxt.com/" target="_blank" rel="noreferrer">
                        {textContent.FooterSection.sections.company.support}
                      </a>

                      <Link href="/cloud-storage-comparison" locale={lang} passHref>
                        <a>{textContent.FooterSection.sections.company.comparison}</a>
                      </Link>
                    </Disclosure.Panel>
                  </Transition>
                </div>
              )}
            </Disclosure>

            <Disclosure as="div" className={`border-b ${darkMode ? 'border-cool-gray-90' : 'border-cool-gray-10'}`}>
              {({ open }) => (
                <div>
                  <Disclosure.Button className="flex w-full items-center justify-between py-4 text-lg font-medium">
                    <span className="flex flex-row">{textContent.FooterSection.sections.join.title}</span>
                    <span className="relative h-5 w-5">
                      <UilMinus
                        className={`absolute top-0 left-0 h-full w-full ${
                          (open && darkMode) || (!open && !darkMode) ? 'text-cool-gray-30' : 'text-cool-gray-60'
                        } transition duration-300 ${open ? 'text-cool-gray-30' : '-rotate-180'}`}
                      />
                      <UilMinus
                        className={`absolute top-0 left-0 h-full w-full ${
                          (open && darkMode) || (!open && !darkMode) ? 'text-cool-gray-30' : 'text-cool-gray-60'
                        } transition duration-300 ${open ? 'text-cool-gray-30' : '-rotate-90'}`}
                      />
                    </span>
                  </Disclosure.Button>

                  <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="-translate-y-10 opacity-0"
                    enterTo="translate-y-0 opacity-100"
                    leave="transition duration-0"
                  >
                    <Disclosure.Panel
                      className={`flex flex-col ${
                        darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'
                      } space-y-4 p-4 pt-2`}
                    >
                      <a href="https://drive.internxt.com/new" target="_top">
                        {textContent.FooterSection.sections.join.signup}
                      </a>

                      <a href="https://drive.internxt.com/login" target="_top">
                        {textContent.FooterSection.sections.join.login}
                      </a>

                      <a href="https://t.me/internxt" target="_blank" rel="noreferrer">
                        {textContent.FooterSection.sections.join.community}
                      </a>

                      <a href="https://github.com/internxt" target="_blank" rel="noreferrer">
                        {textContent.FooterSection.sections.join.github}
                      </a>
                    </Disclosure.Panel>
                  </Transition>
                </div>
              )}
            </Disclosure>

            <Disclosure as="div" className={`border-b ${darkMode ? 'border-cool-gray-90' : 'border-cool-gray-10'}`}>
              {({ open }) => (
                <div>
                  <Disclosure.Button className="flex w-full items-center justify-between py-4 text-lg font-medium">
                    <span className="flex flex-row">{textContent.FooterSection.sections.resources.title}</span>
                    <span className="relative h-5 w-5">
                      <UilMinus
                        className={`absolute top-0 left-0 h-full w-full ${
                          (open && darkMode) || (!open && !darkMode) ? 'text-cool-gray-30' : 'text-cool-gray-60'
                        } transition duration-300 ${open ? 'text-cool-gray-30' : '-rotate-180'}`}
                      />
                      <UilMinus
                        className={`absolute top-0 left-0 h-full w-full ${
                          (open && darkMode) || (!open && !darkMode) ? 'text-cool-gray-30' : 'text-cool-gray-60'
                        } transition duration-300 ${open ? 'text-cool-gray-30' : '-rotate-90'}`}
                      />
                    </span>
                  </Disclosure.Button>

                  <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="-translate-y-10 opacity-0"
                    enterTo="translate-y-0 opacity-100"
                    leave="transition duration-0"
                  >
                    <Disclosure.Panel
                      className={`flex flex-col ${
                        darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'
                      } space-y-4 p-4 pt-2`}
                    >
                      <a
                        href={`https://blog.internxt.com/${lang === 'es' ? 'es/' : ''}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {textContent.FooterSection.sections.resources.blog}
                      </a>

                      <Link href="/privacy-directory" locale={lang} passHref>
                        <a>{textContent.FooterSection.sections.resources.directoryOfPrivacyOrganizations}</a>
                      </Link>

                      <Link href="/password-checker" locale={lang} passHref>
                        <a>{textContent.FooterSection.sections.resources.passwordChecker}</a>
                      </Link>

                      <Link href="/virus-scanner" locale={lang} passHref>
                        <a>{textContent.FooterSection.sections.resources.fileVirusScan}</a>
                      </Link>
                      <Link href="/cyber-awareness" locale={lang} passHref>
                        <a>{textContent.FooterSection.sections.resources.cyberAwareness}</a>
                      </Link>
                    </Disclosure.Panel>
                  </Transition>
                </div>
              )}
            </Disclosure>

            <div className="mt-16 flex flex-col items-center space-y-4">
              <div className="flex flex-row space-x-1">
                <a href="https://twitter.com/Internxt" target="_blank" className="h-8 py-1.5 pr-6" rel="noreferrer">
                  <img
                    loading="lazy"
                    className="h-5"
                    src={`/icons/social/${darkMode ? 'cool-gray-30' : 'cool-gray-60'}/twitter.svg`}
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
                {textContent.FooterSection.copyright}
              </p>

              <Link href="/" locale={lang}>
                <a className="flex flex-shrink-0">
                  <img
                    loading="lazy"
                    src={`../../logos/internxt/${darkMode ? 'white' : 'cool-gray-90'}.svg`}
                    alt="Internxt logo"
                  />
                </a>
              </Link>
            </div>
          </div>
        </footer>
      </div>

      {/* Cookies modal */}
      <div
        data-aos="fade-up"
        data-aos-duration="350"
        data-aos-offset="500"
        className={`${styles.cookiesBgFallback} ${
          consentCookie ? 'hidden' : 'flex'
        } fixed bottom-0 left-0 z-50 w-full justify-between border border-black border-opacity-5 bg-white bg-opacity-95 p-4 shadow-2xl backdrop-blur-lg backdrop-filter sm:bottom-8 sm:left-8 sm:max-w-xs sm:rounded-lg sm:p-6`}
      >
        <div className="flex w-full flex-row items-center justify-between space-x-4 sm:flex-col sm:space-y-8 sm:space-x-0">
          <div className="flex flex-col space-y-2">
            <p className="text-base font-medium text-cool-gray-90">{textContent.Cookies.title}</p>
            <Link href="/legal" locale={lang}>
              <a className="flex cursor-pointer flex-row items-center text-sm text-cool-gray-60">
                <img
                  loading="lazy"
                  className="mt-0.5 mr-2"
                  src="/icons/newTabNeutral40.svg"
                  draggable="false"
                  alt="new tab icon"
                />
                {textContent.Cookies.link}
              </a>
            </Link>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleAcceptCookies}
                className="flex h-10 w-full cursor-pointer items-center justify-center rounded-lg border border-transparent bg-black bg-opacity-5 p-0 text-base font-medium text-cool-gray-60 transition-all duration-75 focus:outline-none active:bg-cool-gray-20 sm:px-4 sm:py-2"
              >
                <span className="flex">{textContent.Cookies.close}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
    },
  };
}
