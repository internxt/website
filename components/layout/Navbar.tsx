import React from 'react';
import { useRouter } from 'next/router';
import styles from './Navbar.module.scss';
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function Navbar({textContent, lang}) {
  const router = useRouter();

  return (
    <section>
      <div className="content">
        <div className="navbar items-center flex justify-between p-4 md:px-10 md:py-8 lg:px-32 lg:py-8">
          <div className="flex flex-row space-x-4 md:space-x-0 pl-2">
            <img className="flex md:hidden" src="../../icons/menu.svg" alt="menu icon"/>
            <a href="/" className="flex flex-shrink-0">
              <img src="../../logos/internxt/internxt.svg" alt="Internxt logo"/>
            </a>
          </div>
          
          <div className="links">
            <div className="hidden md:inline-flex">
              <a href={`${router.pathname === '/pricings' ? '' : ((lang ? (lang === 'en' ? '' : lang) : '') + '/pricings')}`} className="transition duration-150 ease-in-out mr-6 lg:mr-8 text-neutral-700 focus:text-neutral-80 font-medium">{textContent.pricing}</a>
              <div className="max-w-sm mr-6 lg:mr-8">
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button className={`transition duration-150 ease-in-out font-medium text-neutral-700`}>
                        <span className={`flex ${open ? 'text-neutral-80' : ''}`}>{textContent.products}<img className="mt-0.5 ml-3 transform rotate-90" src="/icons/chevronBoldNeutral80.svg" draggable="false"/></span>
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
                          <div className="p-10 pb-12 bg-neutral-10 rounded-lg shadow-xl ring-1 ring-neutral-30 overflow-hidden">
                            
                            <div className="flex pb-4 justify-between items-end">
                              <div className="text-xs font-semibold text-neutral-100">INTERNXT DRIVE</div>
                              <a href={`${router.pathname === '/products' ? '' : ((lang ? (lang === 'en' ? '' : lang) : '') + '/products')}`} className="flex flex-row text-xs font-medium text-neutral-100 hover:text-neutral-300 focus:text-neutral-100 bg-neutral-20 p-1 px-3 rounded-xl"><span className="flex-shrink-0">{textContent.productsMenu.allProducts}</span><img className=" ml-1.5 transform scale-75" src="/icons/chevronNeutral80.svg" draggable="false"/></a>
                            </div>
                            
                            <div className="relative grid gap-8 lg:grid-cols-3 lg:gap-16">

                              <div className={`flex flex-col space-y-4 ${styles.popoverItem}`}>
                                <div className="space-y-2">
                                  <p className="text-2xl font-medium text-neutral-700">
                                    {textContent.productsMenu.web.title}
                                  </p>
                                  <p className="text-normal text-neutral-500">
                                    {textContent.productsMenu.web.description}
                                  </p>
                                </div>
                                <a href="https://drive.internxt.com" target="_blank" className="text-sm text-blue-60 font-semibold">
                                  <div className="flex flex-row items-center"><img className="mt-0.5 mr-2" src="/icons/newTab.svg" draggable="false"/>{textContent.productsMenu.web.link}</div>
                                </a>
                              </div>

                              <div className={`flex flex-col space-y-4 ${styles.popoverItem}`}>
                                <div className="space-y-2">
                                  <p className="text-2xl font-medium text-neutral-700">
                                    {textContent.productsMenu.desktop.title}
                                  </p>
                                  <p className="text-normal text-neutral-500">
                                    {textContent.productsMenu.desktop.description}
                                  </p>
                                </div>
                                <a href={`${router.pathname === '/products' ? '' : ((lang ? (lang === 'en' ? '' : lang) : '') + '/products')}`} className="flex flex-row space-x-1.5 text-sm text-blue-60 font-semibold">
                                  <span className="flex flex-shrink-0">
                                    {textContent.productsMenu.desktop.link}
                                  </span>
                                  <img className="mt-0.5 transform scale-75" src="/icons/chevronBoldBlue60.svg" draggable="false"/>
                                </a>
                              </div>

                              <div className={`flex flex-col space-y-4 ${styles.popoverItem}`}>
                                <div className="space-y-2">
                                  <p className="text-2xl font-medium text-neutral-700">
                                    {textContent.productsMenu.mobile.title}
                                  </p>
                                  <p className="text-normal text-neutral-500">
                                    {textContent.productsMenu.mobile.description}
                                  </p>
                                </div>
                                <a href={`${router.pathname === '/products' ? '' : ((lang ? (lang === 'en' ? '' : lang) : '') + '/products')}`} className="flex flex-row space-x-1.5 text-sm text-blue-60 font-semibold">
                                  <span className="flex flex-shrink-0">
                                    {textContent.productsMenu.mobile.link}
                                  </span>
                                  <img className="mt-0.5 transform scale-75" src="/icons/chevronBoldBlue60.svg" draggable="false"/>
                                </a>
                              </div>

                            </div>

                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </div>
              <a href={`${router.pathname === '/abouts' ? '' : ((lang ? (lang === 'en' ? '' : lang) : '') + '/abouts')}`} className="transition duration-150 ease-in-out mr-6 lg:mr-8 text-neutral-700 focus:text-neutral-80 font-medium">{textContent.about}</a>
              <a href="/login" className="transition duration-150 ease-in-out mr-6 lg:mr-8 text-blue-60 focus:text-blue-70 font-medium">{textContent.login}</a>
            </div>
            <a href="https://drive.internxt.com/new" target="_blank">
              <button
                type="button"
                className="flex justify-center sm:inline-flex px-4 py-1 border border-transparent rounded-full text-base font-medium text-blue-60 md:text-white bg-blue-10 md:bg-blue-60 active:bg-blue-20 focus:bg-blue-20 md:active:bg-blue-70 md:focus:bg-blue-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-20 transition-all duration-75"
              >
                {textContent.getStarted}
              </button>
            </a>
          </div>
        </div>
      </div>

    </section>
    
  );
}
