import React from 'react';
import { Parallax } from 'react-parallax';
import { Transition } from '@headlessui/react';
import * as anim from '../../public/js/anim';

const NgoCard = ({ id, name, short, description, url }) => {
  // Constant to avoid unnecessary re-renders
  const showTrigger = [];
  const setShowTrigger = () => {
    showTrigger.push(null);
  };

  return (
    <Parallax
      className="relative flex flex-col w-full transition-all duration-250 ease-in-out hover:shadow-subtle"
      renderLayer={(percentage) => (
        <Transition
          show={showTrigger.length > 1 || anim.trigger(percentage)}
          enter="transition-all duration-350"
          enterFrom="opacity-0 transform translate-y-10 scale-99"
          enterTo="opacity-100 transform translate-y-0 scale-100"
        >
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col w-full p-8 space-y-5 rounded-xl bg-white"
          >
            {/* Make animation only happen first time is scrolled */}
            {showTrigger.length <= 1 && percentage > 0 && setShowTrigger()}

            {/* Logo */}
            <div className="relative w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-gray-10">
              <img
                src={`./logos/ngos/${id}.webp`}
                draggable="false"
                className="absolute w-full h-full bg-white overflow-hidden"
                alt={`${name} logo`}
              />
            </div>

            {/* Acronym and Name */}
            <div className={`flex flex-col ${short && 'space-y-0.5'}`}>
              {short && <p className="text-gray-50 font-medium">{short}</p>}
              <p className="text-3xl font-medium">{name}</p>
            </div>

            {/* Separator */}
            <div className="w-full h-px bg-gray-10" />

            {/* Description */}
            <p className="text-gray-80">{description}</p>
          </a>
        </Transition>
      )}
    />
  );
};

export default NgoCard;
