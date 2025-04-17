import RevealY from '@/components/components/RevealY';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '@/components/black-friday/BF-HeroSection.module.scss';
import Link from 'next/link';

interface GetLifetimeSectionProps {
  textContent: any;
  isCelebrationPage?: boolean;
}

const GetLifetimeSection = ({ textContent, isCelebrationPage }: GetLifetimeSectionProps) => {
  const router = useRouter();
  const lang = router.locale;
  const { title } = textContent;
  const splitTitle = title.split('!');
  const firstTitle = splitTitle[0];
  const secondTitle = splitTitle[1];

  return (
    <section className={`overflow-hidden bg-cover bg-no-repeat ${styles.inverseLinearGradient}`}>
      <div className="relative mx-auto flex max-w-screen-2xl flex-col">
        <div className="flex flex-col items-center py-16">
          <div className="mb-8 flex flex-col items-center px-6 text-center font-semibold text-white">
            {lang === 'it' || lang === 'de' || lang === 'ru' ? (
              <h2 className="max-w-[900px] text-5xl font-semibold leading-tight">
                {firstTitle}!{secondTitle}
              </h2>
            ) : lang === 'en' ? (
              <div className="max-w-[800px]">
                <p className="text-5xl font-semibold leading-tight text-primary">{textContent.title}</p>
                <p className="pt-4 text-xl font-semibold leading-tight text-white">{textContent.subtitle}</p>
              </div>
            ) : (
              <h2 className="max-w-[800px] text-5xl font-semibold leading-tight">
                {firstTitle}!
                <br />
                {secondTitle}
              </h2>
            )}

            <p className="pb-4 pt-4 text-xl font-normal">{textContent.description}</p>
            <Link
              href={'#priceTable'}
              className={`z-10 flex w-max justify-center rounded-lg bg-white px-4 py-3 text-xl font-medium text-gray-100 hover:bg-white/95`}
            >
              {textContent.cta}
            </Link>
          </div>

          <RevealY className="content relative flex h-full w-full flex-col items-center px-5 pt-2">
            {isCelebrationPage ? (
              <Image
                src={getImage('/images/lifetime/celebration/confetti-horizontal.svg')}
                alt="Confetti"
                width={1103}
                height={464}
                className="absolute"
              />
            ) : null}
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
    </section>
  );
};

export default GetLifetimeSection;
