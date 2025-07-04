import { ShieldStar } from '@phosphor-icons/react';
import Image from 'next/legacy/image';
import RevealX from '@/components/components/RevealX';
import { goToSignUpURL } from '@/lib/auth';
import { getImage } from '@/lib/getImage';

const FeatureSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden py-20">
      <div className="relative flex flex-col items-center justify-center px-5 lg:flex-row lg:space-x-20">
        {/* Left side with floating images */}
        <RevealX direction="right">
          <div className="relative h-[520px] w-[296px]">
            {/* Main man video frame */}
            <Image
              src={getImage('/images/meet/video_container.webp')}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
              alt="Man video calling"
            />

            {/* Small woman video frame */}
            <div className="absolute bottom-[100px] left-[-60px] h-[280px] w-[160px]">
              <Image
                src={getImage('/images/meet/video_container.webp')}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
                alt="Woman video calling"
              />
            </div>

            {/* Floating heart emoji */}
            <div className="absolute left-[-170px] top-[60px] h-[80px] w-[80px]">
              <Image src={getImage('/images/meet/love.svg')} layout="fill" objectFit="contain" alt="Heart icon" />
            </div>

            {/* Floating thumbs up emoji */}
            <div className="absolute left-[-120px] top-[-10px] h-[100px] w-[100px]">
              <Image src={getImage('/images/meet/like.svg')} layout="fill" objectFit="contain" alt="Thumbs up icon" />
            </div>
          </div>
        </RevealX>

        {/* Right side with text */}
        <RevealX
          direction="left"
          className="flex w-full max-w-[388px] flex-col items-center space-y-6 pt-8 text-center lg:items-start lg:pt-0 lg:text-start"
        >
          <ShieldStar size={64} className="text-primary" weight="light" />
          <p className="text-4xl font-semibold text-gray-100 lg:text-5xl">{textContent.title}</p>
          <p className="text-xl text-gray-80">{textContent.description}</p>
          <button
            className="flex w-max items-center rounded-lg bg-primary px-5 py-3 font-medium text-white"
            onClick={() => {
              goToSignUpURL();
            }}
          >
            {textContent.cta}
          </button>
        </RevealX>
      </div>
    </section>
  );
};

export default FeatureSection;
