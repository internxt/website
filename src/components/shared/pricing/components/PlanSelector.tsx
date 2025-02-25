import { Interval } from '@/components/services/stripe.service';
import { SealPercent } from '@phosphor-icons/react/dist/ssr';

export type SwitchButtonOptions = 'Individuals' | 'Lifetime';

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
  <div id="billingButtons" className={`flex flex-row rounded-2xl ${darkMode ? 'bg-gray-90' : 'bg-cool-gray-10'} p-0.5`}>
    <button
      type="button"
      onClick={() => {
        onPlanTypeChange('Individuals', Interval.Year);
      }}
      className={`flex flex-row gap-3 rounded-2xl px-6 py-0.5 font-semibold ${
        activeSwitchPlan === 'Individuals'
          ? `${darkMode ? 'bg-gray-100 text-white' : 'bg-white text-cool-gray-80'} shadow-sm`
          : `${darkMode ? 'text-gray-40' : 'text-cool-gray-50'}`
      }`}
    >
      {textContent.billingFrequency.annually}
      <SealPercent size={24} className="hidden text-green-1 sm:flex" weight="fill" />
    </button>
    <button
      type="button"
      onClick={() => {
        onPlanTypeChange('Lifetime', Interval.Lifetime);
      }}
      className={`flex flex-row items-center gap-3 rounded-2xl px-6 py-0.5 font-semibold ${
        activeSwitchPlan === 'Lifetime'
          ? `${darkMode ? 'bg-gray-100 text-white' : 'bg-white text-cool-gray-80'} shadow-sm`
          : `${darkMode ? 'text-gray-40' : 'text-cool-gray-50'}`
      }`}
    >
      {textContent.billingFrequency.lifetime}
    </button>
  </div>
);
