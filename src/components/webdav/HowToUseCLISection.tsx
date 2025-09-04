import { CLI_UPDATES_LINK, GH_README_LINK, USER_GUIDE_LINK } from '@/constants';
import { LinkTo } from '../drive/components/LinkTo';

export const HowToUseCLISection = ({ textContent }) => {
  const cards = [
    {
      title: textContent.info[0].title,
      description: textContent.info[0].description,
      cta: textContent.info[0].cta,
      link: GH_README_LINK,
    },
    {
      title: textContent.info[1].title,
      description: textContent.info[1].description,
      cta: textContent.info[1].cta,
      link: USER_GUIDE_LINK,
    },
    {
      title: textContent.info[2].title,
      description: textContent.info[2].description,
      cta: textContent.info[2].cta,
      link: CLI_UPDATES_LINK,
    },
  ];

  return (
    <section className="overflow-hidden px-5 py-20">
      <div className="flex flex-col items-center justify-center gap-12">
        <div className="flex max-w-[850px] flex-col gap-6 text-center">
          <h2 className="text-30 font-semibold leading-tight text-gray-100 lg:text-3xl">{textContent.title}</h2>
          <p className="text-xl text-gray-80">{textContent.description}</p>
        </div>
        <div className="flex w-full flex-row flex-wrap justify-center gap-8">
          {cards.map((card) => (
            <div className="flex w-full max-w-[350px] flex-col rounded-2xl bg-gray-1 p-10">
              <div className="flex flex-col  gap-6">
                <p className="text-2xl font-medium text-gray-100">{card.title}</p>
                <p className="text-lg text-gray-80">{card.description}</p>
                <LinkTo linkToRedirect={card.link} text={card.cta} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
