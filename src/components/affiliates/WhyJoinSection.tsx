import { Cookie, Crosshair, HandCoins, SketchLogo, TrendUp, UsersThree } from '@phosphor-icons/react';
import RevealY from '@/components/components/RevealY';

function PaintedText({ text }): JSX.Element {
  if (!text) return <></>;

  if (!text.includes('$299')) return <p className="text-lg font-medium text-gray-100 lg:text-2xl">{text}</p>;

  const title = text.split('$299')[0];
  const title2 = text.split('$299')[1];
  const blueText = text.substr(text.indexOf('$299'), 4);

  return (
    <p className="text-base font-medium leading-tight text-gray-100 lg:text-2xl">
      {title}
      <span className="text-primary">{blueText}</span>
      {title2}
    </p>
  );
}

const WhyJoinSection = ({ textContent }) => {
  const cards = [
    {
      icon: HandCoins,
      title: textContent.cards[0].title,
    },
    {
      icon: UsersThree,
      title: textContent.cards[1].title,
    },
    {
      icon: Cookie,
      title: textContent.cards[2].title,
    },
    {
      icon: SketchLogo,
      title: textContent.cards[3].title,
    },
    {
      icon: Crosshair,
      title: textContent.cards[4].title,
    },
    {
      icon: TrendUp,
      title: textContent.cards[5].title,
    },
  ];

  return (
    <section className="overflow-hidden bg-gray-1 py-20">
      <div className="flex flex-col items-center justify-center space-y-20 px-5">
        <p className="text-center text-30 font-semibold leading-tight lg:text-3xl">{textContent.title}</p>
        <div className="flex flex-col items-center justify-center space-y-9">
          <RevealY className="flex h-full w-full max-w-[850px] flex-row flex-wrap items-center justify-center gap-8">
            {cards.map((item) => (
              <div
                key={item.title}
                className="flex h-[221px] max-w-[256px] flex-col items-center space-y-6 rounded-2xl bg-white p-8 text-center lg:items-start lg:text-left"
              >
                <item.icon className="text-primary" size={32} />
                <PaintedText text={item.title} />
              </div>
            ))}
          </RevealY>
          <RevealY>
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
              <p className="text-base font-medium leading-tight text-white lg:text-lg">{textContent.cta}</p>
            </button>
          </RevealY>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
