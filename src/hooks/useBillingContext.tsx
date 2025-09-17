import { createContext, useContext, ReactNode } from 'react';
import { usePlanSelection } from './usePlanSelection';
import { Interval } from '@/services/stripe.service';
import { SwitchButtonOptions, SwitchStorageOptions } from '@/components/shared/pricing/components/PlanSelector';
import { SwitchStorageBusinessOptions } from '@/components/shared/pricing/components/Switch';

interface BillingContextType {
  billingFrequency: Interval;
  businessBillingFrequency: Interval;
  onIndividualSwitchToggled: (interval: Interval) => void;
  onBusinessSwitchToggled: (interval: Interval) => void;
  activeSwitchPlan: SwitchButtonOptions;
  activeStoragePlan: SwitchStorageOptions;
  activeBusinessStoragePlan: SwitchStorageBusinessOptions;
  onPlanTypeChange: (plan: SwitchButtonOptions) => void;
  onStorageChange: (storage: SwitchStorageOptions) => void;
  onBusinessStorageChange: (storage: SwitchStorageBusinessOptions) => void;
}

const BillingContext = createContext<BillingContextType | undefined>(undefined);

interface BillingProviderProps {
  children: ReactNode;
  handlePageNameUpdate?: (pageName: string) => void;
}

export const BillingProvider = ({ children, handlePageNameUpdate }: BillingProviderProps) => {
  const planSelectionData = usePlanSelection(
    'Lifetime',
    'Premium',
    'Pro',
    Interval.Lifetime,
    Interval.Year,
    handlePageNameUpdate,
  );

  return <BillingContext.Provider value={planSelectionData}>{children}</BillingContext.Provider>;
};

export const useBilling = () => {
  const context = useContext(BillingContext);
  if (context === undefined) {
    throw new Error('useBilling must be used within a BillingProvider');
  }
  return context;
};
