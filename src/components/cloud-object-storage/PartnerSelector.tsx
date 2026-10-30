import { CloudObjectStorageText } from '@/assets/types/cloud-object-storage';

export type SwitchButtonOptions = 'Prosegur' | 'Europa Press' | 'SPAR';
interface PlanSwitchProps {
  textContent: CloudObjectStorageText['PartnersSection'];
  activePartner: SwitchButtonOptions;
  onPlanTypeChange: (activeSwitchPlan: SwitchButtonOptions) => void;
}

export const PartnerSelector = ({
  textContent,
  activePartner,
  onPlanTypeChange,
}: PlanSwitchProps): JSX.Element => {
  const bgClass = 'bg-white dark:bg-gray-95';
  const textClass = 'text-gray-105 dark:text-cool-gray-30';
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
