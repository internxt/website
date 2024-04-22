import { KitCard } from './components/KitCard';

import downloadItem from '@/lib/downloadItem';

const KitSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center justify-center space-y-20 py-20 px-5">
        <div className="flex max-w-[914px] flex-col items-center space-y-6 text-center">
          <p className="text-5xl font-semibold text-gray-100">{textContent.title}</p>
          <p className="text-xl text-gray-80">{textContent.description}</p>
        </div>
        <div className="flex flex-row space-x-10">
          <KitCard
            downloadImagesLink={'/media-area/internxt-logo-set.zip'}
            image={'/images/media-area/inxt-logo-set.svg'}
            textContent={textContent.firstSection}
          />
          <KitCard
            downloadImagesLink={downloadItem('internxt-screenshots-mockups.zip')}
            image={'/images/media-area/screenshots-mockups.svg'}
            textContent={textContent.secondSection}
          />
        </div>
        <p className="max-w-[976px] text-center text-xl text-gray-50">
          <span className="font-semibold">{textContent.footer.boldText}</span> {textContent.footer.normalText}
        </p>
      </div>
    </section>
  );
};

export default KitSection;
