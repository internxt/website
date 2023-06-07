import Image from 'next/image';

const HeroSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden pt-10 lg:pt-12">
      <div className="flex flex-col space-y-10 px-5 py-20 lg:flex-row lg:justify-center lg:space-x-28 lg:space-y-0 lg:px-0">
        {/* Text */}
        <div className="flex flex-col items-center space-y-4 text-center lg:items-start lg:text-left">
          <div className="flex w-max items-center rounded-lg bg-gray-5 px-4 py-2">
            <p className="text-xl font-medium text-gray-80">{textContent.label}</p>
          </div>
          <div className="flex w-full max-w-[533px] flex-col space-y-8">
            <h1 className="text-6xl font-semibold leading-tight">
              {textContent.title.normalText}
              <span className="text-primary">{textContent.title.blueText}</span>
            </h1>
            <p className="text-xl text-gray-80">{textContent.description}</p>
            {/* CTA Section */}
            <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start">
              <div
                onClick={() => {
                  window.open(
                    'https://app.impact.com/campaign-promo-signup/Internxt.brand?execution=e3s1',
                    '_blank',
                    'nofollow',
                  );
                }}
                className="flex cursor-pointer items-center rounded-lg border border-primary bg-primary px-5 py-3 hover:bg-primary-dark"
              >
                <p className="text-lg font-medium text-white">{textContent.signUp}</p>
              </div>
              <div
                onClick={() => {
                  window.open('https://app.impact.com/login.user', '_blank', 'nofollow');
                }}
                className="flex cursor-pointer rounded-lg border border-primary bg-transparent px-5 py-3 hover:bg-blue-10"
              >
                <p className="text-lg font-medium text-primary">{textContent.logIn}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="flex justify-end">
          <Image
            width={496}
            height={520}
            src="/images/affiliates/internxt-private-cloud-storage-service.webp"
            alt="internxt private cloud storage service"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
