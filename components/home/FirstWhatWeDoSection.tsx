import Image from 'next/image';
import { CaretRight, DotsThree } from 'phosphor-react';
import PdfItem from '../../public/icons/file-types/pdf.svg';
import PPTItem from '../../public/icons/file-types/ppt.svg';
import RevealY from '../components/RevealY';
import RevealX from '../components/RevealX';
import FileItem from './components/FileItem';
import DriveSidenav from './components/DriveSidenav';
import { useRouter } from 'next/router';

const FirstWhatWeDoSection = ({
  textContent,
  lang,
  backgroundColor,
}: {
  textContent;
  lang: string;
  backgroundColor?: string;
}) => {
  const router = useRouter();
  return (
    <section className={`overflow-hidden py-20 ${backgroundColor ? backgroundColor : ''}`}>
      <div className="flex flex-col items-center justify-center space-y-16 px-5">
        <RevealY className="flex flex-col-reverse space-y-5 space-y-reverse md:flex-row md:space-y-0  md:space-x-20 lg:items-center lg:justify-center">
          <div className="relative rounded-3xl">
            <Image
              src="/images/home/Secure-file-upload.webp"
              width={496}
              height={520}
              quality={100}
              draggable={false}
              className="rounded-3xl"
              alt="Secure cloud storage"
            />
            <RevealX
              direction="right"
              className="absolute top-12 -left-20 hidden rounded-lg bg-white shadow-xl lg:flex"
            >
              <Image
                src="/images/home/TaskLogger.svg"
                width={320}
                height={290}
                quality={100}
                draggable={false}
                className="rounded-lg"
                alt="TaskLogger image"
              />
            </RevealX>
          </div>
          <div className="flex w-full max-w-[390px] flex-col space-y-6 text-center lg:text-start">
            <p className="mb-6 text-4xl font-semibold sm:text-5xl sm:leading-tight">{textContent.card1.title}</p>
            <p className="text-xl font-normal">{textContent.card1.description}</p>
            <div
              className="flex cursor-pointer flex-row items-center justify-center space-x-2 text-primary hover:underline lg:justify-start"
              onClick={() => {
                window.open(`${window.location.origin}/${router.locale}/privacy`, '_blank');
              }}
            >
              <p className="text-lg font-semibold">{textContent.card1.cta}</p>
              <CaretRight size={12} />
            </div>
          </div>
        </RevealY>
        <RevealY className="flex flex-col space-y-5 md:flex-row md:space-x-20 lg:items-center lg:justify-center">
          <div className="flex w-full max-w-[390px] flex-col space-y-6 text-center lg:text-start">
            <p className="mb-6 text-4xl font-semibold sm:text-5xl sm:leading-tight">{textContent.card2.title}</p>
            <p className="text-xl">{textContent.card2.description}</p>
            <div
              className="flex cursor-pointer flex-row items-center justify-center space-x-2 text-primary hover:underline lg:justify-start"
              onClick={() => {
                window.open(`${window.location.origin}/${router.locale}/drive`, '_blank');
              }}
            >
              <p className="text-lg font-semibold">{textContent.card2.cta}</p>
              <CaretRight size={12} />
            </div>
          </div>
          <div className="relative w-full rounded-3xl">
            <Image
              src="/images/home/End-to-end-encrypted-cloud-storage.webp"
              width={444}
              height={520}
              quality={100}
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
        <RevealY className="flex flex-col-reverse space-y-5 space-y-reverse md:flex-row md:space-y-0 md:space-x-20 lg:items-center lg:justify-center">
          <div className="relative w-full rounded-3xl">
            <Image
              src="/images/home/Free-cloud-storage-account.webp"
              width={496}
              height={520}
              quality={100}
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
              <div
                className="flex w-max cursor-pointer flex-row items-center rounded-lg bg-primary px-5 py-3 text-white hover:bg-primary-dark"
                onClick={() => {
                  window.open(`https://drive.internxt.com/new`, '_blank');
                }}
              >
                <p>{textContent.card3.cta}</p>
              </div>
            </div>
          </div>
        </RevealY>
      </div>
    </section>
  );
};

export default FirstWhatWeDoSection;
