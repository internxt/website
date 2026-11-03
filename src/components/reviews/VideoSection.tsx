import { ReviewsTextPage } from '@/assets/types/reviews';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';

interface VideoSectionProps {
  textContent: ReviewsTextPage['videoSection'];
}

const VideotSection = ({ textContent }: Readonly<VideoSectionProps>): JSX.Element => {
  return (
    <section
      className={`flex h-min w-full flex-col-reverse items-center justify-center gap-8 bg-neutral-17 px-6 py-10 lg:flex-row lg:gap-16 lg:p-20`}
    >
      <div className="absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 lg:left-32 lg:right-32"></div>

      <div className="flex h-min w-full flex-col gap-6 rounded-xl bg-white px-6 py-10 lg:w-1/2 lg:rounded-16 lg:p-8">
        <div className="flex h-min w-full flex-row gap-4">
          <div className="relative h-12 w-10 flex-shrink-0">
            <Image
              src={getImage('/images/reviews/cloudwars.png')}
              alt="Cloudwards Logo"
              fill
              className="object-contain"
              quality={100}
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold text-gray-95 lg:text-xl">{textContent.company}</p>
            <p className="text-sm font-normal leading-tight text-gray-55 lg:text-base">{textContent.description}</p>
          </div>
        </div>

        <div className="left-8 right-8 top-0 h-[1px] bg-neutral-35 lg:left-32 lg:right-32"></div>

        <div className="relative h-0 w-full overflow-hidden rounded-md" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute left-0 top-0 h-full w-full"
            src={'https://www.youtube.com/embed/MLC4wdt56_Q'}
            title="Cloudwards Youtube Video Review"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideotSection;
