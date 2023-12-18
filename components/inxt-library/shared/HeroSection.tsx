import Image from 'next/image';
import DownloadEbook from '../components/DownloadEbook';

const HeroSection = ({ textContent, imageUrl, altImage, templateId, eBook, setBannerVisible }) => {
  return (
    <section id="download-ebook" className="overflow-hidden px-5 pt-14">
      <div className="lg:mx-10 xl:mx-32">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center space-y-6 py-20 lg:flex-row lg:justify-between lg:space-y-0">
          <DownloadEbook
            textContent={textContent}
            bookUrl={eBook}
            templateId={templateId}
            setBannerVisible={setBannerVisible}
          />

          <div className="flex flex-col">
            <Image src={imageUrl} alt={altImage} width={516} height={530} draggable={false} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
