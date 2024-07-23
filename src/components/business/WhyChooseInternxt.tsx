import { Eye, NumberCircleZero, Scales, UserGear } from '@phosphor-icons/react';
import { CardGroup } from '../shared/CardGroup';

interface WhyChooseInternxtForBusinessProps {
  textContent: any;
}

export const WhyChooseInternxtForBusiness = ({ textContent }: WhyChooseInternxtForBusinessProps): JSX.Element => {
  const cards = [
    {
      icon: Scales,
      title: textContent.cards[0].title,
      description: textContent.cards[0].description,
    },
    {
      icon: NumberCircleZero,
      title: textContent.cards[1].title,
      description: textContent.cards[1].description,
    },
    {
      icon: UserGear,
      title: textContent.cards[2].title,
      description: textContent.cards[2].description,
    },
    {
      icon: Eye,
      title: textContent.cards[3].title,
      description: textContent.cards[3].description,
    },
  ];

  return (
    <section className="overflow-hidden bg-gray-1 py-20 px-5">
      <div className="flex flex-col items-center justify-center gap-20">
        {/* Banner */}

        {/* Title and description */}
        <div className="flex w-full max-w-[774px] flex-col items-center justify-center gap-6 text-center">
          <h2 className="text-5xl font-semibold text-gray-100">{textContent.title}</h2>
          <h3 className="text-xl text-gray-80">{textContent.description}</h3>
        </div>

        {/* Cards */}
        <CardGroup cards={cards} backgroundColorCard="bg-white" />
      </div>
    </section>
  );
};
