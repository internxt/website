import Link from 'next/link';

export const EncryptedVPNSection = ({ textContent, bannerText }) => {
  return (
    <section className="flex flex-col items-center justify-center space-y-12 overflow-hidden bg-gray-1 px-5 py-20">
      <div className="flex w-full max-w-[800px] flex-col items-center justify-center space-y-12 text-center">
        <p className="text-4xl font-semibold text-gray-100 lg:text-5xl">{textContent.title}</p>
        <div className="flex flex-col space-y-6">
          <p className="text-2xl font-medium text-gray-80">{textContent.subtitle}</p>
          <p className="text-lg text-gray-80">{textContent.description}</p>
        </div>
        <div className="flex w-full flex-col items-center justify-center space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
          <Link
            className="flex w-max rounded-lg bg-primary px-5 py-3 text-xl font-medium text-white hover:bg-primary-dark"
            href={'/pricing'}
          >
            {textContent.cta}
          </Link>
          <Link
            className="flex w-max rounded-lg bg-primary px-5 py-3 text-xl font-medium text-white hover:bg-primary-dark"
            href={
              'https://chromewebstore.google.com/detail/internxt-vpn-free-encrypt/dpggmcodlahmljkhlmpgpdcffdaoccni?pli=1'
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            {textContent.download}
          </Link>
        </div>
      </div>
    </section>
  );
};
