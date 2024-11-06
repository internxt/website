'use client';

import { ArrowCircleDown, SmileyMeh, WarningCircle } from '@phosphor-icons/react';
import { CheckCircle, Smiley } from '@phosphor-icons/react/dist/ssr';
import { PwnedElement } from './PwnedElement';

export const PwnedSection = ({ textContent }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 pt-10">
      <SmileyMeh className="text-red" height={64} width={64} />
      <p className="text-3xl font-semibold text-gray-100">{textContent.title}</p>
      <div className="my-4 flex items-center justify-center rounded-md bg-red8 px-5 py-2">
        <WarningCircle height={24} width={24} weight="fill" className="text-red" />
        <p className="font-regular ml-2 text-base text-gray-100">{textContent.description}</p>
      </div>
      <p className="font-regular text-base text-gray-100">{textContent.recomendation}</p>
      <ArrowCircleDown className="text-primary" height={26} width={26} />
      <div className="flex w-full max-w-none flex-col items-center justify-center space-y-8 bg-gray-1 pt-10">
        <p className="text-5xl font-semibold text-gray-100">{textContent.breachesSection.title}</p>
        <p className="mx-auto max-w-[914px] text-center text-xl font-bold text-gray-80">
          {textContent.breachesSection.description}
        </p>
        <div className="font-regular mx-auto inline-flex max-w-[914px] space-x-2 text-center text-xl text-gray-80">
          <a href="/password-generator" target="_blank" className="underline hover:text-gray-100 hover:underline">
            {textContent.breachesSection.linkToPasswordGenerator.linkText}
          </a>
          <p>{textContent.breachesSection.linkToPasswordGenerator.otherText}</p>
        </div>
        <PwnedElement />
        <PwnedElement />
      </div>
    </div>
  );
};
