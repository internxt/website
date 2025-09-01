import { NumberOne, NumberThree, NumberTwo } from '@phosphor-icons/react';
import RevealY from '@/components/components/RevealY';

const FeatureSection = ({ textContent }): JSX.Element => {
  const cards = [
    {
      icon: NumberOne,
      title: textContent.cards[0].title,
      description: textContent.cards[0].description,
      cta: textContent.cards[0].cta,
    },
    {
      icon: NumberTwo,
      title: textContent.cards[1].title,
      description: textContent.cards[1].description,
    },
    {
      icon: NumberThree,
      title: textContent.cards[2].title,
      description: textContent.cards[2].description,
    },
  ];

  return (
    <section className="overflow-hidden bg-gray-1 py-20">
      <div className="flex flex-col items-center justify-center space-y-10 lg:space-y-20">
        <p className="text-center text-30 font-semibold lg:text-3xl">{textContent.title}</p>
        <RevealY className="flex w-full flex-row flex-wrap items-center justify-center gap-4 lg:gap-8">
          {cards.map((item) => (
            <div
              key={item.title}
              className="flex max-w-[350px] flex-col items-center space-y-6 rounded-2xl bg-white p-10 text-center lg:items-start lg:text-left"
            >
              <item.icon className="text-primary" size={32} />
              <p className="text-2xl font-medium text-gray-100">{item.title}</p>
              <p className="text-lg leading-tight text-gray-80">{item.description}</p>
              {item.cta && (
                <button
                  onClick={() => {
                    window.open(
                      'https://app.impact.com/campaign-promo-signup/Internxt.brand?execution=e3s1',
                      '_blank',
                      'noopener noreferrer nofollow',
                    );
                  }}
                  className="flex w-max cursor-pointer items-center rounded-lg border border-primary bg-primary px-5 py-3 hover:bg-primary-dark"
                >
                  <p className="text-lg font-medium text-white">{item.cta}</p>
                </button>
              )}
            </div>
          ))}
        </RevealY>
      </div>
    </section>
  );
};

export default FeatureSection;
