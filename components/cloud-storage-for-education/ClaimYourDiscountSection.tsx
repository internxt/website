import { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { Menu } from '@headlessui/react';

import TextInput from '../components/TextInput';
import RenderDescription from '../shared/RenderDescription';
import CheckboxItem from '../shared/CheckboxItem';
import { notificationService } from '../Snackbar';
import Dropdown from '../shared/Dropdown';
import Card from '../shared/Card';

const MenuItems = {
  annual: [
    { label: '200GB', value: '200GB annual' },
    { label: '2TB', value: '2TB annual' },
    { label: '5TB', value: '5TB annual' },
    { label: '10TB', value: '10TB annual' },
  ],
  monthly: [
    { label: '200GB', value: '200GB monthly' },
    { label: '2TB', value: '2TB monthly' },
    { label: '5TB', value: '5TB monthly' },
    { label: '10TB', value: '10TB monthly' },
  ],
};

const ClaimYourDiscountSection = ({ textContent, openBanner }) => {
  const [legalCheckbox, setLegalCheckbox] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [planRequested, setPlanRequested] = useState(null);
  const isButtonDisabled = !legalCheckbox || !name || !email || !planRequested;

  const cardTitle1 = textContent.card.title.split('50%')[0];
  const cardTitle2 = textContent.card.title.split('50%')[1];
  const blueTextCardTitle = textContent.card.title.substring(
    textContent.card.title.indexOf('50%'),
    textContent.card.title.indexOf('50%') + 3,
  );

  const handleCreatingTicket = async ({
    name,
    email,
    planRequested,
  }: {
    name: string;
    email: string;
    planRequested: string;
  }) => {
    const object = {
      ticket_type_id: 1,
      contacts: [
        {
          email: email,
        },
      ],
      ticket_attributes: {
        _default_title_: `Educational coupon code requested by ${name}`,
        _default_description_: `Customer ${name} with email ${email} is requesting an educational coupon code for ${planRequested} plan.`,
        Name: name,
        'Institutional Email Address': email,
        'Plan requested': planRequested,
      },
    };
    try {
      await axios.post(`${window.origin}/api/create_ticket`, object);

      openBanner();
    } catch (e) {
      console.error(e);
      notificationService.openErrorToast('Error requesting coupon code');
    }
  };

  return (
    <section id="discountCard" className="bg-gray-1">
      <div className="flex flex-col items-center space-y-20 py-20 px-5">
        <div className="flex max-w-[774px] flex-col space-y-6 text-center">
          <h2 className="text-5xl font-semibold text-gray-100">{textContent.title}</h2>
          <p className="text-2xl font-semibold text-gray-80">{textContent.subtitle}</p>
          <RenderDescription fontSize="text-xl" description={textContent.paragraph} />
        </div>
        <div className="flex flex-row space-x-20 rounded-[32px] bg-white">
          {/* Text Card */}
          <div className="flex flex-col space-y-6 py-[50px] px-16 lg:pl-[60px]">
            <p className="max-w-[450px] text-center text-5xl font-semibold text-gray-100 lg:text-left">
              {cardTitle1} <span className="text-primary">{blueTextCardTitle}</span>
              {cardTitle2}
            </p>
            <p className="text-center text-xl lg:text-left">{textContent.card.fillForm}</p>
            {/* Form */}
            <div>
              <div className="flex flex-col space-y-6">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm text-gray-80">{textContent.card.institutionName}</p>
                  <TextInput
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    placeholder={textContent.card.nameLabel}
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm text-gray-80">{textContent.card.institutionEmail}</p>
                  <TextInput
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder={textContent.card.emailLabel}
                  />
                </div>
                <div className="relative flex flex-col space-y-1">
                  <p className="text-sm text-gray-80">{textContent.card.whichPlan}</p>
                  <Card className="relative z-50">
                    <Dropdown
                      className={planRequested ? 'text-gray-100' : 'text-gray-40'}
                      buttonTitle={planRequested ?? textContent.card.select}
                    >
                      <div className="absolute z-50 mt-3 flex w-full flex-col rounded-md border border-gray-10 bg-white py-2 px-5 shadow-subtle-hard">
                        <p className="text-lg font-semibold">{textContent.card.annual}</p>
                        <Menu.Items className={'mt-0.5 w-full rounded-md bg-white py-0.5'}>
                          {MenuItems.annual.map((item) => {
                            return (
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    onClick={() => {
                                      setPlanRequested(item.value);
                                    }}
                                    className={`${
                                      active ? 'rounded-lg bg-gray-10' : 'font-medium text-gray-100'
                                    } w-full px-4 py-2 text-left text-sm`}
                                  >
                                    {item.label}
                                  </button>
                                )}
                              </Menu.Item>
                            );
                          })}
                        </Menu.Items>
                        <p className="text-lg font-semibold">{textContent.card.monthly}</p>
                        <Menu.Items className={'mt-0.5 w-full rounded-md bg-white py-0.5'}>
                          {MenuItems.monthly.map((item) => {
                            return (
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    onClick={() => {
                                      setPlanRequested(item.value);
                                    }}
                                    className={`${
                                      active ? 'rounded-lg bg-gray-10' : 'font-medium text-gray-100'
                                    } w-full px-4 py-2 text-left text-sm`}
                                  >
                                    {item.label}
                                  </button>
                                )}
                              </Menu.Item>
                            );
                          })}
                        </Menu.Items>
                      </div>
                    </Dropdown>
                  </Card>
                </div>
                <CheckboxItem
                  textColor="text-gray-100"
                  checked={legalCheckbox}
                  setCheckbox={setLegalCheckbox}
                  label={textContent.privacyCheckbox}
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleCreatingTicket({ name, email, planRequested });
                  }}
                  disabled={isButtonDisabled}
                  className={`flex w-full justify-center ${
                    isButtonDisabled ? 'bg-gray-10 text-gray-40' : 'bg-primary text-white hover:bg-primary-dark'
                  } rounded-lg px-5 py-3 text-lg font-medium lg:w-max`}
                >
                  {textContent.cta}
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex">
            <Image
              src={'/images/cloud-storage-for-education/cloud_storage_for_elearning.webp'}
              width={430}
              height={707}
              alt="Cloud Storage for eLearning"
              className="rounded-r-[32px]"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClaimYourDiscountSection;
