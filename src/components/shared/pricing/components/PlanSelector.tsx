import { Interval } from '@/services/stripe.service';
import { SealPercent } from '@phosphor-icons/react';
import { DARK_MODE_ENABLED } from '@/theme.config';

export type SwitchButtonOptions = 'Individuals' | 'Lifetime';
export type SwitchStorageOptions = 'Essential' | 'Premium' | 'Ultimate';
interface PlanSwitchProps {
  textContent: Record<string, any>;
  activeSwitchPlan: SwitchButtonOptions;
  hidePlanSelectorComponent?: boolean;
  isMonthly?: boolean;
  darkMode?: boolean;
  isIndividualsOffer?: boolean;
  isLifetimeOffer?: boolean;
  onPlanTypeChange: (activeSwitchPlan: string, billedFrequency?: Interval) => void;
}

export const PlanSelector = ({
  textContent,
  activeSwitchPlan,
  onPlanTypeChange,
  darkMode = DARK_MODE_ENABLED,
  isIndividualsOffer,
  isLifetimeOffer,
}: PlanSwitchProps): JSX.Element => {
  const bgClass = darkMode ? 'bg-[#1C1C1C]' : 'bg-white';
  const inactiveTextClass = darkMode ? 'text-white-95' : 'text-gray-105';

  return (
    <div id="billingButtons" className={`flex h-[38px] w-[423.67px] flex-row rounded-lg bg-neutral-90/10`}>
      <button
        type="button"
        onClick={() => {
          onPlanTypeChange('Individuals', Interval.Year);
        }}
        className={`flex w-1/2 flex-row items-center justify-center rounded-lg px-6 text-center text-lg  transition-colors duration-200 ease-out ${
          activeSwitchPlan === 'Individuals'
            ? `m-1 rounded-lg ${bgClass} font-semibold text-primary shadow-sm`
            : `text-lg font-normal ${inactiveTextClass}`
        }`}
      >
        {textContent.billingFrequency.annually}
      </button>

      <button
        type="button"
        onClick={() => {
          onPlanTypeChange('Lifetime', Interval.Lifetime);
        }}
        className={`flex w-1/2 flex-row items-center justify-center rounded-lg px-6 text-center text-lg  transition-colors duration-200 ease-out ${
          activeSwitchPlan === 'Lifetime'
            ? `m-1 rounded-lg ${bgClass} font-semibold text-primary shadow-sm`
            : `text-lg font-normal  ${inactiveTextClass}`
        }`}
      >
        {textContent.billingFrequency.lifetime}
      </button>
    </div>
  );
};
