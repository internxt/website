import {
  CLI_UPDATES_LINK,
  GH_README_LINK,
  USER_GUIDE_LINK,
  RCLONE_README_LINK,
  RCLONE_USER_GUIDE_LINK,
  RCLONE_CLI_UPDATES_LINK,
} from '@/constants';
import { LinkTo } from '../drive/components/LinkTo';

export const HowToUseCLISection = ({ textContent, isRclone = false }) => {
  const cards = [
    {
      title: textContent.info[0].title,
      description: textContent.info[0].description,
      cta: textContent.info[0].cta,
      link: isRclone ? RCLONE_README_LINK : GH_README_LINK,
    },
    {
      title: textContent.info[1].title,
      description: textContent.info[1].description,
      cta: textContent.info[1].cta,
      link: isRclone ? RCLONE_USER_GUIDE_LINK : USER_GUIDE_LINK,
    },
    {
      title: textContent.info[2].title,
      description: textContent.info[2].description,
      cta: textContent.info[2].cta,
      link: isRclone ? RCLONE_CLI_UPDATES_LINK : CLI_UPDATES_LINK,
    },
  ];

  return (
    <section className="overflow-hidden px-5 py-20">
      <div className="flex flex-col items-center justify-center gap-12">
        <div className="flex max-w-[850px] flex-col gap-6 text-center lg:gap-12">
          <h2 className="text-30 font-semibold leading-tight text-gray-100 lg:text-3xl">{textContent.title}</h2>
          {isRclone ? (
            <>
              <div className="flex flex-col gap-3">
                <p className="text-start text-lg font-normal leading-tight text-gray-55">
                  {textContent.description[0]}
                </p>
                <p className="text-start text-lg font-normal text-gray-55">{textContent.description[1]}</p>
              </div>
              <p className="text-center text-2xl font-normal text-gray-95">{textContent.howToInstall}</p>
            </>
          ) : (
            <p className="text-xl text-gray-80">{textContent.description}</p>
          )}
        </div>
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex w-full max-w-[350px] flex-col justify-between rounded-2xl bg-gray-1 p-10"
            >
              <div className="flex flex-col gap-6">
                <p className="text-2xl font-medium text-gray-100">{card.title}</p>
                <p className="flex text-lg leading-tight text-gray-55">{card.description}</p>
              </div>

              <div className="mt-8">
                <LinkTo linkToRedirect={card.link} text={card.cta} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
