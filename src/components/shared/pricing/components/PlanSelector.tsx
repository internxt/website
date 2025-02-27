import { Interval } from '@/components/services/stripe.service';

export type SwitchButtonOptions = 'Individuals' | 'Lifetime' | 'Business';

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
    <button
      type="button"
      onClick={() => {
        onPlanTypeChange('Business');
      }}
      className={`rounded-2xl py-0.5 ${hideBusinessSelector ? 'hidden' : 'flex'} flex-row gap-3 px-6 font-semibold ${
        activeSwitchPlan === 'Business'
          ? `${darkMode ? 'bg-gray-100 text-white' : 'bg-white text-cool-gray-80'} shadow-sm`
          : `${darkMode ? 'text-gray-40' : 'text-cool-gray-50'}`
      }`}
    >
      {textContent.billingFrequency.business}
      <SealPercent size={24} className="hidden text-green-1 sm:flex" weight="fill" />
    </button>
  </div>
);
