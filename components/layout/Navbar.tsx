import React from 'react';
import { useRouter } from 'next/router';
import styles from './Navbar.module.scss';
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function Navbar({textContent, lang}) {
  const router = useRouter();

  const solutions = [
    {
      name: 'Insights',
      description: 'Measure actions your users take',
      href: '##'
    },
    {
      name: 'Automations',
      description: 'Create your own targeted content',
      href: '##'
    },
    {
      name: 'Reports',
      description: 'Keep track of your growth',
      href: '##'
    },
  ]

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
              <a href={`${router.pathname === '/products' ? '' : ((lang ? (lang === 'en' ? '' : lang) : '') + '/products')}`} className={`mr-6 lg:mr-8 ${router.pathname === '/products' ? `text-neutral-700 ${styles.selected}` : `text-neutral-300`} focus:text-neutral-700 font-medium`}>{textContent.products}</a>
              <a href="/" className="mr-6 lg:mr-8 text-neutral-300 focus:text-neutral-700 font-medium">{textContent.pricing}</a>
              <a href="/" className="mr-6 lg:mr-8 text-neutral-300 focus:text-neutral-700 font-medium">{textContent.about}</a>
              <a href="/login" className="mr-6 lg:mr-8 text-blue-60 focus:text-blue-70 font-medium">{textContent.login}</a>
            </div>
            <a href="https://drive.internxt.com/new" target="_blank">
              <button
                type="button"
                className="flex justify-center sm:inline-flex px-4 py-2 border border-transparent rounded-full text-base font-medium text-blue-60 md:text-white bg-blue-10 md:bg-blue-60 active:bg-blue-20 focus:bg-blue-20 md:active:bg-blue-70 md:focus:bg-blue-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-20 transition-all duration-75"
              >
                {textContent.getStarted}
              </button>
            </a>
          </div>
        </div>
      </div>



      <div className="w-full max-w-sm px-4 fixed top-0 hidden">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={`
                  ${open ? '' : 'text-opacity-90'}
                  text-white group bg-orange-700 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span>Solutions</span>
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                    <div className="p-4 bg-gray-50">
                      <a
                        href="##"
                        className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <span className="flex items-center">
                          <span className="text-sm font-medium text-gray-900">
                            Documentation
                          </span>
                        </span>
                        <span className="block text-sm text-gray-500">
                          Start integrating products and tools
                        </span>
                      </a>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>


    </section>
    
  );
}
