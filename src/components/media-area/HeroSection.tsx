import { getImage } from '@/lib/getImage';

const HeroSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden pt-10">
      <div className="content flex flex-col items-center space-y-6 px-5 py-20">
        <div className="flex w-full flex-shrink-0 flex-col items-center justify-center text-center">
          <h1 className="mb-6 text-4xl font-semibold sm:text-5xl sm:leading-tight">{textContent.title}</h1>
          <h3 className="mb-6 w-full max-w-3xl text-xl font-normal text-gray-80">{textContent.description}</h3>
        </div>

        <div className="flex h-full w-full flex-col pt-6">
          <img
            src={getImage('/images/home/internxt_secure_cloud_storage.webp')}
            alt="Internxt secure cloud storage"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
