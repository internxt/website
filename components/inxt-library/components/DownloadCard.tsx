import { useState } from 'react';

import { FileArrowDown } from '@phosphor-icons/react';
import Image from 'next/image';
import TextInput from '../../components/TextInput';
import CheckboxSettings from '../../password-generator/components/CheckboxSettings';
import ReactMarkdown from 'react-markdown';

const CheckboxItem = ({ checked, setCheckbox, label }) => {
  return (
    <div className="flex flex-row space-x-3 lg:items-center">
      <CheckboxSettings
        id={label}
        checked={checked}
        onClick={() => {
          setCheckbox(!checked);
        }}
      />
      <ReactMarkdown className="markdown text-sm font-semibold text-gray-100">{label}</ReactMarkdown>
    </div>
  );
};

const DownloadCard = ({ textContent, imageUrl, imageAlt, bookUrl }) => {
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');

  const [firstCheckbox, setFirstCheckbox] = useState(false);
  const [secondCheckbox, setSecondCheckbox] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center rounded-[32px] bg-white py-[42px] lg:flex-row lg:space-x-12">
      <div className="hidden flex-col lg:flex">
        <Image src={imageUrl} width={371} height={488} alt={imageAlt} />
      </div>
      <div className="flex h-full max-w-[600px] flex-col items-center justify-center space-y-6 px-8 lg:items-start lg:pr-12">
        <div className="flex w-max flex-row items-center space-x-3 rounded-lg bg-gray-5 py-2 px-4">
          <FileArrowDown className="text-primary" size={32} />
          <p className="text-xl font-medium text-gray-80">{textContent.label}</p>
        </div>
        <p className="text-center text-5xl font-semibold text-gray-100 lg:text-left">{textContent.title}</p>
        <p className="text-center text-xl text-gray-80 lg:text-left">{textContent.subtitle}</p>
        <div className="flex flex-col gap-6 lg:flex-row">
          <TextInput
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            autoComplete="off"
            className="max-w-[240px]"
            placeholder={textContent.firstNameLabel}
            name={textContent.firstNameLabel}
          />

          <TextInput
            type="text"
            onChange={(e) => setEmailAddress(e.target.value)}
            className="max-w-[240px]"
            autoComplete="off"
            placeholder={textContent.emailAddressLabel}
            name={textContent.emailAddressLabel}
          />
        </div>
        <div className="flex flex-col">
          <p className="text-lg text-gray-80">{textContent.checkboxTitle}</p>
          <div className="flex flex-col space-y-3">
            <CheckboxItem checked={firstCheckbox} setCheckbox={setFirstCheckbox} label={textContent.firstCheckbox} />
            <CheckboxItem checked={secondCheckbox} setCheckbox={setSecondCheckbox} label={textContent.secondCheckbox} />
          </div>
        </div>
        <a
          download={true}
          href={bookUrl}
          className="w-max rounded-lg bg-primary py-3 px-14 font-medium text-white hover:bg-primary-dark"
        >
          {textContent.cta}
        </a>
      </div>
    </div>
  );
};

export default DownloadCard;
