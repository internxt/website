import Image from 'next/image';
import Link from 'next/link';

interface UseCouponSectionProps {
  textContent: any;
  redirectUrl: string;
}

const CodeComponent = ({ textContent }) => (
  <div className="flex flex-col items-center gap-4 text-center text-3xl font-semibold text-white md:flex-row md:text-5xl">
    <p className="leading-snug">
      {textContent.line1}
      <label className="mx-4 rounded-full border-2 border-white px-3 py-1">{textContent.code}</label>
      {textContent.line2}
    </p>
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
