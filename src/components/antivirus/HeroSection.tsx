import { getImage } from '@/lib/getImage';
import Header from '../shared/Header';
import Image from 'next/image';

const HeroSection = ({ textContent }) => (
  <section className="flex w-full flex-col px-2">
    <div className="flex flex-col items-center pb-32 pt-32 lg:pt-40">
      <div className="flex flex-col items-center justify-center space-y-6 px-5 text-center">
        <div className="flex w-max items-center justify-center rounded-lg bg-gray-5 px-4 py-2">
          <h2 className="text-xl font-medium text-gray-80">{textContent.eyeBrow}</h2>
        </div>
      </div>
      <Header maxWidth="max-w-max" className="pt-5 text-center  text-gray-100">
        <span className="text-primary">{textContent.title}</span> <br className="hidden sm:flex" />
        {textContent.blueText}
      </Header>

      <p className="font-regular max-w-[800px] px-5 pt-5 text-center text-xl text-gray-80 sm:text-xl">
        {textContent.description}
      </p>

     <div className="relative flex h-[50vh] md:h-screen items-center justify-center">   
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
            className="absolute top-[20%] right-[-20%] object-cover hidden md:block"
          />

          
          <Image
            src={getImage('/images/antivirus/internxt_antivirus_2.webp')}
            width={90}
            height={90}
            alt="Internxt Antivirus shield"
            draggable="false"
            className="absolute top-[40%] left-[-20%] object-cover hidden md:block"
          />

          <Image
            src={getImage('/images/antivirus/internxt_antivirus_3.webp')}
            width={172}
            height={172}
            alt="Internxt Antivirus person checking"
            draggable="false"
            className="absolute top-[50%] right-[-18%] object-cover hidden md:block"
          />
        
      </div>
    </div>

    </div>
  </section>
);

export default HeroSection;
