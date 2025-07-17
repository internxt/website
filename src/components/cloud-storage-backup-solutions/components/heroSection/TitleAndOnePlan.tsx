import { Check } from '@phosphor-icons/react';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';

interface TitleAndOnePlanProps {
  textContent: Record<string, any>;
  header?: JSX.Element;
  footer?: JSX.Element;
  lang: GetServerSidePropsContext['locale'];
}

const TitleAndOnePlan = ({ textContent, header }: TitleAndOnePlanProps): JSX.Element => {
  return (
    <div className="hidden max-w-[544px] flex-col pt-8 lg:flex lg:pt-24 ">
      {header ?? (
        <div className="flex flex-col gap-6 ">
          <div className="flex flex-col">
            <h1 className="text-3xl font-semibold text-gray-100 lg:text-5xl">
              {textContent.title.textBeforeBlueText}
              <span className="text-primary"> {textContent.title.blueText} </span>
              {textContent.title.textAfterBlueText}
            </h1>

            <p className="pt-4 text-xl text-white">
              <span className="   text-white">{textContent.description}</span>
            </p>
          </div>
          <div className="mx-auto flex flex-col lg:mx-0">
            {textContent.features.map((feat) => (
              <div key={feat} className="flex flex-row gap-2">
                <Check className="pt-2 text-green-1 lg:pt-0" weight="light" size={24} />
                <p className="text-left text-lg font-semibold text-white ">{feat}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-row justify-center gap-4 pt-10 lg:justify-start ">
        <div className="flex flex-col items-center lg:flex-row">
          <Link
            href={'/pricing'}
            className={`z-10 flex w-max justify-center rounded-lg bg-primary px-6 py-3 text-xl font-medium text-white hover:bg-primary-dark`}
          >
            {textContent.claimDeal}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TitleAndOnePlan;
