import { Interval } from '@/services/stripe.service';
import { SealPercent } from '@phosphor-icons/react';

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
  darkMode,
  isIndividualsOffer,
  isLifetimeOffer,
}: PlanSwitchProps): JSX.Element => (
  <div id="billingButtons" className={`flex h-[38px] w-[423.67px] flex-row rounded-lg bg-neutral-90/10`}>
    <button
      type="button"
      onClick={() => {
        onPlanTypeChange('Individuals', Interval.Year);
      }}
      className={`flex w-1/2 flex-row items-center justify-center rounded-lg px-6 text-center text-lg  transition-colors duration-200 ease-out ${
        activeSwitchPlan === 'Individuals'
          ? `m-1 rounded-lg bg-white font-semibold text-primary shadow-sm`
          : `text-lg font-normal ${darkMode ? 'text-white-95' : 'text-gray-105'}`
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
          ? `m-1 rounded-lg bg-white font-semibold text-primary shadow-sm`
          : `text-lg font-normal  ${darkMode ? 'text-white-95' : 'text-gray-105'}`
      }`}
    >
      {textContent.billingFrequency.lifetime}
    </button>
  </div>
);
