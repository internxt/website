import React, { forwardRef, ReactNode, useEffect } from 'react';
import { CaretDown, Globe } from 'phosphor-react';
import { Menu, Transition } from '@headlessui/react';
import { Card } from 'react-bootstrap';
import { useRouter } from 'next/router';

const MenuItem = forwardRef(
  (
    { children, lang, setCurrentLangText }: { children: ReactNode; lang: string; setCurrentLangText: (string) => void },
    ref,
  ) => {
    const router = useRouter();
    return (
      <div
        className={
          'flex h-full w-full cursor-pointer py-2 px-3 text-gray-80 hover:bg-primary hover:bg-opacity-20 active:bg-gray-10'
        }
        onClick={() => {
          setCurrentLangText(lang.toUpperCase());
          router.push(router.pathname, router.pathname, { locale: lang });
        }}
      >
        <p>{children}</p>
      </div>
    );
  },
);

function LangDropdown({ menuItems }: { menuItems: ReactNode[] }) {
  return (
    <Menu>
      <Menu.Button
        className={
          'flex items-center justify-end space-x-1 bg-transparent py-1.5 text-base font-normal text-gray-80 shadow-none transition-all duration-75 ease-in-out'
        }
      >
        <Globe size={24} />
        <CaretDown size={16} />
      </Menu.Button>
      <Transition
        className={'absolute left-0 w-52 max-w-[100px]'}
        enter="transform transition duration-50 ease-out"
        enterFrom="scale-120 opacity-0"
        enterTo="scale-100 opacity-100"
        leave="transform transition duration-50 ease-out"
        leaveFrom="scale-98 opacity-100"
        leaveTo="scale-100 opacity-0"
      >
        <Menu.Items className={'flex w-full rounded-md bg-white py-1.5 drop-shadow'}>
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

export default function LanguageBox(): JSX.Element {
  const [currentLangText, setCurrentLangText] = React.useState<string>('EN');

  useEffect(() => {
    //Get the language from navigator
    const deviceLanguage = navigator.language;
    //Set the language text
    setCurrentLangText(deviceLanguage.split('-')[0].toUpperCase());
  }, []);

  return (
    <section className="flex bg-transparent" title={currentLangText}>
      <Card>
        <div className="relative">
          <LangDropdown
            menuItems={[
              <MenuItem lang="en" setCurrentLangText={setCurrentLangText} key={'en'}>
                EN
              </MenuItem>,
              <MenuItem lang="es" setCurrentLangText={setCurrentLangText} key={'es'}>
                ES
              </MenuItem>,
              <MenuItem lang="fr" setCurrentLangText={setCurrentLangText} key={'fr'}>
                FR
              </MenuItem>,
            ]}
          />
        </div>
      </Card>
    </section>
  );
}
