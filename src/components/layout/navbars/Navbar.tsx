import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Transition, Disclosure } from '@headlessui/react';
import Hamburger from 'hamburger-react';

import { checkout, goToLoginURL, IFRAME_AUTH_ENABLED } from '@/lib/auth';
import LanguageBox from '../components/LanguageBox';
import { useRouter } from 'next/router';
import { CaretDown, CaretUp, HardDrives, PaperPlaneTilt } from '@phosphor-icons/react';
import Image from 'next/image';
import { ItemsNavigation } from '../components/navbar/ItemsNavigation';
import { getImage } from '@/lib/getImage';
import { NavigationBarText } from '@/assets/types/layout/types';

export interface NavbarProps {
  textContent: NavigationBarText;
  lang: string;
  cta: string[];
  darkMode?: boolean;
  fixed?: boolean;
  hide?: boolean;
  isLinksHidden?: boolean;
  hideNavbar?: boolean;
  isBlackfriday?: boolean;
  isQuizSection?: boolean;
  mode?: 'subscription' | 'payment';
}

const EXCLUDED_PATHS_FOR_RIBBON = [
  '/pricing',
  '/pricing/b',
  '/lifetime',
  '/partner-discount',
  '/techradar-discount',
  '/stackcommerce',
  '/dealfuel',
  '/mightydeals',
  '/temporary-email',
  '/locker',
  '/startpage',
  '/oystervpn',
  '/pccomponentes-products',
  '/lifetime_special',
  '/lifetime/celebration/[filename]',
  '/affiliates/[filename]',
];

const DRIVE_WEB_URL = 'https://drive.internxt.com';

