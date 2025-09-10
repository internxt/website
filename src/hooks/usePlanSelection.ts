import { useState } from 'react';
import { Interval } from '@/services/stripe.service';
import { SwitchButtonOptions, SwitchStorageOptions } from '@/components/shared/pricing/components/PlanSelector';
import { SwitchStorageBusinessOptions } from '@/components/shared/pricing/components/Switch';

export const usePlanSelection = (
  initialPlan: SwitchButtonOptions,
  initialStorage: SwitchStorageOptions,
  initialBusinessStorage: SwitchStorageBusinessOptions,
  initialInterval: Interval,
  initialIntervalForBusiness: Interval,
  setPageName?: (pageName: string) => void,
) => {
  const [activeSwitchPlan, setActiveSwitchPlan] = useState<SwitchButtonOptions>(initialPlan);
  const [billingFrequency, setBillingFrequency] = useState<Interval>(initialInterval);
  const [businessBillingFrequency, setBusinessBillingFrequency] = useState<Interval>(initialIntervalForBusiness);
  const [activeStoragePlan, setAactiveStoragePlan] = useState<SwitchStorageOptions>(initialStorage);
  const [activeBusinessStoragePlan, setBusinessAactiveStoragePlan] =
    useState<SwitchStorageBusinessOptions>(initialBusinessStorage);

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

  const onBusinessStorageChange = (storage: SwitchStorageBusinessOptions) => {
    setBusinessAactiveStoragePlan(storage);
  };

  return {
    activeSwitchPlan,
    billingFrequency,
    businessBillingFrequency,
    activeStoragePlan,
    activeBusinessStoragePlan,
    onPlanTypeChange,
    onStorageChange,
    onBusinessStorageChange,
    onIndividualSwitchToggled,
    onBusinessSwitchToggled,
  };
};
