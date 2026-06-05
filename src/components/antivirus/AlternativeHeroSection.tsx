import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import Link from 'next/link';

interface AlternativeHeroSectionProps {
  textContent: any;
}

const AlternativeHeroSection = ({ textContent }: AlternativeHeroSectionProps) => (
  <section
    className="mt-20 flex h-min w-full flex-row items-center justify-center overflow-hidden py-10 lg:mt-16 lg:h-[705px] lg:justify-between lg:px-10 xl:px-32 3xl:px-80"
    style={{ background: 'linear-gradient(360deg, #FFFFFF 0%, #E5EFFF 85.17%)' }}
  >
    <div className="flex w-full flex-row items-center gap-[90px]">
      <div
        className={`z-20 flex h-min w-[360px] shrink-0 flex-col items-start justify-center gap-4 rounded-xl p-6 shadow-soft backdrop-blur-55 lg:h-min lg:w-[566px] lg:gap-8 lg:rounded-16 lg:p-8`}
        style={{
          background: 'linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)',
        }}
      >
        <div className="flex h-min w-min flex-col rounded-2 border border-primary px-1">
          <p className="flex whitespace-nowrap text-sm font-semibold text-primary lg:text-lg">
            {textContent.secondaryEyeBrow}
          </p>
        </div>

        <p className="text-3xl font-semibold text-gray-100 lg:text-5xl">
          {textContent.title} <br className="hidden sm:flex" />
          <span className="text-primary">{textContent.blueText}</span>
        </p>

        <p className="text-xl font-normal text-gray-55">{textContent.description}</p>

        <div className="flex w-full flex-row items-center gap-3">
          <Link
            href={'#priceCard'}
            className="no z-10 flex h-[48px] w-1/2 items-center justify-center whitespace-nowrap rounded-sm-6 bg-primary  py-4 text-base font-medium text-white hover:bg-primary-dark lg:w-[177px]"
          >
            {textContent.cta}
          </Link>

          <span className="h-min rounded-2 bg-green-100 px-1 py-0.5 text-sm font-semibold text-green-0">
            {textContent.price}
          </span>
        </div>
      </div>

      <div className="relative flex h-[65vh] items-center justify-center md:h-[450px]">
        <Image
          src={getImage('/images/antivirus/Internxt_Antivirus_Header.png')}
          width={490}
          height={400}
          alt="Internxt Antivirus"
          draggable="false"
          className="object-cover"
        />

        <div className="absolute inset-0">
          <Image
            src={getImage('/images/antivirus/internxt_antivirus_1.webp')}
            width={66}
            height={66}
            alt="Internxt Antivirus checklist"
            draggable="false"
            className="absolute right-[-7%] top-[0%] hidden object-cover md:block"
          />

          <Image
            src={getImage('/images/antivirus/internxt_antivirus_2.webp')}
            width={90}
            height={90}
            alt="Internxt Antivirus shield"
            draggable="false"
            className="absolute left-[2%] top-[20%] hidden object-cover md:block"
          />

          <Image
            src={getImage('/images/antivirus/internxt_antivirus_3.webp')}
            width={130}
            height={130}
            alt="Internxt Antivirus person checking"
            draggable="false"
            className="absolute right-[0%] top-[65%] hidden object-cover md:block"
          />
        </div>
      </div>
    </div>
  </section>
);

export default AlternativeHeroSection;
