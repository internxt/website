import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import Link from 'next/link';
interface ContentBlockSectionProps {
  textContent: any;
}

export const ContentBlockSection = ({ textContent }: ContentBlockSectionProps) => {
  return (
    <section className="flex items-center justify-between gap-6 bg-neutral-17 px-5 py-10 lg:px-10 lg:py-20 xl:p-32 3xl:px-80">
      <div
        className="flex flex-col items-center justify-between gap-10 rounded-16 p-4 lg:p-0 lg:py-10 lg:pl-10"
        style={{ background: 'linear-gradient(360deg, #E5EFFF 0%, #FFFFFF 100%' }}
      >
        <p className="flex items-center text-center text-30 font-bold leading-tight text-gray-100 lg:pr-10 lg:text-4xl">
          {textContent.title}
        </p>
        <div className="flex flex-row items-center justify-between gap-10">
          <div className="flex flex-col gap-6 lg:w-1/2 lg:gap-6">
            <p className="flex text-base font-normal leading-tight text-gray-55 lg:whitespace-pre-line lg:text-xl">
              {textContent.description}
            </p>
            <div className="flex flex-col gap-6 rounded-16 bg-white p-8">
              <p className="text-xl font-medium leading-tight text-gray-100">{textContent.card.title}</p>
              {textContent.card.description.map((feat) => (
                <p className="flex text-sm font-normal leading-tight text-gray-55 lg:text-lg">{feat}</p>
              ))}
              <Link
                href={'/drive'}
                className={`flex w-min whitespace-nowrap rounded-lg bg-primary px-5 py-3 text-base font-medium text-white hover:bg-primary-dark lg:text-lg`}
              >
                {textContent.card.cta}
              </Link>
            </div>
          </div>
          <Image
            loading="lazy"
            src={getImage(`/images/datacenters-and-certifications/datacenters.webp`)}
            draggable="false"
            alt={'Internxt data centers and certifications'}
            width={600}
            height={500}
            quality={100}
            className="hidden items-center justify-center lg:flex"
          />
        </div>
      </div>
    </section>
  );
};
