import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import RevealY from '../components/RevealY';
import DownloadComponent from '../shared/DownloadComponent';

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
            <span
              className="cursor-pointer underline hover:no-underline"
              onClick={() => {
                window.open('https://github.com/internxt', '_blank');
              }}
            >
              {GitHub}
            </span>

            {description[1]}
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center pt-6">
          <picture>
            <source srcSet="/images/home/Internxt-secure-cloud-storage.webp" type="image/webp" />
            <img
              src="/images/home/Internxt-secure-cloud-storage.webp"
              alt="Internxt secure cloud storage"
              width={757}
              draggable={false}
            />
          </picture>
        </div>
        <DownloadComponent textContent={textContent.DownloadLinks} lang={'en'} download={download} />
      </div>
    </section>
  );
};

export default ExploreOurOSS;
