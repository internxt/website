import { useState } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { CaretDown, CaretUp, Globe } from '@phosphor-icons/react';
import { useRouter } from 'next/router';

const languages = [
  { en: 'English (EN)' },
  { es: 'Español (ES)' },
  { fr: 'Français (FR)' },
  { it: 'Italiano (IT)' },
  { zh: '中国人 (ZH)' },
  { ru: 'Русский (RU)' },
  { de: 'Deutsch (DE)' },
  { pt: 'Portuguese (PT)' },
];

export default function LanguageMobileBox({ darkMode }) {
  const router = useRouter();
  const lang = router.locale?.toLowerCase().split('-')[0] as string;
  const [selected, setSelected] = useState(languages.filter((person) => person[lang])[0][lang]);

  return (
    <div className="flex w-screen">
      <Disclosure as="div" className="w-screen">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between px-6 py-4 text-lg font-medium">
              <div className="flex flex-row items-center space-x-2">
                <Globe className={darkMode ? 'text-white' : 'text-gray-60'} size={20} weight="regular" />
                <span className="flex flex-row">{selected}</span>
              </div>
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
                className={`flex flex-col bg-gray-1 px-6 font-semibold ${!open ? 'hidden' : 'flex'} ${
                  darkMode ? 'text-gray-30' : 'text-gray-60'
                } space-y-8 p-4`}
              >
                {languages.map((person, personIdx) => (
                  <button
                    key={personIdx}
                    onClick={() => {
                      const lang = Object.keys(person)[0];
                      router.push(router.pathname, router.pathname, { locale: lang }).catch((err) => console.log(err));
                    }}
                  >
                    {person.en || person.es || person.fr || person.it || person.zh || person.ru || person.de}
                  </button>
                ))}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}
