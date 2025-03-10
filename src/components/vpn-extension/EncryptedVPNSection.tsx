import SignUpBanner from '../banners/SignUpBanner';
import { RedirectButton } from '../shared/RedirectButton';
import { VPN_CHROME_WEB_STORE } from '@/constants';

export const EncryptedVPNSection = ({ textContent, bannerText }) => {
  return (
    <section className="flex flex-col items-center justify-center space-y-12 overflow-hidden bg-gray-1 px-5 py-20">
      <div className="flex w-full max-w-[800px] flex-col items-center justify-center space-y-12 text-center">
        <p className="text-5xl font-semibold text-gray-100">{textContent.title}</p>
        <div className="flex flex-col space-y-6">
          <p className="text-2xl font-medium text-gray-80">{textContent.subtitle}</p>
          <p className="text-lg text-gray-80">{textContent.description}</p>
        </div>
        <RedirectButton
          className="flex w-max rounded-lg bg-primary px-5 py-3 text-xl font-medium text-white hover:bg-primary-dark"
          url={VPN_CHROME_WEB_STORE}
        >
          {textContent.cta}
        </RedirectButton>
      </div>
    </section>
  );
};
