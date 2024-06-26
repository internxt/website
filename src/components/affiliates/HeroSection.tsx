import Image from 'next/legacy/image';

export const HeroSection = ({ textContent }) => (
  <section className="overflow-hidden lg:pt-12">
    <div className="w-full items-center justify-center px-4 lg:px-10 xl:px-32">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col space-y-10 px-5 py-20 lg:flex-row lg:justify-between lg:space-y-0 lg:px-0">
        {/* Text */}
        <div className="flex w-full flex-col items-center space-y-4 text-center lg:items-start lg:text-left">
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
              <button
                onClick={() => {
                  window.open(
                    'https://app.impact.com/campaign-promo-signup/Internxt.brand?execution=e3s1',
                    '_blank',
                    'noopener noreferrer nofollow',
                  );
                }}
                className="flex cursor-pointer items-center rounded-lg border border-primary bg-primary px-5 py-3 hover:bg-primary-dark"
              >
                <p className="text-lg font-medium text-white">{textContent.signUp}</p>
              </button>
              <button
                onClick={() => {
                  window.open('https://app.impact.com/login.user', '_blank', 'noopener noreferrer nofollow');
                }}
                className="flex cursor-pointer rounded-lg border border-primary bg-transparent px-5 py-3 hover:bg-blue-10"
              >
                <p className="text-lg font-medium text-primary">{textContent.logIn}</p>
              </button>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="flex w-full justify-center lg:justify-end">
          <Image
            width={496}
            height={520}
            src="/images/affiliates/internxt-private-cloud-storage-service.webp"
            alt="hero-section"
            draggable="false"
          />
        </div>
      </div>
    </div>
  </section>
);
