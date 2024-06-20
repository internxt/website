import { LockSimple, NumberCircleZero, ShieldCheck, Eye, Scales, ListChecks } from '@phosphor-icons/react';
import { CardGroup } from '../shared/CardGroup';

export const InxtFeaturesSection = ({ textContent }) => {
  const cards = [
    {
      icon: LockSimple,
      title: textContent.cards[0].title,
      description: textContent.cards[0].description,
    },
    {
      icon: ShieldCheck,
      title: textContent.cards[1].title,
      description: textContent.cards[1].description,
    },
    {
      icon: NumberCircleZero,
      title: textContent.cards[2].title,
      description: textContent.cards[2].description,
    },
    {
      icon: Eye,
      title: textContent.cards[3].title,
      description: textContent.cards[3].description,
    },
    {
      icon: Scales,
      title: textContent.cards[4].title,
      description: textContent.cards[4].description,
    },
    {
      icon: ListChecks,
      title: textContent.cards[5].title,
      description: textContent.cards[5].description,
    },
  ];

  return (
    <section className="overflow-hidden py-20 px-5">
      <div className="flex flex-col items-center gap-20">
        <div className="flex max-w-[850px] flex-col gap-6 text-center">
          <h2 className="text-5xl font-semibold leading-tight text-gray-100">{textContent.title}</h2>
          <p className="text-xl text-gray-80">{textContent.description}</p>
        </div>
        <CardGroup cards={cards} />
      </div>
    </section>
  );
};
