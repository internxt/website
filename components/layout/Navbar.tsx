/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import { Transition, Disclosure, Dialog } from '@headlessui/react';
import { Squeeze as Hamburger } from 'hamburger-react';
import { UilMinus, UilAngleDown } from '@iconscout/react-unicons';
import styles from './Navbar.module.scss';
import { X } from 'phosphor-react';
import { isAndroid, isIOS, isMobile } from 'react-device-detect';

export default function Navbar({ textContent, lang, cta, darkMode, fixed }) {
  const [menuState, setMenuState] = useState(false);
  const [scrolled, setScrolled] = useState(true);
  const ctaAction = cta[0] ? cta : ['default', null];

  // Auth
  useEffect(() => {
    if (window) {
      window.onmessage = function (e) {
        const permitedDomains = [
          'https://drive.internxt.com',
          'https://internxt.com',
          process.env.NODE_ENV === 'development' && 'http://localhost:3001',
          process.env.NODE_ENV === 'development' && 'http://localhost:3000',
        ];
        if (permitedDomains.includes(e.origin)) {
          if (e.data === 'redirect') {
            redirectToDrive();
          } else if (e.data === 'openDialogLogin') {
            openAuth('login');
          } else if (e.data === 'openDialogSignup') {
            openAuth('signup');
          }
        }
      };
    }
  });

  const [showWhiteScreen, setShowWhiteScreen] = useState<boolean>(false);
  const [showAuth, setShowAuth] = useState<boolean>(false);
  const [showIframe, setShowIframe] = useState<boolean>(true);
  const [showLoader, setShowLoader] = useState<boolean>(true);
  const [authMethod, setAuthMethod] = useState<'login' | 'signup'>('signup');
  const hideAuth = () => {
    setShowAuth(false);
    setAuthMethod('signup');
    setShowLoader(true);
  };
  const openAuth = (view: 'login' | 'signup') => {
    setShowIframe(true);
    setAuthMethod(view);
    setShowAuth(true);
  };
  const redirectToDrive = () => {
    setShowWhiteScreen(true);
    setShowIframe(false);
    setShowLoader(true);

    if (isMobile) {
      if (isAndroid) {
        window.location.replace('https://play.google.com/store/apps/details?id=com.internxt.cloud');
      } else if (isIOS) {
        window.location.replace('https://apps.apple.com/us/app/internxt-drive-secure-file-storage/id1465869889');
      }
    } else {
      window.location.replace('https://drive.internxt.com');
    }
  };

  const handleScroll = () => setScrolled(window.pageYOffset > 0);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <div
      className={`section flex items-center ${
        !menuState && !fixed ? 'absolute' : 'fixed'
      } w-full h-16 transition-all duration-100 bg-white ${
        fixed && 'backdrop-filter backdrop-saturate-150 backdrop-blur-lg'
      } ${darkMode ? '' : styles.nabvarBgFallback} ${
        scrolled && fixed ? 'border-opacity-5 bg-opacity-90' : 'border-opacity-0 bg-opacity-0'
      } ${menuState ? 'bg-opacity-100' : ''} border-b border-black z-40`}
    >
      <div className="w-full mx-4 lg:mx-10 xl:mx-32">
        <div className="navbar items-center flex justify-between max-w-screen-xl mx-auto">
          {/* Left side of navbar: Logo / Hamburguer menu */}
          <div className=" flex flex-row flex-grow flex-shrink-0 flex-1 justify-start items-center space-x-4 lg:space-x-0">
            <div className="flex lg:hidden">
              <Hamburger
                label="Show menu"
                size={24}
                color={darkMode && !menuState ? '#fff' : '#253858'}
                toggled={menuState}
                toggle={setMenuState}
              />

              {/* Mobile hamburger menu background */}
              <div
                className={`pointer-events-none transition-all duration-500 flex fixed left-0 w-full h-full top-14 bg-white ${
                  menuState ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Mobile hamburger menu */}
              <div
                className={`transition-all duration-500 flex flex-col fixed left-0 w-full top-14 overflow-hidden bg-white text-xl ${
                  menuState ? 'h-screen pb-14 overflow-y-auto' : 'h-0'
                }`}
              >
                <div className="my-6 font-medium">
                  <Link href="/pricing" locale={lang}>
                    <a
                      role="link"
                      tabIndex={0}
                      onClick={() => {
                        setMenuState(false);
                      }}
                      className={`outline-none flex w-full px-8 py-3 transition duration-300 delay-100 transform translate-y-0 ${
                        menuState ? 'opacity-100' : '-translate-y-4 opacity-0'
                      }`}
                    >
                      {textContent.links.pricing}
                    </a>
                  </Link>

                  <Disclosure as="div">
                    {({ open }) => (
                      <div
                        className={`transition duration-300 delay-150 transform translate-y-0 ${
                          menuState ? 'opacity-100' : '-translate-y-4 opacity-0'
                        }`}
                      >
                        <div className={`${open ? 'bg-cool-gray-5' : ''}`}>
                          <Disclosure.Button
                            className={`flex justify-between items-center w-full px-8 py-3 font-medium ${
                              open ? 'bg-cool-gray-10' : ''
                            }`}
                          >
                            <span>{textContent.links.products}</span>
                            <span className="relative w-6 h-6">
                              <UilMinus
                                className={`absolute top-0 left-0 w-6 h-6 transition duration-300 transform ${
                                  open ? 'text-cool-gray-60' : 'text-cool-gray-40 -rotate-180'
                                }`}
                              />
                              <UilMinus
                                className={`absolute top-0 left-0 w-6 h-6 transition duration-300 transform ${
                                  open ? 'text-cool-gray-60' : 'text-cool-gray-40 -rotate-90'
                                }`}
                              />
                            </span>
                          </Disclosure.Button>

                          <Transition
                            enter="transition duration-200 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-200 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                          >
                            <Disclosure.Panel className="flex flex-col py-3 text-cool-gray-80 mb-4">
                              <Link href="/drive" locale={lang}>
                                <a
                                  tabIndex={0}
                                  onClick={() => {
                                    setMenuState(false);
                                  }}
                                  className="outline-none flex w-full px-8 py-3 justify-start text-lg font-medium text-cool-gray-80"
                                >
                                  {textContent.products.drive}
                                </a>
                              </Link>

                              <Link href="/photos" locale={lang}>
                                <a
                                  tabIndex={0}
                                  onClick={() => {
                                    setMenuState(false);
                                  }}
                                  className="outline-none flex w-full px-8 py-3 justify-start text-lg font-medium text-cool-gray-80"
                                >
                                  {textContent.products.photos}
                                </a>
                              </Link>

                              <a
                                href="https://send.internxt.com"
                                target="_blank"
                                rel="noreferrer"
                                className="outline-none flex w-full px-8 py-3 justify-start items-center text-lg font-medium text-cool-gray-80"
                              >
                                <span>{textContent.products.send}</span>
                                <span className="flex flex-row items-center px-2 py-1 rounded-full bg-orange bg-opacity-15 text-orange text-supporting-2 whitespace-nowrap ml-2 pointer-events-none uppercase font-medium">
                                  {textContent.products.new}
                                </span>
                              </a>
                            </Disclosure.Panel>
                          </Transition>
                        </div>
                      </div>
                    )}
                  </Disclosure>

                  <Link href="/privacy" locale={lang}>
                    <a
                      role="link"
                      tabIndex={0}
                      onClick={() => {
                        setMenuState(false);
                      }}
                      className={`outline-none cursor-pointer flex w-full px-8 py-3 transition duration-300 delay-200 transform translate-y-0 ${
                        menuState ? 'opacity-100' : '-translate-y-4 opacity-0'
                      }`}
                    >
                      {textContent.links.privacy}
                    </a>
                  </Link>

                  <Link href="/about" locale={lang}>
                    <a
                      role="link"
                      tabIndex={0}
                      onClick={() => {
                        setMenuState(false);
                      }}
                      className={`outline-none cursor-pointer flex w-full px-8 py-3 transition duration-300 delay-250 transform translate-y-0 ${
                        menuState ? 'opacity-100' : '-translate-y-4 opacity-0'
                      }`}
                    >
                      {textContent.links.about}
                    </a>
                  </Link>

                  <a
                    onClick={() => {
                      setMenuState(false);
                    }}
                    tabIndex={0}
                    href="https://drive.internxt.com/login"
                    className={`outline-none flex w-full px-8 py-3 text-blue-60 transition duration-300 delay-300 transform translate-y-0 ${
                      menuState ? 'opacity-100' : '-translate-y-4 opacity-0'
                    }`}
                  >
                    {textContent.links.login}
                  </a>
                </div>
              </div>
            </div>

            {/* Logo */}
            <Link href="/" locale={lang} passHref>
              <a className="flex flex-shrink-0">
                <img
                  loading="lazy"
                  className="select-none"
                  src={`../../logos/internxt/${darkMode && !menuState ? 'white' : 'cool-gray-90'}.svg`}
                  alt="Internxt logo"
                />
              </a>
            </Link>
          </div>

          {/* Desktop links */}
          <div className="links">
            <div className="hidden lg:inline-flex space-x-2">
              <Link href="/pricing" locale={lang}>
                <a
                  className={`whitespace-nowrap py-1.5 px-4 transition duration-150 ease-in-out ${
                    darkMode ? 'text-white hover:text-cool-gray-20' : 'text-cool-gray-70 hover:text-cool-gray-90'
                  } text-base font-medium`}
                >
                  {textContent.links.pricing}
                </a>
              </Link>

              <div
                className={`group relative flex py-1.5 px-4 pr-2 space-x-1 transition duration-150 ease-in-out font-medium ${
                  darkMode
                    ? 'text-white hover:text-cool-gray-20 hover:bg-white hover:bg-opacity-10'
                    : 'text-cool-gray-70 hover:text-cool-gray-90 hover:bg-cool-gray-100 hover:bg-opacity-5'
                } rounded-lg cursor-default`}
              >
                <span>{textContent.links.products}</span>
                <UilAngleDown className="w-6 h-6 transition duration-150 ease-in-out transform translate-y-px text-cool-gray-20 group-hover:text-cool-gray-30" />

                {/* Menu items */}
                <div className="absolute top-full left-1/2 z-10 w-52 transform -translate-x-1/2 opacity-0 translate-y-0 group-hover:translate-y-1 group-hover:opacity-100 p-1.5 bg-white border-black rounded-xl shadow-subtle border border-opacity-5 transition duration-150 ease-in-out pointer-events-none group-hover:pointer-events-auto">
                  <div className="absolute -top-4 left-1/2 w-4/5 h-4 transform -translate-x-1/2" />

                  <div className="relative grid gap-0 lg:grid-cols-1 whitespace-nowrap">
                    <Link href="/drive" locale={lang}>
                      <a
                        className={`py-2 px-4 rounded-lg flex flex-row justify-start text-base font-medium text-cool-gray-80 ${
                          darkMode ? 'hover:bg-cool-gray-10' : 'hover:bg-cool-gray-5'
                        }`}
                      >
                        {textContent.products.drive}
                      </a>
                    </Link>

                    <Link href="/photos" locale={lang}>
                      <a
                        className={`py-2 px-4 rounded-lg flex flex-row justify-start text-base font-medium text-cool-gray-80 ${
                          darkMode ? 'hover:bg-cool-gray-10' : 'hover:bg-cool-gray-5'
                        }`}
                      >
                        {textContent.products.photos}
                      </a>
                    </Link>

                    <a
                      href="https://send.internxt.com"
                      target="_blank"
                      rel="noreferrer"
                      className={`py-2 px-4 rounded-lg flex flex-row justify-start items-center text-base font-medium text-cool-gray-80 ${
                        darkMode ? 'hover:bg-cool-gray-10' : 'hover:bg-cool-gray-5'
                      }`}
                    >
                      <span>{textContent.products.send}</span>
                      <span className="flex flex-row items-center px-2 py-1 rounded-full bg-orange bg-opacity-15 text-orange text-supporting-2 whitespace-nowrap ml-2 pointer-events-none uppercase font-medium">
                        {textContent.products.new}
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <Link href="/privacy" locale={lang}>
                <a
                  className={`whitespace-nowrap py-1.5 px-4 transition duration-150 ease-in-out ${
                    darkMode ? 'text-white hover:text-cool-gray-20' : 'text-cool-gray-70 hover:text-cool-gray-90'
                  } text-base font-medium`}
                >
                  {textContent.links.privacy}
                </a>
              </Link>

              <Link href="/about" locale={lang}>
                <a
                  className={`whitespace-nowrap py-1.5 px-4 transition duration-150 ease-in-out ${
                    darkMode ? 'text-white hover:text-cool-gray-20' : 'text-cool-gray-70 hover:text-cool-gray-90'
                  } text-base font-medium`}
                >
                  {textContent.links.about}
                </a>
              </Link>
            </div>
          </div>

          {/* Login and CTA */}
          <div className="flex flex-row flex-grow flex-shrink-0 flex-1 justify-end items-center">
            <button
              onClick={() => openAuth('login')}
              className={`hidden md:flex whitespace-nowrap py-1.5 px-4 rounded-full border focus:border focus:outline-none transition duration-150 ease-in-out mr-2 ${
                darkMode && !menuState
                  ? 'text-white focus:opacity-80 border-white'
                  : 'text-primary border-primary active:text-primary-dark active:border-primary-dark'
              } text-sm font-medium`}
            >
              {textContent.links.login}
            </button>

            {ctaAction[0] === 'default' ? (
              <button
                onClick={() => openAuth('signup')}
                id="get-started-link"
                className={`focus:outline-none flex justify-center sm:inline-flex py-1.5 px-4 border border-transparent rounded-full text-sm font-medium ${
                  darkMode && !menuState
                    ? 'text-cool-gray-90 bg-white active:bg-cool-gray-10 focus:bg-cool-gray-10'
                    : 'text-white bg-primary active:bg-primary-dark'
                } transition-all duration-75`}
              >
                <p className="whitespace-nowrap">{textContent.links.getStarted}</p>
              </button>
            ) : (
              ''
            )}

            {ctaAction[0] === 'checkout' ? (
              <button
                type="button"
                onClick={ctaAction[1]}
                className="outline-none flex justify-center sm:inline-flex py-1 px-4 border border-transparent rounded-full text-base font-medium text-white bg-blue-60 active:bg-blue-70 focus:bg-blue-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-20 transition-all duration-75"
              >
                <p className="whitespace-nowrap">{textContent.links.checkout}</p>
              </button>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>

      {/* Auth dialog */}
      <Transition appear show={showAuth} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={hideAuth}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-filter backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex flex-col min-h-full items-center justify-center xs:p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-screen xs:w-full h-screen xs:h-auto xs:max-w-sm transform overflow-hidden xs:rounded-xl bg-white px-6 py-8 shadow-subtle-hard transition-all">
                  <div
                    onClick={hideAuth}
                    className="flex flex-col items-center justify-center h-9 w-9 cursor-pointer absolute top-6 right-6 rounded-md hover:bg-gray-1 active:bg-gray-5 text-gray-80 z-10"
                  >
                    <X className="h-6 w-6" />
                  </div>

                  {showLoader && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6 w-6 flex flex-col items-center justify-center">
                      <svg
                        className="animate-spin"
                        width="24"
                        height="24"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 6.10352e-05C9.3688 6.10515e-05 10.7147 0.35127 11.909 1.02009C13.1032 1.68892 14.1059 2.65298 14.8211 3.82007C15.5363 4.98716 15.9401 6.31824 15.9938 7.68598C16.0476 9.05372 15.7495 10.4124 15.1281 11.632C14.5066 12.8516 13.5827 13.8914 12.4446 14.6518C11.3064 15.4123 9.99225 15.868 8.62767 15.9754C7.2631 16.0828 5.89379 15.8383 4.65072 15.2652C3.40766 14.6921 2.33242 13.8097 1.52787 12.7023L3.1459 11.5268C3.74932 12.3573 4.55575 13.0191 5.48804 13.4489C6.42034 13.8787 7.44732 14.0621 8.47076 13.9816C9.49419 13.901 10.4798 13.5592 11.3334 12.9889C12.187 12.4185 12.88 11.6387 13.346 10.724C13.8121 9.8093 14.0357 8.79031 13.9954 7.7645C13.9551 6.7387 13.6522 5.74039 13.1158 4.86507C12.5794 3.98975 11.8274 3.2667 10.9317 2.76508C10.036 2.26347 9.0266 2.00006 8 2.00006V6.10352e-05Z"
                          fill="#636367"
                        />
                      </svg>
                    </div>
                  )}

                  {showIframe ? (
                    <iframe
                      onLoad={() => setShowLoader(false)}
                      className="relative w-full h-96"
                      src={`https://drive.internxt.com/${authMethod === 'login' ? 'logindialog' : 'signupdialog'}`}
                    ></iframe>
                  ) : (
                    <div className="relative w-full h-96" />
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <div className={`${!showWhiteScreen && 'hidden'} fixed z-50 bg-white top-0 left-0 w-screen h-screen`} />
    </div>
  );
}
