import { ShieldCheck } from '@phosphor-icons/react';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';

interface TitleAndOnePlanProps {
  textContent: Record<string, any>;
  header?: JSX.Element;
  footer?: JSX.Element;
  lang: GetServerSidePropsContext['locale'];
}

const TitleAndOnePlan = ({ textContent, header, footer }: TitleAndOnePlanProps): JSX.Element => {
  return (
    <div className="hidden max-w-[544px] flex-col pt-8 lg:flex lg:pt-24 ">
      {header ?? (
        <div className="flex flex-col gap-6 ">
          <div className="flex flex-col">
            <h1 className="text-3xl font-semibold text-gray-100 lg:text-5xl">
              {textContent.title.textAfterBlueText}
              <span className="text-primary">{textContent.title.blueText}</span>
              {textContent.title.textBeforeBlueText}
            </h1>

            <p className="pt-4 text-xl text-white">
              <span className="text-gray-100   text-white">{textContent.description}</span>
            </p>
          </div>
        </div>
      )}

      <div className="flex flex-row justify-center gap-4 pt-4 lg:justify-start ">
        <div className="flex flex-col items-center lg:flex-row">
          <Link
            href={'/pricing'}
            className={`z-10 flex w-max justify-center rounded-lg bg-primary px-6 py-3 text-xl font-medium text-white hover:bg-primary-dark`}
          >
            {textContent.claimDeal}
          </Link>
        </div>
      </div>

      {footer ?? (
        <div className="flex flex-row items-center justify-center space-x-3 pt-10 text-gray-100 lg:justify-start">
          <ShieldCheck size={24} color="#32C356" weight="fill" />
          <p className="whitespace-nowrap text-gray-100 text-white  lg:text-lg">{textContent.guarantee}</p>
        </div>
      )}
    </div>
  );
};

export default TitleAndOnePlan;
