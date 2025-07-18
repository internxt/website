import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import DownloadComponent from './DownloadComponent';
import { isMobile } from 'react-device-detect';

const HeroSection = ({ textContent, lang, download }) => (
  <section className="flex w-full flex-col px-2">
    <div className="flex flex-col items-center pt-32 lg:pt-40">
      <div className="flex flex-col items-center justify-center space-y-6 px-5 text-center">
        <div className="flex w-max items-center justify-center rounded-lg bg-gray-5 px-4 py-2">
          <h2 className="text-xl font-medium text-gray-80">{textContent.eyeBrow}</h2>
        </div>
      </div>
      <h1 className="text-3xl font-semibold text-gray-100 lg:text-5xl">
        <span className="text-primary">{textContent.title}</span> <br className="hidden sm:flex" />
        {textContent.blueText}
      </h1>

      <p className="font-regular max-w-[800px] px-5 pt-5 text-center text-xl text-gray-80 sm:text-xl md:pb-5">
        {textContent.description}
      </p>

      <div className="relative flex h-[65vh] items-center justify-center md:h-[450px]">
        <Image
          src={getImage('/images/antivirus/Internxt_Antivirus_Header.png')}
          width={600}
          height={460}
          alt="Internxt Antivirus"
          draggable="false"
          className="object-cover"
        />

        <div className="absolute inset-0">
          <Image
            src={getImage('/images/antivirus/internxt_antivirus_1.webp')}
            width={88}
            height={88}
            alt="Internxt Antivirus checklist"
            draggable="false"
            className="absolute right-[-20%] top-[20%] hidden object-cover md:block"
          />

          <Image
            src={getImage('/images/antivirus/internxt_antivirus_2.webp')}
            width={90}
            height={90}
            alt="Internxt Antivirus shield"
            draggable="false"
            className="absolute left-[-20%] top-[40%] hidden object-cover md:block"
          />

          <Image
            src={getImage('/images/antivirus/internxt_antivirus_3.webp')}
            width={172}
            height={172}
            alt="Internxt Antivirus person checking"
            draggable="false"
            className="absolute right-[-18%] top-[50%] hidden object-cover md:block"
          />
        </div>
      </div>

      {!isMobile && <DownloadComponent textContent={textContent.DownloadLinks} lang={lang} download={download} />}
    </div>
  </section>
);

export default HeroSection;
