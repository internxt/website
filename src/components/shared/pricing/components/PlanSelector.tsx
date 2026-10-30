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
  darkMode = false,
  isIndividualsOffer,
  isLifetimeOffer,
}: PlanSwitchProps): JSX.Element => {
  const hoverClass = darkMode ? 'hover:bg-gray-95/60' : 'hover:bg-white/60 dark:hover:bg-gray-95/60';
  const trackClass = darkMode ? 'bg-gray-80' : 'bg-neutral-90/10 dark:bg-gray-80';
  const inactiveTextClass = darkMode ? 'text-white-95' : 'text-gray-105 dark:text-white-95';

  return (
    <div id="billingButtons" className={`flex h-[38px] w-[423.67px] flex-row rounded-lg ${trackClass}`}>
      <button
        type="button"
        onClick={() => {
          onPlanTypeChange('Individuals', Interval.Year);
        }}
        className={`m-1 flex w-1/2 flex-row items-center justify-center rounded-lg px-6 text-center text-lg  transition-colors duration-200 ease-out ${activeSwitchPlan === 'Individuals' ? `bg-white font-semibold text-primary shadow-sm` : `text-lg font-normal ${inactiveTextClass} ${hoverClass}`}`}
      >
        {textContent.billingFrequency.annually}
      </button>

      <button
        type="button"
        onClick={() => {
          onPlanTypeChange('Lifetime', Interval.Lifetime);
        }}
        className={`m-1 flex w-1/2 flex-row items-center justify-center rounded-lg px-6 text-center text-lg  transition-colors duration-200 ease-out ${activeSwitchPlan === 'Lifetime' ? `bg-white font-semibold text-primary shadow-sm` : `text-lg font-normal ${inactiveTextClass} ${hoverClass}`}`}
      >
        {textContent.billingFrequency.lifetime}
      </button>
    </div>
  );
};
