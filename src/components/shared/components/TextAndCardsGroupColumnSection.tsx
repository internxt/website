import { ReactNode } from 'react';
import { CardGroup } from '../CardGroup';

interface TextAndImageColumnSectionProps {
  TextComponent: ReactNode;
  cards: any[];
  backgroundColorForCard?: string;
  background?: string;
}

export const TextAndCardsGroupColumnSection = ({
  TextComponent,
  cards,
  backgroundColorForCard,
  background,
}: TextAndImageColumnSectionProps) => {
  return (
    <section className={`overflow-hidden ${background} px-5 py-20`}>
      <div className="flex flex-col items-center gap-16">
        {TextComponent}
        <CardGroup cards={cards} backgroundColorCard={backgroundColorForCard} />
      </div>
    </section>
  );
};
