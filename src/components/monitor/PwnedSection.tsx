'use client';

import { ArrowCircleDown, SmileyMeh, WarningCircle } from '@phosphor-icons/react';
import { CheckCircle, Smiley } from '@phosphor-icons/react/dist/ssr';
import { PwnedElement } from './PwnedElement';

export const PwnedSection = ({ textContent }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 px-5 pt-10">
      <SmileyMeh className="text-red" height={64} width={64} />
      <p className="text-3xl font-semibold text-gray-100">{textContent.title}</p>
      <div className="my-4 flex items-center justify-center rounded-md bg-red8 px-10 py-2 text-center">
        <WarningCircle className="h-12 w-12 text-red md:h-6 md:w-6" weight="fill" />

        <p className="font-regular ml-2 text-base text-gray-100">{textContent.description}</p>
      </div>
      <p className="font-regular px-5 text-center text-base text-gray-100">{textContent.recomendation}</p>

      <ArrowCircleDown className="mb-10 mt-10 h-10 w-10 animate-bounce text-primary md:h-8 md:w-8" />
      <div className="flex w-full max-w-none flex-col items-center justify-center space-y-8 bg-gray-1 pt-20 text-center">
        <p className="text-5xl font-semibold text-gray-100">{textContent.breachesSection.title}</p>
        <p className="mx-auto max-w-[914px] text-center text-xl font-bold text-gray-80">
          {textContent.breachesSection.description}
        </p>
        <div className="font-regular mx-auto flex max-w-[914px] flex-wrap justify-center text-center text-xl text-gray-80">
          <a href="/password-generator" target="_blank" className="underline hover:text-gray-100 hover:underline">
            {textContent.breachesSection.linkToPasswordGenerator.linkText}
          </a>
          <p className="ml-2">{textContent.breachesSection.linkToPasswordGenerator.otherText}</p>
        </div>
        <PwnedElement />
        <PwnedElement />
      </div>
    </div>
  );
};
