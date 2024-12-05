export type SwitchButtonOptions = 'Kamala' | 'Trump';

interface PlanSwitchProps {
  textContent: any;
  activeSwitchPlan?: SwitchButtonOptions;
  onPlanTypeChange?: (newPlan: SwitchButtonOptions) => void;
}

export const PlanSelector = ({ textContent, activeSwitchPlan, onPlanTypeChange }: PlanSwitchProps): JSX.Element => (
  <div id="billingButtons" className={`flex flex-row rounded-lg bg-cool-gray-10 p-0.5`}>
    <button
      type="button"
      onClick={() => onPlanTypeChange?.('Kamala')}
      className={`flex flex-row gap-3 rounded-lg px-6 py-0.5 font-semibold ${
        activeSwitchPlan === 'Kamala' ? 'bg-primary text-white shadow-sm' : 'text-cool-gray-50'
      }`}
    >
      {textContent.PlanSelector.Kamala}
    </button>
    <button
      type="button"
      onClick={() => onPlanTypeChange?.('Trump')}
      className={`flex flex-row items-center gap-3 rounded-lg px-6 py-0.5 font-semibold ${
        activeSwitchPlan === 'Trump' ? 'bg-red text-white shadow-sm' : 'text-cool-gray-50'
      }`}
    >
      {textContent.PlanSelector.Trump}
    </button>
  </div>
);
