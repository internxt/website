import React from 'react';
import { Parallax } from 'react-parallax';
import { Transition } from '@headlessui/react';
import * as anim from '../../public/js/anim';

const NgoCard = ({ id, name, short, description }) => {
  // Constant to avoid unnecessary re-renders
  const showTrigger = [];
  const setShowTrigger = () => {
    showTrigger.push(null);
  };

  return (
    <Parallax
      className="duration-250 relative flex w-full select-none flex-col transition-all ease-in-out hover:shadow-subtle"
      renderLayer={(percentage) => (
        <Transition
          show={showTrigger.length > 1 || anim.trigger(percentage)}
          enter="transition-all duration-350"
          enterFrom="opacity-0 translate-y-10 scale-99"
          enterTo="opacity-100 translate-y-0 scale-100"
        >
          <div className="flex w-full flex-col space-y-5 rounded-xl bg-white p-8">
            {/* Make animation only happen first time is scrolled */}
            {showTrigger.length <= 1 && percentage > 0 && setShowTrigger()}

            {/* Logo */}
            <div className="relative h-10 w-10 rounded-xl bg-gray-10 sm:h-12 sm:w-12">
              <img
                src={`/logos/ngos/${id}.webp`}
                draggable="false"
                className="absolute h-full w-full overflow-hidden bg-white"
                alt={`${name} logo`}
              />
            </div>

            {/* Acronym and Name */}
            <div className={`flex flex-col ${short && 'space-y-0.5'}`}>
              {short && <p className="font-medium text-gray-50">{short}</p>}
              <p className="text-3xl font-medium">{name}</p>
            </div>

            {/* Separator */}
            <div className="h-px w-full bg-gray-10" />

            {/* Description */}
            <p className="text-gray-80">{description}</p>
          </div>
        </Transition>
      )}
    />
  );
};

export default NgoCard;
