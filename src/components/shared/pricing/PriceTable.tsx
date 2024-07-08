import { Interval, ProductsDataProps } from '@/components/services/stripe.service';
import Header from '../Header';
import { PlanSwitch } from './components/PlanSwitch';
import { SwitchComponent } from './components/Switch';
import { Transition } from '@headlessui/react';
import CardSkeleton from '@/components/components/CardSkeleton';

interface PriceTableProps {
  textContent: Record<string, any>;
  products: ProductsDataProps;
  loadingCards: boolean;
  isIndividual: boolean;
  lang: string;
  backgroundColorComponent?: string;
}

export const PriceTable = ({
  textContent,
  products,
  loadingCards,
  isIndividual,
  lang,
  backgroundColorComponent = 'bg-white',
}: PriceTableProps): JSX.Element => {
  return (
    <section className={`overflow-hidden py-20 px-5 ${backgroundColorComponent}`}>
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-10 text-center" id="priceTable">
          <Header maxWidth="max-w-4xl">{textContent.title}</Header>
          <p className="mt-4 w-full max-w-3xl text-center text-xl text-gray-80">
            {!isIndividual && lang === 'en' ? `${textContent.businessDescription}` : `${textContent.planDescription}`}
          </p>
        </div>
        <div className="flex flex-col items-center space-y-9">
          {/* Switch buttons (Individual plans | Lifetime plans | Business) */}
          <PlanSwitch textContent={textContent.PlanSwitch} activeSwitchPlan="Individuals" onPlanTypeChange={() => {}} />

          {/* Switch buttons for Individual plans (Monthly | Annually) */}
          <SwitchComponent
            textContent={textContent.SwitchComponent}
            billedFrequency={Interval.Year}
            handleOnSwitchIsEnabled={() => {}}
            isIndividualSwitchEnabled
            labelDiscount=""
            showLabelDiscount
          />
        </div>

        <Transition
          show={isIndividual && loadingCards}
          enter="transition duration-500 ease-out"
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="flex flex-row flex-wrap items-end justify-center justify-items-center p-6 py-14">
            {Array(4)
              .fill(0)
              .map((n, i) => (
                <CardSkeleton />
              ))}
          </div>
        </Transition>
      </div>
    </section>
  );
};
