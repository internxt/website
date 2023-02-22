import Image from 'next/image';
import React from 'react';

const InfoSection = () => {
  return (
    <section className="overflow-hidden py-20">
      <div className="flex flex-col items-center justify-center space-y-16">
        <div className="flex max-w-2xl flex-col space-y-3 text-start">
          <p className="text-2xl font-medium">Internxt’s free temporary email</p>
          <p className="text-lg font-normal leading-5 text-gray-80">
            No more spam, ads, newsletters, promotions, hackers, scammers, and bots. Keep your real inbox clean, secure,
            and free of sketchy emails.  Our disposable email account generator is Internxt's is Internxt's newest
            privacy tool built to provide free, anonymous, temporary, and random addresses without storing any of your
            personal data.
          </p>
        </div>
        <div className="flex flex-col">
          <Image
            src="/images/temp-email/magicImage.png"
            alt="Magic Image for Temp Mail"
            width={785}
            height={385}
            layout="intrinsic"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
