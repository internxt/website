import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';

interface FreePlanCardProps {
  textContent: any;
}

const FreePlanCard = ({ textContent }: FreePlanCardProps): JSX.Element => {
  const { openDialog } = useGlobalDialog();
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 rounded-2xl border border-gray-10 px-5 py-9 md:flex-row md:justify-between">
      <div className="flex flex-col space-y-5 text-center md:text-left">
        <div className="flex flex-row items-center gap-2">
          <div className="flex w-max flex-col items-center space-y-2 rounded-full bg-primary/7 px-5 py-2 text-center">
            <p className="text-xl font-medium text-primary">{textContent.freeForever}</p>
          </div>
          <p className="text-2xl font-bold text-gray-100">{textContent.getStarted}</p>
        </div>
        <div className="flex flex-row space-x-2 md:items-center">
          <img
            loading="lazy"
            className="mt-0.5 h-4 w-4 select-none"
            src="/icons/checkPrimary.svg"
            draggable="false"
            alt="check icon"
          />
          <p className="text-gray-80">{textContent.enjoy10gb}</p>
        </div>
      </div>

      <div className="flex">
        <button
          className="flex w-full flex-col rounded-lg border border-primary px-20 py-2.5 font-medium text-primary hover:bg-gray-1 active:bg-gray-5"
          onClick={() => {
            openDialog(GlobalDialog.FreeSpaceCardBanner);
          }}
        >
          {textContent.cta}
        </button>
      </div>
    </div>
  );
};

export default FreePlanCard;
