import { useRouter } from 'next/router';
import { CaretDown, Globe } from '@phosphor-icons/react';
import Link from 'next/link';
import { useState } from 'react';
import cookies from '@/lib/cookies';

const currentLang = {
  es: 'Español (ES)',
  fr: 'Français (FR)',
  de: 'Deutsch (DE)',
  en: 'English (EN)',
  it: 'Italiano (IT)',
  zh: '中国 (ZH)',
  ru: 'Русский (RU)',
  'zh-tw': 'Taiwan (TW)',
};

const selectedLang = {
  es: 'ES',
  fr: 'FR',
  de: 'DE',
  en: 'EN',
  it: 'IT',
  zh: 'ZH',
  ru: 'RU',
  'zh-tw': 'TW',
};

export default function LanguageBox({ darkMode, singlesDay }) {
  const router = useRouter();

  const [currentLangText, setCurrentLangText] = useState<string>(selectedLang[router.locale as string]);

  function changeLang(lang: string) {
    cookies.setCookie({ cookieName: 'i18next', cookieValue: lang });
    setCurrentLangText(selectedLang[lang]);
  }

  return (
    <div
      className={`group relative flex cursor-default space-x-1 rounded-lg py-1.5 px-4 pr-2 font-medium transition duration-150 ease-in-out`}
    >
      <Globe size={24} className={darkMode ? 'text-white' : 'text-gray-60'} />
      <p className={darkMode ? 'text-white' : 'text-gray-60'}>{currentLangText}</p>
      <CaretDown
        size={20}
        className={`${darkMode ? 'text-white' : 'text-gray-40'} translate-y-px transition duration-150 ease-in-out`}
      />

      {/* Menu items */}
      <div className="pointer-events-none absolute top-full left-1/2 z-50 w-52 -translate-x-1/2 translate-y-0 rounded-xl border border-black border-opacity-5 bg-white p-1.5 opacity-0 shadow-subtle transition duration-150 ease-in-out group-hover:pointer-events-auto group-hover:translate-y-1 group-hover:opacity-100">
        <div className="absolute -top-4 left-1/2 h-4 w-4/5 -translate-x-1/2" />

        <div className="relative grid gap-0 whitespace-nowrap lg:grid-cols-1">
         
           {singlesDay ? (
        <>
          <Link
            href={router.pathname}
            locale="en"
            className="flex flex-row justify-start rounded-lg py-2 px-4 text-base font-medium text-cool-gray-80 hover:bg-gray-1"
            onClick={() => changeLang('en')}
          >
            {currentLang.en}
          </Link>
          <Link
            href={router.pathname}
            locale="zh"
            className="flex flex-row justify-start rounded-lg py-2 px-4 text-base font-medium text-cool-gray-80 hover:bg-gray-1"
            onClick={() => changeLang('zh')}
          >
            {currentLang.zh}
          </Link>
          <Link
            href={router.pathname}
            locale="zh-tw"
            className="flex flex-row justify-start rounded-lg py-2 px-4 text-base font-medium text-cool-gray-80 hover:bg-gray-1"
            onClick={() => changeLang('zh-tw')}
          >
            {currentLang['zh-tw']}
          </Link>
        </>
      ) : (
        <>
          <Link
            href={router.pathname}
            locale="en"
            className="flex flex-row justify-start rounded-lg py-2 px-4 text-base font-medium text-cool-gray-80 hover:bg-gray-1"
            onClick={() => changeLang('en')}
          >
            {currentLang.en}
          </Link>
          <Link
            href={router.pathname}
            locale="es"
            className="flex flex-row justify-start rounded-lg py-2 px-4 text-base font-medium text-cool-gray-80 hover:bg-gray-1"
            onClick={() => changeLang('es')}
          >
            {currentLang.es}
          </Link>
          <Link
            href={router.pathname}
            locale="fr"
            className="flex flex-row justify-start rounded-lg py-2 px-4 text-base font-medium text-cool-gray-80 hover:bg-gray-1"
            onClick={() => changeLang('fr')}
          >
            {currentLang.fr}
          </Link>
          <Link
            href={router.pathname}
            locale="de"
            className="flex flex-row justify-start rounded-lg py-2 px-4 text-base font-medium text-cool-gray-80 hover:bg-gray-1"
            onClick={() => changeLang('de')}
          >
            {currentLang.de}
          </Link>
          <Link
            href={router.pathname}
            locale="it"
            className="flex flex-row justify-start rounded-lg py-2 px-4 text-base font-medium text-cool-gray-80 hover:bg-gray-1"
            onClick={() => changeLang('it')}
          >
            {currentLang.it}
          </Link>
          <Link
            href={router.pathname}
            locale="zh"
            className="flex flex-row justify-start rounded-lg py-2 px-4 text-base font-medium text-cool-gray-80 hover:bg-gray-1"
            onClick={() => changeLang('zh')}
          >
            {currentLang.zh}
          </Link>
          <Link
            href={router.pathname}
            locale="ru"
            className="flex flex-row justify-start rounded-lg py-2 px-4 text-base font-medium text-cool-gray-80 hover:bg-gray-1"
            onClick={() => changeLang('ru')}
          >
            {currentLang.ru}
          </Link>
          <Link
            href={router.pathname}
            locale="zh-tw"
            className="flex flex-row justify-start rounded-lg py-2 px-4 text-base font-medium text-cool-gray-80 hover:bg-gray-1"
            onClick={() => changeLang('zh-tw')}
          >
            {currentLang['zh-tw']}
          </Link>
        </>
      )}
    </div>
      </div>
    </div>
  );
}
