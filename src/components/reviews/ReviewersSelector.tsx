import { DARK_MODE_ENABLED } from '@/theme.config';
export type SwitchButtonOptions = 'Users' | 'Tech';
interface PlanSwitchProps {
  darkMode?: boolean;
  textContent: Record<string, any>;
  activeSwitchPlan: SwitchButtonOptions;
  onPlanTypeChange: (activeSwitchPlan: string) => void;
}

export const ReviewersSelector = ({
  darkMode = DARK_MODE_ENABLED,
  textContent,
  activeSwitchPlan,
  onPlanTypeChange,
}: PlanSwitchProps): JSX.Element => (
  <div id="reviewersButtons" className={`flex h-[38px] w-full flex-row rounded-lg bg-neutral-90/10 lg:w-[423.67px]`}>
    <button
      type="button"
      onClick={() => {
        onPlanTypeChange('Users');
      }}
      className={`flex w-1/2 flex-row items-center justify-center rounded-lg px-6 text-center text-sm transition-colors duration-200 ease-out lg:text-lg ${
        activeSwitchPlan === 'Users'
          ? `m-1 rounded-lg ${darkMode ? 'bg-[#1C1C1C]' : 'bg-white'} font-semibold text-primary shadow-sm`
          : `font-normal ${darkMode ? 'text-cool-gray-30' : 'text-gray-105'} `
      }`}
    >
      {textContent.Trustpilot}
    </button>

    <button
      type="button"
      onClick={() => {
        onPlanTypeChange('Tech');
      }}
      className={`flex w-1/2 flex-row items-center justify-center whitespace-nowrap rounded-lg px-6 text-center text-sm transition-colors  duration-200 ease-out lg:text-lg ${
        activeSwitchPlan === 'Tech'
          ? `m-1 rounded-lg ${darkMode ? 'bg-[#1C1C1C]' : 'bg-white'} font-semibold text-primary shadow-sm`
          : `font-normal ${darkMode ? 'text-cool-gray-30' : 'text-gray-105'}`
      }`}
    >
      {textContent.Techexperts}
    </button>
  </div>
);
