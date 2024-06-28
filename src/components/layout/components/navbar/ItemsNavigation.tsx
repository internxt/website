import Link from 'next/link';
import { CaretDown } from '@phosphor-icons/react';

export const ItemsNavigation = ({
  lang,
  menuState,
  darkMode,
  isQuizSection,
  shouldHideItems,
  getTitles,
  textContent,
  router,
}) => {
  return (
    <>
      {/* Desktop links */}
      {!shouldHideItems ? (
        <div className="links">
          <div className="hidden space-x-2 lg:inline-flex">
            <Link
              href="/pricing"
              locale={lang}
              className={`whitespace-nowrap py-1.5 px-4 transition duration-150 ease-in-out ${
                darkMode || isQuizSection
                  ? `text-white hover:text-cool-gray-20 ${
                      router.pathname.split('/')[1] === getTitles.links.pricing.trim().toLowerCase() && 'text-primary'
                    }`
                  : router.pathname.split('/')[1] === getTitles.links.pricing.trim().toLowerCase()
                  ? 'text-primary'
                  : 'text-gray-60 hover:text-primary'
              }  text-base font-medium`}
            >
              {textContent.links.pricing}
            </Link>

            <div
              className={`group relative flex space-x-1 py-1.5 px-4 pr-2 font-medium transition duration-150 ease-in-out ${
                darkMode || isQuizSection
                  ? 'text-white hover:bg-white hover:bg-opacity-10 hover:text-cool-gray-20'
                  : 'text-gray-60 hover:bg-gray-100 hover:bg-opacity-5 hover:text-primary'
              } cursor-default rounded-lg`}
            >
              <span>{textContent.links.products}</span>
              <CaretDown
                size={20}
                className="translate-y-px text-gray-40 transition duration-150 ease-in-out group-hover:text-gray-30"
              />

              {/* Menu items */}
              <div className="pointer-events-none absolute top-full left-1/2 z-50 w-52 -translate-x-1/2 translate-y-0 rounded-xl border border-black border-opacity-5 bg-white p-1.5 opacity-0 shadow-subtle transition duration-150 ease-in-out group-hover:pointer-events-auto group-hover:translate-y-1 group-hover:opacity-100">
                <div className="absolute -top-4 left-1/2 h-4 w-4/5 -translate-x-1/2" />

                <div className="relative grid gap-0 whitespace-nowrap lg:grid-cols-1">
                  <Link
                    href="/drive"
                    locale={lang}
                    className={`flex flex-row justify-start rounded-lg py-2 px-4 text-base font-medium text-cool-gray-80 ${
                      darkMode || isQuizSection ? 'hover:bg-gray-10' : 'hover:bg-gray-5'
                    }`}
                  >
                    {textContent.products.drive}
                  </Link>

                  <a
                    href="https://send.internxt.com"
                    target="_blank"
                    rel="noreferrer"
                    className={`flex flex-row items-center justify-start rounded-lg py-2 px-4 text-base font-medium text-cool-gray-80 ${
                      darkMode || isQuizSection ? 'hover:bg-gray-10' : 'hover:bg-gray-5'
                    }`}
                  >
                    <span>{textContent.products.send}</span>
                  </a>

                  <Link
                    href="/vpn"
                    locale={lang}
                    className={`flex flex-row justify-start rounded-lg py-2 px-4 text-base font-medium text-cool-gray-80 ${
                      darkMode || isQuizSection ? 'hover:bg-gray-10' : 'hover:bg-gray-5'
                    }`}
                  >
                    {textContent.products.vpn}
                  </Link>
                </div>
              </div>
            </div>

            <div
              className={`group relative flex space-x-1 py-1.5 px-4 pr-2 font-medium transition duration-150 ease-in-out ${
                darkMode || isQuizSection
                  ? 'text-white hover:bg-white hover:bg-opacity-10 hover:text-gray-20'
                  : 'text-gray-60 hover:bg-gray-100 hover:bg-opacity-5 hover:text-primary'
              } cursor-default rounded-lg`}
            >
              <span>{textContent.links.ourValues}</span>
              <CaretDown
                size={20}
                className="translate-y-px text-gray-40 transition duration-150 ease-in-out group-hover:text-cool-gray-30"
              />

              {/* Menu items */}
              <div className="pointer-events-none absolute top-full left-1/2 z-50 w-52 -translate-x-1/2 translate-y-0 rounded-xl border border-black border-opacity-5 bg-white p-1.5 opacity-0 shadow-subtle transition duration-150 ease-in-out group-hover:pointer-events-auto group-hover:translate-y-1 group-hover:opacity-100">
                <div className="absolute -top-4 left-1/2 h-4 w-4/5 -translate-x-1/2" />

                <div className="relative grid gap-0 lg:grid-cols-1">
                  <Link
                    href="/privacy"
                    locale={lang}
                    className={`flex flex-row justify-start rounded-lg py-2 px-4 text-base font-medium text-cool-gray-80 ${
                      darkMode || isQuizSection ? 'hover:bg-gray-10' : 'hover:bg-gray-5'
                    }`}
                  >
                    {textContent.ourValues.privacy}
                  </Link>

                  <Link
                    href="/open-source"
                    locale={lang}
                    className={`flex flex-row justify-start rounded-lg py-2 px-4 text-base font-medium text-cool-gray-80 ${
                      darkMode || isQuizSection ? 'hover:bg-gray-10' : 'hover:bg-gray-5'
                    }`}
                  >
                    {textContent.ourValues.openSource}
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              locale={lang}
              className={`whitespace-nowrap py-1.5 px-4 transition duration-150 ease-in-out ${
                darkMode || isQuizSection
                  ? `text-white hover:text-gray-20 ${
                      router.pathname.split('/')[1] === getTitles.links.about.split(' ')[0].toLowerCase() &&
                      'text-primary'
                    }`
                  : router.pathname.split('/')[1] === getTitles.links.about.split(' ')[0].toLowerCase()
                  ? 'text-primary'
                  : 'text-gray-60 hover:text-primary'
              }
                  } text-base font-medium`}
            >
              {textContent.links.about}
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
};
