import { getImage } from '@/lib/getImage';
import Image from 'next/image';

export const DevicesSection = ({ textContent }) => {
  const handleOnButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section
      className="overflow-hidden bg-cover bg-center bg-no-repeat py-20 px-5"
      style={{
        backgroundImage: `url('${getImage('/images/lifetime/celebration/normal-bg.png')}')`,
      }}
    >
      <div className="flex flex-col items-center justify-center gap-12">
        <div className="flex max-w-[840px] flex-col items-center gap-8">
          <h2 className="text-5xl font-semibold text-white">{textContent.title}</h2>
          <button className="flex rounded-lg bg-white px-5 py-3 text-gray-100" onClick={handleOnButtonClick}>
            <p>{textContent.cta}</p>
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
