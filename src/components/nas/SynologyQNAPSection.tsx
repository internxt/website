import { NASPageText } from '@/assets/types/nas';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';

interface SynologyQNAPSectionProps {
  textContent: NASPageText['InternxtNASIntegrations'];
}

interface NASBoxProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  imageWidth: number;
  imageHeight: number;
}

function NASBox({ title, description, image, alt, imageWidth, imageHeight }: Readonly<NASBoxProps>) {
  return (
    <div className="flex w-full flex-col items-center gap-4 rounded-16 bg-white p-6 lg:w-1/2 lg:gap-10  lg:p-10">
      <div className="flex flex-col gap-4 lg:gap-6">
        <p className="text-30 font-semibold text-gray-95">{title}</p>
        <p className="text-base font-normal leading-tight text-gray-55">{description}</p>
      </div>
      <Image
        src={getImage(`/images/NAS/${image}.webp`)}
        height={imageHeight}
        width={imageWidth}
        quality={100}
        alt={alt}
      />
    </div>
  );
}

export default function SynologyQNAPSection({ textContent }: Readonly<SynologyQNAPSectionProps>): JSX.Element {
  return (
    <section
      className="flex h-min w-full flex-col items-center justify-center gap-8 overflow-hidden py-10 pb-10 lg:h-min lg:gap-16 lg:p-20"
      style={{ background: 'linear-gradient(360deg, #F4F8FF 0%, #FFFFFF 100%)' }}
    >
      <div className="absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 lg:bottom-0 lg:left-32 lg:right-32" />

      <div className="flex h-min flex-col justify-center gap-6 px-6 text-center lg:w-[850px]">
        <p className="text-30 font-bold leading-tight text-gray-95 lg:text-3xl">{textContent.title}</p>
        <p className="text-base font-normal leading-tight text-gray-55 lg:text-xl">{textContent.description}</p>
      </div>

      <div className="flex flex-col justify-center gap-4 px-6 lg:flex-row lg:gap-8">
        <NASBox
          title={textContent.synologyBox.title}
          description={textContent.synologyBox.description}
          image={textContent.synologyBox.image}
          alt="Synology Image"
          imageWidth={434}
          imageHeight={228}
        />
        <NASBox
          title={textContent.QNAPBox.title}
          description={textContent.QNAPBox.description}
          image={textContent.QNAPBox.image}
          alt="QNAP Image"
          imageWidth={503}
          imageHeight={204}
        />
      </div>
    </section>
  );
}
