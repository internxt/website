import Image from "next/image";
import SignUpBanner from '../banners/SignUpBanner';
import { getImage } from '@/lib/getImage';

const FeaturesSection = ({ darkMode = false, textContent, bannerText, lang }) => {
  const maliciousMalwareText = textContent.scanFiles.description.split('malicious malware')[0];

  const maliciousMalware = textContent.scanFiles.description.substr(
    textContent.scanFiles.description.indexOf('malicious malware'),
    17,
  );

  return (
    <section className="relative bg-gray-1 dark:bg-gray-105 py-20 lg:pb-0 lg:pt-10">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center space-y-5 px-5 lg:p-16">
        <div className="flex w-full flex-col items-center justify-center ">
          <SignUpBanner textContent={bannerText} lang={lang} darkMode={darkMode} />
          <div className="flex w-full flex-col items-center justify-center pt-10">
            <Image
              src={getImage(`/banners/Ban_Internxt_728x90.webp`)}
              alt="Internxt x Bitdefender Banner"
              width={728}
              height={90}
              quality={100}
              onClick={() =>
                window.open(
                  `https://www.bitdefender.com/pages/consumer/en/new/avfree/internxt?vcampaign=avfreeinternxt&cid=aff%7Cc%7Cpartnership%7Cinternxt`,
                  '_blank',
                  'noopener noreferrer',
                )
              }
              style={{
                cursor: 'pointer',
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
        </div>
        <div id="incontent_2" className="flex w-full max-w-[1000px] justify-center"></div>
        {/* Marketing text */}
        <div className="flex w-full flex-col space-y-16">
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-4xl font-semibold sm:text-5xl text-gray-100 dark:text-white-95">{textContent.whyToScan.title}</h3>
            <div className="flex flex-col">
              <p className="text-xl text-gray-80 dark:text-cool-gray-30">
                {textContent.whyToScan.description}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-16">
            {/* Viruses hate privacy */}
            <div className="flex flex-col items-center md:flex-row md:space-x-16">
              <div className="flex flex-col justify-center space-y-5 pb-7 md:max-w-md md:pb-0 md:text-left">
                <p className="text-3xl font-semibold md:text-start text-gray-100 dark:text-white-95">{textContent.virusesHatePrivacy.title}</p>
                <p className="text-xl text-gray-80 dark:text-cool-gray-30">
                  {textContent.virusesHatePrivacy.description}
                </p>
              </div>
              <div className="flex">
                <Image
                  src={`/images/virus-scanner/virus_scanner.webp`}
                  width={573}
                  height={390}
                  alt="Viruses Hate Privacy"
                  loading="lazy"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
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
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </div>
              <div className="flex flex-col justify-center space-y-5 pb-7 md:max-w-md md:pb-0 md:text-left">
                <p className="text-3xl font-semibold md:text-start text-gray-100 dark:text-white-95">{textContent.stopMalware.title}</p>
                <p className="text-xl text-gray-80 dark:text-cool-gray-30">
                  {textContent.stopMalware.description}
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center">
              <Image
                src={getImage(`/banners/Ban_Internxt_728x90.webp`)}
                alt="File Arrow Up icon"
                width={728}
                height={90}
                quality={100}
                onClick={() =>
                  window.open(
                    `https://www.bitdefender.com/pages/consumer/en/new/avfree/internxt?vcampaign=avfreeinternxt&cid=aff%7Cc%7Cpartnership%7Cinternxt`,
                    '_blank',
                    'noopener noreferrer',
                  )
                }
                style={{
                  cursor: 'pointer',
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </div>

            {/* Free online scanner */}
            <div className="flex flex-col justify-center space-y-5 py-7 text-left md:max-w-3xl md:py-0 md:text-center">
              <p className="text-4xl font-semibold text-gray-100 dark:text-white-95">{textContent.freeOnlineScanner.title}</p>
              <p className="text-xl text-gray-80 dark:text-cool-gray-30">
                {textContent.freeOnlineScanner.description}
              </p>
            </div>
            {/* Scan files card and info */}
            <div className="flex flex-col items-center md:flex-row md:space-x-16">
              <div className="flex flex-col justify-center space-y-5 pb-7 md:max-w-md md:pb-0 md:text-left">
                <p className="text-3xl font-semibold md:text-start text-gray-100 dark:text-white-95">{textContent.scanFiles.title}</p>
                <p className="text-xl text-gray-80 dark:text-cool-gray-30">
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
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center">
              <Image
                src={getImage(`/banners/Ban_Internxt_728x90.webp`)}
                alt="File Arrow Up icon"
                width={728}
                height={90}
                quality={100}
                onClick={() =>
                  window.open(
                    `https://www.bitdefender.com/pages/consumer/en/new/avfree/internxt?vcampaign=avfreeinternxt&cid=aff%7Cc%7Cpartnership%7Cinternxt`,
                    '_blank',
                    'noopener noreferrer',
                  )
                }
                style={{
                  cursor: 'pointer',
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
