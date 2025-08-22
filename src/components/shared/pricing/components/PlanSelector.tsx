import { Interval } from '@/services/stripe.service';
import { SealPercent } from '@phosphor-icons/react';

export type SwitchButtonOptions = 'Individuals' | 'Lifetime' | 'Business';
export type SwitchStorageOptions = 'Essential' | 'Premium' | 'Ultimate';
interface PlanSwitchProps {
  textContent: Record<string, any>;
  activeSwitchPlan: SwitchButtonOptions;
  hidePlanSelectorComponent?: boolean;
  hideBusinessSelector?: boolean;
  isMonthly?: boolean;
  darkMode?: boolean;
  isIndividualsOffer?: boolean;
  isLifetimeOffer?: boolean;
  isBusinessOffer?: boolean;
  onPlanTypeChange: (activeSwitchPlan: string, billedFrequency?: Interval) => void;
}

export const PlanSelector = ({
  textContent,
  activeSwitchPlan,
  hideBusinessSelector,
  onPlanTypeChange,
  darkMode,
  isIndividualsOffer,
  isLifetimeOffer,
  isBusinessOffer,
}: PlanSwitchProps): JSX.Element => (
  <div id="billingButtons" className={`flex h-[38px] w-[423.67px] flex-row rounded-lg bg-neutral-90/10`}>
    <button
      type="button"
      onClick={() => {
        onPlanTypeChange('Individuals', Interval.Year);
      }}
      className={`flex w-1/2 flex-row items-center justify-center rounded-lg px-6 text-center text-lg font-semibold transition-colors duration-200 ease-out ${
        activeSwitchPlan === 'Individuals'
          ? `m-1 rounded-lg bg-white text-primary shadow-sm`
          : `text-lg font-normal text-gray-105`
      }`}
    >
      {textContent.billingFrequency.annually}
    </button>

    <button
      type="button"
      onClick={() => {
        onPlanTypeChange('Lifetime', Interval.Lifetime);
      }}
      className={`flex w-1/2 flex-row items-center justify-center rounded-lg px-6 text-center text-lg font-semibold transition-colors duration-200 ease-out ${
        activeSwitchPlan === 'Lifetime'
          ? `m-1 rounded-lg bg-white text-primary shadow-sm`
          : `text-lg font-normal text-gray-105`
      }`}
    >
      {textContent.billingFrequency.lifetime}
    </button>

    <button
      type="button"
      onClick={() => {
        onPlanTypeChange('Business');
      }}
      className={`duration-250 rounded-2xl py-0.5 transition-all ease-out ${
        hideBusinessSelector ? 'pointer-events-none w-0 overflow-hidden px-0 opacity-0' : 'flex w-auto px-6 opacity-100'
      } flex-row gap-3 font-semibold ${
        activeSwitchPlan === 'Business'
          ? `${darkMode ? 'bg-gray-100 text-white' : 'bg-white text-cool-gray-80'} shadow-sm`
          : `${darkMode ? 'text-gray-40' : 'text-cool-gray-50'}`
      }`}
    >
      <span className="whitespace-nowrap">{textContent.billingFrequency.business}</span>
    </button>
  </div>
);
