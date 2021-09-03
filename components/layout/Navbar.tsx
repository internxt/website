import React from 'react';
import { useRouter } from 'next/router';
import styles from './Navbar.module.scss';
import { Popover, Transition, Disclosure } from '@headlessui/react'
import { Squeeze as Hamburger } from 'hamburger-react'
import { Fragment } from 'react'
import { MinusIcon } from '@heroicons/react/solid'

export default function Navbar({textContent, lang, cta}) {
  const router = useRouter();
  const [menuState, setMenuState] = React.useState(false)
  const [navbarBG, setNavbarBG] = React.useState(true)
  const handleScroll = () => {
    (window.pageYOffset > 0) ? setNavbarBG(true) : setNavbarBG(false)
  }
  cta[0] ? cta[0] : (cta = ['default', null]);

  React.useEffect(() => {
    handleScroll
    window.addEventListener("scroll", handleScroll);
  })

  return (
    <section className={`flex items-center fixed w-full h-16 transition-all duration-75 sm:duration-250 ${menuState || navbarBG ? styles.navbarBlur : ''} ${menuState ? styles.navbarSolid : ''} ${navbarBG ? styles.nabvarScrolled : ''} z-40`}>
      <div className="content w-full">
        <div className="navbar items-center flex justify-between px-4 md:px-10 lg:px-32">
          <div className="flex flex-row space-x-4 md:space-x-0">
            <div className="flex md:hidden">
              <Hamburger label="Show menu" size={24} color="#253858" toggled={menuState} toggle={setMenuState} />
              
              <div className={`pointer-events-none transition-all duration-500 flex fixed left-0 w-full h-full top-14 bg-white ${menuState ? 'opacity-100' : 'opacity-0'}`}></div>
              <div className={`transition-all duration-500 flex flex-col fixed left-0 w-full top-14 overflow-hidden bg-white text-xl ${menuState ? 'h-screen pb-14 overflow-y-auto' : 'h-0'}`}>
                <div className="my-6 font-medium">
                  <Disclosure as="div">
                    {({ open }) => (
                      <div className={`transition duration-300 delay-200 transform translate-y-0 ${menuState ? 'opacity-100' : '-translate-y-4 opacity-0'}`}>
                        <div className={`${open ? 'bg-neutral-20' : ''}`}>
                          
                          <Disclosure.Button className={`flex justify-between items-center w-full px-8 py-3 font-medium ${open ? 'bg-neutral-10' : ''}`}>
                            <div className={`flex flex-row`}>{textContent.products}</div>
                            <div className={`relative w-6 h-6`}>
                              <MinusIcon className={`absolute top-0 left-0 w-6 h-6 transition duration-300 transform ${open ? 'text-neutral-100' : 'text-neutral-50 -rotate-180'}`} />
                              <MinusIcon className={`absolute top-0 left-0 w-6 h-6 transition duration-300 transform ${open ? 'text-neutral-100' : 'text-neutral-50 -rotate-90'}`} />
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
                            <Disclosure.Panel className="flex flex-col py-3 text-neutral-500 mb-4">
                              <a onClick={() => {setMenuState(false)}} href={`${router.pathname === '/products' ? '#web' : ((lang ? '/' + lang : '') + '/products#web')}`} className={`flex w-full px-8 py-3`}>{textContent.productsMenu.web.titleMenu}</a>
                              <a onClick={() => {setMenuState(false)}} href={`${router.pathname === '/products' ? '#desktop' : ((lang ? '/' + lang : '') + '/products#desktop')}`} className={`flex w-full px-8 py-3`}>{textContent.productsMenu.desktop.titleMenu}</a>
                              <a onClick={() => {setMenuState(false)}} href={`${router.pathname === '/products' ? '#mobile' : ((lang ? '/' + lang : '') + '/products#mobile')}`} className={`flex w-full px-8 py-3`}>{textContent.productsMenu.mobile.titleMenu}</a>
                              <a onClick={() => {setMenuState(false)}} href={`${router.pathname === '/products' ? '' : ((lang ? '/' + lang : '') + '/products')}`} className={`flex w-full px-8 py-3 font-normal text-lg text-neutral-100`}>{textContent.productsMenu.allProducts}</a>
                            </Disclosure.Panel>
                          </Transition>

                        </div>
                      </div>
                    )}
                  </Disclosure>
                  <a onClick={() => {setMenuState(false)}} href={`${router.pathname === '/pricing' ? '' : ((lang ? '/' + lang : '') + '/pricing')}`} className={`flex w-full px-8 py-3 transition duration-300 delay-250 transform translate-y-0 ${menuState ? 'opacity-100' : '-translate-y-4 opacity-0'}`}>
                    {textContent.pricing}
                  </a>
                  <a onClick={() => {setMenuState(false)}} href={`${router.pathname === '/about' ? '' : ((lang ? '/' + lang : '') + '/about')}`} className={`flex w-full px-8 py-3 transition duration-300 delay-300 transform translate-y-0 ${menuState ? 'opacity-100' : '-translate-y-4 opacity-0'}`}>
                    {textContent.about}
                  </a>
                  <a onClick={() => {setMenuState(false)}} href="/login" className={`flex w-full px-8 py-3 text-blue-60 transition duration-300 delay-350 transform translate-y-0 ${menuState ? 'opacity-100' : '-translate-y-4 opacity-0'}`}>
                    {textContent.login}
                  </a>
                </div>
              </div>
            </div>
            <a href={`${(lang ? ('/' + lang) : '/')}`} className="flex flex-shrink-0">
              <img loading="lazy" src="../../logos/internxt/internxt.svg" alt="Internxt logo"/>
            </a>
          </div>
          
          <div className="links">
            <div className="hidden md:inline-flex">
              <a href={`${router.pathname === '/pricing' ? '' : ((lang ? '/' + lang : '') + '/pricing')}`} className="transition duration-150 ease-in-out mr-6 lg:mr-8 text-neutral-700 focus:text-neutral-80 font-medium">
                {textContent.pricing}
              </a>
              <div className="max-w-sm mr-6 lg:mr-8">
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button className={`transition duration-150 ease-in-out font-medium text-neutral-700`}>
                        <span className={`flex ${open ? 'text-neutral-80' : ''}`}>{textContent.products}<img loading="lazy" className="mt-0.5 ml-3 transform rotate-90" src="/icons/chevronBoldNeutral80.svg" draggable="false"/></span>
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="opacity-0 -translate-y-2"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-2"
                      >
                        <Popover.Panel className="absolute z-10 w-screen max-w-sm transform -translate-x-1/2 left-1/2 lg:max-w-3xl mt-4">
                          <div className={`p-10 pt-8 pb-12 bg-neutral-10 rounded-lg shadow-xl ring-1 ring-neutral-30 overflow-hidden`}>
                            
                            <div className="flex pb-4 justify-between items-end">
                              <div className="text-xs font-semibold text-neutral-100">INTERNXT DRIVE</div>
                              <Popover.Button><a href={`${router.pathname === '/products' ? '' : ((lang ? '/' + lang : '') + '/products')}`} className="flex flex-row text-xs font-medium text-neutral-100 hover:text-neutral-300 focus:text-neutral-100 bg-neutral-20 p-1 px-3 rounded-xl"><span className="flex-shrink-0">{textContent.productsMenu.allProducts}</span><img loading="lazy" className=" ml-1.5 transform scale-75" src="/icons/chevronNeutral80.svg" draggable="false"/></a></Popover.Button>
                            </div>
                            
                            <div className="relative grid gap-8 lg:grid-cols-3 lg:gap-16">

                              <Popover.Button className={`${styles.popoverItem}`}>
                                <a href="https://drive.internxt.com" target="_blank" className={`flex flex-col space-y-4 ${styles.popoverItem}`}>
                                  <div className="flex flex-col text-left space-y-2">
                                    <p className="text-2xl font-medium text-neutral-700">
                                      {textContent.productsMenu.web.title}
                                    </p>
                                    <p className="text-normal text-neutral-500">
                                      {textContent.productsMenu.web.description}
                                    </p>
                                  </div>                                    
                                  <div className="flex flex-row items-center text-sm text-blue-60 font-semibold">
                                    <img loading="lazy" className="mt-0.5 mr-2" src="/icons/newTab.svg" draggable="false"/>
                                    {textContent.productsMenu.web.link}
                                  </div>
                                </a>
                              </Popover.Button>

                              <Popover.Button className={`${styles.popoverItem}`}>
                                <a href={`${router.pathname === '/products' ? '#desktop' : ((lang ? '/' + lang : '') + '/products#desktop')}`} className={`flex flex-col space-y-4`}>
                                  <div className="flex flex-col text-left space-y-2">
                                    <p className="text-2xl font-medium text-neutral-700">
                                      {textContent.productsMenu.desktop.title}
                                    </p>
                                    <p className="text-normal text-neutral-500">
                                      {textContent.productsMenu.desktop.description}
                                    </p>
                                  </div>
                                  <div className="flex flex-row space-x-1.5 text-sm text-blue-60 font-semibold">
                                    <span className="flex flex-shrink-0">{textContent.productsMenu.desktop.link}</span>
                                    <img loading="lazy" className="mt-0.5 transform scale-50" src="/icons/chevronBoldBlue60.svg" draggable="false"/>
                                  </div>
                                </a>
                              </Popover.Button>
                              
                              <Popover.Button className={`${styles.popoverItem}`}>
                                <a href={`${router.pathname === '/products' ? '#mobile' : ((lang ? '/' + lang : '') + '/products#mobile')}`} className={`flex flex-col space-y-4`}>
                                  <div className="flex flex-col text-left space-y-2">
                                    <p className="text-2xl font-medium text-neutral-700">
                                      {textContent.productsMenu.mobile.title}
                                    </p>
                                    <p className="text-normal text-neutral-500">
                                      {textContent.productsMenu.mobile.description}
                                    </p>
                                  </div>
                                  <div  className="flex flex-row space-x-1.5 text-sm text-blue-60 font-semibold">
                                    <span className="flex flex-shrink-0">
                                      {textContent.productsMenu.mobile.link}
                                    </span>
                                    <img loading="lazy" className="mt-0.5 transform scale-50" src="/icons/chevronBoldBlue60.svg" draggable="false"/>
                                  </div>
                                </a>
                              </Popover.Button>
                              

                            </div>

                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </div>
              <a href={`${router.pathname === '/about' ? '' : ((lang ? '/' + lang : '') + '/about')}`} className="transition duration-150 ease-in-out mr-6 lg:mr-8 text-neutral-700 focus:text-neutral-80 font-medium">{textContent.about}</a>
              <a href="/login" className="transition duration-150 ease-in-out mr-6 lg:mr-8 text-blue-60 focus:text-blue-70 font-medium">{textContent.login}</a>
            </div>

            {(cta[0] === 'default') ? (
              <a href="https://drive.internxt.com/new" target="_blank">
                <button
                  type="button"
                  className="flex justify-center sm:inline-flex px-4 py-1 border border-transparent rounded-full text-base font-medium text-blue-60 md:text-white bg-blue-10 md:bg-blue-60 active:bg-blue-20 focus:bg-blue-20 md:active:bg-blue-70 md:focus:bg-blue-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-20 transition-all duration-75"
                >
                  <p className="whitespace-nowrap">{textContent.getStarted}</p>
                </button>
              </a>
             ) : ''}

            {(cta[0] === 'checkout') ? (
              <button
                type="button"
                onClick={cta[1]}
                className="flex justify-center sm:inline-flex px-4 py-1 border border-transparent rounded-full text-base font-medium text-blue-60 md:text-white bg-blue-10 md:bg-blue-60 active:bg-blue-20 focus:bg-blue-20 md:active:bg-blue-70 md:focus:bg-blue-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-20 transition-all duration-75"
              >
                <p className="whitespace-nowrap">{textContent.checkout}</p>
              </button>
             ) : ''}
            
          </div>
        </div>
      </div>

    </section>
    
  );
}
