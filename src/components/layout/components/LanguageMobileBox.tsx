import { Disclosure, Transition } from '@headlessui/react';
import { CaretDown, CaretUp, Globe } from '@phosphor-icons/react';
import { useRouter } from 'next/router';

interface LanguageMobileBoxProps {
  singlesDay?: boolean;
  darkMode?: boolean;
}

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

export default function LanguageMobileBox({ darkMode, singlesDay }: LanguageMobileBoxProps) {
  const router = useRouter();
  const lang = router.locale || 'en';
  const selectedLanguage = languages.find(language => language.lang === lang)?.text || 'Select Language';

  // Filtramos idiomas si estamos en singlesDay
  const filteredLanguages = singlesDay
    ? languages.filter(language => ['en', 'zh', 'zh-tw'].includes(language.lang))
    : languages;

  return (
    <div className="flex w-screen">
      <Disclosure as="div" className="w-screen">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between px-8 py-4">
              <div className="flex flex-row items-center space-x-2">
                <Globe className={darkMode ? 'text-white' : 'text-black'} size={20} weight="regular" />
                <span className="flex flex-row">{selectedLanguage}</span>
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
                } space-y-2 max-h-48 overflow-y-auto p-4`}
              >
                {filteredLanguages.map((language) => (
                  <button
                    key={language.text}
                    onClick={() => {
                      router.push(router.pathname, router.pathname, { locale: language.lang });
                    }}
                    className="w-full text-center py-2"
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