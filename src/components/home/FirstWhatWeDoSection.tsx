import Image from 'next/legacy/image';
import { CaretRight } from '@phosphor-icons/react';
import PdfItem from '../../../public/icons/file-types/pdf.svg';
import PPTItem from '../../../public/icons/file-types/ppt.svg';
import RevealY from '@/components/components/RevealY';
import RevealX from '@/components/components/RevealX';
import FileItem from './components/FileItem';
import { DriveSidenav } from './components/DriveSidenav';
import { useRouter } from 'next/router';
import { getImage } from '@/lib/getImage';
import Link from 'next/link';
import { SIGNUP_DRIVE_WEB } from '@/constants';

const FirstWhatWeDoSection = ({
  textContent,
  backgroundColor,
}: {
  textContent;
  lang: string;
  backgroundColor?: string;
}) => {
  const router = useRouter();
  const lang = router.locale;

  return (
    <section className={`overflow-hidden py-20 ${backgroundColor}`}>
      <div className="flex flex-col items-center justify-center space-y-16 px-5">
        {/* First Card */}
        <RevealY className="flex flex-col-reverse space-y-5 space-y-reverse md:flex-row md:space-y-0 md:space-x-20 lg:items-center lg:justify-center">
          <div className="relative rounded-3xl">
            <Image
              src={getImage('/images/home/Secure-file-upload.webp')}
              width={496}
              height={520}
              quality={100}
              loading="lazy"
              draggable={false}
              className="rounded-3xl"
              alt="Secure cloud storage"
            />
            <RevealX
              direction="right"
              className="absolute top-12 -left-20 hidden rounded-lg bg-white shadow-xl lg:flex"
            >
              <Image
                src={getImage('/images/home/TaskLogger.svg')}
                width={320}
                height={290}
                quality={100}
                loading="lazy"
                draggable={false}
                className="rounded-lg"
                alt="TaskLogger image"
              />
            </RevealX>
          </div>
          <div className="flex w-full max-w-[390px] flex-col space-y-6 text-center lg:text-start">
            <p className="mb-6 text-4xl font-semibold sm:text-5xl sm:leading-tight">{textContent.card1.title}</p>
            <p className="text-xl font-normal">{textContent.card1.description}</p>
            <Link
              className="flex cursor-pointer flex-row items-center justify-center space-x-2 text-primary hover:underline lg:justify-start"
              href={'/privacy'}
              target="_blank"
              hrefLang={lang}
            >
              <p className="text-lg font-semibold">{textContent.card1.cta}</p>
              <CaretRight size={12} />
            </Link>
          </div>
        </RevealY>

        {/* Second Card */}
        <RevealY className="flex flex-col space-y-5 md:flex-row md:space-x-20 lg:items-center lg:justify-center">
          <div className="flex w-full max-w-[390px] flex-col space-y-6 text-center lg:text-start">
            <p className="mb-6 text-4xl font-semibold sm:text-5xl sm:leading-tight">{textContent.card2.title}</p>
            <p className="text-xl">{textContent.card2.description}</p>
            <Link
              href={'/drive'}
              target="_blank"
              hrefLang={lang}
              className="flex cursor-pointer flex-row items-center justify-center space-x-2 text-primary hover:underline lg:justify-start"
            >
              <p className="text-lg font-semibold">{textContent.card2.cta}</p>
              <CaretRight size={12} />
            </Link>
          </div>
          <div className="relative w-full rounded-3xl">
            <Image
              src={getImage('/images/home/End-to-end-encrypted-cloud-storage.webp')}
              width={444}
              height={520}
              quality={100}
              loading="lazy"
              draggable={false}
              className="rounded-3xl"
              alt="End-to-end encrypted cloud storage"
            />
            <RevealX
              direction="left"
              className="absolute top-14 -right-12 hidden flex-col rounded-lg bg-gradient-to-b from-white to-gray-1 shadow-xl lg:flex"
            >
              <FileItem encrypted title={'Cybersecurity_Presentation.ppt'} className="rounded-t-lg" ItemImg={PPTItem} />
              <FileItem title="Invoice.pdf" className="rounded-b-lg" ItemImg={PdfItem} />
            </RevealX>
          </div>
        </RevealY>

        {/* Third Card */}
        <RevealY className="flex flex-col-reverse space-y-5 space-y-reverse md:flex-row md:space-y-0 md:space-x-20 lg:items-center lg:justify-center">
          <div className="relative w-full rounded-3xl">
            <Image
              src={getImage('/images/home/Free-cloud-storage-account.webp')}
              width={496}
              height={520}
              quality={100}
              loading="lazy"
              draggable={false}
              className="rounded-3xl"
              alt="Free cloud storage account"
            />
            <RevealX
              direction="right"
              className="absolute top-32 -left-20 hidden rounded-lg bg-white shadow-xl lg:flex"
            >
              <DriveSidenav />
            </RevealX>
          </div>

          <div className="flex w-full flex-col space-y-5 text-center lg:text-start">
            <div className="flex w-full max-w-[390px] flex-col space-y-6">
              <p className="mb-6 text-4xl font-semibold sm:text-5xl sm:leading-tight">{textContent.card3.title}</p>
              <p className=" text-xl">{textContent.card3.description}</p>
            </div>
            <div className="flex justify-center lg:justify-start">
              <Link
                href={SIGNUP_DRIVE_WEB}
                target="_blank"
                className="flex w-max cursor-pointer flex-row items-center rounded-lg bg-primary px-5 py-3 text-white hover:bg-primary-dark"
              >
                <p>{textContent.card3.cta}</p>
              </Link>
            </div>
          </div>
        </RevealY>
      </div>
    </section>
  );
};

export default FirstWhatWeDoSection;
