import { Fragment } from 'react';

import { Menu, Transition } from '@headlessui/react';
import { CaretDown } from '@phosphor-icons/react';

const SelectSection = ({ textContent, itemSelected, setItemSelected }) => {
  function linkTitles() {
    const titles: string[] = [];
    for (const key in textContent) {
      if (textContent.hasOwnProperty(key) && key.startsWith('title')) {
        titles.push(textContent[key]);
      }
    }
    return titles;
  }

  return (
    <>
      <div className="sticky top-[200px] hidden max-h-[450px] w-max flex-col space-y-6 overflow-y-scroll rounded-lg border border-gray-10 px-6 py-9 pr-20 lg:flex">
        <div className="flex flex-col space-y-6">
          {linkTitles().map((title) => (
            <p
              key={title}
              className={`cursor-pointer text-base font-medium ${
                itemSelected === title ? 'text-primary hover:text-primary-dark' : 'text-gray-60 hover:text-primary'
              } `}
              onClick={() => {
                setItemSelected(title);
              }}
            >
              {title}
            </p>
          ))}
        </div>
      </div>
      <div className="mb-10 flex flex-col rounded-lg border border-gray-10 drop-shadow lg:hidden">
        <div className="flex flex-col">
          <Menu>
            <div className="mt-1 flex flex-col">
              <Menu.Button className="focus-visible:border-indigo-500 focus-visible:ring-offset-orange-300 flex w-full cursor-default flex-row items-center justify-between rounded-lg px-5 py-2 text-start focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 sm:text-sm">
                <p>{itemSelected || linkTitles()[0]}</p>
                <span>
                  <CaretDown size={24} className="pointer-events-none flex items-center" />
                </span>
              </Menu.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Menu.Items className="mt-1 flex w-full flex-col rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {linkTitles().map((title, personIdx) => (
                    <Menu.Item
                      as={'div'}
                      key={personIdx}
                      className={`flex cursor-default select-none py-2 pl-4 pr-4 ${
                        itemSelected ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                      }`}
                    >
                      <p
                        onClick={() => {
                          setItemSelected(title);
                          setTimeout(() => {
                            document.getElementById(title)?.scrollIntoView({
                              behavior: 'smooth',
                              block: 'center',
                            });
                          }, 1000);
                        }}
                        className={`block truncate ${itemSelected ? 'font-medium' : 'font-normal'}`}
                      >
                        {title}
                      </p>
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </div>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default SelectSection;
