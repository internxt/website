const CtaSection = ({ textContent }) => {
  return (
    <section
      style={{
        backgroundImage: 'url(/images/cyber-awareness/Background.svg)',
      }}
      className="overflow-hidden bg-primary bg-cover px-5 py-14"
    >
      <div className="flex flex-col items-center justify-center space-y-8 text-center">
        <div className="flex  max-w-[500px] flex-col items-center space-y-4 text-center text-white">
          <p className="text-4xl font-semibold">{textContent.title}</p>
        </div>
        <a
          href="/pricing"
          target={'_blank'}
          className="flex rounded-lg bg-white px-5 py-3 text-lg font-medium text-primary hover:bg-blue-10"
        >
          {textContent.cta}
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
