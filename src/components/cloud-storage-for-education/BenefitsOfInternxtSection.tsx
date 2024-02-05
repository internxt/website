import Image from 'next/legacy/image';
import RenderDescription from '../shared/RenderDescription';
import { ClockCounterClockwise, GlobeHemisphereWest, PaperPlaneTilt } from '@phosphor-icons/react';

const CardText = ({ textContent }) => (
  <div className="flex max-w-[388px] flex-col space-y-6">
    <textContent.icon size={64} className="text-primary" />
    <h3 className="text-5xl font-semibold leading-tight text-gray-100">{textContent.title}</h3>
    <p className="text-xl text-gray-80">{textContent.description}</p>
  </div>
);

const BenefitsOfInternxtSection = ({ textContent }) => {
  const cards = {
    workFromAnywhere: {
      icon: GlobeHemisphereWest,
      title: textContent.cards.workFromAnywhere.title,
      description: textContent.cards.workFromAnywhere.description,
    },
    sendFiles: {
      icon: PaperPlaneTilt,
      title: textContent.cards.sendFiles.title,
      description: textContent.cards.sendFiles.description,
    },
    secureBackup: {
      icon: ClockCounterClockwise,
      title: textContent.cards.secureBackup.title,
      description: textContent.cards.secureBackup.description,
    },
  };
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center space-y-20 py-20 px-5">
        {/* First Section */}
        <div className="flex flex-col items-center space-y-12">
          <div className="flex max-w-[774px] flex-col space-y-6 text-center">
            <h2 className="max-w-[730px] text-5xl font-semibold leading-tight text-gray-100">{textContent.title}</h2>
            <p className="text-2xl font-semibold text-gray-80">{textContent.subtitle}</p>
            <RenderDescription fontSize="text-xl" description={textContent.paragraph} />
          </div>
          <button
            onClick={() => {
              window.scrollTo({
                top: document.getElementById('discountCard')?.offsetTop,
                behavior: 'smooth',
              });
            }}
            className="flex w-max rounded-lg bg-primary px-5 py-3 text-lg font-medium text-white hover:bg-primary-dark"
          >
            {textContent.cta}
          </button>
        </div>
        {/* Cards */}
        {/* Work from anywhere */}
        <div className="flex flex-col-reverse items-center justify-center gap-10 lg:flex-row lg:gap-[88px]">
          <div className="flex flex-col">
            <Image
              src="/images/cloud-storage-for-education/file_sharing_for_universities.webp"
              alt="File Sharing for Universities"
              width={496}
              height={520}
              draggable={false}
            />
          </div>
          <CardText textContent={cards.workFromAnywhere} />
        </div>
        {/* Send files */}
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-[88px]">
          <CardText textContent={cards.sendFiles} />
          <div className="flex flex-col">
            <Image
              src="/images/cloud-storage-for-education/cloud_storage_for_education.webp"
              alt="Cloud Storage for Education"
              width={496}
              height={520}
              draggable={false}
            />
          </div>
        </div>
        {/* Secure backup */}
        <div className="flex flex-col-reverse items-center justify-center gap-10 lg:flex-row lg:gap-[88px]">
          <div className="flex flex-col">
            <Image
              src="/images/cloud-storage-for-education/cloud_storage_for_schools.webp"
              alt="Cloud Storage for Schools"
              width={496}
              height={520}
              draggable={false}
            />
          </div>
          <CardText textContent={cards.secureBackup} />
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfInternxtSection;
