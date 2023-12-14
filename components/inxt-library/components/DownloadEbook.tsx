import { FileArrowDown } from '@phosphor-icons/react';
import TextInput from '../../components/TextInput';
import { useState } from 'react';
import CheckboxSettings from '../../password-generator/components/CheckboxSettings';
import ReactMarkdown from 'react-markdown';
import Header from '../../shared/Header';

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
      <ReactMarkdown className="markdown text-sm font-medium text-gray-60">{label}</ReactMarkdown>
    </div>
  );
};

const DownloadEbook = ({ textContent, bookUrl }) => {
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [firstCheckbox, setFirstCheckbox] = useState(false);
  const [secondCheckbox, setSecondCheckbox] = useState(false);
  const isDownloadButtonDisabled = !secondCheckbox || firstName === '' || emailAddress === '';

  return (
    <div className="flex max-w-[533px] flex-col items-center space-y-6 lg:items-start">
      <div className="flex w-max flex-row items-center space-x-3 rounded-lg bg-gray-5 py-2 px-4">
        <FileArrowDown className="text-primary" size={32} />
        <p className="text-xl font-medium text-gray-80">{textContent.label}</p>
      </div>
      <div className="flex flex-col space-y-8 text-center lg:text-left">
        <Header>{textContent.title}</Header>
        <p className="text-center text-xl text-gray-80 lg:text-left">{textContent.subtitle}</p>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <div className="flex w-full flex-col gap-6 lg:flex-row">
          <TextInput
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            autoComplete="off"
            className="lg:max-w-[240px]"
            placeholder={textContent.firstPlaceholder}
            name={textContent.firstPlaceholder}
          />
          <TextInput
            type="text"
            onChange={(e) => setEmailAddress(e.target.value)}
            className="lg:max-w-[240px]"
            autoComplete="off"
            placeholder={textContent.secondPlaceholder}
            name={textContent.secondPlaceholder}
          />
        </div>
        <div className="flex flex-col">
          <p className="text-lg text-gray-80">{textContent.checkboxTitle}</p>
          <div className="flex flex-col space-y-3">
            <CheckboxItem checked={firstCheckbox} setCheckbox={setFirstCheckbox} label={textContent.firstCheckbox} />
            <CheckboxItem checked={secondCheckbox} setCheckbox={setSecondCheckbox} label={textContent.secondCheckbox} />
          </div>
        </div>
        <a download={true} href={bookUrl} className="w-full">
          <button
            onClick={() => {}}
            className={`w-full rounded-lg lg:w-max ${
              isDownloadButtonDisabled ? 'bg-gray-10' : 'bg-primary hover:bg-primary-dark'
            } py-3 px-14 font-medium text-white`}
            disabled={isDownloadButtonDisabled}
          >
            {textContent.cta}
          </button>
        </a>
      </div>
    </div>
  );
};

export default DownloadEbook;
