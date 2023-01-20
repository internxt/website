import { Gauge, EyeSlash, LockSimple, ArrowsClockwise, ListChecks, User } from 'phosphor-react';
import React from 'react';

const FeaturesSection = ({ textContent }) => {
  const features = [
    {
      Icon: EyeSlash,
      title: 'Private by default',
      description: 'No first or third-party access to your files ever! You have total control of your data.',
    },
    {
      Icon: Gauge,
      title: 'Fast sync',
      description: 'Encrypt, scramble, fragment, distribute, and transfer, all in the blink of an eye.',
    },
    {
      Icon: LockSimple,
      title: 'Secure from the core',
      description: 'End-to-end encrypted, fragmented, and scattered across a vast distributed network.',
    },
    {
      Icon: ArrowsClockwise,
      title: 'Safe sharing',
      description: 'Send encrypted files and photos back and forth to your favorite people via link and email.',
    },
    {
      Icon: ListChecks,
      title: 'Multiplatform',
      description: 'Privacy for all devices, browsers, and operating systems: Linux, Windows, macOS, iOS, Android.',
    },
    {
      Icon: User,
      title: 'Zero-knowledge',
      description: 'You are the only one with access to your data. Not even Internxt can view your files!',
    },
  ];

  return (
    <section className="overflow-hidden bg-gray-1 py-20">
      <div className="flex flex-col items-center px-8 text-center">
        <div className="center flex flex-col items-center pb-16 lg:max-w-[778px]">
          <p className="text-4xl font-semibold">{textContent.title}</p>
          <p className="mt-4 text-center text-xl font-normal">{textContent.description}</p>
        </div>
        <div className="grid w-full grid-cols-1 justify-items-center gap-x-10 gap-y-20 sm:grid-cols-2 md:gap-x-0 lg:grid-cols-3">
          {features.map((feature) => (
            <div className="flex flex-col items-center space-y-6 md:w-64 md:flex-auto" key={feature.title}>
              <feature.Icon size={56} color={'rgb(0, 102, 255)'} />
              <div className="flex flex-col items-center gap-x-40 space-y-5 text-center">
                <p className="text-xl font-semibold">{feature.title}</p>
                <p className="text-center text-xl font-light">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
