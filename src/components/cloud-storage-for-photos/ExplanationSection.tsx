import Link from 'next/link';

interface ExplanationSectionProps {
  textContent: any;
  ctaText: string;
  ctaLink: string;
  lang: string;
}

const ExplanationSection = ({ textContent, ctaText, ctaLink, lang }: ExplanationSectionProps) => {
  return (
    <section className="overflow-hidden bg-white">
      {/* Header Section */}
      <section className="flex flex-col items-center justify-center space-y-12 overflow-hidden px-5">
        <div className="flex w-full flex-col items-center justify-center space-y-6 pt-20 text-center lg:max-w-[75%]">
          <p className="text-30 font-semibold text-gray-100 lg:text-3xl">{textContent.title}</p>
          <div className="flex flex-col items-center space-y-6">
            {textContent.description && (
              <p className="font-regular text-xl text-gray-80 lg:max-w-[800px] ">{textContent.description}</p>
            )}
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center justify-start space-y-16 px-5 pb-16 lg:px-10">
        <div id="incontent_1" className="flex w-full justify-center"></div>
        <div className="flex w-[323px] flex-col space-y-3">
          <p className="text-30 font-medium">{textContent.costExp.title}</p>
          <p className="font-regular text-lg text-gray-80 lg:text-xl">{textContent.costExp.description}</p>
        </div>
        <div className="flex w-[323px] flex-col space-y-3">
          <p className="text-30 font-medium">{textContent.securityExp.title}</p>
          <p className="font-regular text-lg text-gray-80 lg:text-xl">{textContent.securityExp.description}</p>
        </div>
        <div className="flex w-[323px] flex-col space-y-3">
          <p className="text-30 font-medium">{textContent.extraFeaturesExp.title}</p>
          <p className="font-regular text-lg text-gray-80 lg:text-xl">{textContent.extraFeaturesExp.description}</p>
        </div>
        {ctaText && ctaLink && (
          <Link
            className="flex w-max rounded-lg bg-primary px-5 py-3 text-xl font-medium text-white hover:bg-primary-dark"
            href={ctaLink}
          >
            {ctaText}
          </Link>
        )}
        {/* <div id="incontent_2" className="flex w-full justify-center"></div> */}
      </div>
    </section>
  );
};

export default ExplanationSection;
