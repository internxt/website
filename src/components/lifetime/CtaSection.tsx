import styles from '@/components/black-friday/BF-HeroSection.module.scss';

const CtaSection = ({ textContent }) => {
  return (
    <section className={`overflow-hidden  bg-cover bg-no-repeat ${styles.linearGradient}`}>
      <div className="flex flex-col items-center justify-center px-5 py-12 pb-12 lg:px-20">
        <div className="flex flex-col text-center text-white">
          <p className="text-4xl font-semibold text-primary">{textContent.title}</p>
          <p className="pt-4 text-2xl font-semibold">{textContent.subtitle}</p>
          <p className="font-regular pb-5 pt-4 text-xl">{textContent.description}</p>
        </div>
        <button
          onClick={() => {
            window.location.href = `#payment`;
          }}
          className="flex max-w-[260px] cursor-pointer flex-col items-center rounded-lg bg-primary text-center  hover:bg-primary/75"
        >
          <p className="px-9 py-3 text-lg font-medium text-white">{textContent.cta}</p>
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
