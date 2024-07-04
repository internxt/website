import RevealY from '@/components/components/RevealY';
import { CaretRight } from '@phosphor-icons/react';

const InfoSection = ({
  textContent,
  lang,
  withoutCta,
  backgroundColor,
  redirect,
  cards,
}: {
  textContent: any;
  lang: string;
  cards: Record<string, any>[];
  withoutCta?: boolean;
  backgroundColor?: string;
  redirect?: string;
}) => {
  return (
    <section className={`overflow-hidden ${backgroundColor ?? ''}`}>
      <div className="flex flex-col items-center justify-center space-y-20 py-16 px-5">
        <div className="flex max-w-3xl flex-col items-center justify-center space-y-6 text-center text-black">
          <p className="mb-6 text-4xl font-semibold sm:text-5xl sm:leading-tight">{textContent.title}</p>
          <p className="text-xl text-gray-80">{textContent.description}</p>
          {!withoutCta && (
            <button
              className="flex cursor-pointer flex-row items-center justify-center space-x-1 text-lg font-semibold text-primary hover:underline"
              onClick={() => {
                window.open(
                  `${window.location.origin}${lang === 'en' ? '' : `/${lang}`}/${redirect ? redirect : 'about'}`,
                  '_blank',
                );
              }}
            >
              <p>{textContent.cta}</p>
              <CaretRight size={16} weight="bold" />
            </button>
          )}
        </div>
        <RevealY className="grid grid-cols-1 flex-row flex-wrap justify-center gap-8 sm:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`flex flex-col items-start justify-start rounded-2xl ${
                backgroundColor ? 'bg-white' : 'bg-gray-1'
              } p-8 sm:p-10 md:max-w-[488px]`}
            >
              <card.icon className="mb-6 text-4xl text-primary" size={32} />
              <div className="flex w-full max-w-[400px] flex-col">
                <p className="mb-6 text-2xl font-medium text-gray-100">{card.title}</p>
                <p className="text-base text-cool-gray-80 sm:text-lg">{card.description}</p>
              </div>
            </div>
          ))}
        </RevealY>
      </div>
    </section>
  );
};

export default InfoSection;
