import { goToSignUpURL } from '@/lib/auth';

const FreePlanCard = ({ textContent }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 rounded-2xl bg-white px-5 py-9 shadow-subtle md:flex-row md:justify-between">
      <div className="flex flex-col space-y-5 text-center md:text-left">
        <p className="text-2xl font-bold text-gray-100">{textContent.getStarted}</p>
        <div className="flex flex-row space-x-2 md:items-center">
          <img
            loading="lazy"
            className="mt-0.5 h-4 w-4 select-none"
            src="/icons/checkPrimary.svg"
            draggable="false"
            alt="check icon"
          />
          <p className="text-sm text-gray-80">{textContent.enjoy10gb}</p>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <div className="flex rounded-full bg-gray-5 py-0.5 px-3">
          <p className="font-semibold text-cool-gray-50">{textContent.upTo}</p>
        </div>
        <p className="text-4xl font-bold text-gray-100">{textContent.freeForever}</p>
      </div>
      <div className="flex">
        <button
          className="flex w-full flex-col rounded-lg bg-primary px-20 py-2.5 font-medium text-white"
          onClick={() => {
            goToSignUpURL();
          }}
        >
          {textContent.cta}
        </button>
      </div>
    </div>
  );
};

export default FreePlanCard;
