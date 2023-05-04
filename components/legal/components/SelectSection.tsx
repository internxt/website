import { Listbox, Transition } from '@headlessui/react';
import { CaretDown, Check, Globe } from 'phosphor-react';
import { Fragment } from 'react';

const SelectSection = ({ textContent, itemSelected, setItemSelected }) => {
  const linkTitles = [
    {
      title: textContent.title,
    },
    {
      title: textContent.title2,
    },
    {
      title: textContent.title3,
    },
    {
      title: textContent.title4,
    },
    {
      title: textContent.title5,
    },
    {
      title: textContent.title6,
    },
    {
      title: textContent.title7,
    },
  ];

  return (
    <>
      <div className="hidden w-max flex-col space-y-6 rounded-lg border border-gray-10 px-6 py-9 pr-20 lg:flex">
        <p className="select-none text-xl font-semibold text-gray-100">{textContent.category}</p>
        <div className="flex flex-col space-y-6">
          {linkTitles.map((link) => (
            <p
              key={link.title}
              className={`cursor-pointer text-base font-medium ${
                itemSelected === link.title ? 'text-primary hover:text-primary-dark' : 'text-gray-60 hover:text-primary'
              } `}
              onClick={() => {
                setItemSelected(link.title);
              }}
            >
              {link.title}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col rounded-lg border border-gray-10 lg:hidden">
        <div className="flex flex-col">
          <Listbox value={itemSelected} onChange={setItemSelected}>
            <div className="mt-1 flex flex-col">
              <Listbox.Button className="focus-visible:border-indigo-500 focus-visible:ring-offset-orange-300 flex w-full cursor-default flex-row items-center justify-between rounded-lg py-2 px-5 text-start focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 sm:text-sm">
                <p>{itemSelected || linkTitles[0].title}</p>
                <span>
                  <CaretDown size={24} className="pointer-events-none flex items-center" />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="mt-1 flex w-full flex-col rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {linkTitles.map((title, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `flex cursor-default select-none py-2 pl-4 pr-4 ${
                          active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                        }`
                      }
                      value={title.title}
                    >
                      {({ selected }) => (
                        <>
                          <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                            {title.title}
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>
    </>
  );
};

export default SelectSection;
