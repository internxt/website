import SignUpBanner from '../banners/SignUpBanner';
import Button from '../shared/Button';

export const EncryptedVPNSection = ({ textContent, bannerText }) => {
  return (
    <section className="flex items-center justify-center overflow-hidden bg-gray-1 px-5 py-20">
      <div className="flex w-full max-w-[800px] flex-col items-center justify-center space-y-12 text-center">
        <p className="text-5xl font-semibold text-gray-100">{textContent.title}</p>
        <div className="flex flex-col space-y-6">
          <p className="text-2xl font-medium text-gray-80">{textContent.subtitle}</p>
          <p className="text-lg text-gray-80">{textContent.description}</p>
        </div>
        <Button
          text={textContent.cta}
          onClick={() => {
            // NO OP RN
          }}
        />
        <SignUpBanner textContent={bannerText} lang="en" />
      </div>
    </section>
  );
};
