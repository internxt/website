import DownloadComponent from '@/components/shared/DownloadComponent';
import { getImage } from '@/lib/getImage';

const ExploreOurOSS = ({ textContent, download }) => {
  const description = textContent.description.split('GitHub');
  const GitHub = textContent.description.substr(textContent.description.indexOf('GitHub') - 0, 6);

  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center justify-center space-y-16 py-20 px-5">
        <div className="flex max-w-[914px] flex-col space-y-6 text-center">
          <p className="text-5xl font-semibold text-gray-100">{textContent.title}</p>
          <div className="text-xl text-gray-80">
            {description[0]}
            <button
              className="cursor-pointer underline hover:no-underline"
              onClick={() => {
                window.open('https://github.com/internxt', '_blank', 'noopener noreferrer');
              }}
            >
              {GitHub}
            </button>

            {description[1]}
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center pt-6">
          <img
            src={getImage('/images/home/internxt_secure_cloud_storage.webp')}
            alt="Internxt secure cloud storage"
            width={757}
            draggable={false}
          />
        </div>
        <DownloadComponent textContent={textContent.DownloadLinks} lang={'en'} download={download} />
      </div>
    </section>
  );
};

export default ExploreOurOSS;
