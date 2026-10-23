import { getImage } from '@/lib/getImage';
import { DARK_MODE_ENABLED } from '@/theme.config';

const MakePrivacySection = ({ darkMode = DARK_MODE_ENABLED, textContent }) => {
  return (
    <section className="overflow-hidden ">
      <div
        className={`flex w-full flex-col items-center justify-center space-y-12 ${
          darkMode ? 'bg-gray-105' : 'bg-gray-1'
        } px-5 py-20`}
      >
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <h2 className={`text-5xl font-semibold ${darkMode ? 'text-white-95' : 'text-gray-100'}`}>
            {textContent.title}
          </h2>
          <p className={`max-w-[774px] text-xl ${darkMode ? 'text-cool-gray-30' : 'text-gray-80'}`}>
            {textContent.description}
          </p>
          <button className="flex w-full justify-center rounded-lg bg-primary px-5 py-3 font-medium text-white lg:w-max">
            {textContent.cta}
          </button>
        </div>
        <picture className="max-w-[774px]">
          <source srcSet={getImage('/images/home/internxt_secure_cloud_storage.webp')} type="image/webp" />
          <img
            src={getImage('/images/home/internxt_secure_cloud_storage.webp')}
            alt="Internxt secure cloud storage"
            draggable={false}
          />
        </picture>
      </div>
    </section>
  );
};

export default MakePrivacySection;
