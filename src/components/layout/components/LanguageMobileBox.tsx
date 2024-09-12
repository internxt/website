import { Disclosure, Transition } from '@headlessui/react';
import { CaretDown, CaretUp, Globe } from '@phosphor-icons/react';
import { useRouter } from 'next/router';

const languages = [
  { text: 'English (EN)', lang: 'en' },
  { text: 'Español (ES)', lang: 'es' },
  { text: 'Français (FR)', lang: 'fr' },
  { text: 'Italiano (IT)', lang: 'it' },
  { text: 'Русский (RU)', lang: 'ru' },
  { text: 'Deutsch (DE)', lang: 'de' },
  { text: '中国人 (ZH)', lang: 'zh' },
  { text: '中国人 (TW)', lang: 'zh-tw' },
];

export default function LanguageMobileBox({ darkMode }) {
  const router = useRouter();
  const lang = router.locale?.toLowerCase().split('-')[0] as string;
  const langSelected = languages.map((language) => language.text.includes(lang));

  return (
    <div className="flex w-screen">
      <Disclosure as="div" className="w-screen">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between px-6 py-4 text-lg font-medium">
              <div className="flex flex-row items-center space-x-2">
                <Globe className={darkMode ? 'text-white' : 'text-gray-60'} size={20} weight="regular" />
                <span className="flex flex-row">{langSelected}</span>
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
                {languages.map((language) => (
                  <button
                    key={language.text}
                    onClick={() => {
                      router.push(router.pathname, router.pathname, { locale: language.lang });
                    }}
                  >
                    {language.text}
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
