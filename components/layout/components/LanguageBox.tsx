import { useRouter } from 'next/router';
import { Globe } from '@phosphor-icons/react';
import { UilAngleDown } from '@iconscout/react-unicons';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const currentLang = {
  es: 'Español (ES)',
  fr: 'Français (FR)',
  de: 'Deutsch (DE)',
  en: 'English (EN)',
  it: 'Italiano (IT)',
  zh: '中国 (ZH)',
  ru: 'Русский (RU)',
};

const selectedLang = {
  es: 'ES',
  fr: 'FR',
  de: 'DE',
  en: 'EN',
  it: 'IT',
  zh: 'ZH',
  ru: 'RU',
};

export default function LanguageBox({ darkMode }) {
  const router = useRouter();

  const [currentLangText, setCurrentLangText] = useState<string>(selectedLang[router.locale]);

  function changeLang(lang: string) {
    setCurrentLangText(selectedLang[lang]);
  }

  return (
    <div
      className={`group relative flex cursor-default space-x-1 rounded-lg py-1.5 px-4 pr-2 font-medium transition duration-150 ease-in-out`}
    >
      <Globe size={24} className={darkMode ? 'text-white' : 'text-gray-60'} />
      <p className={darkMode ? 'text-white' : 'text-gray-60'}>{currentLangText}</p>
      <UilAngleDown
        className={`${
          darkMode ? 'text-white' : 'text-gray-40'
        } h-6 w-6 translate-y-px transition duration-150 ease-in-out`}
      />

      {/* Menu items */}
      <div className="pointer-events-none absolute top-full left-1/2 z-50 w-52 -translate-x-1/2 translate-y-0 rounded-xl border border-black border-opacity-5 bg-white p-1.5 opacity-0 shadow-subtle transition duration-150 ease-in-out group-hover:pointer-events-auto group-hover:translate-y-1 group-hover:opacity-100">
        <div className="absolute -top-4 left-1/2 h-4 w-4/5 -translate-x-1/2" />

        <div className="relative grid gap-0 whitespace-nowrap lg:grid-cols-1">
          <Link href={router.pathname} locale="en">
            <a
              className={`flex flex-row justify-start rounded-lg py-2 px-4 text-base font-medium text-cool-gray-80  hover:bg-gray-1`}
              onClick={() => changeLang('en')}
            >
              {currentLang.en}
            </a>
          </Link>

          <Link href={router.pathname} locale="es">
            <a
              className={`flex flex-row justify-start rounded-lg py-2 px-4 text-base font-medium text-cool-gray-80  hover:bg-gray-1`}
              onClick={() => changeLang('es')}
            >
              {currentLang.es}
            </a>
          </Link>

          <Link href={router.pathname} locale="fr">
            <a
              className={`flex flex-row justify-start rounded-lg py-2 px-4 text-base font-medium text-cool-gray-80  hover:bg-gray-1`}
              onClick={() => changeLang('fr')}
            >
              {currentLang.fr}
            </a>
          </Link>
          <Link href={router.pathname} locale="de">
            <a
              className={`flex flex-row justify-start rounded-lg py-2 px-4 text-base font-medium text-cool-gray-80  hover:bg-gray-1 ${
                darkMode ? 'text-white' : 'text-cool-gray-80'
              }`}
              onClick={() => changeLang('de')}
            >
              {currentLang.de}
            </a>
          </Link>
          <Link href={router.pathname} locale="it">
            <a
              className={`flex flex-row justify-start rounded-lg py-2 px-4 text-base font-medium text-cool-gray-80  hover:bg-gray-1 ${
                darkMode ? 'text-white' : 'text-cool-gray-80'
              }`}
              onClick={() => changeLang('it')}
            >
              {currentLang.it}
            </a>
          </Link>
          <Link href={router.pathname} locale="zh">
            <a
              className={`flex flex-row justify-start rounded-lg py-2 px-4 text-base font-medium text-cool-gray-80  hover:bg-gray-1 ${
                darkMode ? 'text-white' : 'text-cool-gray-80'
              }`}
              onClick={() => changeLang('zh')}
            >
              {currentLang.zh}
            </a>
          </Link>
          <Link href={router.pathname} locale="ru">
            <a
              className={`flex flex-row justify-start rounded-lg py-2 px-4 text-base font-medium text-cool-gray-80  hover:bg-gray-1 ${
                darkMode ? 'text-white' : 'text-cool-gray-80'
              }`}
              onClick={() => changeLang('ru')}
            >
              {currentLang.ru}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
