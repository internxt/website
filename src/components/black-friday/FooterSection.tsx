import styles from '@/components/black-friday/BF-HeroSection.module.scss';
import ButtonDeal from '@/components/black-friday/components/ButtonDeal';
import { HELP_CENTER_INXT_URL } from '@/constants';

const FooterSection = ({ textContent, lang }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col">
        <div className="relative flex flex-row items-center justify-center">
          <div className="z-10 flex max-w-[585px] flex-col items-center justify-center space-y-4 py-16 text-center text-white">
            <p className="text-5xl font-semibold">{textContent.FooterSection.title}</p>
            <div className="pt-4">
              <ButtonDeal lang={lang} />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center py-5">
          <p className="text-md font-medium text-gray-50">Copyright © 2023, Internxt Universal Technologies SL</p>
          <div className="flex flex-row space-x-5 text-gray-50">
            <a href="/privacy" className="text-sm">
              {lang !== 'es' ? <p>Privacy</p> : <p>Privacidad</p>}
            </a>
            <button
              onClick={() => {
                window.open(HELP_CENTER_INXT_URL, '_blank', 'noopener noreferrer');
              }}
              className="cursor-pointer text-sm"
            >
              {lang !== 'es' ? <p>Contact us</p> : <p>Contacta con nosotros</p>}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-0 left-0 -z-10 flex h-full w-screen ${styles.neonBlur} pointer-events-none origin-center`}
      />
    </section>
  );
};

export default FooterSection;
