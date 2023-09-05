import Image from 'next/image';
import RevealX from '../components/RevealX';

const KitSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center justify-center space-y-20 py-20 px-5">
        <div className="flex max-w-[600px] flex-col items-center space-y-6 text-center">
          <p className="text-5xl font-semibold text-gray-100">{textContent.title}</p>
          <p className="font-gray-80 text-xl">{textContent.description}</p>
          <a href="/media-area-zip/Internxt-Full-Media-Kit.zip" download={true}>
            <p className="flex rounded-lg bg-primary px-5 py-3 text-white hover:bg-primary-dark">{textContent.cta}</p>
          </a>
        </div>
        <div className="flex flex-col items-center justify-center  gap-20 lg:flex-row">
          <RevealX direction="right">
            <Image
              height={520}
              width={496}
              src={'/images/media-area/internxt_cloud_icon.webp'}
              alt="internxt cloud icon"
            />
          </RevealX>
          <div className="flex max-w-[380px] flex-col items-center space-y-6 text-center lg:items-start lg:text-left">
            <p className="text-5xl font-semibold">{textContent.firstSection.title}</p>
            <p className="font-gray-80 text-xl">{textContent.firstSection.description}</p>
            <a href="/media-area/Internxt-Logo-Set.zip" download={true}>
              <p className="flex w-max rounded-lg bg-primary px-5 py-3 text-white hover:bg-primary-dark">
                {textContent.firstSection.cta}
              </p>
            </a>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center justify-center gap-20 lg:flex-row">
          <div className="flex max-w-[380px] flex-col items-center space-y-6 text-center lg:items-start lg:text-left">
            <p className="text-5xl font-semibold">{textContent.secondSection.title}</p>
            <p className="font-gray-80 text-xl">{textContent.secondSection.description}</p>
            <a href="/media-area/Internxt-Screenshots-Mockups.zip" download={true}>
              <p className="flex w-max rounded-lg bg-primary px-5 py-3 text-white hover:bg-primary-dark">
                {textContent.secondSection.cta}
              </p>
            </a>
          </div>
          <RevealX direction="left">
            <Image
              height={520}
              width={496}
              src="/images/affiliates/internxt-private-cloud-storage-service.webp"
              alt="internxt private cloud storage service"
            />
          </RevealX>
        </div>
        <p className="max-w-[976px] text-center text-xl text-gray-50">
          <span className="font-semibold">{textContent.footer.boldText}</span> {textContent.footer.normalText}
        </p>
      </div>
    </section>
  );
};

export default KitSection;
