import Image from 'next/legacy/image';
import RevealX from '@/components/components/RevealX';
import Link from 'next/link';
import downloadItem from '@/lib/downloadItem';

const KitSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center justify-center space-y-20 py-20 px-5">
        <div className="flex max-w-[600px] flex-col items-center space-y-6 text-center">
          <p className="text-5xl font-semibold text-gray-100">{textContent.title}</p>
          <p className="font-gray-80 text-xl">{textContent.description}</p>
          <button
            className="flex w-max rounded-lg bg-primary px-5 py-3 text-white hover:bg-primary-dark"
            onClick={() => downloadItem('internxt-full-media-kit.zip')}
          >
            {textContent.cta}
          </button>
        </div>
        <div className="flex flex-col items-center justify-center  gap-20 lg:flex-row">
          <RevealX direction="right">
            <Image
              height={520}
              width={496}
              src={'/images/media-area/internxt_cloud_icon.webp'}
              alt="internxt cloud icon"
              draggable={false}
            />
          </RevealX>
          <div className="flex max-w-[380px] flex-col items-center space-y-6 text-center lg:items-start lg:text-left">
            <p className="text-5xl font-semibold">{textContent.firstSection.title}</p>
            <p className="font-gray-80 text-xl">{textContent.firstSection.description}</p>
            <Link href="/media-area/internxt-logo-set.zip" download={true}>
              <p className="flex w-max rounded-lg bg-primary px-5 py-3 text-white hover:bg-primary-dark">
                {textContent.firstSection.cta}
              </p>
            </Link>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center justify-center gap-20 lg:flex-row">
          <div className="flex max-w-[380px] flex-col items-center space-y-6 text-center lg:items-start lg:text-left">
            <p className="text-5xl font-semibold">{textContent.secondSection.title}</p>
            <p className="font-gray-80 text-xl">{textContent.secondSection.description}</p>
            <button
              className="flex w-max rounded-lg bg-primary px-5 py-3 text-white hover:bg-primary-dark"
              onClick={() => downloadItem('internxt-screenshots-mockups.zip')}
            >
              {textContent.secondSection.cta}
            </button>
          </div>
          <RevealX direction="left">
            <Image
              height={520}
              width={496}
              src="/images/affiliates/internxt-private-cloud-storage-service.webp"
              alt="internxt private cloud storage service"
              draggable={false}
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
