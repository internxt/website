/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import Link from 'next/link';
import { Transition, Disclosure } from '@headlessui/react';
import { Squeeze as Hamburger } from 'hamburger-react';
import { UilMinus, UilAngleDown } from '@iconscout/react-unicons';
import styles from './Navbar.module.scss';

export default function Navbar({
  textContent,
  lang,
  cta,
  darkMode,
  fixed
}) {
  const [menuState, setMenuState] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(true);
  const ctaAction = cta[0] ? cta : ['default', null];

  const handleScroll = () => setScrolled(window.pageYOffset > 0);

  React.useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
  });

  return (

    <div className={`section flex items-center ${(!menuState && !fixed) ? 'absolute' : 'fixed'} w-full h-16 transition-all duration-500 bg-white backdrop-filter backdrop-saturate-100 backdrop-blur-none ${darkMode ? '' : styles.nabvarBgFallback} bg-opacity-0 ${(scrolled && fixed) ? 'bg-opacity-90 border-opacity-5 backdrop-blur-lg backdrop-saturate-150' : 'border-opacity-0 bg-opacity-0'} ${menuState ? 'bg-opacity-100' : ''} border-b border-black z-40`}>

      <div className="content w-full">

        <div className="navbar items-center flex justify-between px-4 lg:px-10 xl:px-32">

          {/* Left side of navbar: Logo / Hamburguer menu */}
          <div className=" flex flex-row flex-grow flex-shrink-0 flex-1 justify-start items-center space-x-4 lg:space-x-0">

            <div className="flex lg:hidden">
              <Hamburger label="Show menu" size={24} color={(darkMode && !menuState) ? '#fff' : '#253858'} toggled={menuState} toggle={setMenuState} />

              {/* Mobile hamburger menu background */}
              <div className={`pointer-events-none transition-all duration-500 flex fixed left-0 w-full h-full top-14 bg-white ${menuState ? 'opacity-100' : 'opacity-0'}`} />

              {/* Mobile hamburger menu */}
              <div className={`transition-all duration-500 flex flex-col fixed left-0 w-full top-14 overflow-hidden bg-white text-xl ${menuState ? 'h-screen pb-14 overflow-y-auto' : 'h-0'}`}>
                <div className="my-6 font-medium">

                  <Link href="/pricing" locale={lang}>
                    <a
                      role="link"
                      tabIndex={0}
                      onClick={() => { setMenuState(false); }}
                      className={`outline-none flex w-full px-8 py-3 transition duration-300 delay-100 transform translate-y-0 ${menuState ? 'opacity-100' : '-translate-y-4 opacity-0'}`}
                    >
                      {textContent.links.pricing}
                    </a>
                  </Link>

                  <Disclosure as="div">
                    {({ open }) => (
                      <div className={`transition duration-300 delay-150 transform translate-y-0 ${menuState ? 'opacity-100' : '-translate-y-4 opacity-0'}`}>
                        <div className={`${open ? 'bg-cool-gray-5' : ''}`}>

                          <Disclosure.Button className={`flex justify-between items-center w-full px-8 py-3 font-medium ${open ? 'bg-cool-gray-10' : ''}`}>
                            <span>{textContent.links.products}</span>
                            <span className="relative w-6 h-6">
                              <UilMinus className={`absolute top-0 left-0 w-6 h-6 transition duration-300 transform ${open ? 'text-cool-gray-60' : 'text-cool-gray-40 -rotate-180'}`} />
                              <UilMinus className={`absolute top-0 left-0 w-6 h-6 transition duration-300 transform ${open ? 'text-cool-gray-60' : 'text-cool-gray-40 -rotate-90'}`} />
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
                                <a tabIndex={0} onClick={() => { setMenuState(false); }} className="outline-none flex w-full px-8 py-3 justify-start text-lg font-medium text-cool-gray-80">
                                  {textContent.products.drive}
                                </a>
                              </Link>

                              <Link href="/photos" locale={lang}>
                                <a tabIndex={0} onClick={() => { setMenuState(false); }} className="outline-none flex w-full px-8 py-3 justify-start text-lg font-medium text-cool-gray-80">
                                  {textContent.products.photos}
                                </a>
                              </Link>

                              <a className="outline-none flex w-full px-8 py-3 justify-start items-center text-lg font-medium text-cool-gray-40">
                                <span>{textContent.products.send}</span>
                                <span className="ml-3 text-sm text-orange-50 font-normal">{textContent.products.comingSoon}</span>
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
                      onClick={() => { setMenuState(false); }}
                      className={`outline-none cursor-pointer flex w-full px-8 py-3 transition duration-300 delay-200 transform translate-y-0 ${menuState ? 'opacity-100' : '-translate-y-4 opacity-0'}`}
                    >
                      {textContent.links.privacy}
                    </a>
                  </Link>

                  <Link href="/about" locale={lang}>
                    <a
                      role="link"
                      tabIndex={0}
                      onClick={() => { setMenuState(false); }}
                      className={`outline-none cursor-pointer flex w-full px-8 py-3 transition duration-300 delay-250 transform translate-y-0 ${menuState ? 'opacity-100' : '-translate-y-4 opacity-0'}`}
                    >
                      {textContent.links.about}
                    </a>
                  </Link>

                  <a onClick={() => { setMenuState(false); }} tabIndex={0} href="https://drive.internxt.com/login" className={`outline-none flex w-full px-8 py-3 text-blue-60 transition duration-300 delay-300 transform translate-y-0 ${menuState ? 'opacity-100' : '-translate-y-4 opacity-0'}`}>
                    {textContent.links.login}
                  </a>

                </div>
              </div>
            </div>

            {/* Logo */}
            <Link href="/" locale={lang}>
              <a className="flex flex-shrink-0">
                <img loading="lazy" className="select-none" src={`../../logos/internxt/${(darkMode && !menuState) ? 'white' : 'cool-gray-90'}.svg`} alt="Internxt logo" />
              </a>
            </Link>

          </div>

          {/* Desktop links */}
          <div className="links">
            <div className="hidden lg:inline-flex space-x-3">

              <Link href="/pricing" locale={lang}>
                <a className={`whitespace-nowrap py-1.5 px-4 transition duration-150 ease-in-out ${darkMode ? 'text-white hover:text-cool-gray-20' : 'text-cool-gray-70 hover:text-cool-gray-90'} text-base font-medium`}>
                  {textContent.links.pricing}
                </a>
              </Link>

              <div className={`group relative flex py-1.5 px-4 pr-2 space-x-1 transition duration-150 ease-in-out font-medium ${darkMode ? 'text-white hover:text-cool-gray-20 hover:bg-white hover:bg-opacity-10' : 'text-cool-gray-70 hover:text-cool-gray-90 hover:bg-cool-gray-100 hover:bg-opacity-5'} rounded-lg cursor-pointer`}>
                <span>{textContent.links.products}</span>
                <UilAngleDown className="w-6 h-6 transition duration-150 ease-in-out transform translate-y-px text-cool-gray-20 group-hover:text-cool-gray-30" />

                {/* Menu items */}
                <div className="absolute top-full left-1/2 z-10 w-52 transform -translate-x-1/2 opacity-0 translate-y-0 group-hover:translate-y-1 group-hover:opacity-100 p-1.5 bg-white border-black rounded-xl shadow-subtle border border-opacity-5 transition duration-150 ease-in-out pointer-events-none group-hover:pointer-events-auto">
                  <div className="absolute -top-4 left-1/2 w-4/5 h-4 transform -translate-x-1/2" />

                  <div className="relative grid gap-0 lg:grid-cols-1 whitespace-nowrap">

                    <Link href="/drive" locale={lang}>
                      <a className={`py-2 px-4 rounded-lg flex flex-row justify-start text-base font-medium text-cool-gray-80 ${darkMode ? 'hover:bg-cool-gray-10' : 'hover:bg-cool-gray-5'}`}>
                        {textContent.products.drive}
                      </a>
                    </Link>

                    <Link href="/photos" locale={lang}>
                      <a className={`py-2 px-4 rounded-lg flex flex-row justify-start text-base font-medium text-cool-gray-80 ${darkMode ? 'hover:bg-cool-gray-10' : 'hover:bg-cool-gray-5'}`}>
                        {textContent.products.photos}
                      </a>
                    </Link>

                    <a className="py-2 px-4 rounded-lg flex flex-row justify-start items-center text-base font-medium text-cool-gray-30">
                      <span>{textContent.products.send}</span>
                      <span className="ml-3 text-xs text-orange-50 font-normal">{textContent.products.comingSoon}</span>
                    </a>

                  </div>

                </div>
              </div>

              <Link href="/privacy" locale={lang}>
                <a className={`whitespace-nowrap py-1.5 px-4 transition duration-150 ease-in-out ${darkMode ? 'text-white hover:text-cool-gray-20' : 'text-cool-gray-70 hover:text-cool-gray-90'} text-base font-medium`}>
                  {textContent.links.privacy}
                </a>
              </Link>

              <Link href="/about" locale={lang}>
                <a className={`whitespace-nowrap py-1.5 px-4 transition duration-150 ease-in-out ${darkMode ? 'text-white hover:text-cool-gray-20' : 'text-cool-gray-70 hover:text-cool-gray-90'} text-base font-medium`}>
                  {textContent.links.about}
                </a>
              </Link>

            </div>

          </div>

          {/* Login and CTA */}
          <div className="flex flex-row flex-grow flex-shrink-0 flex-1 justify-end items-center">

            <a href="https://drive.internxt.com/login" className={`hidden md:flex whitespace-nowrap py-1.5 px-4 transition duration-150 ease-in-out mr-1 ${(darkMode && !menuState) ? 'text-white focus:opacity-80' : 'text-blue-60 focus:text-blue-70'} text-sm font-medium`}>
              {textContent.links.login}
            </a>

            {(ctaAction[0] === 'default') ? (
              <a
                href="https://drive.internxt.com/new"
                target="_blank"
                rel="noreferrer"
                className={`flex justify-center sm:inline-flex py-1 px-4 border border-transparent rounded-full text-sm font-medium ${(darkMode && !menuState) ? 'text-cool-gray-90 bg-white active:bg-cool-gray-10 focus:bg-cool-gray-10' : 'text-white bg-blue-60 active:bg-blue-70 focus:bg-blue-70'} focus:outline-none transition-all duration-75`}
              >
                <p className="whitespace-nowrap">{textContent.links.getStarted}</p>
              </a>
            ) : ''}

            {(ctaAction[0] === 'checkout') ? (
              <button
                type="button"
                onClick={ctaAction[1]}
                className="flex justify-center sm:inline-flex py-1 px-4 border border-transparent rounded-full text-base font-medium text-white bg-blue-60 active:bg-blue-70 focus:bg-blue-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-20 transition-all duration-75"
              >
                <p className="whitespace-nowrap">{textContent.links.checkout}</p>
              </button>
            ) : ''}

          </div>

        </div>

      </div>

    </div>

  );
}
