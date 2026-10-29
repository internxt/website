import { CloudObjectStorageText } from '@/assets/types/cloud-object-storage';

export type SwitchButtonOptions = 'Prosegur' | 'Europa Press' | 'SPAR';
interface PlanSwitchProps {
  darkMode?: boolean;
  textContent: CloudObjectStorageText['PartnersSection'];
  activePartner: SwitchButtonOptions;
  onPlanTypeChange: (activeSwitchPlan: SwitchButtonOptions) => void;
}

export const PartnerSelector = ({
  darkMode = false,
  textContent,
  activePartner,
  onPlanTypeChange,
}: PlanSwitchProps): JSX.Element => {
  const bgClass = darkMode ? 'bg-[#1C1C1C]' : 'bg-white';
  const hoverClass = darkMode ? 'hover:bg-[#1C1C1C]/60' : 'hover:bg-white/60';
  const textClass = darkMode ? 'text-cool-gray-30' : 'text-gray-105';
  return (
    <div id="billingButtons" className={`flex h-[38px] flex-row rounded-lg bg-neutral-90/10 lg:w-[423.67px]`}>
      <button
        type="button"
        onClick={() => {
          onPlanTypeChange('Prosegur');
        }}
        className={`m-1 flex w-1/2 flex-row items-center justify-center rounded-lg px-6 text-center text-lg  transition-colors duration-200 ease-out ${
          activePartner === 'Prosegur'
            ? `${bgClass} font-semibold text-primary shadow-sm`
            : `text-lg font-normal ${textClass}`
        }`}
      >
        {textContent.companies[0]}
      </button>

      <button
        type="button"
        onClick={() => {
          onPlanTypeChange('Europa Press');
        }}
        className={`m-1 flex w-1/2 flex-row items-center justify-center whitespace-nowrap rounded-lg px-6 text-center text-lg  transition-colors duration-200 ease-out ${
          activePartner === 'Europa Press'
            ? `${bgClass} font-semibold text-primary shadow-sm`
            : `text-lg font-normal ${textClass}`
        }`}
      >
        {textContent.companies[1]}
      </button>

      <button
        type="button"
        onClick={() => {
          onPlanTypeChange('SPAR');
        }}
        className={`m-1 flex w-1/2 flex-row items-center justify-center rounded-lg px-6 text-center text-lg  transition-colors duration-200 ease-out ${
          activePartner === 'SPAR'
            ? `${bgClass} font-semibold text-primary shadow-sm`
            : `text-lg font-normal ${textClass}`
        }`}
      >
        {textContent.companies[2]}
      </button>
    </div>
  );
};
