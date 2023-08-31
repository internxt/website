import Image from 'next/image';

const KitSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center justify-center space-y-20 py-20 px-5">
        <div className="flex max-w-[600px] flex-col items-center space-y-6 text-center">
          <p className="text-5xl font-semibold text-gray-100">{textContent.title}</p>
          <p className="font-gray-80 text-xl">{textContent.description}</p>
          <a href="/images/cyber-awareness/Internxt-Checklist.pdf" download={true}>
            <p className="flex rounded-lg bg-primary px-5 py-3 text-white hover:bg-primary-dark">{textContent.cta}</p>
          </a>
        </div>
        <div className="flex flex-col items-center justify-center  gap-20 lg:flex-row">
          <Image
            height={520}
            width={496}
            src={'/images/media-area/internxt-cloud-icon.png'}
            alt="internxt cloud icon"
          />
          <div className="flex max-w-[380px] flex-col space-y-6">
            <p className="text-5xl font-semibold">{textContent.firstSection.title}</p>
            <p className="font-gray-80 text-xl">{textContent.firstSection.description}</p>
            <a href="/images/cyber-awareness/Internxt-Checklist.pdf" download={true}>
              <p className="flex w-max rounded-lg bg-primary px-5 py-3 text-white hover:bg-primary-dark">
                {textContent.firstSection.cta}
              </p>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center  gap-20 lg:flex-row">
          <div className="flex max-w-[380px] flex-col space-y-6">
            <p className="text-5xl font-semibold">{textContent.secondSection.title}</p>
            <p className="font-gray-80 text-xl">{textContent.secondSection.description}</p>
            <a href="/images/cyber-awareness/Internxt-Checklist.pdf" download={true}>
              <p className="flex w-max rounded-lg bg-primary px-5 py-3 text-white hover:bg-primary-dark">
                {textContent.secondSection.cta}
              </p>
            </a>
          </div>
          <Image
            height={520}
            width={496}
            src={'/images/media-area/internxt-private-cloud-storage-service.png'}
            alt="internxt private cloud storage service"
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
