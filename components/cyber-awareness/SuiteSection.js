import React from 'react';

const SuiteSection = ({ textContent }) => {
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
      <div className="flex flex-col items-center space-y-20 p-20">
        <p className="text-center text-4xl font-semibold md:w-full md:max-w-xl">{textContent.title}</p>
        <div className="grid w-full grid-cols-1 justify-items-center gap-x-10 gap-y-20 md:grid-cols-2 xl:gap-x-20">
          {suiteCards.map((card, index) => (
            <div key={index} className="flex w-96 flex-col space-y-3">
              <img src={card.img} width={32} height={32} />
              <p className="text-2xl font-medium">{card.title}</p>
              <p className="text-lg font-normal">{card.body}</p>
            </div>
          ))}
        </div>
        <div className="flex h-80 w-full max-w-3xl flex-col items-center justify-between rounded-3xl bg-gradient-to-t from-primary to-primary-dark md:flex-row">
          <div className="flex h-32 w-96 flex-col justify-center p-16">
            <p className="text-3xl font-semibold text-white">{textContent.panel.title}</p>
            <p className="pt-2 text-lg font-light text-white">{textContent.panel.body}</p>
            <div className="flex pt-8">
              <a href="/images/cyber-awareness/Checklist.pdf" download={true}>
                <button className="h-10 w-40 rounded-full bg-white px-6 py-2 text-primary">
                  {textContent.panel.button}
                </button>
              </a>
            </div>
          </div>
          <img src={'/images/cyber-awareness/Checklist-image.svg'} className="pr-24" />
        </div>
      </div>
    </section>
  );
};

export default SuiteSection;
