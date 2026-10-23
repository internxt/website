import { CloudObjectStorageText } from '@/assets/types/cloud-object-storage';
import { DARK_MODE_ENABLED } from '@/theme.config';

export type SwitchButtonOptions = 'Prosegur' | 'Europa Press' | 'SPAR';
interface PlanSwitchProps {
  darkMode?: boolean;
  textContent: CloudObjectStorageText['PartnersSection'];
  activePartner: SwitchButtonOptions;
  onPlanTypeChange: (activeSwitchPlan: SwitchButtonOptions) => void;
}

export const PartnerSelector = ({
  darkMode = DARK_MODE_ENABLED,
  textContent,
  activePartner,
  onPlanTypeChange,
}: PlanSwitchProps): JSX.Element => (
  <div id="billingButtons" className={`flex h-[38px] flex-row rounded-lg bg-neutral-90/10 lg:w-[423.67px]`}>
    <button
      type="button"
      onClick={() => {
        onPlanTypeChange('Prosegur');
      }}
      className={`flex w-1/2 flex-row items-center justify-center rounded-lg px-6 text-center text-lg  transition-colors duration-200 ease-out ${
        activePartner === 'Prosegur'
          ? `m-1 rounded-lg ${darkMode ? 'bg-[#1C1C1C]' : 'bg-white'} font-semibold text-primary shadow-sm`
          : `text-lg font-normal ${darkMode ? 'text-cool-gray-30' : 'text-gray-105'}`
      }`}
    >
      {textContent.companies[0]}
    </button>

    <button
      type="button"
      onClick={() => {
        onPlanTypeChange('Europa Press');
      }}
      className={`flex w-1/2 flex-row items-center justify-center whitespace-nowrap rounded-lg px-6 text-center text-lg  transition-colors duration-200 ease-out ${
        activePartner === 'Europa Press'
          ? `m-1 rounded-lg ${darkMode ? 'bg-[#1C1C1C]' : 'bg-white'} font-semibold text-primary shadow-sm`
          : `text-lg font-normal ${darkMode ? 'text-cool-gray-30' : 'text-gray-105'}`
      }`}
    >
      {textContent.companies[1]}
    </button>

    <button
      type="button"
      onClick={() => {
        onPlanTypeChange('SPAR');
      }}
      className={`flex w-1/2 flex-row items-center justify-center rounded-lg px-6 text-center text-lg  transition-colors duration-200 ease-out ${
        activePartner === 'SPAR'
          ? `m-1 rounded-lg ${darkMode ? 'bg-[#1C1C1C]' : 'bg-white'} font-semibold text-primary shadow-sm`
          : `text-lg font-normal ${darkMode ? 'text-cool-gray-30' : 'text-gray-105'}`
      }`}
    >
      {textContent.companies[2]}
    </button>
  </div>
);
