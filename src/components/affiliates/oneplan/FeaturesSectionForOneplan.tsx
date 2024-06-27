import { getImage } from '@/lib/getImage';
import Image from 'next/image';

export const FeaturesSectionForOnePlan = ({ textContent }) => {
  const handleOnButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className="overflow-hidden border-t border-t-gray-5 py-20 px-5">
      <div className="flex flex-col items-center justify-center gap-12">
        <div className="flex max-w-[775px] flex-col items-center gap-8 text-center">
          <h2 className="max-w-[590px] text-5xl font-semibold text-gray-100">{textContent.title}</h2>
          {textContent.description.map((text) => (
            <p className="text-xl text-gray-80">{text}</p>
          ))}
          <button
            className="flex rounded-lg bg-primary px-5 py-3 text-white hover:bg-primary-dark"
            onClick={handleOnButtonClick}
          >
            <p className="text-xl font-medium">{textContent.cta}</p>
          </button>
        </div>
        <div className="content flex h-full w-full flex-col items-center pt-6">
          <Image
            src={getImage('/images/home/internxt_secure_cloud_storage.webp')}
            alt="Internxt secure cloud storage"
            width={745}
            height={411}
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};
