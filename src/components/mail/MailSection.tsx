import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import { DARK_MODE_ENABLED } from '@/theme.config';

interface MailSectionProps {
  darkMode?: boolean;
  textContent: {
    title: string;
    description: string[];
  };
}

const MailSection = ({ darkMode = DARK_MODE_ENABLED, textContent }: MailSectionProps): JSX.Element => {
  return (
    <section className={`flex w-full flex-col items-center justify-center gap-8 px-5 pb-20 lg:gap-16 lg:px-10 lg:py-20 lg:pt-15 xl:px-32 3xl:px-80 ${darkMode ? 'bg-[#1C1C1C]' : ''}`}>
      <h2 className={`text-3xl font-bold ${darkMode ? 'text-white-95' : 'text-gray-100'} lg:text-6xl`}>
        {textContent.title}
      </h2>

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
          {textContent.description.map((desc) => (
            <p
              key={desc.slice(0, 20)}
              className={`text-center text-sm font-normal leading-tight ${
                darkMode ? 'text-green-120' : 'text-gray-55'
              } lg:pr-40 lg:text-left lg:text-lg`}
            >
              {desc}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MailSection;
