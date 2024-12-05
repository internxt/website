import Link from 'next/link';
import { CaretDown } from '@phosphor-icons/react';
import { NavigationBarText } from '@/assets/types/layout/types';

interface NavigationLinkProps {
  href: string;
  text: string;
  isActive: boolean;
  isDarkMode: boolean;
  lang: string;
}

interface DropdownMenuItem {
  href: string;
  text: string;
}

interface DropdownMenuProps {
  label: string;
  items: DropdownMenuItem[];
  darkMode: boolean;
  lang: string;
}

interface ItemsNavigationProps {
  lang: string;
  darkMode: boolean;
  shouldHideItems: boolean;
  getTitles: {
    links: {
      pricing: string;
      about: string;
      business: string;
    };
  };
  textContent: NavigationBarText;
  router: {
    pathname: string;
  };
}

const getLinkClasses = (isDarkMode: boolean, isActive: boolean) => {
  const baseClasses = 'whitespace-nowrap px-4 py-1.5 text-base font-medium transition duration-150 ease-in-out';
  const darkModeClasses = isDarkMode ? 'text-white hover:text-gray-20' : 'text-gray-60 hover:text-primary';

  return `${baseClasses} ${isActive ? 'text-primary' : darkModeClasses}`;
};

const NavigationLink = ({ href, text, isActive, isDarkMode, lang }: NavigationLinkProps) => (
  <Link href={href} locale={lang} className={getLinkClasses(isDarkMode, isActive)}>
    {text}
  </Link>
);

const DropdownMenu = ({ label, items, darkMode, lang }: DropdownMenuProps) => {
  const menuClasses = darkMode
    ? 'text-white hover:bg-white hover:bg-opacity-10 hover:text-cool-gray-20'
    : 'text-gray-60 hover:bg-gray-100 hover:bg-opacity-5 hover:text-primary';

  const dropdownBgClasses = darkMode ? 'hover:bg-gray-10' : 'hover:bg-gray-5';

  return (
    <div
      className={`group relative flex cursor-default space-x-1 rounded-lg px-4 py-1.5 pr-2 font-medium transition duration-150 ease-in-out ${menuClasses}`}
    >
      <span>{label}</span>
      <CaretDown
        size={20}
        className="translate-y-px text-gray-40 transition duration-150 ease-in-out group-hover:text-cool-gray-30"
      />
      <div className="pointer-events-none absolute left-1/2 top-full z-50 w-52 -translate-x-1/2 translate-y-0 rounded-xl border border-black border-opacity-5 bg-white p-1.5 opacity-0 shadow-subtle transition duration-150 ease-in-out group-hover:pointer-events-auto group-hover:translate-y-1 group-hover:opacity-100">
        <div className="absolute -top-4 left-1/2 h-4 w-4/5 -translate-x-1/2" />
        <div className="relative grid gap-0 whitespace-nowrap lg:grid-cols-1">
          {items.map(({ href, text }) => (
            <Link
              key={text}
              href={href}
              locale={lang}
              className={`flex flex-row justify-start rounded-lg px-4 py-2 text-base font-medium text-cool-gray-80 ${dropdownBgClasses}`}
            >
              {text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ItemsNavigation = ({
  lang,
  darkMode,
  shouldHideItems,
  getTitles,
  textContent,
  router,
}: ItemsNavigationProps) => {
  if (shouldHideItems) return null;

  const currentPath = router.pathname.split('/')[1];

  return (
    <div className="links">
      <div className="hidden space-x-2 lg:inline-flex">
        <NavigationLink
          href="/pricing"
          text={textContent.links.pricing}
          isActive={currentPath === getTitles.links.pricing.trim().toLowerCase()}
          isDarkMode={darkMode}
          lang={lang}
        />
        <DropdownMenu
          label={textContent.links.products}
          items={[
            { href: '/drive', text: textContent.products.drive },
            { href: '/cloud-object-storage', text: textContent.products.s3 },
            { href: 'https://send.internxt.com', text: textContent.products.send },
            { href: '/vpn', text: textContent.products.vpn },
          ]}
          darkMode={darkMode}
          lang={lang}
        />
        <NavigationLink
          href="/business"
          text={textContent.links.business}
          isActive={currentPath === getTitles.links.business.trim().toLowerCase()}
          isDarkMode={darkMode}
          lang={lang}
        />
        <DropdownMenu
          label={textContent.links.ourValues}
          items={[
            { href: '/privacy', text: textContent.ourValues.privacy },
            { href: '/open-source', text: textContent.ourValues.openSource },
          ]}
          darkMode={darkMode}
          lang={lang}
        />
        <NavigationLink
          href="/about"
          text={textContent.links.about}
          isActive={currentPath === getTitles.links.about.split(' ')[0].toLowerCase()}
          isDarkMode={darkMode}
          lang={lang}
        />
      </div>
    </div>
  );
};
