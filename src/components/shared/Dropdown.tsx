import { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { CaretDown, CaretUp } from '@phosphor-icons/react';

const Dropdown = ({
  buttonTitle,
  children,
  className,
}: {
  buttonTitle: string;
  children: React.ReactNode;
  className: string;
}): JSX.Element => {
  const [open, setOpen] = useState(false);
  return (
    <Menu>
      <Menu.Button
        onClick={() => {
          setOpen(!open);
        }}
        className={`flex h-full w-full items-center justify-between rounded-lg text-base ${className} transition-all duration-75 ease-in-out`}
      >
        {buttonTitle}
        {open ? <CaretUp size={20} /> : <CaretDown size={20} />}
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
