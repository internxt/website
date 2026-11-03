const SuiteSection2 = ({ textContent }) => {
  const suiteCards = [
    {
      img: '/images/cyber-awareness/SuiteSection/card-1.svg',
      title: textContent.cards['title-1'],
      body: textContent.cards['body-1'],
    },
    {
      img: '/images/cyber-awareness/SuiteSection/card-2.svg',
      title: textContent.cards['title-2'],
      body: textContent.cards['body-2'],
    },
    {
      img: '/images/cyber-awareness/SuiteSection/card-3.svg',
      title: textContent.cards['title-3'],
      body: textContent.cards['body-3'],
    },
    {
      img: '/images/cyber-awareness/SuiteSection/card-4.svg',
      title: textContent.cards['title-4'],
      body: textContent.cards['body-4'],
    },
  ];

  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center space-y-20 p-10 px-2 sm:p-20">
        <p className="text-center text-4xl font-semibold md:w-full md:max-w-xl">{textContent.title}</p>
        <div className="grid grid-cols-1 justify-items-center gap-x-40 gap-y-20 md:grid-cols-2">
          {suiteCards.map((card, index) => (
            <div key={index} className="flex w-72 flex-col space-y-4 px-2 sm:w-96">
              <img src={card.img} width={32} height={32} alt={`${card.title} image`} />
              <p className="text-2xl font-medium">{card.title}</p>
              <p className="text-lg font-normal">{card.body}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-row items-center justify-center rounded-3xl bg-gradient-to-t from-primary via-primary to-primary-dark p-16">
          <div className="flex flex-col justify-center p-5 text-center md:text-left">
            <p className="text-3xl font-semibold text-white">{textContent.panel.title}</p>
            <p className="max-w-sm pt-2 text-lg font-light text-white">{textContent.panel.body}</p>
            <div className="flex justify-center sm:pt-8 md:justify-start">
              <a href="/images/cyber-awareness/Internxt-Checklist.pdf" download={true}>
                <button className="rounded-lg bg-white px-6 py-2 text-primary hover:bg-gray-10">
                  {textContent.panel.button}
                </button>
              </a>
            </div>
          </div>
          <img
            src={'/images/cyber-awareness/Checklist-image.svg'}
            alt="Checklist image"
            className="hidden pl-16 pr-24 md:flex"
          />
        </div>
      </div>
    </section>
  );
};

export default SuiteSection2;
