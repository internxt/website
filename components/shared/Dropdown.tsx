import { Menu, Transition } from '@headlessui/react';

const Dropdown = ({ buttonTitle, children }: { buttonTitle: string; children: React.ReactNode }) => {
  return (
    <Menu>
      <Menu.Button className={'flex h-full w-full rounded-lg text-base transition-all duration-75 ease-in-out'}>
        {buttonTitle}
      </Menu.Button>
      <Transition
        className={'left-0'}
        enter="transition duration-50 ease-out"
        enterFrom="scale-98 opacity-0"
        enterTo="scale-100 opacity-100"
        leave="transition duration-50 ease-out"
        leaveFrom="scale-98 opacity-100"
        leaveTo="scale-100 opacity-0"
      >
        {children}
      </Transition>
    </Menu>
  );
};

export default Dropdown;
