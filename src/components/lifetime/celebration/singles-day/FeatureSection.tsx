import { CaretRight, Devices, Eye, Fingerprint, LockKey, ShieldCheck, UserCircleGear } from '@phosphor-icons/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import RevealY from '@/components/components/RevealY';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import PlatformSection from './PlatformSection';
const InfinityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 256 256">
    <rect width="256" height="256" fill="none" />
    <path
      d="M106.63,152.13l-8.69,9.81a48,48,0,1,1,0-67.88l60.12,67.88a48,48,0,1,0,0-67.88l-8.69,9.81"
      fill="none"
      stroke="rgb(0,102,255)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </svg>
);

const FeatureSection = ({
  textContent,
  withoutCta,
  backgroundColor,
}: {
  textContent: any;
  withoutCta?: boolean;
  backgroundColor?: string;
}) => {
  const router = useRouter();
  const Cards = [
    {
      icon: ShieldCheck,
      title: textContent.cards[0].title,
      description: textContent.cards[0].description,
    },
    {
      icon: LockKey,
      title: textContent.cards[1].title,
      description: textContent.cards[1].description,
    },
    {
      icon: Eye,
      title: textContent.cards[2].title,
      description: textContent.cards[2].description,
    },
    {
      icon: Fingerprint,
      title: textContent.cards[3].title,
      description: textContent.cards[3].description,
    },
  ];

  return (
    <section className={`overflow-hidden bg-gray-1`}>
        <div className="flex flex-col items-center justify-center space-y-20 py-16 px-5">
        <div className="flex max-w-3xl flex-col items-center justify-center space-y-6 text-center text-black ">
          <p className="mb-6 text-4xl font-semibold sm:text-5xl sm:leading-tight">{textContent.title}</p>
          <p className="text-xl text-gray-80">{textContent.description}</p>
          {!withoutCta && (
            <Link
              className="flex cursor-pointer flex-row items-center justify-center space-x-1 text-lg font-semibold text-primary hover:underline"
              href="/about"
              locale={router.locale}
              target="_blank"
            >
              {textContent.cta ? (
                <>
                  <p>{textContent.cta}</p>
                  <CaretRight size={16} weight="bold" />
                </>
              ) : null}
            </Link>
          )}
        </div>

        <div className="relative mx-auto flex max-w-screen-2xl flex-col">
            <div className="flex flex-col items-center py-16">
                <RevealY className="content relative flex h-full w-full flex-col items-center px-5 pt-6">
                    <Image
                    src={getImage('/images/home/internxt_secure_cloud_storage.webp')}
                    alt="Internxt secure cloud storage"
                    draggable={false}
                    width={805}
                    height={431}
                    className="z-50"
                    />
                </RevealY>
            </div>
        </div>
      
        <RevealY className="grid grid-cols-1 flex-row flex-wrap justify-center gap-8 sm:grid-cols-2">
          {Cards.map((card) => (
            <div
              key={card.title}
              className={`flex flex-col items-start justify-start rounded-2xl ${
                backgroundColor ? 'bg-white' : 'bg-gray-1'
              } space-y-6 p-8 sm:p-10 md:max-w-[488px]`}
            >
              <card.icon className=" text-4xl text-primary" size={32} />
              <div className="flex w-full max-w-[400px] flex-col">
                <p className="mb-6 text-2xl font-medium text-gray-100">{card.title}</p>
                <p className="text-base text-cool-gray-80 sm:text-lg">{card.description}</p>
              </div>
            </div>
          ))}
        </RevealY>
       <PlatformSection textContent={textContent}></PlatformSection>
      </div>
    </section>
  );
};

export default FeatureSection;
