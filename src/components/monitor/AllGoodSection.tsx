'use client';

import { CheckCircle, Smiley } from '@phosphor-icons/react/dist/ssr';

export const AllGoodSection = ({ textContent }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 pb-10 pt-10">
      <Smiley className="text-green" height={64} width={64} />
      <p className="text-3xl font-semibold text-gray-100">{textContent.title}</p>
      <div className="my-4 flex items-center justify-center rounded-md bg-green8 px-5 py-2">
        <CheckCircle height={24} width={24} weight="fill" className="text-green" />

        <p className="font-regular ml-2 text-base text-gray-100">{textContent.description}</p>
      </div>
      <p className="font-regular text-base text-gray-100">{textContent.StaySecure}</p>
    </div>
  );
};
