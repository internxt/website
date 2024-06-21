import Image from 'next/image';

import { getImage } from '@/lib/getImage';
import Button from '../shared/Button';

export const ChooseStorageSizeSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden bg-gray-1 py-20 px-5">
      <div className="flex flex-col-reverse items-center justify-center gap-20 lg:flex-row">
        <div className="flex">
          <Image
            src={getImage('/images/freeuser/Internxt_storage.webp')}
            loading="lazy"
            width={496}
            height={520}
            alt="Internxt Drive"
            className="rounded-[32px]"
            draggable={false}
          />
        </div>
        <div className="flex max-w-[540px] flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-5xl font-semibold text-gray-100">{textContent.title}</h2>
            <p className="text-xl text-gray-80">{textContent.description}</p>
            <p className="text-xl font-semibold text-gray-80">{textContent.peaceOfMind}</p>
          </div>
          <Button
            text={textContent.cta}
            onClick={() => {
              window.location.hash = '#priceTable';
            }}
          />
        </div>
      </div>
    </section>
  );
};
