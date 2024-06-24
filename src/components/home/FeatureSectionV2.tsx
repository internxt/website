import { useRouter } from 'next/router';
import Button from '../shared/Button';
import Image from 'next/image';
import RevealY from '../components/RevealY';
import { getImage } from '@/lib/getImage';
import { CardGroup } from '../shared/CardGroup';
import { Eye, Fingerprint, LockKey, ShieldCheck } from '@phosphor-icons/react';

export const FeatureSectionV2 = ({ textContent }) => {
  const router = useRouter();

  const cards = [
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
    <section className="overflow-hidden bg-gray-1 py-20 px-5">
      <div className="flex flex-col items-center gap-20">
        <div className="flex w-full flex-col items-center gap-9">
          <div className="flex max-w-[774px] flex-col items-center gap-6 text-center">
            <h2 className="text-5xl font-semibold text-gray-100">{textContent.title}</h2>
            <p className="text-xl text-gray-80">{textContent.description}</p>
          </div>
          <div className="flex flex-col items-center gap-12">
            <Button
              text={textContent.cta}
              onClick={() => {
                router.push('/pricing');
              }}
            />
            <RevealY className="content flex h-full w-full flex-col px-5 pt-6">
              <Image
                src={getImage('/images/home/internxt_secure_cloud_storage.webp')}
                alt="Internxt secure cloud storage"
                draggable={false}
                loading="lazy"
                width={1920}
                height={1080}
              />
            </RevealY>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <CardGroup cards={cards} backgroundColorCard="bg-white" />
        </div>
      </div>
    </section>
  );
};
