import { PlanData } from '@/pages/cloud-object-storage/checkout';
import { Check, X } from '@phosphor-icons/react';
import { currency } from '@/components/services/currency.service';
import { IntegratedCheckoutText } from '@/assets/types/integrated-checkout';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { useState } from 'react';
import { Transition } from '@headlessui/react';
import TextInput from '@/components/components/TextInput';
import { PromoCodeProps } from '@/lib/types';

interface ProductFeaturesComponentProps {
  textContent: IntegratedCheckoutText['productCard'];
  selectedPlan: PlanData;
  onRemoveAppliedCouponCode: () => void;
  onCouponInputChange: (promoCode: string) => void;
  couponError?: string;
  couponCodeData?: PromoCodeProps;
}

const Separator = () => <div className="border border-gray-10" />;

export const ProductFeaturesComponent = ({
  textContent,
  selectedPlan,
  onRemoveAppliedCouponCode,
  onCouponInputChange,
  couponError,
  couponCodeData,
}: ProductFeaturesComponentProps): JSX.Element => {
  const features = textContent.planDetails.features;

  const planAmount = selectedPlan.decimalAmount;
  const [openCouponCodeDropdown, setOpenCouponCodeDropdown] = useState<boolean>(false);
  const [couponName, setCouponName] = useState<string>('');

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
          <p className="text-2xl font-bold text-gray-100">Object storage - {textContent.billed.month}</p>
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
          <Separator />
          {couponCodeData ? (
            <div className="flex w-full flex-row justify-between">
              <p className={'font-medium text-gray-50'}>{textContent.addCoupon.inputText}</p>
              <div className="flex flex-row items-center gap-2">
                <p className="text-lg font-medium text-gray-50">{couponCodeData.name}</p>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    onRemoveAppliedCouponCode();
                  }}
                >
                  <X size={20} className="text-gray-50" />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setOpenCouponCodeDropdown(!openCouponCodeDropdown);
                }}
                className={'flex rounded-lg text-base transition-all duration-75 ease-in-out hover:underline'}
              >
                {textContent.addCoupon.buttonTitle}
              </button>
              <Transition
                show={openCouponCodeDropdown}
                className={'left-0'}
                enter="transition duration-50 ease-out"
                enterFrom="scale-98 opacity-0"
                enterTo="scale-100 opacity-100"
                leave="transition duration-50 ease-out"
                leaveFrom="scale-98 opacity-100"
                leaveTo="scale-100 opacity-0"
              >
                <div className="w-full items-center outline-none">
                  <div className="flex w-full flex-col items-start space-y-1">
                    <p className="text-sm text-gray-80">{textContent.addCoupon.inputText}</p>
                    <div className="flex w-full flex-row space-x-3">
                      <TextInput
                        value={couponName}
                        onChange={(e) => {
                          e.preventDefault();
                          setCouponName(e.target.value);
                        }}
                        placeholder={textContent.addCoupon.inputText}
                        min={0}
                        data-cy={'coupon-code-input'}
                        className={'inxt-input input-primary dark:bg-transparent'}
                      />
                      <button
                        className="w-full rounded-lg bg-primary px-4 py-2 text-white transition lg:w-1/3"
                        onClick={() => {
                          if (couponName) onCouponInputChange(couponName.toUpperCase().trim());
                        }}
                        disabled={!couponName.length}
                      >
                        {textContent.addCoupon.applyCodeButtonTitle}
                      </button>
                    </div>
                    {couponError && <p className="text-red-dark">{couponError}</p>}
                  </div>
                </div>
              </Transition>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
