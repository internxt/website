import { Interval } from '@/services/stripe.service';

export type SwitchButtonOptions = 'Individuals' | 'Lifetime' | 'Business';
export type SwitchStorageOptions = 'Essential' | 'Premium' | 'Ultimate';

interface PlanSwitchProps {
  textContent: Record<string, any>;
  activeSwitchPlan: SwitchButtonOptions;
  activeStoragePlan: SwitchStorageOptions;
  hidePlanSelectorComponent?: boolean;
  hideBusinessSelector?: boolean;
  isMonthly?: boolean;
  darkMode?: boolean;
  hideBillingController?: boolean;
  onPlanTypeChange: (activeSwitchPlan: string, billedFrequency?: Interval) => void;
  onStorageChange: (activeStoragePlan: string) => void;
}

export const PlanSelectorForMobile = ({
  textContent,
  activeSwitchPlan,
  activeStoragePlan,
  hideBusinessSelector,
  onPlanTypeChange,
  onStorageChange,
  darkMode,

  hideBillingController,
}: PlanSwitchProps): JSX.Element => (
  <>
    {!hideBillingController && (
      <div className={`flex w-full flex-row items-center justify-center border-b-[1px] border-gray-10 py-2 text-base`}>
        <button
          type="button"
          onClick={() => {
            onPlanTypeChange('Individuals', Interval.Year);
          }}
          className={`flex flex-row gap-3 rounded-lg px-6 py-0.5 font-semibold ${
            activeSwitchPlan === 'Individuals' ? `bg-primary/10 text-primary shadow-sm` : `text-cool-gray-50`
          }`}
        >
          {textContent.billingFrequency.annually}
        </button>

        <button
          type="button"
          onClick={() => {
            onPlanTypeChange('Lifetime', Interval.Lifetime);
          }}
          className={`flex flex-row gap-3 rounded-lg px-6 py-0.5 font-semibold ${
            activeSwitchPlan === 'Lifetime' ? `bg-primary/10 text-primary shadow-sm` : `text-cool-gray-50`
          }`}
        >
          {textContent.billingFrequency.lifetime}
        </button>

        <button
          type="button"
          onClick={() => {
            onPlanTypeChange('Business');
          }}
          className={`rounded-2xl py-0.5 ${
            hideBusinessSelector ? 'hidden' : 'flex'
          } flex-row gap-3 px-6 font-semibold ${
            activeSwitchPlan === 'Business'
              ? `${darkMode ? 'bg-gray-100 text-white' : 'bg-white text-cool-gray-80'} shadow-sm`
              : `${darkMode ? 'text-gray-40' : 'text-cool-gray-50'}`
          }`}
        >
          {textContent.billingFrequency.business}
        </button>
      </div>
    )}
    {activeSwitchPlan === 'Lifetime' && (
      <p className="px-10 text-center text-sm font-normal text-gray-55">{textContent.lifetimeDescription}</p>
    )}
    <div id="billingButtons" className={`flex w-[345px] flex-row justify-between rounded-lg bg-cool-gray-10 p-0.5`}>
      <button
        type="button"
        onClick={() => {
          onStorageChange('Essential');
        }}
        className={`rounded-6 flex w-[107px] flex-row items-center justify-center gap-3 rounded-lg px-3 py-1 text-sm ${
          activeStoragePlan === 'Essential'
            ? `bg-white font-semibold text-primary shadow-sm`
            : `font-regular text-cool-gray-50`
        }`}
      >
        {textContent.planStorage.essential}
      </button>
      <button
        type="button"
        onClick={() => {
          onStorageChange('Premium');
        }}
        className={`rounded-6 flex w-[107px] flex-row items-center justify-center gap-3 rounded-lg px-3 py-1 text-sm ${
          activeStoragePlan === 'Premium'
            ? `bg-white font-semibold text-primary shadow-sm`
            : `font-regular text-cool-gray-50`
        }`}
      >
        {textContent.planStorage.premium}
      </button>
      <button
        type="button"
        onClick={() => {
          onStorageChange('Ultimate');
        }}
        className={`rounded-6 flex w-[107px] flex-row items-center justify-center gap-3 rounded-lg px-3 py-1 text-sm ${
          activeStoragePlan === 'Ultimate'
            ? `bg-white font-semibold text-primary shadow-sm`
            : `font-regular text-cool-gray-50`
        }`}
      >
        {textContent.planStorage.ultimate}
      </button>
    </div>
  </>
);