export default function Navbar(props: Readonly<NavbarProps>) {
  const [menuState, setMenuState] = useState(false);
  const [scrolled, setScrolled] = useState(true);
  const [isRibbonHidden, setIsRibbonHidden] = useState<boolean>();

  const router = useRouter();
  const lang = router.locale;
  const getTitles = require(`@/assets/lang/en/navbar.json`);

  const shouldModifyRibbonStyle = isRibbonHidden;
  const shouldHideRibbon = true;

  // SCROLL EFFECTS
  const handleScroll = () => setScrolled(window.pageYOffset > 0);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
  });

  useEffect(() => {
    const handleResize = () => {
      setIsRibbonHidden(window.innerWidth <= 1090 && window.innerWidth >= 1023);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      id="navbar"
      className={`${props.hide ? 'hidden' : ''} flex items-center ${
        !menuState && !props.fixed ? 'absolute' : 'fixed'
      } h-20 w-full bg-white transition-all duration-100 lg:h-16 ${props.darkMode && 'bg-black bg-opacity-0'} ${
        props.fixed && 'backdrop-blur-lg backdrop-saturate-150 backdrop-filter'
      } ${scrolled && props.fixed ? 'border-opacity-5 bg-opacity-90' : 'border-opacity-0'} ${
        menuState ? 'bg-opacity-100' : ''
      } z-50 border-b border-black`}
    >
      <div className="mx-4 w-full lg:mx-10 xl:mx-32">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between">
          <div className="flex flex-row gap-12">
            <div className="flex flex-row items-center justify-start space-x-4 lg:space-x-0">
              {/* Logo */}
              <Link href="/" locale={lang} passHref className="flex flex-shrink-0 pl-4 lg:hidden">
                <Image
                  width={96}
                  height={10.5}
                  loading="lazy"
                  className="select-none"
                  src={getImage(`/logos/internxt/${props.darkMode && !menuState ? 'white' : 'cool-gray-90'}.svg`)}
                  alt="Internxt logo"
                />
              </Link>
              <Link href={'/'} locale={lang} passHref className="hidden flex-shrink-0 lg:flex">
                <Image
                  width={110}
                  height={12}
                  loading="lazy"
                  className="select-none"
                  src={getImage(`/logos/internxt/${props.darkMode && !menuState ? 'white' : 'cool-gray-90'}.svg`)}
                  alt="Internxt logo"
                />
              </Link>
            </div>
            <ItemsNavigation
              darkMode={props.darkMode ?? false}
              getTitles={getTitles}
              shouldHideItems={props.isLinksHidden ?? false}
              lang={lang as string}
              router={router}
              textContent={props.textContent}
            />
          </div>

          {/* Left side of navbar: Logo / Hamburger menu */}
          {/* Login and CTA */}
          <div className="relative flex h-full w-max flex-row items-center justify-end space-x-2">
            <div
              className={`${shouldHideRibbon ? 'hidden' : 'flex'} ${
                shouldModifyRibbonStyle ? '-left-24' : '-left-20'
              } -top-4 flex lg:absolute`}
            >
              <Image
                onClick={() => {
                  router.replace(
                    '/lifetime?utm_source=website&utm_medium=ribbon70&utm_campaign=softsale&utm_term=utm_campaign',
                  );
                }}
                src="/images/banners/ribbon.svg"
                alt="Ribbon label"
                width={70}
                height={74}
                className="cursor-pointer object-contain"
              />
            </div>

            {props.cta[0] === 'Hide Login' ? null : (
              <button
                id="loginButton"
                onClick={() => goToLoginURL({ redirectURL: '', lang: lang })}
                className={`hidden whitespace-nowrap rounded-lg border px-3 py-1 transition duration-150 ease-in-out focus:border focus:outline-none md:flex ${
                  props.darkMode && !menuState
                    ? 'bg-white text-gray-80 focus:opacity-80'
                    : 'border-gray-10 text-gray-80 hover:bg-gray-1 active:border-primary-dark active:text-primary-dark'
                } text-sm font-medium shadow-sm`}
              >
                {props.textContent.links.login}
              </button>
            )}
            {props.cta[0] === 'default' ? (
              <button
                onClick={() => router.push('/pricing')}
                id="choose-storage-button"
                className={`flex justify-center rounded-lg border border-transparent bg-primary px-3 py-1 text-sm font-medium text-white  
                transition-all duration-75 hover:bg-primary-dark focus:outline-none active:bg-primary-dark sm:inline-flex`}
              >
                <p className="whitespace-nowrap">{props.textContent.links.chooseStorage}</p>
              </button>
            ) : (
              ''
            )}
            {props.cta[0] === 'chooseStorage' ? (
              <button
                onClick={() => router.push('/pricing')}
                id="choose-storage-button"
                className={`flex justify-center rounded-lg border border-transparent bg-primary px-3 py-1 text-sm font-medium text-white  
                transition-all duration-75 hover:bg-primary-dark focus:outline-none active:bg-primary-dark sm:inline-flex`}
              >
                <p className="whitespace-nowrap">{props.textContent.links.chooseStorage}</p>
              </button>
            ) : undefined}

            {props.cta[0] === 'checkout' ? (
              <button
                type="button"
                onClick={() => {
                  checkout({
                    planId: '',
                    planType: 'individual',
                  });
                }}
                className={`flex justify-center rounded-lg border border-transparent px-4 py-1.5 text-sm font-medium focus:outline-none sm:inline-flex ${
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
              {!props.hideNavbar ? (
                <LanguageBox isBlackFriday={props.isBlackfriday} darkMode={props.darkMode} />
              ) : undefined}
            </div>
            {!props.isLinksHidden && (
              <div className="lg:hidden">
                <Hamburger
                  label="Show menu"
                  size={20}
                  color={props.darkMode && !menuState ? '#fff' : '#3A3A3B'}
                  toggled={menuState}
                  toggle={setMenuState}
                />

                {/* Mobile hamburger menu */}
                {
                  <div
                    className={`absolute right-0 top-20 overflow-hidden bg-white font-semibold transition-all duration-500 ${
                      menuState ? 'h-screen w-screen pb-14' : 'h-0 '
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
                                  props.darkMode ? 'text-gray-30' : 'text-gray-60'
                                } space-y-8 p-4`}
                              >
                                <Link href="/drive" locale={props.lang} passHref legacyBehavior>
                                  <div className="flex flex-row space-x-2">
                                    <HardDrives className="h-6 w-6 text-gray-80" />
                                    <p>{props.textContent.products.drive}</p>
                                  </div>
                                </Link>

                                <Link href="/cloud-object-storage" locale={props.lang} passHref legacyBehavior>
                                  <div className="flex flex-row space-x-2">
                                    <HardDrives className="h-6 w-6 text-gray-80" />
                                    <p>{props.textContent.products.s3}</p>
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

                                <Link href="/vpn" locale={props.lang} passHref legacyBehavior>
                                  <div className="flex flex-row space-x-2">
                                    <HardDrives className="h-6 w-6 text-gray-80" />
                                    <p>{props.textContent.products.vpn}</p>
                                  </div>
                                </Link>
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
                                  props.darkMode ? 'text-gray-30' : 'text-gray-60'
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
                        <button
                          onClick={() => {
                            setMenuState(false);
                            window.open(
                              'https://gimmehost.org/vpn/?utm_source=inter&utm_medium=banner&utm_campaign=1&utm_zoneid=1',
                              '_blank',
                              'noopener noreferrer',
                            );
                          }}
                          className={`flex w-full translate-y-0 cursor-pointer px-8 py-4 outline-none transition delay-250 duration-300 ${
                            menuState ? 'opacity-100' : '-translate-y-4 opacity-0'
                          }`}
                        >
                          Need a VPN?
                        </button>
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
