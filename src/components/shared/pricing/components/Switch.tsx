import { Interval } from '@/services/stripe.service';

export type SwitchStorageBusinessOptions = 'Standard' | 'Pro';

interface SwitchComponentProps {
  textContent: Record<string, any>;
  show: boolean;
  billedFrequency: any;
  activeStoragePlan: SwitchStorageBusinessOptions;
  lang: string;
  labelDiscount?: string;
  showLabelDiscount: boolean;
  darkMode?: boolean;
  handleOnSwitchIsToggled: (interval: Interval) => void;
  onBusinessStorageChange: (activeStoragePlan: SwitchStorageBusinessOptions) => void;
}

export const SwitchComponent = ({
  textContent,
  show,
  lang,
  billedFrequency,
  activeStoragePlan,
  handleOnSwitchIsToggled,
  onBusinessStorageChange,
}: SwitchComponentProps): JSX.Element => {
  const isAnnual = billedFrequency === Interval.Year || billedFrequency === Interval.Lifetime;
  const isMonthly = billedFrequency === Interval.Month;

  return (
    <div className={`${show ? 'flex' : 'hidden'} flex-col items-center gap-3`}>
      {/* Versión móvil - Monthly/Annually con diseño horizontal */}
      <div className="flex w-full flex-row items-center justify-center border-b-[1px] border-gray-10 py-2 text-base lg:hidden">
        <button
          type="button"
          onClick={() => handleOnSwitchIsToggled(Interval.Month)}
          className={`flex flex-row gap-3 rounded-lg px-6 py-0.5 font-semibold ${
            isMonthly ? `bg-primary/10 text-primary shadow-sm` : `text-cool-gray-50`
          }`}
        >
          {textContent.billingFrequency.monthly}
        </button>

        <button
          type="button"
          onClick={() => handleOnSwitchIsToggled(Interval.Year)}
          className={`flex flex-row gap-3 rounded-lg px-6 py-0.5 font-semibold ${
            isAnnual ? `bg-primary/10 text-primary shadow-sm` : `text-cool-gray-50`
          }`}
        >
          {textContent.billingFrequency.annually}
        </button>
      </div>

      {/* Versión desktop - Monthly/Annually con diseño toggle */}
      <div className="hidden h-[38px] w-[423px] flex-row rounded-lg bg-neutral-90/10 lg:flex">
        <button
          type="button"
          onClick={() => handleOnSwitchIsToggled(Interval.Month)}
          className={`flex w-1/2 flex-row items-center justify-center rounded-lg px-6 text-center text-lg font-semibold transition-colors duration-200 ease-out ${
            isMonthly ? 'm-1 rounded-lg bg-white text-primary shadow-sm' : 'text-lg font-normal text-gray-105'
          }`}
        >
          {textContent.billingFrequency.monthly}
        </button>

        <button
          type="button"
          onClick={() => handleOnSwitchIsToggled(Interval.Year)}
          className={`flex w-1/2 flex-row items-center justify-center rounded-lg px-6 text-center text-lg font-semibold transition-colors duration-200 ease-out ${
            isAnnual ? 'm-1 rounded-lg bg-white text-primary shadow-sm' : 'text-lg font-normal text-gray-105'
          }`}
        >
          {textContent.billingFrequency.annually}
        </button>
      </div>

      <div
        id="billingButtons"
        className={`flex w-full flex-row justify-between rounded-lg bg-cool-gray-10 p-0.5 lg:hidden`}
      >
        <button
          type="button"
          onClick={() => {
            onBusinessStorageChange('Standard');
          }}
          className={`rounded-6 flex w-1/2 flex-row items-center justify-center gap-3 rounded-lg px-3 py-1 text-sm ${
            activeStoragePlan === 'Standard'
              ? `bg-white font-semibold text-primary shadow-sm`
              : `font-regular text-cool-gray-50`
          }`}
        >
          {textContent.planStorage.standard}
        </button>
        <button
          type="button"
          onClick={() => {
            onBusinessStorageChange('Pro');
          }}
          className={`rounded-6 flex w-1/2 flex-row items-center justify-center gap-3 rounded-lg px-3 py-1 text-sm ${
            activeStoragePlan === 'Pro'
              ? `bg-white font-semibold text-primary shadow-sm`
              : `font-regular text-cool-gray-50`
          }`}
        >
          {textContent.planStorage.pro}
        </button>
      </div>
    </div>
  );
};
