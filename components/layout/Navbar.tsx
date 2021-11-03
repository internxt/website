import React, { Fragment } from 'react';
import Link from 'next/link';
import { Popover, Transition, Disclosure } from '@headlessui/react';
import { Squeeze as Hamburger } from 'hamburger-react';
import { UilMinus, UilAngleDown } from '@iconscout/react-unicons';
import styles from './Navbar.module.scss';

export default function Navbar({
  textContent,
  lang,
  cta,
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

    <section className={`flex items-center ${fixed ? 'fixed' : 'absolute'} w-full h-16 transition-all duration-500 bg-white backdrop-filter backdrop-blur-none ${styles.nabvarBgFallback} bg-opacity-0 ${scrolled ? 'bg-opacity-95 border-opacity-5 backdrop-blur-lg' : 'border-opacity-0 bg-opacity-0'} ${menuState ? 'bg-opacity-100' : ''} border-b border-black z-40`}>

      <div className="content w-full">

        <div className="navbar items-center flex justify-between px-4 lg:px-10 xl:px-32">

          {/* Left side of navbar: Logo / Hamburguer menu */}
          <div className=" flex flex-row flex-grow flex-shrink-0 flex-1 justify-start items-center space-x-4 lg:space-x-0">

            <div className="flex lg:hidden">
              <Hamburger label="Show menu" size={24} color="#253858" toggled={menuState} toggle={setMenuState} />

              {/* Mobile hamburger menu background */}
              <div className={`pointer-events-none transition-all duration-500 flex fixed left-0 w-full h-full top-14 bg-white ${menuState ? 'opacity-100' : 'opacity-0'}`} />

              {/* Mobile hamburger menu */}
              <div className={`transition-all duration-500 flex flex-col fixed left-0 w-full top-14 overflow-hidden bg-white text-xl ${menuState ? 'h-screen pb-14 overflow-y-auto' : 'h-0'}`}>
                <div className="my-6 font-medium">

                  <Link href="/pricing" locale={lang}>
                    <div role="link" tabIndex={0} onClick={() => { setMenuState(false); }} className={`cursor-pointer flex w-full px-8 py-3 transition duration-300 delay-100 transform translate-y-0 ${menuState ? 'opacity-100' : '-translate-y-4 opacity-0'}`}>
                      {textContent.links.pricing}
                    </div>
                  </Link>

                  <Disclosure as="div">
                    {({ open }) => (
                      <div className={`transition duration-300 delay-150 transform translate-y-0 ${menuState ? 'opacity-100' : '-translate-y-4 opacity-0'}`}>
                        <div className={`${open ? 'bg-cool-gray-5' : ''}`}>

                          <Disclosure.Button className={`flex justify-between items-center w-full px-8 py-3 font-medium ${open ? 'bg-cool-gray-10' : ''}`}>
                            <div className="flex flex-row">{textContent.links.products}</div>
                            <div className="relative w-6 h-6">
                              <UilMinus className={`absolute top-0 left-0 w-6 h-6 transition duration-300 transform ${open ? 'text-cool-gray-60' : 'text-cool-gray-40 -rotate-180'}`} />
                              <UilMinus className={`absolute top-0 left-0 w-6 h-6 transition duration-300 transform ${open ? 'text-cool-gray-60' : 'text-cool-gray-40 -rotate-90'}`} />
                            </div>
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
                                <a className="flex w-full px-8 py-3 justify-start text-lg font-medium text-cool-gray-80">
                                  {textContent.products.drive}
                                </a>
                              </Link>

                              <Link href="/drive" locale={lang}>
                                <a className="flex w-full px-8 py-3 justify-start text-lg font-medium text-cool-gray-80">
                                  {textContent.products.photos}
                                </a>
                              </Link>

                              <a className="flex w-full px-8 py-3 justify-start items-center text-lg font-medium text-cool-gray-80">
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
                    <div role="link" tabIndex={0} onClick={() => { setMenuState(false); }} className={`cursor-pointer flex w-full px-8 py-3 transition duration-300 delay-200 transform translate-y-0 ${menuState ? 'opacity-100' : '-translate-y-4 opacity-0'}`}>
                      {textContent.links.privacy}
                    </div>
                  </Link>

                  <Link href="/about" locale={lang}>
                    <div role="link" tabIndex={0} onClick={() => { setMenuState(false); }} className={`cursor-pointer flex w-full px-8 py-3 transition duration-300 delay-250 transform translate-y-0 ${menuState ? 'opacity-100' : '-translate-y-4 opacity-0'}`}>
                      {textContent.links.about}
                    </div>
                  </Link>

                  <a onClick={() => { setMenuState(false); }} href="https://drive.internxt.com/login" className={`flex w-full px-8 py-3 text-blue-60 transition duration-300 delay-300 transform translate-y-0 ${menuState ? 'opacity-100' : '-translate-y-4 opacity-0'}`}>
                    {textContent.links.login}
                  </a>

                </div>
              </div>
            </div>

            {/* Logo */}
            <Link href="/" locale={lang}>
              <a className="flex flex-shrink-0">
                <img loading="lazy" className="select-none" src="../../logos/internxt/internxt.svg" alt="Internxt logo" />
              </a>
            </Link>

          </div>

          {/* Links */}
          <div className="links">
            <div className="hidden lg:inline-flex space-x-3">

              <Link href="/pricing" locale={lang}>
                <a className="whitespace-nowrap py-1.5 px-4 transition duration-150 ease-in-out text-cool-gray-70 hover:text-cool-gray-90 text-base font-medium">
                  {textContent.links.pricing}
                </a>
              </Link>

              <div className="max-w-sm">

                {/* Products popover menu (desktop) */}
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button>
                        <span className={`flex py-1.5 px-4 pr-2 space-x-1 transition duration-150 ease-in-out font-medium text-cool-gray-70 rounded-lg hover:bg-cool-gray-5 ${open ? 'bg-cool-gray-10 hover:bg-cool-gray-10' : ''}`}>
                          <span>{textContent.links.products}</span>
                          <UilAngleDown className={`w-6 h-6 transition duration-150 ease-in-out transform translate-y-px ${open ? 'text-cool-gray-30' : 'text-cool-gray-20'}`} />
                        </span>
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-50"
                        enterFrom="opacity-0 -translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-1"
                      >
                        <Popover.Panel className="absolute z-10 w-56 transform -translate-x-1/2 left-1/2 mt-1.5 p-1.5 bg-white rounded-xl shadow-subtle border border-black border-opacity-5 overflow-hidden">

                          <div className="relative grid gap-0 lg:grid-cols-1">

                            <Popover.Button>
                              <Link href="/drive" locale={lang}>
                                <a className="py-2 px-4 rounded-lg flex flex-row justify-start text-base font-medium text-cool-gray-80 hover:bg-cool-gray-5">
                                  {textContent.products.drive}
                                </a>
                              </Link>
                            </Popover.Button>

                            <Popover.Button>
                              <Link href="/photos" locale={lang}>
                                <a className="py-2 px-4 rounded-lg flex flex-row justify-start text-base font-medium text-cool-gray-80 hover:bg-cool-gray-5">
                                  {textContent.products.photos}
                                </a>
                              </Link>
                            </Popover.Button>

                            <Popover.Button>
                              <a className="py-2 px-4 rounded-lg flex flex-row justify-start items-center text-base font-medium text-cool-gray-80">
                                <span>{textContent.products.send}</span>
                                <span className="ml-2 text-xs text-orange-50 font-normal">{textContent.products.comingSoon}</span>
                              </a>
                            </Popover.Button>

                          </div>

                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

              </div>

              <Link href="/privacy" locale={lang}>
                <a className="whitespace-nowrap py-1.5 px-4 transition duration-150 ease-in-out text-neutral-700 focus:text-neutral-80 font-medium">
                  {textContent.links.privacy}
                </a>
              </Link>

              <Link href="/about" locale={lang}>
                <a className="whitespace-nowrap py-1.5 px-4 transition duration-150 ease-in-out text-neutral-700 focus:text-neutral-80 font-medium">
                  {textContent.links.about}
                </a>
              </Link>

            </div>

          </div>

          {/* Login and CTA */}
          <div className="flex flex-row flex-grow flex-shrink-0 flex-1 justify-end items-center">

            <a href="https://drive.internxt.com/login" className="hidden md:flex whitespace-nowrap py-1.5 px-4 transition duration-150 ease-in-out mr-1 text-blue-60 focus:text-blue-70 text-sm font-medium">
              {textContent.links.login}
            </a>

            {(ctaAction[0] === 'default') ? (
              <a
                href="https://drive.internxt.com/new"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center sm:inline-flex py-1 px-4 border border-transparent rounded-full text-sm font-medium text-white bg-blue-60 active:bg-blue-70 focus:bg-blue-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-20 transition-all duration-75"
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

    </section>

  );
}
