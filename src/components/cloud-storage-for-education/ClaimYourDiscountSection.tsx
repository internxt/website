import { useState } from 'react';
import Image from 'next/legacy/image';
import axios from 'axios';

import TextInput from '@/components/components/TextInput';
import RenderDescription from '@/components/shared/RenderDescription';
import CheckboxItem from '@/components/shared/CheckboxItem';
import { notificationService } from '@/components/Snackbar';

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
  const isButtonDisabled = !legalCheckbox || !name || !email;

  const cardTitle1 = textContent.card.title.split('50%')[0];
  const cardTitle2 = textContent.card.title.split('50%')[1];
  const blueTextCardTitle = textContent.card.title.substring(
    textContent.card.title.indexOf('50%'),
    textContent.card.title.indexOf('50%') + 3,
  );

  const handleCreatingTicket = async ({ name, email }: { name: string; email: string }) => {
    const object = {
      ticket_type_id: 1,
      contacts: [
        {
          email: email,
        },
      ],
      ticket_attributes: {
        _default_title_: `Educational coupon code requested by ${name}`,
        _default_description_: `Customer ${name} with email ${email} is requesting an educational coupon code.`,
        Name: name,
        'Institutional Email Address': email,
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
          <div className="flex flex-col justify-center space-y-6 py-[50px] px-16 lg:pl-[60px]">
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
                <CheckboxItem
                  textColor="text-gray-100"
                  checked={legalCheckbox}
                  setCheckbox={setLegalCheckbox}
                  label={textContent.privacyCheckbox}
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleCreatingTicket({ name, email });
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
