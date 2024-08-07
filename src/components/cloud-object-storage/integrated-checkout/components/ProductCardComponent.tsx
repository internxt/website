import { PlanData } from '@/pages/cloud-object-storage/integrated-checkout';
import { Check } from '@phosphor-icons/react';
import bytes from 'bytes';
import { currency } from '@/components/services/currency.service';
import { IntegratedCheckoutText } from '@/assets/types/integrated-checkout';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';

interface ProductFeaturesComponentProps {
  textContent: IntegratedCheckoutText['productCard'];
  selectedPlan: PlanData;
}

const Separator = () => <div className="border border-gray-10" />;

export const ProductFeaturesComponent = ({ textContent, selectedPlan }: ProductFeaturesComponentProps): JSX.Element => {
  const totalBytes = bytes(selectedPlan.bytes);
  const features = textContent.planDetails.features;

  const planAmount = selectedPlan.decimalAmount;

  return (
    <div className="flex w-full flex-col space-y-4">
      <div className="flex w-full flex-row items-center justify-between space-x-4">
        <p className="text-2xl font-semibold text-gray-100">{textContent.title}</p>
        <div className="flex flex-row space-x-2">
          <Image
            src={getImage('/icons/guarantee-dark.svg')}
            width={146}
            height={48}
            alt="Guarantee Dark"
            draggable={false}
          />
        </div>
      </div>
      <div className="flex w-full rounded-2xl border border-gray-10 bg-white p-5">
        <div className="flex w-full flex-col space-y-5">
          <p>{textContent.selectedPlan}</p>
          <p className="text-2xl font-bold text-gray-100">{textContent.billed.lifetime}</p>
          {/* <div className="flex flex-row items-center justify-between text-gray-100">
              <p className="font-medium">{textContent.}</p>
              <p className="font-semibold">
                {planAmount}
                {priceValue[selectedPlan.currency]}
              </p>
            </div> */}
          <Separator />
          <div className="flex flex-col space-y-5">
            <p className="font-medium text-gray-100">{textContent.planDetails.title}</p>
            <div className="flex flex-col space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex flex-row items-center space-x-2">
                  <Check className="text-green-dark" size={16} weight="bold" />
                  <p className="text-gray-100">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          <Separator />
          <div className="flex flex-row items-center justify-between text-2xl font-semibold text-gray-100">
            <p>{textContent.total}</p>
            <p>
              {planAmount}
              {currency[selectedPlan.currency]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
