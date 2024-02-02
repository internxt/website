import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Transition, Disclosure } from '@headlessui/react';
import Hamburger from 'hamburger-react';
import { UilAngleDown } from '@iconscout/react-unicons';

import { checkout, goToLoginURL, goToSignUpURL, IFRAME_AUTH_ENABLED } from '../../lib/auth';
import LanguageBox from './components/LanguageBox';
import { useRouter } from 'next/router';
import { Camera, CaretDown, CaretUp, HardDrives, PaperPlaneTilt } from '@phosphor-icons/react';

export interface NavbarProps {
  textContent: any;
  lang: string;
  cta: string[];
  darkMode?: boolean;
  fixed?: boolean;
  hide?: boolean;
  coupon?: string;
  isLinksHidden?: boolean;
  isBlackfriday?: boolean;
  mode?: 'payment' | 'subscription';
  isQuizSection?: boolean;
}

const DRIVE_WEB_URL = 'https://drive.internxt.com';

export default function Navbar(props: NavbarProps) {
  const [menuState, setMenuState] = useState(false);
  const [scrolled, setScrolled] = useState(true);

  const router = useRouter();
  const lang = router.locale;
  const getTitles = require(`../../assets/lang/en/navbar.json`);
  // DIALOG MANAGEMENT

  // SCROLL EFFECTS

  const handleScroll = () => setScrolled(window.pageYOffset > 0);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <div
      id="navbar"
      className={`${props.hide ? 'hidden' : ''} flex items-center ${
        !menuState && !props.fixed ? 'absolute' : 'fixed'
      } h-20 w-full ${props.isQuizSection ? 'bg-black' : 'bg-white'} transition-all duration-100 lg:h-16 ${
        props.darkMode && 'bg-opacity-0'
      } ${props.fixed && 'backdrop-blur-lg backdrop-saturate-150 backdrop-filter'} ${
        scrolled && props.fixed ? 'border-opacity-5 bg-opacity-90' : 'border-opacity-0'
      } ${menuState ? 'bg-opacity-100' : ''} z-50 border-b border-black`}
    >
      <div className="mx-4 w-full lg:mx-10 xl:mx-32">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between">
          {/* Left side of navbar: Logo / Hamburguer menu */}
          <div className="flex flex-1 flex-shrink-0 flex-grow flex-row items-center justify-start space-x-4 lg:space-x-0">
            {/* Logo */}
            <Link href="/" locale={props.lang} passHref className="flex flex-shrink-0 pl-4 lg:hidden">
              <img
                loading="lazy"
                className="select-none"
                src={`../../logos/internxt/${
                  (props.darkMode && !menuState) || (props.isQuizSection && !menuState) ? 'white' : 'cool-gray-90'
                }.svg`}
                alt="Internxt logo"
                width="96"
                height="10"
              />
            </Link>
            <Link href={'/'} locale={props.lang} passHref className="hidden flex-shrink-0 lg:flex">
              <img
                loading="lazy"
                className="select-none"
                src={`../../logos/internxt/${
                  (props.darkMode && !menuState) || (props.isQuizSection && !menuState) ? 'white' : 'cool-gray-90'
                }.svg`}
                alt="Internxt logo"
              />
            </Link>
          </div>

          {/* Desktop links */}
          {!props.isLinksHidden && (
            <div className="links">
              <div className="hidden space-x-2 lg:inline-flex">
                <Link
                  href="/pricing"
                  locale={props.lang}
                  className={`whitespace-nowrap py-1.5 px-4 transition duration-150 ease-in-out ${
                    props.darkMode || props.isQuizSection
                      ? `text-white hover:text-cool-gray-20 ${
                          router.pathname.split('/')[1] === getTitles.links.pricing.trim().toLowerCase() &&
                          'text-primary'
                        }`
                      : router.pathname.split('/')[1] === getTitles.links.pricing.trim().toLowerCase()
                      ? 'text-primary'
                      : 'text-cool-gray-70 hover:text-primary'
                  }  text-base font-medium`}
                >
                  {props.textContent.links.pricing}
                </Link>

                <div
                  className={`group relative flex space-x-1 py-1.5 px-4 pr-2 font-medium transition duration-150 ease-in-out ${
                    props.darkMode || props.isQuizSection
                      ? 'text-white hover:bg-white hover:bg-opacity-10 hover:text-cool-gray-20'
                      : 'text-cool-gray-70 hover:bg-cool-gray-100 hover:bg-opacity-5 hover:text-primary'
                  } cursor-default rounded-lg`}
                >
                  <span>{props.textContent.links.products}</span>
                  <UilAngleDown className="h-6 w-6 translate-y-px text-gray-40 transition duration-150 ease-in-out group-hover:text-cool-gray-30" />

                  {/* Menu items */}
                  <div className="pointer-events-none absolute top-full left-1/2 z-50 w-52 -translate-x-1/2 translate-y-0 rounded-xl border border-black border-opacity-5 bg-white p-1.5 opacity-0 shadow-subtle transition duration-150 ease-in-out group-hover:pointer-events-auto group-hover:translate-y-1 group-hover:opacity-100">
                    <div className="absolute -top-4 left-1/2 h-4 w-4/5 -translate-x-1/2" />

                    <div className="relative grid gap-0 whitespace-nowrap lg:grid-cols-1">
                      <Link
                        href="/drive"
                        locale={props.lang}
                        className={`flex flex-row justify-start rounded-lg py-2 px-4 text-base font-medium text-cool-gray-80 ${
                          props.darkMode || props.isQuizSection ? 'hover:bg-cool-gray-10' : 'hover:bg-cool-gray-5'
                        }`}
                      >
                        {props.textContent.products.drive}
                      </Link>

                      <Link
                        href="/photos"
                        locale={props.lang}
                        className={`flex flex-row justify-start rounded-lg py-2 px-4 text-base font-medium text-cool-gray-80 ${
                          props.darkMode || props.isQuizSection ? 'hover:bg-cool-gray-10' : 'hover:bg-cool-gray-5'
                        }`}
                      >
                        {props.textContent.products.photos}
                      </Link>

                      <a
                        href="https://send.internxt.com"
                        target="_blank"
                        rel="noreferrer"
                        className={`flex flex-row items-center justify-start rounded-lg py-2 px-4 text-base font-medium text-cool-gray-80 ${
                          props.darkMode || props.isQuizSection ? 'hover:bg-cool-gray-10' : 'hover:bg-cool-gray-5'
                        }`}
                      >
                        <span>{props.textContent.products.send}</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className={`group relative flex space-x-1 py-1.5 px-4 pr-2 font-medium transition duration-150 ease-in-out ${
                    props.darkMode || props.isQuizSection
                      ? 'text-white hover:bg-white hover:bg-opacity-10 hover:text-cool-gray-20'
                      : 'text-cool-gray-70 hover:bg-cool-gray-100 hover:bg-opacity-5 hover:text-primary'
                  } cursor-default rounded-lg`}
                >
                  <span>{props.textContent.links.ourValues}</span>
                  <UilAngleDown className="h-6 w-6 translate-y-px text-gray-40 transition duration-150 ease-in-out group-hover:text-cool-gray-30" />

                  {/* Menu items */}
                  <div className="pointer-events-none absolute top-full left-1/2 z-50 w-52 -translate-x-1/2 translate-y-0 rounded-xl border border-black border-opacity-5 bg-white p-1.5 opacity-0 shadow-subtle transition duration-150 ease-in-out group-hover:pointer-events-auto group-hover:translate-y-1 group-hover:opacity-100">
                    <div className="absolute -top-4 left-1/2 h-4 w-4/5 -translate-x-1/2" />

                    <div className="relative grid gap-0 lg:grid-cols-1">
                      <Link
                        href="/privacy"
                        locale={props.lang}
                        className={`flex flex-row justify-start rounded-lg py-2 px-4 text-base font-medium text-cool-gray-80 ${
                          props.darkMode || props.isQuizSection ? 'hover:bg-cool-gray-10' : 'hover:bg-cool-gray-5'
                        }`}
                      >
                        {props.textContent.ourValues.privacy}
                      </Link>

                      <Link
                        href="/open-source"
                        locale={props.lang}
                        className={`flex flex-row justify-start rounded-lg py-2 px-4 text-base font-medium text-cool-gray-80 ${
                          props.darkMode || props.isQuizSection ? 'hover:bg-cool-gray-10' : 'hover:bg-cool-gray-5'
                        }`}
                      >
                        {props.textContent.ourValues.openSource}
                      </Link>
                    </div>
                  </div>
                </div>

                <Link
                  href="/about"
                  locale={props.lang}
                  className={`whitespace-nowrap py-1.5 px-4 transition duration-150 ease-in-out ${
                    props.darkMode || props.isQuizSection
                      ? `text-white hover:text-cool-gray-20 ${
                          router.pathname.split('/')[1] === getTitles.links.about.split(' ')[0].toLowerCase() &&
                          'text-primary'
                        }`
                      : router.pathname.split('/')[1] === getTitles.links.about.split(' ')[0].toLowerCase()
                      ? 'text-primary'
                      : 'text-cool-gray-70 hover:text-primary'
                  }
                  } text-base font-medium`}
                >
                  {props.textContent.links.about}
                </Link>

                {router.pathname === '/temporary-email' ? (
                  <button
                    onClick={() =>
                      window.open(
                        'https://gimmehost.org/vpn/?utm_source=inter&utm_medium=banner&utm_campaign=1&utm_zoneid=1',
                        '_blank',
                      )
                    }
                    className={`cursor-pointer whitespace-nowrap py-1.5 px-4 transition duration-150 ease-in-out ${
                      props.darkMode || props.isQuizSection
                        ? `text-white hover:text-cool-gray-20 ${
                            router.pathname.split('/')[1] === getTitles.links.about.split(' ')[0].toLowerCase() &&
                            'text-primary'
                          }`
                        : router.pathname.split('/')[1] === getTitles.links.about.split(' ')[0].toLowerCase()
                        ? 'text-primary'
                        : 'text-cool-gray-70 hover:text-primary'
                    }
                    } text-base font-medium`}
                  >
                    {props.textContent.links.needVPN}
                  </button>
                ) : undefined}
              </div>
            </div>
          )}

          {/* Login and CTA */}
          <div className="flex flex-1 flex-shrink-0 flex-grow flex-row items-center justify-end">
            {props.cta[0] === 'Hide Login' ? null : (
              <button
                id="loginButton"
                onClick={() => goToLoginURL({ redirectURL: '', lang: lang })}
                className={`mr-2 hidden whitespace-nowrap rounded-lg border py-1 px-3 transition duration-150 ease-in-out focus:border focus:outline-none md:flex ${
                  props.darkMode || (props.isQuizSection && !menuState)
                    ? 'border-white text-white focus:opacity-80'
                    : 'border-primary text-primary hover:bg-primary hover:bg-opacity-10 active:border-primary-dark active:text-primary-dark'
                } text-sm font-medium`}
              >
                {props.textContent.links.login}
              </button>
            )}

            {props.cta[0] === 'default' ? (
              <button
                onClick={() => goToSignUpURL({ lang: lang })}
                id="signupButton"
                className={`flex justify-center rounded-lg border border-transparent py-1 px-3 text-sm font-medium focus:outline-none sm:inline-flex ${
                  props.darkMode && !menuState
                    ? 'bg-white text-cool-gray-90 focus:bg-cool-gray-10 active:bg-cool-gray-10'
                    : 'bg-primary text-white hover:bg-primary-dark active:bg-primary-dark'
                } transition-all duration-75`}
              >
                <p className="whitespace-nowrap">{props.textContent.links.getStarted}</p>
              </button>
            ) : (
              ''
            )}

            {props.cta[0] === 'checkout' ? (
              <button
                type="button"
                onClick={() => {
                  checkout({
                    planId: '',
                  });
                }}
                className={`flex justify-center rounded-lg border border-transparent py-1.5 px-4 text-sm font-medium focus:outline-none sm:inline-flex ${
                  props.darkMode && !menuState
                    ? 'bg-white text-cool-gray-90 focus:bg-cool-gray-10 active:bg-cool-gray-10'
                    : 'bg-primary text-white hover:bg-primary-dark active:bg-primary-dark'
                } transition-all duration-75`}
              >
                <p className="whitespace-nowrap">{props.textContent.links.checkout}</p>
              </button>
            ) : (
              ''
            )}
            <div className="hidden items-center justify-center bg-transparent lg:flex">
              <LanguageBox isBlackFriday={props.isBlackfriday} darkMode={props.darkMode || props.isQuizSection} />
            </div>

            {!props.isLinksHidden && (
              <div className="lg:hidden">
                <Hamburger
                  label="Show menu"
                  size={20}
                  color={props.darkMode || (props.isQuizSection && !menuState) ? '#fff' : '#3A3A3B'}
                  toggled={menuState}
                  toggle={setMenuState}
                />

                {/* Mobile hamburger menu */}
                {
                  <div
                    className={`absolute left-0 top-20 w-full overflow-hidden bg-white font-semibold transition-all duration-500 ${
                      menuState ? 'h-screen pb-14' : 'h-0 '
                    }`}
                  >
                    <div className="mt-4 flex flex-col text-gray-100">
                      <Link
                        href="/pricing"
                        locale={props.lang}
                        role="link"
                        tabIndex={0}
                        onClick={() => {
                          setMenuState(false);
                        }}
                        className={`flex w-full translate-y-0 px-8 py-4 outline-none transition delay-100 duration-300 ${
                          menuState ? 'opacity-100' : '-translate-y-4 opacity-0'
                        }`}
                      >
                        {props.textContent.links.pricing}
                      </Link>

                      <Disclosure
                        as="div"
                        className={`flex w-screen translate-y-0 cursor-pointer flex-col outline-none transition delay-200 duration-300 ${
                          menuState ? 'opacity-100' : '-translate-y-4 opacity-0'
                        }`}
                      >
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full items-center justify-between px-8 py-4">
                              <span className="flex flex-row">{props.textContent.links.products}</span>
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
                                className={`flex flex-col bg-gray-1 px-8 font-medium ${!open ? 'hidden' : 'flex'} ${
                                  props.darkMode || props.isQuizSection ? 'text-gray-30' : 'text-gray-60'
                                } space-y-8 p-4`}
                              >
                                <Link href="/drive" locale={props.lang} passHref legacyBehavior>
                                  <div className="flex flex-row space-x-2">
                                    <HardDrives className="h-6 w-6 text-gray-80" />
                                    <p>{props.textContent.products.drive}</p>
                                  </div>
                                </Link>

                                <Link href="/photos" locale={props.lang} passHref legacyBehavior>
                                  <div className="flex flex-row space-x-2">
                                    <Camera className="h-6 w-6 text-gray-80" />
                                    <p>{props.textContent.products.photos}</p>
                                  </div>
                                </Link>

                                <a
                                  href="https://send.internxt.com"
                                  target="_blank"
                                  rel="noreferrer"
                                  className="flex flex-row items-center"
                                >
                                  <div className="flex flex-row space-x-2">
                                    <PaperPlaneTilt className="h-6 w-6 text-gray-80" />
                                    <p>{props.textContent.products.send}</p>
                                  </div>
                                </a>
                              </Disclosure.Panel>
                            </Transition>
                          </>
                        )}
                      </Disclosure>

                      <Disclosure
                        as="div"
                        className={`flex w-screen translate-y-0 cursor-pointer flex-col outline-none transition delay-200 duration-300 ${
                          menuState ? 'opacity-100' : '-translate-y-4 opacity-0'
                        }`}
                      >
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full items-center justify-between px-8 py-4">
                              <span className="flex flex-row">{props.textContent.links.ourValues}</span>
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
                                className={`flex flex-col bg-gray-1 px-8 font-medium ${!open ? 'hidden' : 'flex'} ${
                                  props.darkMode || props.isQuizSection ? 'text-gray-30' : 'text-gray-60'
                                } space-y-8 p-4`}
                              >
                                <Link href="/privacy" locale={props.lang} passHref legacyBehavior>
                                  <div className="flex flex-row space-x-2">
                                    <p>{props.textContent.ourValues.privacy}</p>
                                  </div>
                                </Link>

                                <Link href="/open-source" locale={props.lang} passHref legacyBehavior>
                                  <div className="flex flex-row space-x-2">
                                    <p>{props.textContent.ourValues.openSource}</p>
                                  </div>
                                </Link>
                              </Disclosure.Panel>
                            </Transition>
                          </>
                        )}
                      </Disclosure>

                      <Link
                        href="/about"
                        locale={props.lang}
                        role="link"
                        tabIndex={0}
                        onClick={() => {
                          setMenuState(false);
                        }}
                        className={`flex w-full translate-y-0 cursor-pointer px-8 py-4 outline-none transition delay-250 duration-300 ${
                          menuState ? 'opacity-100' : '-translate-y-4 opacity-0'
                        }`}
                      >
                        {props.textContent.links.about}
                      </Link>

                      {props.lang === 'en' && router.pathname === '/temporary-email' ? (
                        <>
                          <p
                            onClick={() => {
                              setMenuState(false);
                              window.open(
                                'https://gimmehost.org/vpn/?utm_source=inter&utm_medium=banner&utm_campaign=1&utm_zoneid=1',
                                '_blank',
                              );
                            }}
                            className={`flex w-full translate-y-0 cursor-pointer px-8 py-4 outline-none transition delay-250 duration-300 ${
                              menuState ? 'opacity-100' : '-translate-y-4 opacity-0'
                            }`}
                          >
                            Need a VPN?
                          </p>
                        </>
                      ) : undefined}

                      <a
                        onClick={() => {
                          setMenuState(false);
                        }}
                        tabIndex={0}
                        href="https://drive.internxt.com/login"
                        className={`flex w-full translate-y-0 px-8 py-4 text-primary outline-none transition delay-300 duration-300 ${
                          menuState ? 'opacity-100' : '-translate-y-4 opacity-0'
                        }`}
                      >
                        {props.textContent.links.login}
                      </a>
                    </div>
                  </div>
                }
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Auth iframe */}
      {IFRAME_AUTH_ENABLED ? <iframe id="auth" className="hidden" src={`${DRIVE_WEB_URL}/auth`} /> : null}

      {/* Auth dialog */}
    </div>
  );
}
