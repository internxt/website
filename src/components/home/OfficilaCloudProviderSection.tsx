import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { CaretRight } from '@phosphor-icons/react';
import { HomeText } from '@/assets/types/home';

interface OfficialCloudProviderProps {
  textContent: HomeText['OfficalCloudProvider'];
  lang?: string;
  partner?: 'valencia' | 'levante';
  bgColor?: string;
}

const PARTNER_CONFIG = {
  valencia: {
    image: '/images/home/NewDesign/Frame 1984077264.png',
    alt: 'Valencia CF Badge',
    dimensions: { height: 200, width: 400 },
    blogUrl: {
      en: 'https://blog.internxt.com/internxt-becomes-valencia-cfs-official-cloud-provider-partner/',
      es: 'https://blog.internxt.com/internxt-becomes-valencia-cfs-official-cloud-provider-partner/',
    },
    rounded: false,
  },
  levante: {
    image: '/images/home/NewDesign/levante.png',
    alt: 'Internxt official cloud storage partner of Levante UD',
    dimensions: { height: 430, width: 352 },
    blogUrl: {
      en: 'https://blog.internxt.com/internxt-becomes-levante-uds-official-cloud-provider/',
      es: 'https://blog.internxt.com/es/internxt-se-convierte-en-el-proveedor-oficial-de-nube-y-socio-del-levante-ud/',
    },
    rounded: true,
  },
};

export default function OfficialCloudProviderSection({
  textContent,
  lang = 'en',
  partner = 'valencia',
  bgColor,
}: OfficialCloudProviderProps): JSX.Element {
  const config = PARTNER_CONFIG[partner];
  const blogUrl = config.blogUrl[lang as 'en' | 'es'] || config.blogUrl.en;
  const isDescriptionArray = Array.isArray(textContent.description);

  return (
    <section
      className={`${
        bgColor ? '' : 'bg-white'
      } flex h-min w-full flex-col-reverse items-start justify-center gap-8 overflow-hidden px-6 py-10 lg:h-min lg:flex-row lg:px-10 lg:py-20 xl:px-32 3xl:px-80`}
      style={{ background: bgColor ? bgColor : '' }}
    >
      <div className="absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 lg:bottom-0 lg:left-32 lg:right-32"></div>

      <Image
        src={getImage(config.image)}
        alt={config.alt}
        height={config.dimensions.height}
        width={config.dimensions.width}
        quality={100}
        className={config.rounded ? 'rounded-12 lg:rounded-16' : ''}
      />

      <div className="flex flex-1 flex-col justify-between gap-6 lg:h-auto lg:w-[842px] lg:flex-initial">
        <p className="text-30 font-bold leading-tight text-gray-100 lg:text-3xl">{textContent.title}</p>

        {isDescriptionArray ? (
          <div className="flex flex-col gap-4">
            {(textContent.description as string[]).map((paragraph, index) => (
              <p key={index} className="text-sm font-normal leading-tight text-gray-55 lg:text-xl">
                {paragraph}
              </p>
            ))}
          </div>
        ) : (
          <p className="text-sm font-normal leading-tight text-gray-55 lg:text-xl">{textContent.description}</p>
        )}

        <span
          onClick={() => window.open(blogUrl, '_blank', 'noopener,noreferrer')}
          className="flex w-max cursor-pointer flex-row gap-1 text-base font-normal leading-tight text-primary hover:text-primary-dark hover:underline"
        >
          {textContent.cta}
          <CaretRight className="pt-[2px] text-primary" size={20} />
        </span>
      </div>
    </section>
  );
}
