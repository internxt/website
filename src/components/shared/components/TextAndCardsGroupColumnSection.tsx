import { ReactNode } from 'react';
import { CardGroup } from '../CardGroup';
import { Icon } from '@phosphor-icons/react';

interface TextAndCardGroupColumnSectionProps {
  TextComponent: ReactNode;
  cards: { icon: Icon; title: string; description: string }[];
  backgroundColorForCard?: string;
  background?: string;
  textCardColor?: string;
}

export const TextAndCardsGroupColumnSection = ({
  TextComponent,
  cards,
  backgroundColorForCard,
  background,
  textCardColor
}: TextAndCardGroupColumnSectionProps) => {
  return (
    <section className={`overflow-hidden ${background} px-5 py-20`}>
      <div className="flex flex-col items-center gap-16">
        {TextComponent}
        <CardGroup cards={cards} backgroundColorCard={backgroundColorForCard} textColor={textCardColor} />
      </div>
    </section>
  );
};
