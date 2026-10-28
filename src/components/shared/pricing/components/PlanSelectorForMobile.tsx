import { Interval } from '@/services/stripe.service';
import { DARK_MODE_ENABLED } from '@/theme.config';

export type SwitchButtonOptions = 'Individuals' | 'Lifetime';
export type SwitchStorageOptions = 'Essential' | 'Premium' | 'Ultimate';

interface PlanSwitchProps {
  textContent: Record<string, any>;
  activeSwitchPlan: SwitchButtonOptions;
  activeStoragePlan: SwitchStorageOptions;
  hidePlanSelectorComponent?: boolean;
  isMonthly?: boolean;
  darkMode?: boolean;
  hideBillingController?: boolean;
  hideStorageSelector?: boolean;
  onPlanTypeChange: (activeSwitchPlan: string, billedFrequency?: Interval) => void;
  onStorageChange: (activeStoragePlan: string) => void;
}

export const PlanSelectorForMobile = ({
  textContent,
  activeSwitchPlan,
  activeStoragePlan,
  onPlanTypeChange,
  onStorageChange,
  darkMode = DARK_MODE_ENABLED,

  hideBillingController,
  hideStorageSelector,
}: PlanSwitchProps): JSX.Element => {
  const textClass = darkMode ? 'text-cool-gray-30' : 'text-cool-gray-50';
  return (
    <>
      {!hideBillingController && (
        <div
          className={`flex w-full flex-row items-center justify-center border-b-[1px] ${
            darkMode ? 'border-gray-71' : 'border-gray-10'
          } py-2 text-base`}
        >
          <button
            type="button"
            onClick={() => {
              onPlanTypeChange('Individuals', Interval.Year);
            }}
            className={`flex flex-row gap-3 rounded-lg px-6 py-0.5 font-semibold ${
              activeSwitchPlan === 'Individuals' ? `bg-primary/10 text-primary shadow-sm` : textClass
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
              activeSwitchPlan === 'Lifetime' ? `bg-primary/10 text-primary shadow-sm` : textClass
            }`}
          >
            {textContent.billingFrequency.lifetime}
          </button>
        </div>
      )}

      {!hideStorageSelector && (
        <div
          id="billingButtons"
          className={`flex w-[345px] flex-row justify-between rounded-lg ${
            darkMode ? 'bg-gray-80' : 'bg-cool-gray-10'
          } p-0.5`}
        >
          <button
            type="button"
            onClick={() => {
              onStorageChange('Essential');
            }}
            className={`rounded-6 flex w-[107px] flex-row items-center justify-center gap-3 rounded-lg px-3 py-1 text-sm ${
              activeStoragePlan === 'Essential'
                ? `bg-white font-semibold text-primary shadow-sm`
                : `font-regular ${textClass} `
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
                : `font-regular ${textClass}`
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
                : `font-regular ${textClass}`
            }`}
          >
            {textContent.planStorage.ultimate}
          </button>
        </div>
      )}
    </>
  );
};
