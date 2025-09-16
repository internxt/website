import { useState } from 'react';
import { Check, CaretDown } from '@phosphor-icons/react';

interface Plan {
  id: string;
  name: string;
  order: number;
}

interface CustomPlanSelectorProps {
  plans: Plan[];
  selectedPlan: string;
  onPlanChange: (planId: string) => void;
  currency: string;
  getPlanPrice: (planId: string) => string;
  billingText: string;
  ctaText: string;
  onCheckoutClick: () => void;
  isLeftColumn?: boolean;
  customBackgroundClass?: string;
}

export default function CustomPlanSelector({
  plans,
  selectedPlan,
  onPlanChange,
  currency,
  getPlanPrice,
  billingText,
  ctaText,
  onCheckoutClick,
  isLeftColumn = false,
  customBackgroundClass = 'bg-neutral-16',
}: CustomPlanSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedPlanData = plans.find((plan) => plan.id === selectedPlan);

  const handlePlanSelect = (planId: string) => {
    onPlanChange(planId);
    setIsOpen(false);
  };

  return (
    <div className="z-10 flex flex-col pt-10">
      <div
        className={`border border-neutral-25 p-4 ${customBackgroundClass} ${
          isLeftColumn ? 'rounded-tl-16 border-r-0' : 'rounded-tr-16'
        }`}
      >
        <div className="relative mb-4 border-b border-neutral-25 pb-1">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex w-full items-center justify-between bg-transparent p-0 text-left focus:outline-none"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
          >
            <span className="text-lg font-semibold text-primary">{selectedPlanData?.name || 'Select Plan'}</span>
            <CaretDown
              size={20}
              className={`text-primary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {isOpen && (
            <>
              <div className="fixed inset-0" onClick={() => setIsOpen(false)} />

              <div className="absolute left-0 top-full z-20 mt-2 w-full min-w-[140px] rounded-lg bg-white shadow-lg ">
                <ul className=" py-2" role="listbox">
                  {plans.map((plan) => (
                    <li key={plan.id} role="option">
                      <button
                        onClick={() => handlePlanSelect(plan.id)}
                        className="flex w-full items-center justify-between  px-4 py-2 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                      >
                        <span
                          className={`text-base font-medium ${
                            plan.id === selectedPlan ? 'text-gray-100' : 'text-gray-100'
                          }`}
                        >
                          {plan.name}
                        </span>
                        {plan.id === selectedPlan && <Check size={16} className="text-gray-100" weight="bold" />}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>

        <div className="mb-4">
          <div className="flex items-baseline gap-1">
            <span className="text-base font-bold text-gray-100">
              {currency}
              {getPlanPrice(selectedPlan)}
            </span>
            <span className="whitespace-nowrap text-xs text-gray-100">{billingText}</span>
          </div>
        </div>

        <button
          onClick={onCheckoutClick}
          className="h-12 w-full rounded-lg bg-primary font-semibold text-white transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 disabled:opacity-50"
          disabled={!selectedPlan}
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
}
