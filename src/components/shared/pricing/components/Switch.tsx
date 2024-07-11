import { Interval } from '@/components/services/stripe.service';
import { Switch } from '@headlessui/react';

interface SwitchComponentProps {
  textContent: Record<string, any>;
  show: boolean;
  billedFrequency: any;
  lang: string;
  labelDiscount?: string;
  showLabelDiscount: boolean;
  handleOnSwitchIsToggled: (interval: Interval) => void;
}

const SAVE_LABEL = {
  en: 'Save up to',
  fr: "Économisez jusqu'à",
  de: 'Spare bis zu ',
  es: 'Ahorra hasta un',
  it: 'Risparmia fino a',
  ru: 'Экономьте до',
  zh: '省高达',
  'zh-tw': '節省高達 ',
};

export const SwitchComponent = ({
  textContent,
  show,
  lang,
  billedFrequency,
  showLabelDiscount,
  labelDiscount,
  handleOnSwitchIsToggled,
}: SwitchComponentProps): JSX.Element => {
  const isSwitchEnabled = billedFrequency === Interval.Year;

  return (
    <div className={`${show ? 'flex' : 'hidden'} flex-row items-start gap-5 lg:items-center`}>
      <p className={`text-base font-semibold ${!isSwitchEnabled ? 'text-gray-100' : 'text-gray-50'}`}>
        {textContent.billingFrequency.monthly}
      </p>

      <Switch
        checked={isSwitchEnabled}
        onChange={() => {
          handleOnSwitchIsToggled(isSwitchEnabled ? Interval.Month : Interval.Year);
        }}
        className={`${
          isSwitchEnabled ? 'bg-green' : 'bg-gray-10'
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span
          id="switchButton"
          className={`${
            isSwitchEnabled ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>

      <div className="relative flex flex-col lg:flex-row lg:items-center">
        <p className={`text-base font-semibold ${isSwitchEnabled ? 'text-gray-100' : 'text-gray-50'}`}>
          {textContent.billingFrequency.annually}
        </p>
        {showLabelDiscount ? (
          <p className="absolute top-full whitespace-nowrap font-semibold text-green-dark lg:top-0 lg:left-full lg:pl-1.5">
            {SAVE_LABEL[lang]} {labelDiscount}%
          </p>
        ) : null}
      </div>
    </div>
  );
};
