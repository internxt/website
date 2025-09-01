import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import RevealX from '../components/RevealX';
import Link from 'next/link';

const ImportanceSection = ({ textContent, ctaLink }) => {
  return (
    <section className="overflow-hidden px-5">
      <div className="flex flex-col items-center justify-center space-y-16">
        <div>
          <div
            className={`flex flex-col items-center justify-center space-y-8 pb-10 text-center md:flex-row md:justify-between md:space-x-8 md:pb-20 md:text-start`}
          >
            <RevealX className="flex w-full max-w-[90%] flex-col rounded-3xl pt-5 sm:max-w-[75%] md:w-auto md:pt-0">
              <Image
                src={getImage('/images/GDPR_cloud_storage/internxt_GDPR.webp')}
                width={480}
                height={480}
                quality={100}
                loading="lazy"
                layout="intrinsic"
                alt={`${textContent.title} image`}
              />
            </RevealX>

            <div
              className={`flex w-full max-w-[100%] flex-col items-center justify-center space-y-4 md:max-w-[500px] md:items-start md:space-y-6 md:pl-10`}
            >
              <p className="text-30 font-semibold leading-tight lg:text-3xl">{textContent.title}</p>
              <p className="font-regular text-base leading-tight sm:text-lg md:text-xl">
                {Array.isArray(textContent.description)
                  ? textContent.description.map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                        <br />
                      </span>
                    ))
                  : textContent.description}
              </p>
              {textContent.ctaText && ctaLink && (
                <Link
                  className="flex w-max rounded-lg bg-primary px-5 py-3 text-xl font-medium text-white hover:bg-primary-dark"
                  href={ctaLink}
                >
                  {textContent.ctaText}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportanceSection;
