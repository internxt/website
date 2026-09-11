import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import RenderDescription from '../shared/RenderDescription';
import Button from '../shared/Button';

export const FeatureSectionForSpecialOffer = ({ textContent }) => {
  return (
    <section className="overflow-hidden bg-gray-1 py-20 px-5">
      <div className="flex flex-col items-center gap-9">
        <div className="flex max-w-[774px] flex-col items-center gap-6 text-center">
          <h2 className="text-5xl font-semibold leading-tight text-gray-100">{textContent.title}</h2>
          <RenderDescription description={textContent.description} fontSize="text-xl" />
          <Button
            text={textContent.cta}
            onClick={() => {
              window.location.hash = '#priceTable';
            }}
          />
        </div>
        <div>
          <Image
            src={getImage('/images/home/internxt_secure_cloud_storage.webp')}
            width={745}
            height={411}
            alt="Internxt secure cloud storage"
          />
        </div>
      </div>
    </section>
  );
};
