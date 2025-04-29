export const CtaSection = ({ textContent }) => {
  const handleOnButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section
      className="overflow-hidden bg-cover bg-center bg-no-repeat px-5 py-14"
      style={{
        backgroundImage: `url('${getImage('/images/lifetime/celebration/normal-bg.png')}')`,
      }}
    >
      <div className="flex flex-col items-center justify-center space-y-8 text-center">
        <div className={`flex flex-col items-center space-y-4 text-center text-white`}>
          <p className="text-4xl font-semibold">{textContent.title}</p>
          <p className="w-full max-w-[573px] text-xl font-normal">{textContent.description}</p>
        </div>
        <button
          onClick={handleOnButtonClick}
          className="flex rounded-lg bg-white px-5 py-3 text-lg font-medium text-primary hover:bg-blue-10"
        >
          {textContent.cta}
        </button>
      </div>
    </section>
  );
};
