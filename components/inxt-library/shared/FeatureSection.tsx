import { FileArrowDown } from '@phosphor-icons/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const FeatureSection = ({ textContent, urlImage, altImage }) => {
  const router = useRouter();
  return (
    <section className="overflow-hidden py-20 px-5">
      <div className="flex flex-col items-center justify-center space-y-16">
        <div className="flex flex-col items-center justify-center space-y-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex w-max flex-row items-center space-x-3 rounded-lg bg-gray-5 py-2 px-4">
              <FileArrowDown className="text-primary" size={32} />
              <p className="text-xl font-medium text-gray-80">{textContent.label}</p>
            </div>
            <p className="text-5xl font-semibold text-gray-100">{textContent.title}</p>
            <p className="max-w-[774px] text-lg text-gray-80">{textContent.subtitle}</p>
          </div>
          <button
            onClick={() => {
              router.push('#download-ebook');
            }}
            className="flex rounded-lg bg-primary px-5 py-3 text-lg font-medium text-white"
          >
            {textContent.cta}
          </button>
        </div>
        <div className="flex flex-col">
          <Image src={urlImage} alt={altImage} width={730} height={506} draggable={false} />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
