import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';

interface FreePlanCardProps {
  textContent: any;
}

const FreePlanCard = ({ textContent }: FreePlanCardProps): JSX.Element => {
  const { openDialog } = useGlobalDialog();

  return (
    <>
      <div className="hidden h-[156px] w-full flex-col items-center justify-center gap-3 rounded-16 border border-gray-10 bg-white  text-center md:px-40 lg:flex lg:h-[156px] lg:px-56 xl:px-32">
        <div className="flex h-[78px] flex-col items-center justify-center text-start lg:h-[68px]  lg:justify-between">
          <p className="bg-white text-3xl font-semibold text-gray-95 lg:text-4xl">{textContent.eyeBrow}</p>
          <p className="text-sm font-normal text-gray-55">{textContent.description}</p>
        </div>

        <button
          className="flex h-[44px] w-[310px] items-center justify-center rounded-lg border border-primary bg-white text-center text-lg font-medium text-primary hover:bg-gray-1"
          onClick={() => {
            openDialog(GlobalDialog.FreeSpaceCardBanner);
          }}
        >
          {textContent.cta}
        </button>
      </div>
      <div className="flex h-[166px] flex-col items-center justify-center gap-3 rounded-16 border border-gray-10 bg-white px-1 text-center lg:hidden">
        <div className="flex h-[78px] flex-col items-center justify-center px-1 text-center">
          <p className="bg-white text-30 font-semibold text-gray-95">{textContent.eyeBrow}</p>
          <p className="w-[313px] text-sm font-normal text-gray-55">{textContent.mobileDescription}</p>
        </div>

        <button
          className="flex h-[44px] w-[296px] items-center justify-center rounded-lg border border-primary bg-white text-center text-lg font-medium text-primary hover:bg-gray-1"
          onClick={() => {
            openDialog(GlobalDialog.FreeSpaceCardBanner);
          }}
        >
          {textContent.cta}
        </button>
      </div>
    </>
  );
};

export default FreePlanCard;
