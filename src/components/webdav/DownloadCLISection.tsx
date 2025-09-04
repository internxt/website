import Image from 'next/image';
import { AppleLogo } from '../shared/icons/AppleIcon';
import { CommandTextInputCopy } from '../shared/CommandTextInputCopy';

const DownloadOSPlatform = ({ downloadText, installationText, logo }) => (
  <div className="flex w-full max-w-[350px] flex-col rounded-2xl bg-gray-1 p-10">
    <div className="flex flex-col  gap-6">
      {logo}
      <p className="text-2xl font-medium text-gray-100">{downloadText.platform}</p>
      <p className="text-lg text-gray-80">{downloadText.description}</p>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold text-gray-100">{installationText.installation}</p>
        <CommandTextInputCopy text={installationText.command} isCommandCard />
      </div>
    </div>
  </div>
);

export const DownloadCLISection = ({ textContent }) => {
  return (
    <section id="downloadCli" className="overflow-hidden px-5 py-20">
      <div className="flex flex-col items-center gap-12">
        <p className="text-center text-30 font-semibold text-gray-100 md:text-left lg:text-3xl">{textContent.title}</p>
        <div className="flex w-full flex-row flex-wrap justify-center gap-5">
          <DownloadOSPlatform
            downloadText={textContent.downloads[0]}
            installationText={textContent}
            logo={<Image src="/images/drive/Windows-logo.svg" width={34} height={34} alt="Windows image" />}
          />
          <DownloadOSPlatform
            downloadText={textContent.downloads[1]}
            installationText={textContent}
            logo={<AppleLogo width={28} height={34} />}
          />
          <DownloadOSPlatform
            downloadText={textContent.downloads[2]}
            installationText={textContent}
            logo={
              <Image
                src="/images/special-offer/black-friday/Linux.svg"
                width={29}
                height={34}
                alt="Linux image"
                className="mt-0.5"
              />
            }
          />
        </div>
      </div>
    </section>
  );
};
