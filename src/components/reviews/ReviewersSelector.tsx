export type SwitchButtonOptions = 'Users' | 'Tech';
interface PlanSwitchProps {
  textContent: Record<string, any>;
  activeSwitchPlan: SwitchButtonOptions;
  onPlanTypeChange: (activeSwitchPlan: string) => void;
}

export const ReviewersSelector = ({
  textContent,
  activeSwitchPlan,
  onPlanTypeChange,
}: PlanSwitchProps): JSX.Element => (
  <div id="billingButtons" className={`flex h-[38px] flex-row rounded-lg bg-neutral-90/10 lg:w-[423.67px]`}>
    <button
      type="button"
      onClick={() => {
        onPlanTypeChange('Users');
      }}
      className={`flex w-1/2 flex-row items-center justify-center rounded-lg px-6 text-center text-lg  transition-colors duration-200 ease-out ${
        activeSwitchPlan === 'Users'
          ? `m-1 rounded-lg bg-white font-semibold text-primary shadow-sm`
          : `text-lg font-normal text-gray-105 `
      }`}
    >
      {textContent.Trustpilot}
    </button>

    <button
      type="button"
      onClick={() => {
        onPlanTypeChange('Tech');
      }}
      className={`flex w-1/2 flex-row items-center justify-center rounded-lg px-6 text-center text-lg  transition-colors duration-200 ease-out ${
        activeSwitchPlan === 'Tech'
          ? `m-1 rounded-lg bg-white font-semibold text-primary shadow-sm`
          : `text-lg font-normal text-gray-105`
      }`}
    >
      {textContent.Techexperts}
    </button>
  </div>
);
