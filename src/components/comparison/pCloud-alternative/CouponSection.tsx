import Image from 'next/image';
import Link from 'next/link';

interface UseCouponSectionProps {
  textContent: any;
  redirectUrl: string;
}

const CodeComponent = ({ textContent }) => (
  <div className="flex flex-col items-center gap-2 text-center text-xl font-bold md:flex-row">
    <div className="flex flex-row items-center gap-2 md:flex-row">
      <p>{textContent.line1}</p>
      <p className="rounded-full border-2 border-white px-2 py-1 text-base md:text-xl">{textContent.code}</p>
    </div>
    <p className="md:ml-2 md:mt-0">{textContent.line2}</p>
  </div>
);

export const CouponSection = ({ textContent, redirectUrl }: UseCouponSectionProps) => {
  return (
    <section className="flex flex-col bg-primary-dark px-5 py-20">
      <div className="flex flex-col items-center gap-12 text-center">
        <div className="flex max-w-[810px] flex-col items-center gap-8 text-center">
          <CodeComponent textContent={textContent.title} />
          <Link
            href={redirectUrl}
            rel="noopener noreferrer"
            id="get-started-link"
            className="flex w-full items-center justify-center rounded-lg border border-transparent bg-white px-6 py-2 text-lg font-medium text-primary hover:bg-blue-10 focus:outline-none sm:inline-flex sm:w-max"
          >
            {textContent.cta}
          </Link>
        </div>
        <div className="content flex h-full w-full flex-col px-5 pt-6">
          <Image
            src="/images/home/internxt_secure_cloud_storage.webp"
            alt="Internxt secure cloud storage"
            draggable={false}
            loading="lazy"
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </section>
  );
};
