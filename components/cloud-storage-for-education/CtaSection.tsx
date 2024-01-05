const CtaSection = ({ textContent, maxWidth }: { textContent: any; maxWidth?: string }) => {
  return (
    <section
      style={{
        backgroundImage: 'url(/images/cyber-awareness/Background.svg)',
      }}
      className="overflow-hidden bg-primary bg-cover px-5 py-14"
    >
      <div className="flex flex-col items-center justify-center space-y-8 text-center">
        <div className={`flex  ${maxWidth && maxWidth} flex-col items-center space-y-4 text-center text-white`}>
          <p className="text-4xl font-semibold">{textContent.title}</p>
          <p className="w-full max-w-[573px] text-xl font-normal">{textContent.description}</p>
        </div>
        <button
          className="flex rounded-lg bg-white px-5 py-3 text-lg font-medium text-primary hover:bg-blue-10"
          onClick={() => {
            window.scrollTo({
              top: document.getElementById('discountCard').offsetTop,
              behavior: 'smooth',
            });
          }}
        >
          {textContent.cta}
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
