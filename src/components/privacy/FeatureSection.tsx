import { Eye, Fingerprint, Globe, LockKey, ShieldCheck, UserCircle } from '@phosphor-icons/react';
import RevealY from '@/components/components/RevealY';

const FeatureSection = ({ textContent }) => {
  const cards = [
    {
      icon: Eye,
      title: textContent.cards.openSource.title,
      description: textContent.cards.openSource.description,
    },
    {
      icon: LockKey,
      title: textContent.cards.postQuantum.title,
      description: textContent.cards.postQuantum.description,
    },
    {
      icon: ShieldCheck,
      title: textContent.cards.zeroKnowledge.title,
      description: textContent.cards.zeroKnowledge.description,
    },
    {
      icon: Fingerprint,
      title: textContent.cards.gdpr.title,
      description: textContent.cards.gdpr.description,
    },
    {
      icon: UserCircle,
      title: textContent.cards.noUnwantedAccess.title,
      description: textContent.cards.noUnwantedAccess.description,
    },
    {
      icon: Globe,
      title: textContent.cards.freeTools.title,
      description: textContent.cards.freeTools.description,
    },
  ];

  return (
    <section className="overflow-hidden px-5">
      <div className="flex flex-col items-center justify-center space-y-16 py-20">
        <div className="flex max-w-[850px] flex-col items-center justify-center space-y-6 text-center">
          <p className="text-5xl font-semibold text-gray-100">{textContent.title}</p>
          <p className="text-xl text-gray-80">{textContent.description}</p>
        </div>
        <RevealY className="grid grid-cols-1 flex-row flex-wrap gap-8 sm:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`flex flex-col items-start justify-start rounded-2xl bg-gray-1 p-8 sm:p-10 md:max-w-[488px]`}
            >
              <card.icon className="mb-6 text-4xl text-primary" size={32} />
              <div className="flex w-full max-w-[408px] flex-col">
                <p className="mb-6 text-2xl font-medium text-gray-100">{card.title}</p>
                <p className="text-base text-gray-80 sm:text-lg">{card.description}</p>
              </div>
            </div>
          ))}
        </RevealY>
      </div>
    </section>
  );
};

export default FeatureSection;
