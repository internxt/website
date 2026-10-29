export type SwitchButtonOptions = 'Users' | 'Tech';
interface PlanSwitchProps {
  darkMode?: boolean;
  textContent: Record<string, any>;
  activeSwitchPlan: SwitchButtonOptions;
  onPlanTypeChange: (activeSwitchPlan: string) => void;
}

export const ReviewersSelector = ({
  darkMode = false,
  textContent,
  activeSwitchPlan,
  onPlanTypeChange,
}: PlanSwitchProps): JSX.Element => {
  const bgClass = darkMode ? 'bg-[#1C1C1C]' : 'bg-white';
  const hoverClass = darkMode ? 'hover:bg-[#1C1C1C]/60' : 'hover:bg-white/60';
  const textClass = darkMode ? 'text-cool-gray-30' : 'text-gray-105';
  return (
    <div id="reviewersButtons" className={`flex h-[38px] w-full flex-row rounded-lg bg-neutral-90/10 lg:w-[423.67px]`}>
      <button
        type="button"
        onClick={() => {
          onPlanTypeChange('Users');
        }}
        className={`m-1 flex w-1/2 flex-row items-center justify-center rounded-lg px-6 text-center text-sm transition-colors duration-200 ease-out lg:text-lg ${
          activeSwitchPlan === 'Users'
            ? `${bgClass} font-semibold text-primary shadow-sm`
            : `font-normal ${textClass} `
        }`}
      >
        {textContent.Trustpilot}
      </button>

      <button
        type="button"
        onClick={() => {
          onPlanTypeChange('Tech');
        }}
        className={`m-1 flex w-1/2 flex-row items-center justify-center whitespace-nowrap rounded-lg px-6 text-center text-sm transition-colors  duration-200 ease-out lg:text-lg ${
          activeSwitchPlan === 'Tech'
            ? `${bgClass} font-semibold text-primary shadow-sm`
            : `font-normal ${textClass}`
        }`}
      >
        {textContent.Techexperts}
      </button>
    </div>
  );
};
