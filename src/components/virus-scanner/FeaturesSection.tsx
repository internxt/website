import Image from 'next/legacy/image';
import SignUpBanner from '../banners/SignUpBanner';

const FeaturesSection = ({ textContent, bannerText, lang }) => {
  const maliciousMalwareText = textContent.scanFiles.description.split('malicious malware')[0];

  const maliciousMalware = textContent.scanFiles.description.substr(
    textContent.scanFiles.description.indexOf('malicious malware'),
    17,
  );

  return (
    <section className="relative bg-gray-1 py-20 lg:pt-10 lg:pb-0">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center space-y-20 px-5 lg:p-16">
        <SignUpBanner textContent={bannerText} lang={lang} />
        <div id="incontent_2" className="flex w-full max-w-[1000px] justify-center"></div>
        {/* Marketing text */}
        <div className="flex w-full flex-col space-y-16">
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-4xl font-semibold sm:text-5xl">{textContent.whyToScan.title}</h3>
            <div className="flex flex-col">
              <p className="text-xl text-gray-80">{textContent.whyToScan.description}</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-16">
            {/* Viruses hate privacy */}
            <div className="flex flex-col items-center md:flex-row md:space-x-16">
              <div className="flex flex-col justify-center space-y-5 pb-7 md:max-w-md md:pb-0 md:text-left">
                <p className=" text-3xl font-semibold md:text-start">{textContent.virusesHatePrivacy.title}</p>
                <p className="text-xl text-gray-80">{textContent.virusesHatePrivacy.description}</p>
              </div>
              <div className="flex">
                <Image
                  src={`/images/virus-scanner/virus_scanner.webp`}
                  width={573}
                  height={390}
                  alt="Viruses Hate Privacy"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Prevent malware */}
            <div className="flex flex-col-reverse items-center md:flex-row md:space-x-16">
              <div className="flex">
                <Image
                  src={`/images/virus-scanner/malware.webp`}
                  width={573}
                  height={390}
                  alt="Stop malware image"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center space-y-5 pb-7 md:max-w-md md:pb-0 md:text-left">
                <p className=" text-3xl font-semibold md:text-start">{textContent.stopMalware.title}</p>
                <p className="text-xl text-gray-80">{textContent.stopMalware.description}</p>
              </div>
            </div>

            <div id="incontent_3" className="flex w-full max-w-[1000px] justify-center"></div>
            {/* Free online scanner */}
            <div className="flex flex-col justify-center space-y-5 py-7 text-left md:max-w-3xl md:py-0 md:text-center">
              <p className=" text-4xl font-semibold">{textContent.freeOnlineScanner.title}</p>
              <p className="text-xl text-gray-80">{textContent.freeOnlineScanner.description}</p>
            </div>
            {/* Scan files card and info */}
            <div className="flex flex-col items-center md:flex-row md:space-x-16">
              <div className="flex flex-col justify-center space-y-5 pb-7 md:max-w-md md:pb-0 md:text-left">
                <p className=" text-3xl font-semibold md:text-start">{textContent.scanFiles.title}</p>
                <p className="text-xl">
                  {maliciousMalwareText}
                  {lang === 'en' && (
                    <button
                      onClick={() => {
                        window.open('https://blog.internxt.com/what-is-malware/', '_blank', 'noopener noreferrer');
                      }}
                    >
                      <p className="text-primary underline underline-offset-4 hover:no-underline">{maliciousMalware}</p>
                    </button>
                  )}
                </p>
              </div>
              <div className="flex">
                <Image
                  src={`/images/virus-scanner/phishing.webp`}
                  width={573}
                  height={390}
                  alt="Scan files image"
                  loading="lazy"
                />
              </div>
            </div>
            <div id="incontent_4" className="flex w-full max-w-[1000px] justify-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
