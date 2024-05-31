const CtaSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden bg-[url('/images/lifetime/celebration/normal-bg.png')] bg-cover bg-no-repeat">
      <div className="flex flex-col items-center justify-center py-12 px-5 pb-12 lg:px-20">
        <div className="flex flex-col text-center text-white">
          <p className="text-3xl font-semibold">{textContent.title}</p>
          <p className="pt-4 pb-5 text-base font-normal">{textContent.description}</p>
        </div>
        <button
          onClick={() => {
            window.location.href = `#payment`;
          }}
          className="flex max-w-[260px] cursor-pointer flex-col items-center rounded-lg bg-white text-center hover:bg-blue-10"
        >
          <p className="px-9 py-3 text-lg font-medium text-primary">{textContent.cta}</p>
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
