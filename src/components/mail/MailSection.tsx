import { getImage } from '@/lib/getImage';
import Image from 'next/image';

interface MailSectionProps {
  textContent: {
    title: string;
    description: string[];
  };
}

const MailSection = ({ textContent }: MailSectionProps): JSX.Element => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-8 px-5 pb-20 lg:gap-16 lg:px-10 lg:py-20 lg:pt-15 xl:px-32 3xl:px-80">
      <h2 className="text-3xl font-bold text-gray-100 lg:text-6xl">{textContent.title}</h2>

      <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:translate-x-30">
        <div className="hidden w-full lg:flex lg:w-1/2">
          <Image
            src={getImage('/images/mail/computer.webp')}
            alt="Internxt Drive panel interface"
            height={544}
            width={322}
            quality={200}
            className="h-auto w-full"
          />
        </div>

        <div className="flex w-full flex-col gap-4 lg:w-1/3">
          {textContent.description.map((desc, index) => (
            <p key={index} className="text-sm text-center font-normal leading-tight text-gray-55 lg:text-lg lg:text-left lg:pr-40">
              {desc}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MailSection;
