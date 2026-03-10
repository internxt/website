import React, { useEffect, useState } from 'react';
import { LinkTo } from '../../drive/components/LinkTo';

interface Card {
  cta: string;
  link: string;
}

interface RelationalLinksProps {
  textContent: {
    title: string;
    links: Card[];
  };
}

const shuffleData = (data: Card[]): Card[] => {
  const shuffled = [...data];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const RelationalLinks = ({ textContent }: RelationalLinksProps) => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    if (textContent?.links) {
      const shuffledLinks = shuffleData(textContent.links);
      setCards(shuffledLinks);
    }
  }, [textContent]);

  if (cards.length === 0) return null;

  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-20 lg:px-0">
      <h2 className="mb-14 text-center text-4xl font-semibold text-gray-100 lg:text-5xl">
        {textContent.title}
      </h2>
      <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.link}
            className="flex w-full max-w-[350px] flex-col justify-between whitespace-pre-wrap rounded-2xl bg-gray-1 p-10"
          >
            <LinkTo linkToRedirect={card.link} text={card.cta} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelationalLinks;