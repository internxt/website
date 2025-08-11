import { useState } from 'react';
import { Interval } from '@/services/stripe.service';
import { SwitchButtonOptions, SwitchStorageOptions } from '@/components/shared/pricing/components/PlanSelector';

export const usePlanSelection = (
  initialPlan: SwitchButtonOptions,
  initialStorage: SwitchStorageOptions,
  initialInterval: Interval,
  initialIntervalForBusiness: Interval,
  setPageName?: (pageName: string) => void,
) => {
  const [activeSwitchPlan, setActiveSwitchPlan] = useState<SwitchButtonOptions>(initialPlan);
  const [billingFrequency, setBillingFrequency] = useState<Interval>(initialInterval);
  const [businessBillingFrequency, setBusinessBillingFrequency] = useState<Interval>(initialIntervalForBusiness);
  const [activeStoragePlan, setAactiveStoragePlan] = useState<SwitchStorageOptions>(initialStorage);

  const onPlanTypeChange = (plan: SwitchButtonOptions, interval?: Interval) => {
    setActiveSwitchPlan(plan);
    if (interval) {
      setBillingFrequency(interval);
      setPageName?.(`Pricing Individuals ${interval}`);
    }
  };

  const onIndividualSwitchToggled = (interval: Interval) => {
    setBillingFrequency(interval);
  };

  const onBusinessSwitchToggled = (interval: Interval) => {
    setBusinessBillingFrequency(interval);
  };

  const onStorageChange = (storage: SwitchStorageOptions) => {
    setAactiveStoragePlan(storage);
  };

  return {
    activeSwitchPlan,
    billingFrequency,
    businessBillingFrequency,
    activeStoragePlan,
    onPlanTypeChange,
    onStorageChange,
    onIndividualSwitchToggled,
    onBusinessSwitchToggled,
  };
};
