import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { CaretRight } from '@phosphor-icons/react';
import { HomeText } from '@/assets/types/home';

interface OfficialCloudProviderProps {
  textContent: HomeText['OfficalCloudProvider'];
  lang: string;
}

export default function OfficialCloudProviderSection({ textContent, lang }: OfficialCloudProviderProps): JSX.Element {
  return (
    <section
      className={`flex h-min w-full flex-col-reverse items-start justify-center gap-8 overflow-hidden px-6 py-10 lg:h-min lg:flex-row lg:p-10 xl:p-32 3xl:p-80`}
      style={{ background: 'linear-gradient(0deg, #F4F8FF 0%, #FFFFFF 100%)' }}
    >
      <div className="absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 lg:bottom-0 lg:left-32 lg:right-32"></div>

      <Image
        src={getImage('/images/home/NewDesign/levante.png')}
        alt="Internxt official cloud storage partner of Levante UD"
        height={430}
        width={352}
        quality={100}
        className="rounded-12 lg:rounded-16"
      />

      <div className="flex flex-1 flex-col justify-center gap-6 lg:h-[430px] lg:w-[842px]">
        <p className="text-30 font-bold leading-tight text-gray-100 lg:text-3xl">{textContent.title}</p>
        <div className="flex flex-col gap-4">
          {textContent.description.map((paragraph, index) => (
            <p key={index} className="text-sm font-normal leading-tight text-gray-55 lg:text-xl">
              {paragraph}
            </p>
          ))}
        </div>
        <span
          onClick={() =>
            window.open(
              lang === 'en'
                ? 'https://blog.internxt.com/internxt-becomes-levante-uds-official-cloud-provider/'
                : 'https://blog.internxt.com/es/internxt-se-convierte-en-el-proveedor-oficial-de-nube-y-socio-del-levante-ud/',
              '_blank',
              'noopener,noreferrer',
            )
          }
          className="flex w-max cursor-pointer flex-row gap-1 text-base font-normal leading-tight text-primary hover:text-primary-dark hover:underline"
        >
          {textContent.cta}
          <CaretRight className="pt-[2px] text-primary" size={20} />
        </span>
      </div>
    </section>
  );
}
