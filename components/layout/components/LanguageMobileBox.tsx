import { Fragment, useEffect, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CaretDown, Check, Globe } from '@phosphor-icons/react';
import { useRouter } from 'next/router';

const languages = [{ en: 'EN' }, { es: 'ES' }, { fr: 'FR' }, { it: 'IT' }, { zh: 'ZH' }, { ru: 'RU' }];

export default function Example() {
  const router = useRouter();
  const lang = router.locale.toLowerCase().split('-')[0];
  const [selected, setSelected] = useState(languages.filter((person) => person[lang])[0][lang]);

  return (
    <div className="relative flex">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="focus-visible:border-indigo-500 focus-visible:ring-offset-orange-300 relative w-full cursor-default rounded-lg py-2 pl-3 pr-10 text-start focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 sm:text-sm">
            <Globe size={24} className="text-gray-80" />
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <CaretDown size={24} className="text-gray-40" />
            </span>
          </Listbox.Button>
          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Listbox.Options className="mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {languages.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  onClick={() => {
                    const lang = Object.keys(person)[0];
                    router.push(router.pathname, router.pathname, { locale: lang }).catch((err) => console.log(err));
                  }}
                  value={person.en || person.es || person.fr || person.it || person.zh || person.ru}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                        {person.en || person.es || person.fr || person.it || person.zh || person.ru}
                      </span>
                      {selected ? (
                        <span className="text-amber-600 absolute inset-y-0 left-0 flex items-center pl-3">
                          <Check className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
