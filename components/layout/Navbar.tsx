import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Transition, Disclosure } from '@headlessui/react';
import { Squeeze as Hamburger } from 'hamburger-react';
import { UilMinus, UilAngleDown } from '@iconscout/react-unicons';

import { checkout, goToLoginURL, goToSignUpURL, IFRAME_AUTH_ENABLED } from '../../lib/auth';
import { useGlobalDialog } from '../../contexts/GlobalUIManager';
import LanguageBox from './components/LanguageBox';
import { useRouter } from 'next/router';

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
}

const DRIVE_WEB_URL = 'https://drive.internxt.com';

export default function Navbar(props: NavbarProps) {
  const globalDialogs = useGlobalDialog();

  const [menuState, setMenuState] = useState(false);
  const [scrolled, setScrolled] = useState(true);
  const stripeObject = { product: props.cta[1] };

  const isCoupon = props.coupon ? true : false;
  const router = useRouter();
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
      className={`${props.hide ? 'hidden' : ''} flex items-center overflow-hidden ${
        !menuState && !props.fixed ? 'absolute' : 'fixed'
      } h-20 w-full bg-white transition-all duration-100 lg:h-16 ${
        props.fixed && 'backdrop-blur-lg backdrop-saturate-150 backdrop-filter'
      } ${scrolled && props.fixed ? 'border-opacity-5 bg-opacity-90' : 'border-opacity-0 bg-opacity-0'} ${
        menuState ? 'bg-opacity-100' : ''
      } z-30 border-b border-black`}
    >
      <div className="mx-4 w-full lg:mx-10 xl:mx-32">
        <div className="navbar mx-auto flex max-w-screen-xl items-center justify-between">
          {/* Left side of navbar: Logo / Hamburguer menu */}
          <div className=" flex flex-1 flex-shrink-0 flex-grow flex-row items-center justify-start space-x-4 lg:space-x-0">
            {!props.isLinksHidden && (
              <div className="flex lg:hidden">
                <Hamburger
                  label="Show menu"
                  size={24}
                  color={props.darkMode && !menuState ? '#fff' : '#253858'}
                  toggled={menuState}
                  toggle={setMenuState}
                />

                {/* Mobile hamburger menu background */}
                <div
                  className={`pointer-events-none fixed left-0 top-14 flex h-full w-full bg-white transition-all duration-500 ${
                    menuState ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Mobile hamburger menu */}
                {
                  <div
                    className={`fixed left-0 top-14 flex w-full flex-col overflow-hidden bg-white text-xl transition-all duration-500 ${
                      menuState ? 'h-screen overflow-y-auto pb-14' : 'h-0'
                    }`}
                  >
                    <div className="my-6 font-medium">
                      <Link href="/pricing" locale={props.lang}>
                        <a
                          role="link"
                          tabIndex={0}
                          onClick={() => {
                            setMenuState(false);
                          }}
                          className={`flex w-full translate-y-0 px-8 py-3 outline-none transition delay-100 duration-300 ${
                            menuState ? 'opacity-100' : '-translate-y-4 opacity-0'
                          }`}
                        >
                          {props.textContent.links.pricing}
                        </a>
                      </Link>

                      <Disclosure as="div">
                        {({ open }) => (
                          <div
                            className={`translate-y-0 transition delay-150 duration-300 ${
                              menuState ? 'opacity-100' : '-translate-y-4 opacity-0'
                            }`}
                          >
                            <div className={`${open ? 'bg-cool-gray-5' : ''}`}>
                              <Disclosure.Button
                                className={`flex w-full items-center justify-between px-8 py-3 font-medium ${
                                  open ? 'bg-cool-gray-10' : ''
                                }`}
                              >
                                <span>{props.textContent.links.products}</span>
                                <span className="relative h-6 w-6">
                                  <UilMinus
                                    className={`absolute top-0 left-0 h-6 w-6 transition duration-300 ${
                                      open ? 'text-cool-gray-60' : '-rotate-180 text-cool-gray-40'
                                    }`}
                                  />
                                  <UilMinus
                                    className={`absolute top-0 left-0 h-6 w-6 transition duration-300 ${
                                      open ? 'text-cool-gray-60' : '-rotate-90 text-cool-gray-40'
                                    }`}
                                  />
                                </span>
                              </Disclosure.Button>

                              <Transition
                                enter="transition duration-200 ease-out"
                                enterFrom="scale-95 opacity-0"
                                enterTo="scale-100 opacity-100"
                                leave="transition duration-200 ease-out"
                                leaveFrom="scale-100 opacity-100"
                                leaveTo="scale-95 opacity-0"
                              >
                                <Disclosure.Panel className="mb-4 flex flex-col py-3 text-cool-gray-80">
                                  <Link href="/drive" locale={props.lang}>
                                    <a
                                      tabIndex={0}
                                      onClick={() => {
                                        setMenuState(false);
                                      }}
                                      className="flex w-full justify-start px-8 py-3 text-lg font-medium text-cool-gray-80 outline-none"
                                    >
                                      {props.textContent.products.drive}
                                    </a>
                                  </Link>

                                  <Link href="/photos" locale={props.lang}>
                                    <a
                                      tabIndex={0}
                                      onClick={() => {
                                        setMenuState(false);
                                      }}
                                      className="flex w-full justify-start px-8 py-3 text-lg font-medium text-cool-gray-80 outline-none"
                                    >
                                      {props.textContent.products.photos}
                                    </a>
                                  </Link>

                                  <a
                                    href="https://send.internxt.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex w-full items-center justify-start px-8 py-3 text-lg font-medium text-cool-gray-80 outline-none"
                                  >
                                    <span>{props.textContent.products.send}</span>
                                    <span className="pointer-events-none ml-2 flex flex-row items-center whitespace-nowrap rounded-full bg-orange bg-opacity-15 px-2 text-supporting-2 font-medium uppercase text-orange">
                                      {props.textContent.products.new}
                                    </span>
                                  </a>
                                </Disclosure.Panel>
                              </Transition>
                            </div>
                          </div>
                        )}
                      </Disclosure>

                      <Link href="/privacy" locale={props.lang}>
                        <a
                          role="link"
                          tabIndex={0}
                          onClick={() => {
                            setMenuState(false);
                          }}
                          className={`flex w-full translate-y-0 cursor-pointer px-8 py-3 outline-none transition delay-200 duration-300 ${
                            menuState ? 'opacity-100' : '-translate-y-4 opacity-0'
                          }`}
                        >
                          {props.textContent.links.privacy}
                        </a>
                      </Link>

                      <Link href="/about" locale={props.lang}>
                        <a
                          role="link"
                          tabIndex={0}
                          onClick={() => {
                            setMenuState(false);
                          }}
                          className={`flex w-full translate-y-0 cursor-pointer px-8 py-3 outline-none transition delay-250 duration-300 ${
                            menuState ? 'opacity-100' : '-translate-y-4 opacity-0'
                          }`}
                        >
                          {props.textContent.links.about}
                        </a>
                      </Link>

                      <a
                        onClick={() => {
                          setMenuState(false);
                        }}
                        tabIndex={0}
                        href="https://drive.internxt.com/login"
                        className={`flex w-full translate-y-0 px-8 py-3 text-primary outline-none transition delay-300 duration-300 ${
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

            {/* Logo */}
            <Link href="/" locale={props.lang} passHref>
              <a className="flex flex-shrink-0 lg:hidden">
                <img
                  loading="lazy"
                  className="select-none"
                  src={`../../logos/internxt/${props.darkMode && !menuState ? 'white' : 'cool-gray-90'}.svg`}
                  alt="Internxt logo"
                  width="96"
                  height="10"
                />
              </a>
            </Link>
            <Link href={'/'} locale={props.lang} passHref>
              <a className="hidden flex-shrink-0 lg:flex">
                <img
                  loading="lazy"
                  className="select-none"
                  src={`../../logos/internxt/${props.darkMode && !menuState ? 'white' : 'cool-gray-90'}.svg`}
                  alt="Internxt logo"
                />
              </a>
            </Link>
          </div>

          {/* Desktop links */}
          {!props.isLinksHidden && (
            <div className="links">
              <div className="hidden space-x-2 lg:inline-flex">
                <Link href="/pricing" locale={props.lang}>
                  <a
                    className={`whitespace-nowrap py-1.5 px-4 transition duration-150 ease-in-out ${
                      props.darkMode
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
                  </a>
                </Link>

                <div
                  className={`group relative flex space-x-1 py-1.5 px-4 pr-2 font-medium transition duration-150 ease-in-out ${
                    props.darkMode
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
                      <Link href="/drive" locale={props.lang}>
                        <a
                          className={`flex flex-row justify-start rounded-lg py-2 px-4 text-base font-medium text-cool-gray-80 ${
                            props.darkMode ? 'hover:bg-cool-gray-10' : 'hover:bg-cool-gray-5'
                          }`}
                        >
                          {props.textContent.products.drive}
                        </a>
                      </Link>

                      <Link href="/photos" locale={props.lang}>
                        <a
                          className={`flex flex-row justify-start rounded-lg py-2 px-4 text-base font-medium text-cool-gray-80 ${
                            props.darkMode ? 'hover:bg-cool-gray-10' : 'hover:bg-cool-gray-5'
                          }`}
                        >
                          {props.textContent.products.photos}
                        </a>
                      </Link>

                      <a
                        href="https://send.internxt.com"
                        target="_blank"
                        rel="noreferrer"
                        className={`flex flex-row items-center justify-start rounded-lg py-2 px-4 text-base font-medium text-cool-gray-80 ${
                          props.darkMode ? 'hover:bg-cool-gray-10' : 'hover:bg-cool-gray-5'
                        }`}
                      >
                        <span>{props.textContent.products.send}</span>
                      </a>
                    </div>
                  </div>
                </div>

                <Link href="/privacy" locale={props.lang}>
                  <a
                    className={`whitespace-nowrap py-1.5 px-4 transition duration-150 ease-in-out ${
                      props.darkMode
                        ? `text-white hover:text-cool-gray-20 ${
                            router.pathname.split('/')[1] === getTitles.links.privacy.trim().toLowerCase() &&
                            'text-primary'
                          }`
                        : router.pathname.split('/')[1] === getTitles.links.privacy.trim().toLowerCase()
                        ? 'text-primary'
                        : 'text-cool-gray-70 hover:text-primary'
                    }
                    } text-base font-medium`}
                  >
                    {props.textContent.links.privacy}
                  </a>
                </Link>

                <Link href="/about" locale={props.lang}>
                  <a
                    className={`whitespace-nowrap py-1.5 px-4 transition duration-150 ease-in-out ${
                      props.darkMode
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
                  </a>
                </Link>
              </div>
            </div>
          )}

          {/* Login and CTA */}
          <div className="flex flex-1 flex-shrink-0 flex-grow flex-row items-center justify-end">
            {props.cta[0] === 'Hide Login' ? null : (
              <button
                onClick={() => goToLoginURL()}
                className={`mr-2 hidden whitespace-nowrap rounded-lg border py-1.5 px-4 transition duration-150 ease-in-out focus:border focus:outline-none md:flex ${
                  props.darkMode && !menuState
                    ? 'border-white text-white focus:opacity-80'
                    : 'border-primary text-primary hover:bg-primary hover:bg-opacity-10 active:border-primary-dark active:text-primary-dark'
                } text-sm font-medium`}
              >
                {props.textContent.links.login}
              </button>
            )}

            {props.cta[0] === 'default' ? (
              <button
                onClick={() => goToSignUpURL()}
                id="get-started-link"
                className={`flex justify-center rounded-lg border border-transparent py-1.5 px-4 text-sm font-medium focus:outline-none sm:inline-flex ${
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
              <LanguageBox darkMode={props.darkMode} />
            </div>
          </div>
        </div>
      </div>

      {/* Auth iframe */}
      {IFRAME_AUTH_ENABLED ? <iframe id="auth" className="hidden" src={`${DRIVE_WEB_URL}/auth`} /> : null}

      {/* Auth dialog */}
    </div>
  );
}
