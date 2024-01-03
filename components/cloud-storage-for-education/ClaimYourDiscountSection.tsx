import Image from 'next/image';
import TextInput from '../components/TextInput';
import RenderDescription from '../shared/RenderDescription';
import Select from 'react-select';
import CheckboxItem from '../shared/CheckboxItem';
import { useState } from 'react';

const options = [
  { value: 'b', label: 'Bytes' },
  { value: 'kb', label: 'Kilobytes' },
  { value: 'mb', label: 'Megabytes' },
  { value: 'gb', label: 'Gigabytes' },
  { value: 'tb', label: 'Terabytes' },
];

const ClaimYourDiscountSection = ({ textContent }) => {
  const [legalCheckbox, setLegalCheckbox] = useState(false);

  const cardTitle1 = textContent.card.title.split('50%')[0];
  const cardTitle2 = textContent.card.title.split('50%')[1];
  const blueTextCardTitle = textContent.card.title.substring(
    textContent.card.title.indexOf('50%'),
    textContent.card.title.indexOf('50%') + 3,
  );

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
          <div className="flex flex-col space-y-6 py-[50px] pl-[60px]">
            <p className="max-w-[450px] text-5xl font-semibold text-gray-100">
              {cardTitle1} <span className="text-primary">{blueTextCardTitle}</span>
              {cardTitle2}
            </p>
            <p className="text-xl">{textContent.card.fillForm}</p>
            {/* Form */}
            <div>
              <form
                className="flex flex-col space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log('Form submitted');
                }}
              >
                <div className="flex flex-col space-y-1">
                  <p className="text-sm text-gray-80">{textContent.card.institutionName}</p>
                  <TextInput placeholder={textContent.card.nameLabel} />
                </div>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm text-gray-80">{textContent.card.institutionEmail}</p>
                  <TextInput placeholder={textContent.card.emailLabel} />
                </div>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm text-gray-80">{textContent.card.whichPlan}</p>
                  <Select className="rounded-lg" menuPosition="absolute" options={options} />
                </div>
                <CheckboxItem
                  textColor="text-gray-100"
                  checked={legalCheckbox}
                  setCheckbox={setLegalCheckbox}
                  label={textContent.privacyCheckbox}
                />
                <button className="flex w-max rounded-lg bg-primary px-5 py-3 text-lg font-medium text-white hover:bg-primary-dark">
                  {textContent.cta}
                </button>
              </form>
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
