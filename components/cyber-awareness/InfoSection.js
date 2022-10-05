import React from 'react';

const InfoSection = ({ textContent }) => {
  const infoCards = [
    {
      img: '/images/cyber-awareness/InfoSection/card-1.svg',
      title: textContent.cards['card-1'],
    },
    {
      img: '/images/cyber-awareness/InfoSection/card-2.svg',
      title: textContent.cards['card-2'],
    },

    {
      img: '/images/cyber-awareness/InfoSection/card-3.svg',
      title: textContent.cards['card-3'],
    },
    {
      img: '/images/cyber-awareness/InfoSection/card-4.svg',
      title: textContent.cards['card-4'],
    },
    {
      img: '/images/cyber-awareness/InfoSection/card-5.svg',
      title: textContent.cards['card-5'],
    },
    {
      img: '/images/cyber-awareness/InfoSection/card-6.svg',
      title: textContent.cards['card-6'],
    },
    {
      img: '/images/cyber-awareness/InfoSection/card-7.svg',
      title: textContent.cards['card-7'],
    },
    {
      img: '/images/cyber-awareness/InfoSection/card-8.svg',
      title: textContent.cards['card-8'],
    },
  ];
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center bg-black bg-opacity-5 pt-20 md:p-20">
        <div className="flex flex-col items-center space-y-10">
          <p className="text-center text-3xl font-semibold md:w-full md:max-w-xl">{textContent.title}</p>
          <p className="p-5 text-center md:w-full md:max-w-2xl">{textContent.subTitle}</p>
          <p className="text-center text-3xl font-semibold md:w-full md:max-w-xl">{textContent.cards.title}</p>
          <div className="grid w-full grid-cols-1 justify-items-center gap-x-10 gap-y-20 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-10">
            {infoCards.map((card, index) => (
              <div key={index} className="flex h-48 w-64 flex-col justify-between rounded-2xl bg-white p-8">
                <img src={card.img} width={32} height={32} />
                <p className="text-2xl font-medium">{card.title}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col space-y-3 p-20">
            <p className="text-center text-2xl font-medium sm:text-left">{textContent.footer.title}</p>
            <div className="w-full max-w-2xl space-y-6 pt-3 text-justify sm:text-left">
              <p className="text-lg font-normal">{textContent.footer.body.part1}</p>
              <p className="text-lg font-normal">{textContent.footer.body.part2}</p>
              <p className="text-lg font-normal">{textContent.footer.body.part3}</p>
              <p className="text-lg font-normal">{textContent.footer.body.part4}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
