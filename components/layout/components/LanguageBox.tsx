import React, { forwardRef, ReactNode, useEffect } from 'react';
import { CaretDown } from 'phosphor-react';
import { Menu, Transition } from '@headlessui/react';
import es from 'dayjs/locale/es';
import fr from 'dayjs/locale/fr';
import dayjs from 'dayjs';
import { Card } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Language(): JSX.Element {
  const [currentLangText, setCurrentLangText] = React.useState<string>('EN');
  const router = useRouter();

  useEffect(() => {
    //Get the language from navigator
    const deviceLanguage = navigator.language;
    //Set the language text
    setCurrentLangText(deviceLanguage.split('-')[0].toUpperCase());
  }, []);

  const MenuItem = forwardRef(({ children, lang }: { children: ReactNode; lang: string }, ref) => {
    return (
      <div
        className={'flex h-full w-full cursor-pointer py-2 px-3 text-gray-80 hover:bg-gray-5 active:bg-gray-10'}
        onClick={() => {
          setCurrentLangText(lang.toUpperCase());
          router.push(router.pathname, router.pathname, { locale: lang });
        }}
      >
        <p>{children}</p>
      </div>
    );
  });

  function LangDropdown({ title, menuItems }: { title: JSX.Element; menuItems: ReactNode[] }) {
    return (
      <Menu>
        <Menu.Button
          className={
            'flex h-full w-full items-center justify-center rounded-lg bg-white px-5 py-3 text-base font-normal text-gray-80 drop-shadow transition-all duration-75 ease-in-out'
          }
        >
          {title}
        </Menu.Button>
        <Transition
          className={'left-0'}
          enter="transform transition duration-50 ease-out"
          enterFrom="scale-98 opacity-0"
          enterTo="scale-100 opacity-100"
          leave="transform transition duration-50 ease-out"
          leaveFrom="scale-98 opacity-100"
          leaveTo="scale-100 opacity-0"
        >
          <Menu.Items className={'mt-2 w-full rounded-md bg-white py-1.5 drop-shadow'}>
            {menuItems && (
              <div className="border-translate w-full border-gray-10">
                {menuItems?.map((item, index) => (
                  <div className={'pt-2'} key={'menuitem-' + index}>
                    <Menu.Item>{item}</Menu.Item>
                  </div>
                ))}
              </div>
            )}
          </Menu.Items>
        </Transition>
      </Menu>
    );
  }

  return (
    <section className="absolute" title={currentLangText}>
      <Card>
        <LangDropdown
          title={
            <div className="flex w-full flex-row justify-between space-x-4">
              <p>{currentLangText}</p>
              <CaretDown size={20} />
            </div>
          }
          menuItems={[
            <MenuItem lang="en">
              <p>EN</p>
            </MenuItem>,
            <MenuItem lang="es">
              <p>ES</p>
            </MenuItem>,
            <MenuItem lang="fr">
              <p>FR</p>
            </MenuItem>,
          ]}
        />
      </Card>
    </section>
  );
}
